export default function FlipCard({ frontContent, backContent  }) {
  return (
    <div className="card-container pb-5 group w-full max-w-[18rem] h-80 mx-auto">
      <div className="card-inner">
        <div className="card-front">
{frontContent}
        </div>
        <div className="card-back">
{
  backContent
}        </div>
      </div>
    </div>
  );
}
