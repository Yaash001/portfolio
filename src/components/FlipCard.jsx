export default function FlipCard({ frontContent, backContent }) {
  return (
    <div className=" group perspective-[1000px]  w-72 h-80">
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform">
        
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 flex items-center justify-center">
          {frontContent}
        </div>


        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-white flex flex-col items-center justify-center text-center">
          {backContent}
        </div>
        
      </div>
    </div>
  );
}
