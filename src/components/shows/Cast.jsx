export default function Cast({ cast }) {
  return (
    <div>
      {cast.map(item => (
        <div key={item.person.id}>
          <img
            src={
              item.person.image
                ? item.person.image.medium
                : '/public/not-found-image.png'
            }
            alt=""
          />
          <p>
            {item.person.name} : {item.character.name}
          </p>
          <p>BirthDay : {item.person.birthday}</p>
          <p>
            Country: {item.person.country ? item.person.country.name : 'N/A'}
          </p>
        </div>
      ))}
    </div>
  );
}
