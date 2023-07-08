import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvMaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (error) {
//         setShowError(error);
//       }
//     }
//     fetchData();
//   }, [showId]);
//   return { showData, showError };
// };
const Show = () => {
  const { showId } = useParams();
  // const { showData, showError } = useShowById(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          name={showData.name}
          image={showData.image}
          summary={showData.summary}
          rating={showData.rating}
          genres={showData.genres}
        />
        <h2>Details</h2>
        <Details
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />
        <h2>Seasons</h2>
        <Seasons seasons={showData._embedded.seasons} />
        <h2>Cast</h2>
        <Cast cast={showData._embedded.cast} />
      </div>
    );
  }

  return <div>Data is loading</div>;
};

export default Show;
