import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  dreamCairoLogo,
  alameedCoffeeLogo as alameedLogo,
  breemLogo,
  efficientVisionLogo as effvisionLogo,
  youmatsLogo,
  mycashLogo as myCashLogo,
  dubaiPoliceLogo,
  mazaadyLogo,
  bakkarLogo,
} from '@/assets/images';

const projects = [
  { logo: dreamCairoLogo, name: 'Dream Cairo', invert: false },
  { logo: alameedLogo, name: 'Alameed Coffee', invert: false },
  { logo: breemLogo, name: 'Breem', invert: false },
  { logo: effvisionLogo, name: 'Efficient Vision', invert: false },
  { logo: youmatsLogo, name: 'YouMats', invert: false },
  { logo: myCashLogo, name: 'MyCash', invert: false },
  { logo: dubaiPoliceLogo, name: 'Dubai Police', invert: false },
  { logo: mazaadyLogo, name: 'Mazaady', invert: false },
  { logo: bakkarLogo, name: 'Bakkar', invert: false },
] as const;

export function HomeProjectLogosSlider() {
  return (
    <section className="py-10 lg:py-20 px-6 relative overflow-hidden">
      <div className="w-full relative z-10">
        <Slider
          {...{
            dots: false,
            infinite: true,
            speed: 3000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            pauseOnHover: true,
            arrows: false,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 4 } },
              { breakpoint: 768, settings: { slidesToShow: 3 } },
              { breakpoint: 480, settings: { slidesToShow: 2 } },
            ],
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-24 transition-all duration-200 ease-out">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="max-h-16 max-w-full object-contain"
                  width={200}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  style={project.invert ? { filter: 'invert(1) brightness(1.2)' } : undefined}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
