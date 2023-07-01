import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          birthday={data.person.birthday}
          country={data.person.country ? data.person.country.name : null}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : '/public/not-found-image.png'
          }
        />
      ))}
    </div>
  );
};

export default ActorGrid;
