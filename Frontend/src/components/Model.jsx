import { useEffect } from "react";
import { useDispatch } from "react-redux";
import StyledModel from "./styles/Model.styled";
import Button from "./Button";
import CloseButton from "./styles/CloseButton.styled";
import { addSongsCall, patchSongsCall } from "../features/songs/songSlice";

function Model({
  setIsModelOpen,
  modelType,
  setModelType,
  song,
  setSong,
  artist,
  setArtist,
  songId,
}) {
  const dispatch = useDispatch();

  function handleAddSong() {
    const payload = {
      createdAt: Date.now(),
      songname: song,
      artist: artist,
      updatedAt: Date.now(),
    };

    setIsModelOpen(false);
    dispatch(addSongsCall(payload));

    setSong("");
    setArtist("");
  }

  function handleEditSong() {
    const payload = {
      id: songId,
      songname: song,
      artist: artist,
      updatedAt: Date.now(),
    };

    setIsModelOpen(false);
    dispatch(patchSongsCall(payload));

    setSong("");
    setArtist("");
  }

  useEffect(() => {
    const body = document.body;

    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  return (
    <StyledModel>
      <CloseButton onClick={() => setIsModelOpen(false)}>X</CloseButton>
      {modelType === "add" && <h3>Add Song</h3>}
      {modelType === "edit" && <h3>Edit Song</h3>}
      <div className="form">
        <div>
          <label htmlFor="song">Song</label>
          <input
            type="text"
            name="song"
            id="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <br />
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="btn-container">
          {modelType === "add" && (
            <Button
              type={"add"}
              setModelType={setModelType}
              handleAdd={() => handleAddSong}
            >
              <p>Add</p>
            </Button>
          )}

          {modelType === "edit" && (
            <Button
              type={"edit"}
              setModelType={setModelType}
              handleEdit={() => handleEditSong}
            >
              <p>Edit</p>
            </Button>
          )}
        </div>
      </div>
    </StyledModel>
  );
}

export default Model;
