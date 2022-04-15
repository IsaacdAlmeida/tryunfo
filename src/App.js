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
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
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
  render() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;

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
      </div>
    );
  }
}

export default App;
