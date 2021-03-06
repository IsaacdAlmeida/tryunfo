import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css'

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <div className="form-container">
        <form className="form">
          <label htmlFor="card-name" className="label-container">
              Nome
              <input
                autoComplete="off"
                name="cardName" // igual ao exercício, funciona colocando a tag name // https://www.w3schools.com/tags/att_name.asp#:~:text=The%20name%20attribute%20specifies%20a,to%20target%20a%20form%20submission.
                data-testid="name-input"
                type="text"
                id="card-name"
                value={ cardName }
                onChange={ onInputChange }
              />
          </label>

          <label htmlFor="card-description" className="label-container">
            Descrição
            <textarea
              name="cardDescription"
              data-testid="description-input"
              id="card-description"
              value={ cardDescription }
              onChange={ onInputChange }
              rows="2"
            />
          </label>

          <label htmlFor="first-atribute" className="label-container">
            Atributo 1
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              id="first-atribute"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="second-atribute" className="label-container">
            Atributo 2
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              id="second-atribute"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="third-atribute" className="label-container">
            Atributo 3
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              id="third-atribute"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="card-image" className="label-container">
            Imagem
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              id="card-image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="card-rarity" className="label-container">
            Raridade
            <select
              name="cardRare"
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
            {
              hasTrunfo
                ? <p className="trunfo-after">Você já tem um Super Trunfo em seu baralho</p>
                : (
                  <div className="trunfo-container">
                    <p>Super Trunfo</p>
                    <input
                      name="cardTrunfo"
                      data-testid="trunfo-input"
                      type="checkbox"
                      id="super"
                      checked={ cardTrunfo } // tipo checkbox não recebe value, mas sim checked https://pt-br.reactjs.org/docs/forms.html
                      onChange={ onInputChange }
                    />
                  </div>
                ) // parenteses resolve o lint
            }
          </label>

          <div className="button-container">
            <button
              className="input-button"
              name="isSaveButtonDisabled"
              type="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled } // button recebe disabled e não value
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
