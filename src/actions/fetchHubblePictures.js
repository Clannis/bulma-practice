export default function fetchHubblePictures() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_HUBBLE_PICTURES_REQUEST' });
      fetch('http://hubblesite.org/api/v3/external_feed/esa_feed?page=all')
        .then(response => response.json())
        .then(pictures => dispatch({ type: 'ADD_PICTURES', pictures }));
    };
  }
  