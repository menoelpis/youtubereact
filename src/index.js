import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBI1QLjvSF6BFN24K5x37w5H2POXj5HsP8';

YTSearch({key: API_KEY, term: 'KJV Bible'}, function(data) {
  console.log(data);
});

// Create a new component, This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
