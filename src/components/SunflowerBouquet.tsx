import React from "react";

export interface SunflowerBouquetProps {
  recipient?: string;
  styleVariant?: "chic" | "kraft";
  noteText?: string;
  className?: string;
}

export const SunflowerBouquet: React.FC<SunflowerBouquetProps> = ({
  recipient = "Anjali",
  className = "w-full h-full"
}) => {
  // Botanical petal radial distributions for the centerpiece and companion blooms
  const centerOuterAngles = [
    0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345
  ];
  const centerMidAngles = [
    7.5, 22.5, 37.5, 52.5, 67.5, 82.5, 97.5, 112.5, 127.5, 142.5, 157.5, 172.5, 187.5, 202.5, 217.5, 232.5, 247.5, 262.5, 277.5, 292.5, 307.5, 322.5, 337.5, 352.5
  ];
  const centerInnerAngles = [
    0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342
  ];

  const sideOuterAngles = [
    0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340
  ];
  const sideInnerAngles = [
    10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350
  ];

  const floretRing1 = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340];

  return (
    <svg
      viewBox="0 0 460 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Subtle Drop Shadows for Realistic Depth */}
        <filter id="bouquet-drop-shadow" x="-20%" y="-15%" width="140%" height="135%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#261204" floodOpacity="0.22" />
        </filter>
        <filter id="ribbon-drop-shadow" x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3F0D15" floodOpacity="0.28" />
        </filter>
        <filter id="flower-layer-shadow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#2E1303" floodOpacity="0.26" />
        </filter>

        {/* ================================================================== */}
        {/* KRAFT PAPER GRADIENTS (Warm, Folded, Crinkled Tan & Brown Shading) */}
        {/* ================================================================== */}
        <linearGradient id="kraftBackFan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E5C293" />
          <stop offset="45%" stopColor="#D4A771" />
          <stop offset="85%" stopColor="#BA864E" />
          <stop offset="100%" stopColor="#9E6B34" />
        </linearGradient>

        <linearGradient id="kraftFoldLeft" x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stopColor="#E8C99B" />
          <stop offset="35%" stopColor="#DBAE79" />
          <stop offset="75%" stopColor="#C4935A" />
          <stop offset="100%" stopColor="#9B6833" />
        </linearGradient>

        <linearGradient id="kraftFoldRight" x1="1" y1="0" x2="0" y2="0.8">
          <stop offset="0%" stopColor="#F1D7B0" />
          <stop offset="40%" stopColor="#E2B784" />
          <stop offset="80%" stopColor="#C8975E" />
          <stop offset="100%" stopColor="#A3713A" />
        </linearGradient>

        <linearGradient id="kraftFrontLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EDD2AA" />
          <stop offset="40%" stopColor="#D8A56E" />
          <stop offset="80%" stopColor="#BF8951" />
          <stop offset="100%" stopColor="#8C5824" />
        </linearGradient>

        <linearGradient id="kraftFrontRight" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6DFC0" />
          <stop offset="35%" stopColor="#E0B17D" />
          <stop offset="75%" stopColor="#C9955C" />
          <stop offset="100%" stopColor="#95622C" />
        </linearGradient>

        {/* ================================================================== */}
        {/* SUNFLOWER PETAL GRADIENTS (Soft, Natural, Radiant Golden-Yellow)   */}
        {/* ================================================================== */}
        {/* Outer Tier: Warm Amber to Golden Orange */}
        <linearGradient id="petalOuterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="30%" stopColor="#FBBF24" />
          <stop offset="75%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#9A3412" />
        </linearGradient>

        {/* Middle Tier: Radiant Sunlit Gold */}
        <linearGradient id="petalMidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="25%" stopColor="#FACC15" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Inner Tier: Bright Sunny Yellow */}
        <linearGradient id="petalInnerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="35%" stopColor="#FEF08A" />
          <stop offset="80%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Side Bloom Petals */}
        <linearGradient id="petalSideGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="35%" stopColor="#FBBF24" />
          <stop offset="80%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#9A3412" />
        </linearGradient>

        {/* ================================================================== */}
        {/* SEED CORE RADIAL GRADIENT (Dark Brown Velvet to Deep Black)        */}
        {/* ================================================================== */}
        <radialGradient id="sunflowerSeedCore" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#4A1D05" />
          <stop offset="35%" stopColor="#301203" />
          <stop offset="75%" stopColor="#190801" />
          <stop offset="100%" stopColor="#0A0300" />
        </radialGradient>

        {/* ================================================================== */}
        {/* BOTANICAL LEAF & STEM GRADIENTS                                   */}
        {/* ================================================================== */}
        <linearGradient id="leafDeep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B4332" />
          <stop offset="50%" stopColor="#2D6A4F" />
          <stop offset="100%" stopColor="#081C15" />
        </linearGradient>

        <linearGradient id="leafLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#74C69D" />
          <stop offset="45%" stopColor="#40916C" />
          <stop offset="100%" stopColor="#1B4332" />
        </linearGradient>

        <linearGradient id="stemGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E5C38" />
          <stop offset="50%" stopColor="#2D6A4F" />
          <stop offset="100%" stopColor="#144528" />
        </linearGradient>

        {/* ================================================================== */}
        {/* SILKY SATIN RIBBON GRADIENTS (Soft Pastel Pink with 3D Shine)     */}
        {/* ================================================================== */}
        <linearGradient id="ribbonSilk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE4E6" />
          <stop offset="25%" stopColor="#FDA4AF" />
          <stop offset="70%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>

        <linearGradient id="ribbonKnotGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="50%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#881337" />
        </linearGradient>
      </defs>

      {/* ==================================================================== */}
      {/* 1. KRAFT PAPER WRAPPER - REAR SHEET (Base Layer behind flowers)      */}
      {/* ==================================================================== */}
      <g filter="url(#bouquet-drop-shadow)">
        {/* Main Flared Kraft Paper Fan */}
        <path
          d="M 65 220 C 45 165, 68 115, 118 95 L 170 78 C 190 85, 210 72, 230 68 C 250 72, 270 85, 290 78 L 342 95 C 392 115, 415 165, 395 220 C 362 335, 292 455, 258 515 L 202 515 C 168 455, 98 335, 65 220 Z"
          fill="url(#kraftBackFan)"
          stroke="#8A5A29"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Left Kraft Fold Facet */}
        <path
          d="M 118 95 L 230 460 L 170 78 Z"
          fill="url(#kraftFoldLeft)"
          opacity="0.85"
        />
        <path
          d="M 118 95 L 230 460 L 170 78"
          stroke="#7A4D20"
          strokeWidth="1.6"
          strokeDasharray="5 3"
          opacity="0.6"
        />

        {/* Right Kraft Fold Facet */}
        <path
          d="M 290 78 L 230 460 L 342 95 Z"
          fill="url(#kraftFoldRight)"
          opacity="0.85"
        />
        <path
          d="M 290 78 L 230 460 L 342 95"
          stroke="#7A4D20"
          strokeWidth="1.6"
          strokeDasharray="5 3"
          opacity="0.6"
        />

        {/* Outer Flap Creases */}
        <path
          d="M 65 220 C 110 250, 170 360, 230 460 C 290 360, 350 250, 395 220"
          stroke="#73451B"
          strokeWidth="1.8"
          strokeDasharray="6 4"
          opacity="0.55"
        />
      </g>

      {/* ==================================================================== */}
      {/* 2. NEAT GATHERED GREEN STEMS (Peeking at the bottom of the wrapper)  */}
      {/* ==================================================================== */}
      <g id="stems-bottom">
        <path d="M 214 505 C 212 528, 209 550, 207 568" stroke="url(#stemGrad)" strokeWidth="6.5" strokeLinecap="round" />
        <path d="M 225 505 C 224 532, 222 556, 220 575" stroke="url(#stemGrad)" strokeWidth="7.5" strokeLinecap="round" />
        <path d="M 235 505 C 236 532, 237 556, 239 573" stroke="url(#stemGrad)" strokeWidth="7" strokeLinecap="round" />
        <path d="M 246 505 C 248 528, 252 550, 255 568" stroke="url(#stemGrad)" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* ==================================================================== */}
      {/* 3. RICH DARK GREEN LEAVES (Behind flowers & peeking out naturally)   */}
      {/* ==================================================================== */}
      <g id="botanical-leaves">
        {/* Left Large Sunflower Leaf */}
        <path
          d="M 130 185 C 65 145, 38 68, 98 78 C 134 86, 158 132, 130 185 Z"
          fill="url(#leafDeep)"
          stroke="#0F2D1F"
          strokeWidth="2.2"
        />
        {/* Left Leaf Central Vein and Lateral Ribs */}
        <path d="M 82 92 C 102 110, 118 138, 130 185" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
        <path d="M 94 105 C 106 102, 115 99, 118 94" stroke="#40916C" strokeWidth="1.3" />
        <path d="M 102 122 C 114 118, 122 115, 124 108" stroke="#40916C" strokeWidth="1.3" />
        <path d="M 112 142 C 122 138, 126 134, 128 128" stroke="#40916C" strokeWidth="1.3" />

        {/* Right Large Sunflower Leaf */}
        <path
          d="M 330 185 C 395 145, 422 68, 362 78 C 326 86, 302 132, 330 185 Z"
          fill="url(#leafDeep)"
          stroke="#0F2D1F"
          strokeWidth="2.2"
        />
        {/* Right Leaf Central Vein and Lateral Ribs */}
        <path d="M 378 92 C 358 110, 342 138, 330 185" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
        <path d="M 366 105 C 354 102, 345 99, 342 94" stroke="#40916C" strokeWidth="1.3" />
        <path d="M 358 122 C 346 118, 338 115, 336 108" stroke="#40916C" strokeWidth="1.3" />
        <path d="M 348 142 C 338 138, 334 134, 332 128" stroke="#40916C" strokeWidth="1.3" />

        {/* Top Center Peeking Leaf */}
        <path
          d="M 215 110 C 208 48, 230 24, 246 38 C 258 52, 252 92, 240 110 Z"
          fill="url(#leafLight)"
          stroke="#1B4332"
          strokeWidth="2"
        />
        <path d="M 232 36 C 235 62, 235 88, 232 110" stroke="#74C69D" strokeWidth="1.8" strokeLinecap="round" />

        {/* Lower Left Flank Leaf */}
        <path
          d="M 90 230 C 50 205, 54 165, 92 180 C 112 188, 116 218, 90 230 Z"
          fill="url(#leafDeep)"
          stroke="#0F2D1F"
          strokeWidth="1.8"
        />

        {/* Lower Right Flank Leaf */}
        <path
          d="M 370 230 C 410 205, 406 165, 368 180 C 348 188, 344 218, 370 230 Z"
          fill="url(#leafDeep)"
          stroke="#0F2D1F"
          strokeWidth="1.8"
        />
      </g>

      {/* ==================================================================== */}
      {/* 4. THE SUNFLOWERS (The Heroes - Cluster of 3 Large Lush Sunflowers)  */}
      {/* ==================================================================== */}

      {/* -------------------------------------------------------------------- */}
      {/* SUNFLOWER 1: TOP-LEFT COMPANION BLOOM (Tilted outward at -24°)       */}
      {/* -------------------------------------------------------------------- */}
      <g transform="translate(145, 155) scale(0.75) rotate(-24)" filter="url(#flower-layer-shadow)">
        {/* Tier 1 Outer Cubic Bezier Petals */}
        {sideOuterAngles.map((ang) => (
          <g key={`tl-o-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -12 -28, -15 -62, 0 -90 C 15 -62, 12 -28, 0 0 Z"
              fill="url(#petalSideGrad)"
              stroke="#B45309"
              strokeWidth="1.2"
            />
            {/* Center petal rib vein for 3D curved softness */}
            <path d="M 0 -12 C 0 -36, 0 -62, 0 -80" stroke="#D97706" strokeWidth="1.1" strokeLinecap="round" />
          </g>
        ))}

        {/* Tier 2 Inner Cubic Bezier Petals */}
        {sideInnerAngles.map((ang) => (
          <g key={`tl-i-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -10 -22, -12 -50, 0 -72 C 12 -50, 10 -22, 0 0 Z"
              fill="url(#petalInnerGrad)"
              stroke="#FACC15"
              strokeWidth="1.1"
            />
            <path d="M 0 -10 C 0 -28, 0 -48, 0 -64" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
          </g>
        ))}

        {/* Radial Dark Seed Disc Core */}
        <circle cx="0" cy="0" r="34" fill="url(#sunflowerSeedCore)" stroke="#0A0300" strokeWidth="2.8" />

        {/* Textured Concentric Florets & Stippling */}
        <circle cx="0" cy="0" r="26" stroke="#D97706" strokeWidth="2.6" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="0" cy="0" r="18" stroke="#B45309" strokeWidth="2.4" strokeDasharray="2.5 2" opacity="0.9" />
        <circle cx="0" cy="0" r="10" stroke="#FBBF24" strokeWidth="2" strokeDasharray="2 2" opacity="0.95" />

        {/* Corona of Tiny Open Yellow Florets */}
        {floretRing1.map((deg) => (
          <circle key={`tl-c1-${deg}`} cx={Math.cos((deg * Math.PI) / 180) * 32} cy={Math.sin((deg * Math.PI) / 180) * 32} r="1.4" fill="#FACC15" />
        ))}
      </g>

      {/* -------------------------------------------------------------------- */}
      {/* SUNFLOWER 2: TOP-RIGHT COMPANION BLOOM (Tilted outward at +22°)      */}
      {/* -------------------------------------------------------------------- */}
      <g transform="translate(315, 160) scale(0.76) rotate(22)" filter="url(#flower-layer-shadow)">
        {/* Tier 1 Outer Cubic Bezier Petals */}
        {sideOuterAngles.map((ang) => (
          <g key={`tr-o-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -12 -28, -15 -62, 0 -90 C 15 -62, 12 -28, 0 0 Z"
              fill="url(#petalSideGrad)"
              stroke="#B45309"
              strokeWidth="1.2"
            />
            <path d="M 0 -12 C 0 -36, 0 -62, 0 -80" stroke="#D97706" strokeWidth="1.1" strokeLinecap="round" />
          </g>
        ))}

        {/* Tier 2 Inner Cubic Bezier Petals */}
        {sideInnerAngles.map((ang) => (
          <g key={`tr-i-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -10 -22, -12 -50, 0 -72 C 12 -50, 10 -22, 0 0 Z"
              fill="url(#petalInnerGrad)"
              stroke="#FACC15"
              strokeWidth="1.1"
            />
            <path d="M 0 -10 C 0 -28, 0 -48, 0 -64" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
          </g>
        ))}

        {/* Radial Dark Seed Disc Core */}
        <circle cx="0" cy="0" r="34" fill="url(#sunflowerSeedCore)" stroke="#0A0300" strokeWidth="2.8" />

        {/* Textured Concentric Florets & Stippling */}
        <circle cx="0" cy="0" r="26" stroke="#D97706" strokeWidth="2.6" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="0" cy="0" r="18" stroke="#B45309" strokeWidth="2.4" strokeDasharray="2.5 2" opacity="0.9" />
        <circle cx="0" cy="0" r="10" stroke="#FBBF24" strokeWidth="2" strokeDasharray="2 2" opacity="0.95" />

        {/* Corona of Tiny Open Yellow Florets */}
        {floretRing1.map((deg) => (
          <circle key={`tr-c1-${deg}`} cx={Math.cos((deg * Math.PI) / 180) * 32} cy={Math.sin((deg * Math.PI) / 180) * 32} r="1.4" fill="#FACC15" />
        ))}
      </g>

      {/* -------------------------------------------------------------------- */}
      {/* SUNFLOWER 3: CENTERPIECE GIANT HERO BLOOM (Full, Lush, Majestic)     */}
      {/* -------------------------------------------------------------------- */}
      <g transform="translate(230, 220) scale(0.98)" filter="url(#flower-layer-shadow)">
        {/* Tier 1 Outer Cubic Bezier Petals (Deep Amber Honey) */}
        {centerOuterAngles.map((ang) => (
          <g key={`c-o-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -14 -35, -18 -75, 0 -105 C 18 -75, 14 -35, 0 0 Z"
              fill="url(#petalOuterGrad)"
              stroke="#9A3412"
              strokeWidth="1.3"
            />
            {/* Center petal rib vein for 3D botanical realism */}
            <path d="M 0 -16 C 0 -45, 0 -75, 0 -96" stroke="#B45309" strokeWidth="1.3" strokeLinecap="round" />
          </g>
        ))}

        {/* Tier 2 Mid Cubic Bezier Petals (Radiant Golden Yellow) */}
        {centerMidAngles.map((ang) => (
          <g key={`c-m-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -12 -30, -15 -66, 0 -92 C 15 -66, 12 -30, 0 0 Z"
              fill="url(#petalMidGrad)"
              stroke="#D97706"
              strokeWidth="1.2"
            />
            <path d="M 0 -14 C 0 -38, 0 -64, 0 -82" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}

        {/* Tier 3 Inner Cubic Bezier Petals (Sunbeam Lemon Yellow) */}
        {centerInnerAngles.map((ang) => (
          <g key={`c-i-${ang}`} transform={`rotate(${ang})`}>
            <path
              d="M 0 0 C -9 -24, -12 -52, 0 -74 C 12 -52, 9 -24, 0 0 Z"
              fill="url(#petalInnerGrad)"
              stroke="#F59E0B"
              strokeWidth="1"
            />
            <path d="M 0 -10 C 0 -28, 0 -48, 0 -66" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
          </g>
        ))}

        {/* Velvet Chocolate to Deep Black Radial Seed Disc Core */}
        <circle cx="0" cy="0" r="42" fill="url(#sunflowerSeedCore)" stroke="#0A0300" strokeWidth="3" />

        {/* Textured Concentric Stippling Dots (Fibonacci Seed Texture) */}
        <circle cx="0" cy="0" r="32" stroke="#92400E" strokeWidth="3.2" strokeDasharray="3.5 3" opacity="0.88" />
        <circle cx="0" cy="0" r="23" stroke="#D97706" strokeWidth="2.8" strokeDasharray="3 2.5" opacity="0.9" />
        <circle cx="0" cy="0" r="14" stroke="#FBBF24" strokeWidth="2.4" strokeDasharray="2 2" opacity="0.95" />
        <circle cx="0" cy="0" r="6" fill="#FBBF24" opacity="0.8" />

        {/* Outer Ring of Tiny Open Golden Florets */}
        {centerOuterAngles.map((deg) => (
          <circle
            key={`c-f1-${deg}`}
            cx={Math.cos((deg * Math.PI) / 180) * 40}
            cy={Math.sin((deg * Math.PI) / 180) * 40}
            r="1.6"
            fill="#FACC15"
          />
        ))}

        {/* Inner Ring of Soft Stipple Dots */}
        {centerMidAngles.map((deg) => (
          <circle
            key={`c-f2-${deg}`}
            cx={Math.cos((deg * Math.PI) / 180) * 28}
            cy={Math.sin((deg * Math.PI) / 180) * 28}
            r="1.2"
            fill="#FEF08A"
            opacity="0.8"
          />
        ))}

        {/* Soft spherical light glint on velvet core */}
        <circle cx="-10" cy="-10" r="6" fill="#FEF08A" opacity="0.22" />
      </g>

      {/* ==================================================================== */}
      {/* 5. KRAFT PAPER WRAPPER - FRONT OVERLAPPING LAPELS (Over Stems)       */}
      {/* ==================================================================== */}
      <g filter="url(#bouquet-drop-shadow)">
        {/* Left Front Kraft Lapel (Folded diagonally across front) */}
        <path
          d="M 62 255 C 92 315, 155 425, 225 515 L 245 512 C 235 405, 212 325, 245 285 C 182 275, 108 245, 62 255 Z"
          fill="url(#kraftFrontLeft)"
          stroke="#8A5A29"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Right Front Kraft Lapel (Overlapping over left lapel with 3D edge) */}
        <path
          d="M 398 255 C 368 315, 305 425, 225 515 L 205 512 C 215 405, 248 325, 215 285 C 278 275, 352 245, 398 255 Z"
          fill="url(#kraftFrontRight)"
          stroke="#8A5A29"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Overlapping Center Seam Shadow */}
        <path
          d="M 225 285 C 218 355, 222 435, 225 515"
          stroke="#5C3612"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Crisp Fold Edge Highlight */}
        <path
          d="M 228 290 C 221 358, 225 435, 228 510"
          stroke="#FFFFFF"
          strokeWidth="1.1"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />

        {/* Paper Fold Creases */}
        <path
          d="M 125 295 L 185 365 M 335 295 L 275 365"
          stroke="#73451B"
          strokeWidth="1.4"
          strokeDasharray="4 3"
          opacity="0.4"
        />
      </g>

      {/* ==================================================================== */}
      {/* 6. THE SILKY SATIN RIBBON (Top Layer: Loops, Knot & Flowing Tails)   */}
      {/* ==================================================================== */}
      <g filter="url(#ribbon-drop-shadow)">
        {/* Ribbon Wrap Belt around Kraft Wrapper Waist */}
        <path
          d="M 170 422 C 205 435, 255 435, 290 422 L 286 446 C 252 458, 208 458, 174 446 Z"
          fill="url(#ribbonSilk)"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Satin Sheen Highlight along Ribbon Belt */}
        <path
          d="M 173 425 C 205 437, 255 437, 287 425"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />

        {/* Left Satin Bow Loop */}
        <path
          d="M 230 436 C 178 395, 134 422, 154 452 C 172 475, 208 452, 230 440 Z"
          fill="url(#ribbonSilk)"
          stroke="#0F172A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Left Loop Crease & Curving Highlight */}
        <path d="M 178 422 C 152 436, 162 456, 178 448" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 196 440 C 180 448, 170 458, 174 466" stroke="#881337" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

        {/* Right Satin Bow Loop */}
        <path
          d="M 230 436 C 282 395, 326 422, 306 452 C 288 475, 252 452, 230 440 Z"
          fill="url(#ribbonSilk)"
          stroke="#0F172A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Right Loop Crease & Curving Highlight */}
        <path d="M 282 422 C 308 436, 298 456, 282 448" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 264 440 C 280 448, 290 458, 286 466" stroke="#881337" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

        {/* Plump 3D Center Ribbon Knot */}
        <ellipse
          cx="230"
          cy="440"
          rx="13.5"
          ry="12.5"
          fill="url(#ribbonKnotGrad)"
          stroke="#0F172A"
          strokeWidth="2.5"
        />
        {/* Knot Spherical Gleam & Fold Crease */}
        <circle cx="226" cy="437" r="3.4" fill="#FFFFFF" fillOpacity="0.7" />
        <path d="M 224 442 C 228 446, 232 446, 236 442" stroke="#881337" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

        {/* Flowing Ribbon Tails (Curving Downward across Kraft Paper) */}
        {/* Left Ribbon Tail */}
        <path
          d="M 224 448 C 200 478, 168 504, 146 546 C 160 546, 184 530, 206 512 C 216 494, 226 470, 230 452 Z"
          fill="url(#ribbonSilk)"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Left Tail Silk Reflection */}
        <path
          d="M 214 470 C 196 494, 176 514, 154 538"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />

        {/* Right Ribbon Tail */}
        <path
          d="M 236 448 C 260 478, 292 504, 314 546 C 300 546, 276 530, 254 512 C 244 494, 234 470, 230 452 Z"
          fill="url(#ribbonSilk)"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Right Tail Silk Reflection */}
        <path
          d="M 246 470 C 264 494, 284 514, 306 538"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
