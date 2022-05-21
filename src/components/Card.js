import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css'

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="card-page-container">
        <div className="card-container">
          
          <div className="headline-container">
            <h2
              data-testid="name-card"
            >
              { cardName }
            </h2>
          </div>

          <div className="image-container">
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
          </div>

          <div className="text-description-container">
            <p
              data-testid="description-card"
            >
              { cardDescription }
            </p>
          </div>

          <div className="text-attr-container">
            <p
              data-testid="attr1-card"
            >
              { cardAttr1 }
            </p>

            <p
              data-testid="attr2-card"
            >
              { cardAttr2 }
            </p>

            <p
              data-testid="attr3-card"
            >
              { cardAttr3 }
            </p>
          </div>

          <div className="text-rare-container">
          <p
            data-testid="rare-card"
          >
            { cardRare }
          </p>
          </div>

          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
