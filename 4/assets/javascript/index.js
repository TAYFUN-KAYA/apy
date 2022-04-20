async function fetchMovies() {
  for (let index = 0; index < 9; index++) {
    await fetch(
      `https://source.unsplash.com/random/200x200`
    ).then((response) => {
      let item = document.getElementById("grid-item" + index);
      item.innerHTML = `<img class="imgs" src="${response.url}" alt="beach image"/>`;
    });
  }
}
fetchMovies()
