const messages = {
  perfect: "Seems you're a number systems master!",
  great: "Keep up the good work and keep on practicing!.",
  fail: "Struggling? You might want to take a quick review first.",
}

export default function CompletionMessage({score, tries, scoreStatus}) {
  const status = scoreStatus[0].toUpperCase() + scoreStatus.slice(1);
  return (
    <section className="contents">
      <h1 className="font-bold font-[family-name:var(--font-geist-sans)] text-6xl sm:text-7xl">{status}</h1>
      <p className="w-8/10 text-gray-700 text-center">{messages[scoreStatus]}</p>
    </section>
  )
}
