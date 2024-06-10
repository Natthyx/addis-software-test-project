import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from "./features/songs/songSlice";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/styles/Main.styled";
import Button from "./components/Button";
import List from "./components/List";
import Container from "./components/styles/Container.styled";
import Model from "./components/Model";
import Loading from "./components/Loading";
import ShadowContainer from "./components/styles/ShadowContainer.styled";
import { MusicNoteBeamed } from "react-bootstrap-icons";

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modelType, setModelType] = useState("add");
  const songs = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);
  const hasError = useSelector((state) => state.songs.hasError);
  const dispatch = useDispatch();

  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [songId, setSongId] = useState("");

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <Main>
        <h1>
          Songs <MusicNoteBeamed />
        </h1>
        <Button
          type={"add"}
          setIsModelOpen={setIsModelOpen}
          setModelType={setModelType}
        >
          <p> + Add </p>
        </Button>

        <Container>
          {isLoading ? (
            <Loading />
          ) : hasError ? (
            <p style={{ color: "red" }}>Something went wrong, please try again.</p>
          ) : (
            <List
              songs={songs}
              setIsModelOpen={setIsModelOpen}
              modelType={modelType}
              setModelType={setModelType}
              setSong={setSong}
              setArtist={setArtist}
              setSongId={setSongId}
            />
          )}
        </Container>

        {isModelOpen && (
          <ShadowContainer>
            <Model
              setIsModelOpen={setIsModelOpen}
              modelType={modelType}
              setModelType={setModelType}
              song={song}
              setSong={setSong}
              artist={artist}
              setArtist={setArtist}
              songId={songId}
            />
          </ShadowContainer>
        )}
      </Main>
    </>
  );
}

export default App;
