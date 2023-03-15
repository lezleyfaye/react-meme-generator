import { saveAs } from 'file-saver';
import React from 'react';
import MemeGenerator from './MemeGenerator';

const DownloadButton = () => {
  const downloadImage = () => {
    saveAs(`https://api.memegen.link/images/cake.png`, 'image.png');
  };

  return <button onClick={downloadImage}>Download</button>;
};

export default DownloadButton;
