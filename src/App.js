// import './App.css';
import { useState } from 'react';
// import CreateMemeButton from './CreateMemeButton';
import DownloadButton from './DownloadButton';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
      {/* <CreateMemeButton /> */}
      <DownloadButton />
    </div>
  );
}

export default App;
