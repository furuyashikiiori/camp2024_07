import React from 'react';
import './GrowUP.css'; 

const GrowUP = () => {
  // Example gif URLs
  const gifUrl = 'path_to_gif_image';
  const gifType = 'type_of_gif'; // Example: "Egg", "Hatchling", "Adult"
  const timeToGrow = '5 days'; // Example value, this should be dynamically calculated

  return (
    <div className="growup-container">
      <h2>ユニコッちの成長</h2>
      <div className="growup-status">
        <div className="growup-gif">
          {/* Insert gif image */}
          {/* <img src={gifUrl} alt="ユニコッち" /> */}
        </div>
        <div className="growup-info">
          <p><strong>名前:</strong> ユニコッち</p>
          <p><strong>種類:</strong> {/* {gifType} */}</p>
          <p><strong>次の成長まで:</strong> {/* {timeToGrow} */}</p>
        </div>
      </div>
    </div>
  );
};

export default GrowUP;
