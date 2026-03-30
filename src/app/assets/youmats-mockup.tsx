import youmatsScreenshot from '@/assets/images/675d18e682f7235cc52573b6f642971348abd2a1.png';

/**
 * This component renders a browser mockup with the YouMats screenshot
 * The screenshot is heavily cropped to show product details
 */
export function generateYouMatsMockup() {
  return (
    <div className="relative w-full aspect-video bg-[#2D2D30] rounded-2xl overflow-hidden shadow-2xl">
      {/* Browser Chrome Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#2D2D30] border-b border-[#3E3E42] flex items-center gap-3 px-4 z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 mx-4 px-3 py-1 bg-[#1E1E1E] rounded-md flex items-center">
          <span className="text-xs text-zinc-400 font-mono">youmats.com</span>
        </div>
      </div>

      {/* Screenshot Content */}
      <div className="absolute top-10 left-0 right-0 bottom-0 bg-white overflow-hidden">
        <img
          src={youmatsScreenshot}
          alt="YouMats Platform"
          className="absolute w-full"
          style={{
            top: '-25%',
            height: '160%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />
      </div>
    </div>
  );
}

export const youmatsMockupUrl = youmatsScreenshot;