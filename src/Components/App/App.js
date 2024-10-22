import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../Utils/Spotify.js";

const mockData = [
  { name: "shadow moses", artist: "BMTH", album: "Sempiternal", id: 0 },
  { name: "psycho", artist: "muse", album: "Drones", id: 1 },
  {
    name: "a match in to water",
    artist: "pierce the veil",
    album: "collide with the sky",
    id: 2,
  },
];

function App() {
  return <div className="App"></div>;
}

export default App;
