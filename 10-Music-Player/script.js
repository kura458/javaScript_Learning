
// ==========================================
// 1. DOM ELEMENTS
// ==========================================

const playlistSongs = document.getElementById("playlist-songs");

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

const playingSong = document.getElementById("player-song-title");
const songArtist = document.getElementById("player-song-artist");

const playerCard = document.querySelector(".player-card");
const songCount = document.getElementById("song-count");


// ==========================================
// 2. SONG DATA
// ==========================================

const allSongs = [
  {
    id: 0,
    title: "Hello World",
    artist: "Rafael",
    duration: "0:23",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3",
  },
  {
    id: 1,
    title: "In the Zone",
    artist: "Rafael",
    duration: "0:11",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/in-the-zone.mp3",
  },
  {
    id: 2,
    title: "Camper Cat",
    artist: "Rafael",
    duration: "0:21",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/camper-cat.mp3",
  },
  {
    id: 3,
    title: "Electronic",
    artist: "Rafael",
    duration: "0:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/electronic.mp3",
  },
  {
    id: 4,
    title: "Sailing Away",
    artist: "Rafael",
    duration: "0:22",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3",
  },
];


// ==========================================
// 3. AUDIO AND USER DATA
// ==========================================

const audio = new Audio();

const userData = {
  songs: allSongs,
  currentSong: null,
  songCurrentTime: 0,
};


// ==========================================
// 4. PLAY A SONG
// ==========================================

const playSong = (id, start = true) => {
  const song = userData.songs.find((song) => song.id === id);

  if (!song) return;

  audio.src = song.src;
  audio.title = song.title;

  if (userData.currentSong === null || start) {
    audio.currentTime = 0;
    userData.songCurrentTime = 0;
  } else {
    audio.currentTime = userData.songCurrentTime;
  }

  userData.currentSong = song;

  playerCard.classList.add("playing");

  setPlayerDisplay();
  highlightCurrentSong();
  setPlayButtonAccessibleText();

  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.error("Unable to play this song:", error);
      playerCard.classList.remove("playing");
    });
  }
};


// ==========================================
// 5. PAUSE A SONG
// ==========================================

const pauseSong = () => {
  if (userData.currentSong === null) return;

  userData.songCurrentTime = audio.currentTime;

  playerCard.classList.remove("playing");

  audio.pause();
};


// ==========================================
// 6. GET CURRENT SONG INDEX
// ==========================================

const getCurrentSongIndex = () => {
  return userData.songs.indexOf(userData.currentSong);
};


// ==========================================
// 7. GET NEXT AND PREVIOUS SONGS
// ==========================================

const getNextSong = () => {
  return userData.songs[getCurrentSongIndex() + 1];
};

const getPreviousSong = () => {
  return userData.songs[getCurrentSongIndex() - 1];
};


// ==========================================
// 8. PLAY PREVIOUS SONG
// ==========================================

const playPreviousSong = () => {
  if (userData.currentSong === null) return;

  const previousSong = getPreviousSong();

  if (previousSong) {
    playSong(previousSong.id);
  } else {
    playSong(userData.songs[userData.songs.length - 1].id);
  }
};


// ==========================================
// 9. PLAY NEXT SONG
// ==========================================

const playNextSong = () => {
  if (userData.currentSong === null) {
    if (userData.songs.length > 0) {
      playSong(userData.songs[0].id);
    }

    return;
  }

  const nextSong = getNextSong();

  if (nextSong) {
    playSong(nextSong.id);
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    audio.pause();
    audio.currentTime = 0;

    playerCard.classList.remove("playing");

    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
};


// ==========================================
// 10. UPDATE PLAYER DISPLAY
// ==========================================

const setPlayerDisplay = () => {
  const currentTitle = userData.currentSong?.title;
  const currentArtist = userData.currentSong?.artist;

  playingSong.textContent = currentTitle || "Select a song";

  songArtist.textContent = currentArtist || "Choose from your playlist";
};


// ==========================================
// 11. HIGHLIGHT CURRENT SONG
// ==========================================

const highlightCurrentSong = () => {
  const previousCurrentSong = document.querySelector(
    '.playlist-song[aria-current="true"]'
  );

  previousCurrentSong?.removeAttribute("aria-current");

  const songToHighlight = document.getElementById(
    `song-${userData.currentSong?.id}`
  );

  songToHighlight?.setAttribute("aria-current", "true");
};


// ==========================================
// 12. ACCESSIBLE PLAY BUTTON TEXT
// ==========================================

const setPlayButtonAccessibleText = () => {
  const song = userData.currentSong;

  playButton.setAttribute(
    "aria-label",
    song ? `Play ${song.title}` : "Play"
  );
};


// ==========================================
// 13. PLAY BUTTON EVENT
// ==========================================

playButton.addEventListener("click", () => {
  if (userData.currentSong === null) {
    if (userData.songs.length > 0) {
      playSong(userData.songs[0].id);
    }
  } else {
    playSong(userData.currentSong.id, false);
  }
});


// ==========================================
// 14. PAUSE BUTTON EVENT
// ==========================================

pauseButton.addEventListener("click", pauseSong);


// ==========================================
// 15. NEXT BUTTON EVENT
// ==========================================

nextButton.addEventListener("click", playNextSong);


// ==========================================
// 16. PREVIOUS BUTTON EVENT
// ==========================================

previousButton.addEventListener("click", playPreviousSong);


// ==========================================
// 17. PLAYLIST SONG EVENTS
// ==========================================

const songs = document.querySelectorAll(".playlist-song");

songs.forEach((song) => {
  const id = song.getAttribute("id").slice(5);

  const songButton = song.querySelector("button");

  songButton.addEventListener("click", () => {
    playSong(Number(id));
  });
});


// ==========================================
// 18. AUTOMATICALLY PLAY NEXT SONG
// ==========================================

audio.addEventListener("ended", playNextSong);


// ==========================================
// 19. UPDATE PLAYLIST COUNT
// ==========================================

songCount.textContent = `${String(allSongs.length).padStart(2, "0")} TRACKS`;


// ==========================================
// 20. INITIALIZE PLAYER
// ==========================================

setPlayerDisplay();
setPlayButtonAccessibleText();
