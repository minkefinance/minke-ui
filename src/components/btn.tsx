import { cn } from "@/lib/utils";

export function BtnSwitch({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <div className={cn("relative text-[5.625rem] z-10", className)}>
      <svg onClick={onClick} className="relative cursor-pointer z-10" width="1em" height="1em" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="-4" y="-4" width="98" height="98">
          <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_114_21_clip_path)", height: "100%", width: "100%" }}></div>
        </foreignObject>
        <circle cx="45" cy="45" r="44.75" fill="url(#paint0_linear_114_21)" fillOpacity="0.3" stroke="url(#paint1_linear_114_21)" strokeWidth="0.5" />
        <g filter="url(#filter1_di_114_21)">
          <path
            d="M37.859 28.7217V20.65C37.859 20.65 37.8827 20.217 37.0365 20.0314C36.3264 19.8752 35.6459 20.3525 35.6459 20.3525L21.3374 30.4569C21.3374 30.4569 20 31.1374 20 32.4836C20 33.7975 20.9468 34.3307 20.9468 34.3307L35.3411 44.1641C35.3411 44.1641 36.2524 44.497 37.0276 44.332C37.8679 44.1552 37.859 43.5455 37.859 43.5455V35.9863H51.8599C51.8599 35.9863 62.9019 37.4622 62.9019 41.5364C62.9019 41.5364 62.7185 28.7217 51.5078 28.7217M52.1824 61.2915V69.3779C52.1824 69.3779 52.3303 69.8699 53.2327 69.9877C53.8334 70.0643 54.2091 69.7609 54.3393 69.6696L68.6597 59.5563C68.6597 59.5563 70 58.8758 70 57.5296C70 56.2157 69.0502 55.6796 69.0502 55.6796L54.6411 45.8373C54.6411 45.8373 54.0434 45.475 53.2298 45.6871C52.2238 45.9493 52.1794 46.456 52.1794 46.456V54.024H38.1076C38.1076 54.024 27.0566 52.5451 27.0566 48.468C27.0566 48.468 27.243 61.2944 38.4626 61.2944"
            fill="url(#paint2_linear_114_21)"
          />
        </g>
        <defs>
          <clipPath id="bgblur_0_114_21_clip_path" transform="translate(4 4)">
            <circle cx="45" cy="45" r="44.75" />
          </clipPath>
          <filter id="filter1_di_114_21" x="19" y="20" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.560784 0 0 0 0 0.960784 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_21" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_21" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_114_21" />
          </filter>
          <linearGradient id="paint0_linear_114_21" x1="45" y1="0" x2="45" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0868F6" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="paint1_linear_114_21" x1="45" y1="0" x2="45" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BBD7FF" />
            <stop offset="1" stopColor="#378FF5" />
          </linearGradient>
          <linearGradient id="paint2_linear_114_21" x1="45" y1="20" x2="45" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#CCE4FF" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute z-0 left-[-15%] top-[-80%]" width="2.33em" height="2.33em" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4" filter="url(#filter0_f_114_20)">
          <circle cx="105" cy="105" r="45" fill="#378FF5" />
        </g>
        <defs>
          <filter id="filter0_f_114_20" x="0" y="0" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_114_20" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
