import React from 'react';

//styles
import './App.css';

//components
import Button from './components/button/Button';
import NewsPreview from './components/news-preview/NewsPreview';
import Loading from './components/loading/Loading';

function App() {
  return (
    <div className="App">
      <Button />
      <Loading />
      <NewsPreview />
    </div>
  );
}

export default App;
