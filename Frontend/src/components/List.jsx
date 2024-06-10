import SongItem from "./SongItem";

function List({
  songs,
  setIsModelOpen,
  modelType,
  setModelType,
  setSong,
  setArtist,
  setSongId,
}) {
  const sortedSongs = [...songs];
  sortedSongs.sort((a, b) => b.createdAt - a.createdAt);
  return (
    <div>
      <hr />
      {sortedSongs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          setIsModelOpen={setIsModelOpen}
          modelType={modelType}
          setModelType={setModelType}
          setSong={setSong}
          setArtist={setArtist}
          setSongId={setSongId}
        />
      ))}
    </div>
  );
}

export default List;
