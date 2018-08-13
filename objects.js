var playlist = {
  artistName1: "songTitle1"
}

function updatePlaylist (playlist, artistName, songTitle){
<<<<<<< HEAD
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName]
  return playlist
}

=======
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist (playlist, artistName){
  delete playlist.artistName
  return playlist
}
>>>>>>> 7d708aba2c996a43882697144eff1fc8d8462f7e
