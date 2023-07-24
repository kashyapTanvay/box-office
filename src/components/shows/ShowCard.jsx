const ShowCard = ({ name, image, summary, id, onStarMeClick, isStarred }) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? 'UNSTAR' : 'STAR'}
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
