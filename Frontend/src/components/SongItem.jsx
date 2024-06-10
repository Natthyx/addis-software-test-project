import { SongName, Author } from "./styles/Song.styled";
import Button from "./Button";
import Wrapper from "./styles/Wrapper.styled";
import { useDispatch } from "react-redux";
import { deleteSongsCall } from "../features/songs/songSlice";
import { MusicNoteBeamed } from "react-bootstrap-icons";
import { PersonUp } from "react-bootstrap-icons";

function SongItem({
  song,
  setIsModelOpen,
  modelType,
  setModelType,
  setSong,
  setArtist,
  setSongId,
}) {
  const dispatch = useDispatch();

  function handleDeleteSong(id) {
    console.log("deleting");
    dispatch(deleteSongsCall(id));
  }

  function handleDisplayEditable() {
    setSong(song.songname);
    setArtist(song.artist);
    setSongId(song.id);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Wrapper>
        <div>
          <SongName>
            {song.songname} <MusicNoteBeamed />
          </SongName>
          <Author>
            {song.artist} <PersonUp />
          </Author>
        </div>
        <div>
          <Button
            type={"edit"}
            setIsModelOpen={setIsModelOpen}
            modelType={modelType}
            setModelType={setModelType}
            handleEditable={handleDisplayEditable}
          >
            <p>Edit</p>
          </Button>
          <Button
            type={"delete"}
            handleDelete={() => handleDeleteSong(song.id)}
          >
            <p>Delete</p>
          </Button>
        </div>
      </Wrapper>
      <hr />
    </>
  );
}

export default SongItem;
