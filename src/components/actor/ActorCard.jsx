const ActorCard = ({ name, birthday, country, deathday, gender, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p> Counrty : {country ? country : 'Not Known'} </p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
