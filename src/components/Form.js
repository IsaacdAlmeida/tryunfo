import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, /* hasTrunfo */
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <label htmlFor="card-name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="card-name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-description">
          Descrição
          <textarea
            data-testid="description-input"
            id="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="first-atribute">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            id="first-atribute"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="second-atribute">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            id="second-atribute"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="third-atribute">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            id="third-atribute"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="card-image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="card-rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="super">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="super"
            checked={ cardTrunfo } // tipo checkbox não recebe value, mas sim checked https://pt-br.reactjs.org/docs/forms.html
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>

        <div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled } // button recebe disabled e não value
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired, // ainda não utilizei, mas acredito que sjea booleano
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
