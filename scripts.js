
const container = document.querySelector('.search-cont');
const searchInput = document.querySelector('#search-input');
const musicList = document.querySelector('#musicList');

//let ragaca = [];
function getContent() {
  apiURL = 'https://itunes.apple.com/search?term=';
  apiURL += searchInput.value;
  fetch( apiURL, {method: 'GET'})
  .then(Response => Response.json())

  .then(data => console.log(data.results));
  
  
  };
  

//data => console.log(data)
searchInput.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    return getContent();
  };
})
/*
const getContent = (search) => {
  const url = new URL('https://itunes.apple.com/search');
  const params = { term: search, media: 'music'}
  url.search = new URLSearchParams(params);
  fetch(url, { method: 'POST'} )
    .then(results => results.json())
*/



/*
let searchBar = document.getElementById('search-input');
let musicList = document.getElementById('musicList');
let music = [];





searchBar.addEventListener('keydown', (e) => {
    const searchString = e.target.value;
    music.filter(character => {
        character.name.contains(searchString)
    })
});

const loadMusic = async () => {
    try {
        let res = await fetch('https://itunes.apple.com/search');
        let music = await res.json();
        displayMusic(music);
        console.log(music);
    } catch (err) {
        console.log(err);
    }
};



let displayMusic = (musics) => {
    let appendHtml = musics 
    .map((musics) => {
        return `<li class="music">
        <p>${musicname}</p>
        
        </li>`;
    })
};


*/




   /* .then(data => {
      results = data.results;
      const resultsHTML = results.map(
        (result, index) => `
          <div style="background-image: url(${result.artworkUrl100});" onclick="openMedia('${result.previewUrl}', '${result.trackCensoredName}')" class="result"></div>
        `)
         .join('');
        container.innerHTML = resultsHTML;
        searchElem.blur();
        return fetch(data.results[0].artistViewUrl)
      })
      .then(data => data.text())
      .then(data => {
        const artistImgUrl = data.match(/https?:\/\/[a-zA-Z0-9:\/\.\-]+.jpg/)[0];
        artistImage.style['background-image'] = `url(${artistImgUrl})`;
      })
      .catch(() => container.innerHTML = '<h1>Problem retrieving media...</h1>');
 }


searchElem.addEventListener('keydown', getContent);


*/