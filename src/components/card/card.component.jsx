import './card.styles.css';

const Card = ({country, useKey}) => {
  const {ccn3, flags, name, population} = country;

  return (
    <div className='card'>
      <img alt={flags.alt} src={flags.svg} />
      <h2>{name.common}</h2>
      <p>Population: {population}</p>
    </div>
  );
}

export default Card;