import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import React from 'react';
import Landing from './pages/landing-page/landing.component';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
