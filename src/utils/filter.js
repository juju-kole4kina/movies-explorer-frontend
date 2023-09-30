function filterMovies(movies, searchQuery, isShort) {
  const moviesByName = movies.filter((i) => {
    return i.nameRU.toLowerCase().includes((searchQuery || '').toLowerCase()) ||
    i.nameEN.toLowerCase().includes((searchQuery || '').toLowerCase())
  });

  if (isShort === true) {
    return moviesByName.filter((i) => i.duration <= 40);
  }
  return moviesByName;
}

export default filterMovies;