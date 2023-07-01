import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
  const [searchStr, setSearchStr] = useState('');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <label>
        Shows
        <input
          type="radio"
          value="shows"
          name="search-option"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actor
        <input
          type="radio"
          value="actor"
          name="search-option"
          checked={searchOption === 'actor'}
          onChange={onRadioChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
