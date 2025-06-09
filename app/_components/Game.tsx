'use client'

import { useState } from 'react';
import Card from '@/app/_components/Card';
import Results from '@/app/_components/Results';
import {
  pick,
  generateRandomInt,
  generateAnswers,
} from '@/app/utilities';

const bases = [2, 8, 10, 16];
const duration = 1000 * 60;

class RandomQuestion {
  constructor() {
    this.fromBase = pick(bases);
    this.toBase = pick(bases.filter(base => base !== this.fromBase));
    this.answer = generateRandomInt(1, 255);
    this.choices = generateAnswers(this.answer);
  }
}

function computeScore(score, timeRemaining, duration) {
  return Math.round(500 * (timeRemaining / duration));
}

export default function Game({onQuit}) {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [remainingms, setRemainingms] = useState(duration);
  const [question, setQuestion] = useState(new RandomQuestion());
  const [previousAnswerIsWrong, setPreviousAnswerIsWrong] =
	useState(false);

  const isGameOver = lives < 1;

  function handleWrongAnswer() {
    setLives(s => s - 1);
    setQuestion(new RandomQuestion());
    setRemainingms(duration);
    setPreviousAnswerIsWrong(true);
  }

  function handleCorrectAnswer() {
    const nextScore = computeScore(score, remainingms, duration);
    setScore(s => s + nextScore);
    setQuestion(new RandomQuestion());
    setRemainingms(duration);
    setPreviousAnswerIsWrong(false);
  }

  function handleRetry() {
    setLives(3);
    setScore(0);
    setRemainingms(duration);
  }

  function handleFrameChange(delta) {
    setRemainingms(ms => ms - delta);
  }

  if (remainingms < 0) {
    handleWrongAnswer();
  }

  return (
    <div
      key={question.answer}
      className={`my-3 mx-3 h-[calc(100vh-5vh)] sm:rounded-4xl sm:shadow-xl sm:p-5 sm:outline sm:outline-black/5 sm:max-w-xl sm:mx-auto lg:max-w-4xl bg-white dark:bg-gray-950 ${previousAnswerIsWrong && "animate-flash-red"} ${previousAnswerIsWrong && "dark:animate-flash-red-dark"}`}
    >
      {!isGameOver ? (
	<Card
	  lives={lives}
	  score={score}
	  highScore={highScore}
	  question={question}
	  remainingms={remainingms}
	  duration={duration}
	  onWrongAnswer={handleWrongAnswer}
	  onCorrectAnswer={handleCorrectAnswer}
	  onFrameChange={handleFrameChange}
	  onQuit={onQuit}
	/>
      ) : (
	<Results
	  score={score}
	  highScore={highScore}
	  onRetry={handleRetry}
	  onQuit={onQuit}
	/>
      )}
    </div>
  )
