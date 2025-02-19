import PropTypes from 'prop-types';

function HornedBeast({ title, image_url, description }) {
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={image_url} alt={title} />
      <p>{description}</p>
    </div>
  );
}

HornedBeast.propTypes = {
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HornedBeast;