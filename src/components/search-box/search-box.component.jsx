import './search-box.styles.css';

const SearchBox = ({onChange}) => {
  return (
    <div className='search-box'>
      <input onChange={onChange} type='search' placeholder='search countries' />
    </div>
  );
};

export default SearchBox;