import { useState } from 'react';
import { searchForPeople, searchForShows } from './../api/tvMaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      let result;
      setApiDataError(null);
      if (searchOption === 'shows') {
        result = await searchForShows(q);
        setApiData(result);
      } else {
        result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div> Error Occured : {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>Not Found</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
