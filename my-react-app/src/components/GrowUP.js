import React from 'react';
import './GrowUP.css';
import egg_gif from '../gif/egg.gif';

const GrowUP = () => {
  return (
    <div className="growup-container">
      <div className="gif-container">
        {/* gif画像の表示 */}
        <img src= {egg_gif} alt="ユニコッち" />
      </div>
    </div>
  );
};

export default GrowUP;
