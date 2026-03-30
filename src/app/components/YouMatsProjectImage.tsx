import youmatsScreenshot from '@/assets/images/675d18e682f7235cc52573b6f642971348abd2a1.png';

/**
 * Static laptop mockup component that can be used as a project image
 * This creates a professional MacBook Pro style frame around the YouMats screenshot
 */
export function YouMatsProjectImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-transparent" />
      
      {/* Laptop Frame */}
      <div className="relative w-full max-w-4xl">
        {/* Screen */}
        <div className="relative bg-[#1a1a1a] rounded-t-xl overflow-hidden border-t-[6px] border-x-[6px] border-[#1a1a1a] shadow-2xl">
          {/* Top Bezel */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-[#1a1a1a] z-20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          </div>

          {/* Browser Chrome */}
          <div className="absolute top-6 left-0 right-0 h-8 bg-[#f5f5f5] border-b border-zinc-200 z-10 flex items-center px-3 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
            </div>
            <div className="flex-1 mx-4 px-3 py-1 bg-white rounded-md border border-zinc-200">
              <span className="text-[10px] text-zinc-600">youmats.com</span>
            </div>
          </div>

          {/* Screenshot */}
          <div 
            className="relative bg-white mt-14"
            style={{ aspectRatio: '16/10' }}
          >
            <img
              src={youmatsScreenshot}
              alt="YouMats Platform"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Keyboard Base */}
        <div className="relative h-2 bg-gradient-to-b from-[#dadce0] to-[#c5c7ca] rounded-b-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-[#3d3d3d] rounded-full" />
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/40 blur-2xl rounded-full" />
      </div>
    </div>
  );
}

export const youmatsLaptopMockupImage = youmatsScreenshot;