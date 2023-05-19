// Array of band names
let bandNames = ['The Rolling Stones', 'Red Hot Chili Peppers', 'Led Zeppelin', 'Aerosmith', 'The Beatles'];

// Function to remove articles from band names
function removeArticles(name) {
  // List of articles to be removed
  const articles = ['the', 'an', 'a'];
  
  // Splitting the name into words
  const words = name.split(' ');
  
  // Removing the articles from the words
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  
  // Joining the filtered words back into a string
  const filteredName = filteredWords.join(' ');
  
  return filteredName;
}

// Sorting the band names without articles
const sortedBands = bandNames.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

// Getting the ul element by its ID
const ulElement = document.getElementById('bands');

// Clearing any existing content
ulElement.innerHTML = '';

// Creating list items for each band name and appending them to the ul element
sortedBands.forEach(band => {
  const liElement = document.createElement('li');
  liElement.textContent = band;
  ulElement.appendChild(liElement);
});
