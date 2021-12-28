import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Photo from './comps/Photo';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedPhoto={setSelectedPhoto} />
      { selectedPhoto && <Photo selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}
    </div>
  );
}
