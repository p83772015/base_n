'use client'

import { useState } from 'react';

function WelcomeMessage() {
  return (
    <div className="">
      <h1 className="font-bold text-7xl tracking-tight font-[family-name:var(--font-geist-sans)]">Base_n!</h1>
      <p className="text-xl">
	Master converting through different numbering systems!
      </p>
    </div>
  )
}

export default function WelcomeScreen({
  onPlay,
}) {
  return (
    <section
      className="min-h-screen grid grid-flow-row mx-7 place-content-center justify-items-center"
    >
      <WelcomeMessage/>
      <ol>
	<li>
	  <button
	    className="ui-button mt-5"
	    onClick={onPlay}>Start
	  </button>
	</li>
      </ol>
    </section>
  );
}
