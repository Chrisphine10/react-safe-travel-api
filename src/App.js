import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/WithListLoading';
import axios from 'axios';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    var options = {
        method: 'GET',
        url: 'https://safe-travel-covid-index.p.rapidapi.com/safeindex',
        params: {place: 'Paris, France', lang: 'en'},
        headers: {
          'x-rapidapi-key': 'e80ef4cb87mshfed4d976ce92e7ep1e2f3fjsne5fd5b2baffe',
          'x-rapidapi-host': 'safe-travel-covid-index.p.rapidapi.com'
        },
        dataType: "json"
      };
      axios.request(options).then(function (response) {
            var repos = response.data;
            const allRepos = repos;
            console.log(allRepos);
            setAppState({ loading: false, repos: allRepos });
        }).catch(function (error) {
            console.error(error);
        });
    }, [setAppState]);
      
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Chrisphine Ondiek
        </div>
      </footer>
    </div>
  );
}
export default App;
