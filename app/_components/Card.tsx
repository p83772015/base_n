'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import TimerBar from '@/app/_components/TimerBar';
import useAnimationFrame from '@/app/_custom_hooks/useAnimationFrame';
import {
  toBaseName,
  formatAnswer
} from '@/app/utilities';

export default function Card({
  lives,
  score,
  highScore,
  question,
  remainingms,
  duration,
  onWrongAnswer,
  onCorrectAnswer,
  onFrameChange,
  onQuit
}) {

  useAnimationFrame(onFrameChange);

  function checkAnswer(choice) {
    return () => {
      if (choice !== question.answer) {
	onWrongAnswer();
      } else {
	onCorrectAnswer();
      }
    }
  }

  function RenderLives(lives) {
    return (
      <span>
	{Array.from({ length: lives }).map((_, i) => (
	  <span key={i} aria-label="life" role="img">❤️</span>
	))}
      </span>
    );
  }

  return (
    <div className="h-full grid grid-flow-row grid-rows-[50px_80px_2fr_2fr_1fr] @container">
      <div className="grid grid-cols-2">
	<p className="justify-self-left font-[family-name:var(--font-geist-mono)]">Lives: {RenderLives(lives)}</p>
	<p className="justify-self-end font-[family-name:var(--font-geist-mono)]">Score: {score}</p>
      </div>
      <div className="content-center">
	<TimerBar key={question.answer} remainingms={remainingms} duration={duration} />
	<p className="font-bold mt-2 text-2xl font-[family-name:var(--font-geist-sans)]">Convert the given {toBaseName(question.fromBase)} value to {toBaseName(question.toBase)}?</p>
      </div>
      <p className="max-w-[100cqw] py-6 not:dark:text-gray-900 justify-self-center self-end text-5xl sm:text-6xl font-[family-name:var(--font-geist-mono)]">{formatAnswer(question.answer, question.fromBase)}
      </p>
      <ul className="font-[family-name:var(--font-geist-mono)] grid grid-cols-2 sm:grid-cols-4 place-content-center text-gray-900 gap-5 mx-5">
	{question.choices.map((choice, index) => (
	  <li
	    key={index}
	    className="contents"
	  >
	    <button
	      onClick={checkAnswer(choice)}
	      className={`min-w-20 font-bold text-sm min-w-15 px-2 h-10 cursor-pointer rounded-full bg-gray-50 dark:text-white dark:bg-gray-700 hover:bg-indigo-500 hover:text-background active:bg-indigo-500 active:text-background ${(question.answer === choice) && ''}`}
	    >
	            {formatAnswer(choice, question.toBase)}
	    </button>
	  </li>
	))}
      </ul>
      
    </div>
  )
}
