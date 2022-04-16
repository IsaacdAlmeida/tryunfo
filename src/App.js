import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardArray: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => { // essa função -> aqui https://github.com/IsaacdAlmeida/trybe-exercicios/blob/main/front-end/bloco-11-componentes-estado-eventos-forms-react/dia-02-forms-react/pratica/forms/src/Form.js
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3, cardRare } = this.state;

      const numberOne = parseInt(cardAttr1, 10); // https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
      const numberTwo = parseInt(cardAttr2, 10);
      const numberThree = parseInt(cardAttr3, 10);
      const MAX_VALUE = 90;
      const MIN_VALUE = 0;
      const MAX_POINTS = 210;
      const atributeSum = numberOne + numberTwo + numberThree;

      const errorCase = [
        cardName.length !== 0,
        cardDescription.length !== 0,
        cardImage.length !== 0,
        cardRare.length !== 0,
        numberOne <= MAX_VALUE,
        numberOne >= MIN_VALUE,
        numberTwo <= MAX_VALUE,
        numberTwo >= MIN_VALUE,
        numberThree <= MAX_VALUE,
        numberThree >= MIN_VALUE,
        atributeSum <= MAX_POINTS,
      ];

      const isDisabled = errorCase.every((item) => item === true);
      this.setState({
        isSaveButtonDisabled: !isDisabled,
      });
    });
  }

  // esse código precisa estar dentro da callback de setState
  // https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
  // o conceito para estar dentro da callback, é porque as mudanças no estado precisam ser instaneas
  // fora da callback ele não atualizava o estado e array de mandeira correta
  // as consts do this.state precisam estar dentro da callback também

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;

    const topTrumpCards = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardArray: [...prevState.cardArray, topTrumpCards],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  // criei a função do requisito 6
  // recebeos estados primeiro
  // depois passo as infos que a carta vai receber
  // set o estado novo com uma callback
  // já coloco no estado o spread do array cardArray e adiciono o novo topTrumpCards
  // ao mesmo tempo já seto os valores para inicio novamente;

  // Agradecimento ao Antonio que me indicou o caminho de onde chamar a condição para verificar se a carta em trunfo

  deleteCard = ({ target }) => {
    const { cardArray } = this.state;
    this.setState({
      cardArray: cardArray.filter((item) => item.cardName !== target.value),
    });
  }

  render() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo, cardArray } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          onInputChange={ this.onInputChange } // pega a função e passa como props
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        { cardArray.map((item) => (
          <div key={ item.cardName }>
            <Card
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardImage={ item.cardImage }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
            />
            <button
              type="button"
              value={ item.cardName }
              data-testid="delete-button"
              onClick={ this.deleteCard }
            >
              Exluir
            </button>
          </div>)) }
      </div>
    );
  }
}

// https://stackoverflow.com/questions/53498281/react-read-value-of-button-clicked -> requisito 09

export default App;
