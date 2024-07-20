import React from "react";
import "./GrowUP.css";
import backgroundImage from '../img/image-2.png';
import egg_gif from "../gif/egg.gif";
import corn_gif from "../gif/corn.gif";
import stay_gif from "../gif/stay.gif";
import walk_gif from "../gif/walk.gif";
import sleep_gif from "../gif/sleep.gif";
import jump_gif from "../gif/jump.gif";
import eat_gif from "../gif/eat.gif";
import ball_gif from "../gif/ball.gif";
import glasses_gif from "../gif/glasses.gif";

const GrowUP = ({ taskCount }) => {
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

  console.log(taskCount);

  return (
    <div className="growup-container">
      <h1 className="title">ゆにこっちの部屋</h1>
      <div className="Total-Completed-Task">
        <h2>タスク完了数 : {taskCount}</h2>
      </div>
      <div className="gif-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <img src={getGifSrc()} alt="Unicorn" className="foreground-image" />
      </div>
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
