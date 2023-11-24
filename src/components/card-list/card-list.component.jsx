import './card-list.styles.css';

import Card from '../card/card.component';

const CardList = ({countries}) => {
  return (
    <div className='card-list'>
      { countries.map((country) => {
          return ( 
            // <a 
            //   target='_blank'
            //   href={`https://en.wikipedia.org/wiki/${country.name.common}`}
            // >
              <Card key={country.ccn3} country={country} />
            // </a>
          );
      }) }
    </div>
  );
};

export default CardList;