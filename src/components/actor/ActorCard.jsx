import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ name, birthday, country, deathday, gender, image }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p> Counrty : {country ? country : 'Not Known'} </p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
