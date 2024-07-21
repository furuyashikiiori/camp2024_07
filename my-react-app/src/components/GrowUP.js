import React, { useState } from 'react';
import './GrowUP.css';
import egg_gif from "../gif/egg.gif";
import corn_gif from "../gif/corn.gif";
import stay_gif from "../gif/stay.gif";
import walk_gif from "../gif/walk.gif";
import sleep_gif from "../gif/sleep.gif";
import jump_gif from "../gif/jump.gif";
import eat_gif from "../gif/eat.gif";
import ball_gif from "../gif/ball.gif";
import glasses_gif from "../gif/glasses.gif";
import image1 from '../img/image-1.png';
import image2 from '../img/image-2.png';
import image3 from '../img/image-3.png';

const GrowUP = ({ taskCount }) => {
  const [backgroundImage, setBackgroundImage] = useState(image1);
  const [showModal, setShowModal] = useState(false);

  const getGifSrc = () => {
    if (taskCount >= 280) return glasses_gif;
    if (taskCount >= 210) return ball_gif;
    if (taskCount >= 150) return eat_gif;
    if (taskCount >= 100) return jump_gif;
    if (taskCount >= 60) return sleep_gif;
    if (taskCount >= 30) return walk_gif;
    if (taskCount >= 10) return stay_gif;
    if (taskCount >= 5) return corn_gif;
    return egg_gif;
  };

  const handleBackgroundChange = (e) => {
    setBackgroundImage(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(taskCount);

  return (
    <div className="growup-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="title">ゆにこっちの部屋</h1>
      <div className="Total-Completed-Task">
        <h2>タスク完了数 : {taskCount}</h2>
      </div>
      <div className="gif-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <img src={getGifSrc()} alt="Unicorn" className="foreground-image" />
      </div>
      <button className="background-change-button" onClick={toggleModal}>
        背景変更
      </button>
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>×</button>
            <h2>背景変更</h2>
            <div className="background-options">
              <label>
                <input
                  type="radio"
                  name="background"
                  value={image1}
                  checked={backgroundImage === image1}
                  onChange={handleBackgroundChange}
                />
                海
              </label>
              <label>
                <input
                  type="radio"
                  name="background"
                  value={image2}
                  checked={backgroundImage === image2}
                  onChange={handleBackgroundChange}
                />
                花畑
              </label>
              <label>
                <input
                  type="radio"
                  name="background"
                  value={image3}
                  checked={backgroundImage === image3}
                  onChange={handleBackgroundChange}
                />
                部屋
              </label>
            </div>
          </div>
        </div>
      )}

      <div className="tweet-button"></div>
      <a
        href={`https://twitter.com/intent/tweet?text=[UniTASK　Achievements]　タスクを合計で${taskCount}個達成したよ！！%20%23タスク管理%20%23ゆにこっちの部屋`}
        target="_blank"
        rel="noopener noreferrer"
        className="twitter-share-button"
      >
        タスクの完了数をX(Twitter)で共有する
      </a>
    </div>
  );
};

export default GrowUP;
