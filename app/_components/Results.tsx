import CompletionMessage from '@/app/_components/CompletionMessage';

export default function Results({score, highScore, onQuit, onRetry}) {
	    
  return (
    <div className="my-3 mx-3 max-w-xl sm:mx-auto my-auto h-full grid grid-rows-auto place-items-center">
      <p className="text-4xl sm:text-5xl font-[family-name:var(--font-geist-sans)]"> Score: {score} </p>
      
      <div className="flex space-x-5">
	<button className="ui-button" onClick={onRetry}>Play Again</button>
	<button className="ui-button" onClick={onQuit}>Go Home</button>
      </div>
    </div>
  )
}
