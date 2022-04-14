import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="card-name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="card-name"
          />
        </label>

        <label htmlFor="card-description">
          Descrição
          <textarea
            data-testid="description-input"
            id="card-description"
          />
        </label>

        <label htmlFor="first-atribute">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            id="first-atribute"
          />
        </label>

        <label htmlFor="second-atribute">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            id="second-atribute"
          />
        </label>

        <label htmlFor="third-atribute">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            id="third-atribute"
          />
        </label>

        <label htmlFor="card-image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="card-image"
          />
        </label>

        <label htmlFor="card-rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="card-rarity"
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
          />
          Super Trunfo
        </label>

        <div>
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>

      </div>
    );
  }
}

export default Form;
