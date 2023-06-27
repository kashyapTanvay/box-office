const AppTittle = props => {
  const {
    tittle = 'Box Office',
    subtittle = 'Are you looking for a Movie or an Actor?',
  } = props;

  return (
    <div>
      <h1>{tittle}</h1>
      <p>{subtittle}</p>
    </div>
  );
};
export default AppTittle;
