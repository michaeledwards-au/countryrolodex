import {useEffect, useState} from 'react';

import './App.css';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,population,flags,ccn3')
      .then((response) => response.json())
      .then((countries) => setCountries(countries));
  }, []);

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      return country.name.common.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCountries(newFilteredCountries);
  }, [countries, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className='app'>
      <h1>Country Rolodex</h1>
      <SearchBox onChange={onSearchChange}/>
      <CardList countries={filteredCountries}/>
    </div>
  );
};

export default App;
