import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

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

      <CustomRadio
        label="Shows"
        value="shows"
        name="search-option"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />

      <CustomRadio
        label="Actors"
        value="actors"
        name="search-option"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
