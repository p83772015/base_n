'use client'

import { useState } from 'react';

export default function TimerBar({remainingms, duration}) {
  const percentage = remainingms / duration * 100;
  let barColor;
  if (remainingms < (duration * 0.15)) {
    barColor = 'bg-red-700';
  } else if (remainingms < (duration * 0.30)) {
    barColor = 'bg-yellow-300';
  } else {
    barColor = 'bg-indigo-500';
  }

  return <div>
	   <div
	     style={{width: `${percentage}%`}}
	     className={`rounded-full h-3 transition-colors transition-[width] duration-6000 ease-out ${barColor}`}
	   />
	 </div>
}
