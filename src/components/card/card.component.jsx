import './card.styles.css';

const Card = ({country, useKey}) => {
  const {flags, name, population} = country;

  return (
    <div className='card'>
      <img alt={flags.alt} src={flags.png} />
      <h2>{name.common}</h2>
      <p>Population: {population}</p>
    </div>
  );
}

export default Card;