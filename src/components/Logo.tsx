import React from "react";

interface LogoProps {
  variant?: "dark" | "light"; // "dark" for light backgrounds (dark text), "light" for dark backgrounds (white text)
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  showSubtitle = true,
  size = "md"
}) => {
  const isLightText = variant === "light";

  // Size configurations
  const sizes = {
    sm: {
      svgWidth: 38,
      svgHeight: 38,
      titleSize: "text-[15px] sm:text-sm",
      subSize: "text-[11px] sm:text-[10px]",
    },
    md: {
      svgWidth: 46,
      svgHeight: 46,
      titleSize: "text-[17px] sm:text-lg",
      subSize: "text-[12px] sm:text-[11px]",
    },
    lg: {
      svgWidth: 58,
      svgHeight: 58,
      titleSize: "text-xl sm:text-2xl",
      subSize: "text-sm sm:text-sm",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Calligraphic AM Monogram SVG matching exact style from logo image */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.svgWidth}
          height={currentSize.svgHeight}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-105"
        >
          {/* AM Calligraphy Script Path in Sophisticated Rosé (#B98278) */}
          <path
            d="M28 65 C 22 55, 18 42, 25 30 C 32 18, 48 18, 52 32 C 55 42, 42 62, 32 68 C 22 74, 15 62, 22 48 C 29 34, 45 28, 52 40 C 58 50, 52 68, 56 75 C 57 77, 59 78, 60 72 C 63 56, 68 40, 72 32 C 75 27, 78 30, 77 36 C 75 48, 72 60, 75 68 C 77 74, 82 66, 85 58 C 88 50, 92 42, 94 48"
            stroke="#B98278"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle accent loop stroke */}
          <path
            d="M38 48 C 42 42, 58 38, 68 45"
            stroke="#B98278"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Typography: Dra Andreia Medeiros + Ortodontia e Ortopedia Facial */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-sans font-light tracking-tight leading-tight ${
            currentSize.titleSize
          } ${isLightText ? "text-white" : "text-[#25282B]"}`}
        >
          Dra Andreia <strong className="font-semibold">Medeiros</strong>
        </span>

        {showSubtitle && (
          <span
            className={`font-sans tracking-wide ${
              currentSize.subSize
            } ${isLightText ? "text-[#E8D4D0]" : "text-[#55585B]"}`}
          >
            Ortodontia e ortopedia Facial
          </span>
        )}
      </div>
    </div>
  );
};
