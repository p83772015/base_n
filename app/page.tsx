'use client'

import dynamic from 'next/dynamic';
import Image from "next/image";
import WelcomeScreen from '@/app/_components/WelcomeScreen';
import Lobby from '@/app/_components/Lobby';
import Game from '@/app/_components/Game';
import { useState } from 'react';

export default function Home() {
  const [inGame, setInGame] = useState(false);

  function handlePlay () {
    setInGame(true);
  }
  
  function handleQuit() {
    setInGame(false);
  }

  return (
    <div className="bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5">
      {inGame ? (<Game onQuit={handleQuit}/>) :
	(<WelcomeScreen onPlay={handlePlay} />)}
    </div>
  );
}
