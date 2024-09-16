import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ image, title, description, footer }) => {
  return (
    <div className="card-container">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-footer">{footer}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default Card;