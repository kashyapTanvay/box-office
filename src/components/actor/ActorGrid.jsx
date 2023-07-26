import { FlexGrid } from '../common/FlexGrid';
import ActorCard from './ActorCard';
import NotFoundImg from '../../lib/not-found-image.png';

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          birthday={data.person.birthday}
          country={data.person.country ? data.person.country.name : null}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={data.person.image ? data.person.image.medium : NotFoundImg}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
