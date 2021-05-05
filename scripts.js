const container = document.querySelector('.search-cont');
const searchInput = document.querySelector('#search-input');
const musicList = document.querySelector('#musicList');

function getContent() { //get results in HTML
  apiURL = 'https://itunes.apple.com/search?term=';
  apiURL += searchInput.value;
  fetch( apiURL, {method: 'POST'})
  .then(Response => Response.json())
  .then(data => { 
      let content = data.results;
      let template = '';
      for(let i = 0; i < content.length; i++) {
        template += `<li class="artist-name">${content[i].artistName}</li>
                      <li class="music-name">${content[i].trackName}</li>
                      <li class="album-name">${content[i].collectionName}</li>
                     <a href="${content[i].collectionViewUrl}" target="_blank"> <li class="linki">Link</li> </a>        
                    `;
      }
      musicList.innerHTML += template;
  })
  };
  
//enter button event for show results
searchInput.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    return getContent();
  };
});