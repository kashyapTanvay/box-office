import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, summary, id }) => {
  const strippedSummary = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Drescription';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>
      <p>{strippedSummary}</p>

      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button"> Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
