import React from 'react';
import cat from './cat-2083492_1280.webp';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source = {cat} alternativeText = 'Cute Cat staring' />
    </main>
  );
}

export default App;
