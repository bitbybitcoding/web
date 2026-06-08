export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Lavender orb - top left */}
      <div 
        className="gradient-orb w-[600px] h-[600px] bg-bit-lavender/30"
        style={{ top: '-100px', left: '-100px' }}
      />
      
      {/* Turquoise orb - bottom right */}
      <div 
        className="gradient-orb w-[700px] h-[700px] bg-bit-turquoise/30"
        style={{ bottom: '-100px', right: '-100px' }}
      />
      
      {/* Green orb - center right */}
      <div 
        className="gradient-orb w-[400px] h-[400px] bg-bit-green/30"
        style={{ top: '30%', left: '60%', transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Red orb - bottom left */}
      <div 
        className="gradient-orb w-[300px] h-[300px] bg-bit-red/20"
        style={{ bottom: '20%', left: '10%' }}
      />
    </div>
  );
}
