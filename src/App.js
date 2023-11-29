import { useEffect } from 'react';
import MovieApi from './api';

const genreById = {
  action: 28,
  adventure: 12,
  comedy: 35,
  documentary: 99,
  fantasy: 14,
  horror: 27,
  western: 37,
};

function App() {
  useEffect(() => {
    MovieApi.search('fast x').then((response) => console.log(response));
  }, []);

  return <div className="App">Hi</div>;
}

export default App;
