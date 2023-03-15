import { useState } from 'react';

function MemeGenerator() {
  const [memeTop, setMemeTop] = useState('');
  const [memeBottom, setMemeBottom] = useState('');
  // case 1. memeTop is empty and memeBottom is empty
  let memeText = 'https://api.memegen.link/images/cake.png';
  // case 2. memeTop is string and memeBottom is empty
  if (memeTop && !memeBottom) {
    memeText = `https://api.memegen.link/images/cake/${memeTop}.png`;
  }
  // case 2. memeTop is empty and memeBottom is string
  if (!memeTop && memeBottom) {
    memeText = `https://api.memegen.link/images/cake/${memeBottom}.png`;
  }
  // case 4. memeTop is a string and memeBottom is a string
  if (memeTop && memeBottom) {
    memeText = `https://api.memegen.link/images/cake/${memeTop}/${memeBottom}.png`;
  }

  return (
    <>
      <label>
        Top text
        <input
          value={memeTop}
          onChange={(event) => {
            setMemeTop(event.currentTarget.value);
            console.log(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        Bottom text
        <input
          value={memeBottom}
          onChange={(event) => {
            setMemeBottom(event.currentTarget.value);
            console.log(event.currentTarget.value);
          }}
        />
      </label>
      <img
        src={memeText}
        alt="cake"
        style={{
          height: '500px',
          width: 'auto',
        }}
      />
    </>
  );
}
export default MemeGenerator;
