const endpoint = 'https://github.com/nshntarora/Indian-Cities-JSON/blob/master/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.state.match(regex);
    })
}

function displayMatches(){
    console.log(this.value);
}

searchInput.addEventListener('change', findMatches);