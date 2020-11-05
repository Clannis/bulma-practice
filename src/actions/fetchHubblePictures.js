export default function fetchHubblePictures() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_HUBBLE_ARTICLES_REQUEST' });
      fetch('http://hubblesite.org/api/v3/news?page=all')
        .then(response => response.json())
        .then(newsItems => {
          newsItems.forEach(item => {
            fetch(`http://hubblesite.org/api/v3/news_release/${item.news_id}`)
            .then(response => response.json())
            .then(article => dispatch({ type: 'ADD_ARTICLE', article }))
          })
        });
    };
  }