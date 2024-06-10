import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
  hasError: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    deleteSongsCall: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    deleteSongsSuccess: (state, action) => {
      const songId = action.payload;
      state.songs = state.songs.filter((song) => song.id !== songId);
      state.isLoading = false;
    },
    deleteSongsFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    addSongsCall: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    addSongsSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.isLoading = false;
    },
    addSongsFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    patchSongsCall: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    patchSongsSuccess: (state, action) => {
      const songId = action.payload.id;
      const index = state.songs.findIndex((song) => song.id === songId);
      state.songs[index] = action.payload;
      state.isLoading = false;
    },
    patchSongsFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  deleteSongsCall,
  deleteSongsSuccess,
  deleteSongsFailure,
  addSongsCall,
  addSongsSuccess,
  addSongsFailure,
  patchSongsCall,
  patchSongsSuccess,
  patchSongsFailure,
} = songSlice.actions;

export default songSlice.reducer;
