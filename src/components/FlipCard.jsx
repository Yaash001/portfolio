export default function FlipCard({ frontContent, backContent  }) {
  return (
    <div className="card-container group w-72 h-80">
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
