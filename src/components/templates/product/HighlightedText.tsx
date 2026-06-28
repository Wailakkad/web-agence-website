export default function HighlightedText({ text }: { text: string }) {
  const sentences = text.split('. ');
  return (
    <>
      {sentences.map((sentence, i) => {
        if (!sentence.trim()) return null;
        return (
          <span key={i}>
            {i % 2 === 0 ? (
              <span className="text-[#4f46e5] font-semibold">{sentence}</span>
            ) : (
              <span className="text-gray-500">{sentence}</span>
            )}
            {i < sentences.length - 1 ? '. ' : ''}
          </span>
        );
      })}
    </>
  );
}
