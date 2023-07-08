export default function ShowMainData({ name, image, summary, rating, genres }) {
  return (
    <div>
      <div>
        <img
          src={image ? image.original : '/public/not-found-image.png'}
          alt={name}
        />
      </div>
      <h1>{name}</h1>
      <div> Rating : {rating.average || 'N/A'} </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div>
        Genre :
        <div>
          {genres.map(genre => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
