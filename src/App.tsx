/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  Heart,
  Music,
  Disc3,
  Flame,
  Code2,
  Coffee,
  RotateCw,
  Camera,
  Gift,
  Download,
  Share2,
  Send,
  Sliders,
  CheckCircle2,
  FileCode,
  Smile,
  Mic,
  Maximize2,
  Pencil,
  Check,
  Trash2,
  Copy,
  RotateCcw,
  ExternalLink
} from "lucide-react";

// ============================================================================
// TOP-LEVEL MEDIA CONSTANTS (Easily editable relative paths)
// ============================================================================
export const BACKGROUND_MUSIC_URL = "https://youtu.be/_alH7i5Rv4Q?si=CtIyw2vQ_sV-IuAT";
export const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
};
export const POLAROID_PHOTO_1 = "./images/campus-polaroid.jpg";
export const SPECIAL_VOICE_NOTE_URL = "https://youtube.com/shorts/8w8j5il1e_8?si=uZxiG3VAy4JqrR_2";
export const SPECIAL_PHOTO_URL = "/assets/aistudio/My_captain_gilll__so_proud_of_uuu_____2f927a1c.jpg";

// ============================================================================
// SVG HAND-DRAWN DOODLES (Authentic Mismatched campus scrapbook aesthetic)
// ============================================================================

const CoffeeCupDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Steam curls */}
    <path d="M35 22 C33 16 38 12 35 6" stroke="#F43F5E" strokeWidth="2.5" />
    <path d="M50 20 C48 14 53 10 50 4" stroke="#F59E0B" strokeWidth="2.5" />
    <path d="M65 22 C63 16 68 12 65 6" stroke="#38BDF8" strokeWidth="2.5" />
    {/* Cup body */}
    <path d="M22 28 L78 28 L72 74 C71 82 62 88 50 88 C38 88 29 82 28 74 Z" fill="#FFFBEB" />
    {/* Cup handle */}
    <path d="M76 36 C88 38 90 56 74 62" />
    {/* Scribble heart on cup */}
    <path d="M44 48 C44 44 49 42 51 46 C53 42 58 44 58 48 C58 53 51 58 51 58 C51 58 44 53 44 48 Z" fill="#F43F5E" stroke="#F43F5E" strokeWidth="1.5" />
    {/* Saucer */}
    <path d="M16 88 C36 94 64 94 84 88" strokeWidth="4" />
  </svg>
);

const ColdCoffeeDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Straw */}
    <path d="M55 8 L65 30 L58 86" stroke="#F43F5E" strokeWidth="4" />
    {/* Cup */}
    <path d="M28 28 L72 28 L66 88 L34 88 Z" fill="#FEF3C7" />
    {/* Lid */}
    <path d="M24 28 C24 22 76 22 76 28 Z" fill="#E0F2FE" />
    {/* Coffee liquid line */}
    <path d="M31 46 Q50 42 69 46" stroke="#D97706" strokeWidth="2.5" strokeDasharray="3 3" />
    {/* Ice cubes */}
    <rect x="38" y="52" width="10" height="10" rx="2" stroke="#38BDF8" fill="#F0F9FF" />
    <rect x="52" y="60" width="10" height="10" rx="2" stroke="#38BDF8" fill="#F0F9FF" />
    {/* Dimple's label */}
    <text x="50" y="77" textAnchor="middle" fontSize="7" fill="#0F172A" fontFamily="Kalam, cursive" fontWeight="bold">
      COLD COFFEE
    </text>
  </svg>
);

const CodeBracketsDoodle: React.FC<{ className?: string; color?: string }> = ({ className = "w-6 h-6", color = "#F43F5E" }) => (
  <svg viewBox="0 0 80 80" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M26 22 L12 40 L26 58" />
    <path d="M44 16 L36 64" stroke="#F59E0B" strokeWidth="3" />
    <path d="M54 22 L68 40 L54 58" />
  </svg>
);

const ScribbledHeartDoodle: React.FC<{ className?: string; fillCol?: string }> = ({ className = "w-6 h-6", fillCol = "#F43F5E" }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <path
      d="M30 50 C12 36 6 22 14 12 C22 2 30 14 30 14 C30 14 38 2 46 12 C54 22 48 36 30 50 Z"
      fill={fillCol}
      fillOpacity="0.85"
      stroke="#E11D48"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Scribble shine line */}
    <path d="M18 16 C22 11 26 12 28 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HandDrawnArrowDoodle: React.FC<{ className?: string }> = ({ className = "w-12 h-6" }) => (
  <svg viewBox="0 0 100 50" fill="none" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 26 C35 12 60 40 88 20" />
    <path d="M72 14 L88 20 L80 34" />
  </svg>
);

const SparkleStarDoodle: React.FC<{ className?: string; color?: string }> = ({ className = "w-5 h-5", color = "#F59E0B" }) => (
  <svg viewBox="0 0 40 40" fill={color} className={className}>
    <path d="M20 0 L24 14 L38 20 L24 26 L20 40 L16 26 L2 20 L16 14 Z" />
  </svg>
);


const DoodleCardboardGiftBox: React.FC<{ className?: string; recipient?: string }> = ({
  className = "w-36 h-36",
  recipient = "Anjali"
}) => (
  <svg
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="cardboardGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="40%" stopColor="#FDBA74" />
        <stop offset="85%" stopColor="#FB923C" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="cardboardLidGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFEDD5" />
        <stop offset="50%" stopColor="#FED7AA" />
        <stop offset="100%" stopColor="#FDBA74" />
      </linearGradient>
      <linearGradient id="doodleRibbon" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="45%" stopColor="#FDE047" />
        <stop offset="80%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FB923C" />
      </linearGradient>
      <linearGradient id="doodleBowPeach" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FECDD3" />
        <stop offset="50%" stopColor="#FDA4AF" />
        <stop offset="100%" stopColor="#FB7185" />
      </linearGradient>
    </defs>

    {/* Shadow beneath cardboard box */}
    <ellipse cx="90" cy="162" rx="60" ry="10" fill="#1E1B18" opacity="0.14" />

    {/* Whimsical hand-drawn sparkles & starbursts */}
    <g opacity="0.9">
      <path d="M28 42 L31 52 L41 55 L31 58 L28 68 L25 58 L15 55 L25 52 Z" fill="#F59E0B" />
      <path d="M152 35 L154 43 L162 45 L154 47 L152 55 L150 47 L142 45 L150 43 Z" fill="#F43F5E" />
      <circle cx="150" cy="90" r="3.5" fill="#38BDF8" />
      <circle cx="30" cy="118" r="3" fill="#FB7185" />
      <path d="M140 135 L142 141 L148 143 L142 145 L140 151 L138 145 L132 143 L138 141 Z" fill="#F59E0B" opacity="0.8" />
      {/* Hand-drawn exclamation doodle */}
      <text x="146" y="70" fill="#EA580C" fontSize="16" fontFamily="Kalam, cursive" fontWeight="bold">!!</text>
    </g>

    {/* Main Cardboard Box Body with organic imperfect hand-drawn curves */}
    <path
      d="M38 78 C37 110 39 142 41 154 C74 157 106 156 139 154 C141 140 143 110 142 78 Z"
      fill="url(#cardboardGrad)"
      stroke="#1E1B18"
      strokeWidth="3.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Organic sketch hatch lines on cardboard (shading) */}
    <path d="M48 142 L58 152 M58 142 L68 152 M68 142 L78 152" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M112 142 L122 152 M122 142 L132 152" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

    {/* Cardboard tape seam down center */}
    <path
      d="M80 78 C79 104 81 130 80 154 L100 154 C99 128 101 102 100 78 Z"
      fill="url(#doodleRibbon)"
      stroke="#1E1B18"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M90 78 L90 154" stroke="#92400E" strokeWidth="1.5" strokeDasharray="4 3" />

    {/* Cardboard Box Lid (slightly oversized with lip and natural wobble) */}
    <path
      d="M30 55 C29 65 31 75 32 78 C68 81 112 81 148 78 C149 75 151 65 150 55 C112 52 68 52 30 55 Z"
      fill="url(#cardboardLidGrad)"
      stroke="#1E1B18"
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Lid Ribbon Segment */}
    <path
      d="M80 54 L80 79 L100 79 L100 54 Z"
      fill="url(#doodleRibbon)"
      stroke="#1E1B18"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* Big Playful Doodle Bow Loops (Peach & Golden Yellow) */}
    {/* Left Bow Loop */}
    <path
      d="M90 54 C72 26 38 32 48 50 C56 62 80 56 90 54 Z"
      fill="url(#doodleBowPeach)"
      stroke="#1E1B18"
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M68 44 C60 48 64 56 74 52" stroke="#881337" strokeWidth="2" strokeLinecap="round" />

    {/* Right Bow Loop */}
    <path
      d="M90 54 C108 26 142 32 132 50 C124 62 100 56 90 54 Z"
      fill="url(#doodleRibbon)"
      stroke="#1E1B18"
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M112 44 C120 48 116 56 106 52" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />

    {/* Bow Center Knot */}
    <ellipse cx="90" cy="54" rx="9" ry="8" fill="#F59E0B" stroke="#1E1B18" strokeWidth="3.5" />

    {/* Dangling Loose Ribbon Tails */}
    <path
      d="M83 58 C72 72 62 82 56 94"
      stroke="#1E1B18"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M83 58 C72 72 62 82 56 94"
      stroke="url(#doodleBowPeach)"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    <path
      d="M97 58 C108 72 118 82 124 94"
      stroke="#1E1B18"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M97 58 C108 72 118 82 124 94"
      stroke="url(#doodleRibbon)"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Cute Hand-drawn Tag pinned to box */}
    <g transform="translate(98, 88) rotate(10)">
      <rect x="0" y="0" width="70" height="26" rx="4" fill="#FFFDF7" stroke="#1E1B18" strokeWidth="2.2" />
      <circle cx="7" cy="13" r="2.5" fill="#1E1B18" />
      <text x="14" y="17" fill="#1E1B18" fontSize="8.5" fontFamily="Kalam, cursive" fontWeight="bold">{recipient.toUpperCase()} 🌻</text>
    </g>
  </svg>
);

const ScribbleBouncyArrow: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 20 C25 8 50 12 70 30 C76 36 82 48 85 62"
      stroke="#F43F5E"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeDasharray="4 2"
    />
    {/* Arrowhead */}
    <path
      d="M72 58 L85 64 L86 50"
      stroke="#F43F5E"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const HandDrawnCassetteDoodle: React.FC<{ className?: string; isPlaying?: boolean }> = ({
  className = "w-full h-auto",
  isPlaying = false
}) => (
  <svg
    viewBox="0 0 280 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cassette Outer Shell with sketched wobbly borders */}
    <rect
      x="8"
      y="10"
      width="264"
      height="150"
      rx="14"
      fill="#FFFDF8"
      stroke="#1E293B"
      strokeWidth="3.5"
    />
    <rect
      x="14"
      y="16"
      width="252"
      height="138"
      rx="10"
      fill="#FFF8EA"
      stroke="#0F172A"
      strokeWidth="2"
      strokeDasharray="4 2"
    />
    {/* Inner label area - pastel yellow scrapbook tape */}
    <rect
      x="32"
      y="28"
      width="216"
      height="94"
      rx="8"
      fill="#FEF08A"
      stroke="#CA8A04"
      strokeWidth="2"
    />
    <line
      x1="40"
      y1="46"
      x2="240"
      y2="46"
      stroke="#EAB308"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <text
      x="140"
      y="43"
      textAnchor="middle"
      fill="#92400E"
      fontSize="11.5"
      fontFamily="'Caveat', cursive, sans-serif"
      fontWeight="bold"
      letterSpacing="1"
    >
      ★ SPECIAL GUEST VOICE TAPE · SIDE A ★
    </text>
    {/* Cassette window & tape reels */}
    <rect
      x="65"
      y="55"
      width="150"
      height="52"
      rx="8"
      fill="#FFFDF7"
      stroke="#0F172A"
      strokeWidth="2.5"
    />
    {/* Left reel */}
    <g className={isPlaying ? "animate-spin origin-[95px_81px]" : ""}>
      <circle
        cx="95"
        cy="81"
        r="17"
        fill="#F43F5E"
        fillOpacity="0.15"
        stroke="#F43F5E"
        strokeWidth="2.5"
      />
      <circle cx="95" cy="81" r="6" fill="#F43F5E" />
      <line x1="84" y1="81" x2="106" y2="81" stroke="#F43F5E" strokeWidth="2" />
      <line x1="95" y1="70" x2="95" y2="92" stroke="#F43F5E" strokeWidth="2" />
    </g>
    {/* Right reel */}
    <g className={isPlaying ? "animate-spin origin-[185px_81px]" : ""}>
      <circle
        cx="185"
        cy="81"
        r="17"
        fill="#F43F5E"
        fillOpacity="0.15"
        stroke="#F43F5E"
        strokeWidth="2.5"
      />
      <circle cx="185" cy="81" r="6" fill="#F43F5E" />
      <line x1="174" y1="81" x2="196" y2="81" stroke="#F43F5E" strokeWidth="2" />
      <line x1="185" y1="70" x2="185" y2="92" stroke="#F43F5E" strokeWidth="2" />
    </g>
    {/* Tape bridge connecting reels */}
    <line
      x1="112"
      y1="81"
      x2="168"
      y2="81"
      stroke="#0F172A"
      strokeWidth="3"
      strokeDasharray="4 2"
    />
    {/* Play button doodle in center */}
    <polygon
      points="136,73 148,81 136,89"
      fill="#F43F5E"
      stroke="#9F1239"
      strokeWidth="1.5"
    />
    {/* Bottom trap / screws */}
    <polygon
      points="45,154 70,126 210,126 235,154"
      fill="#F1F5F9"
      stroke="#0F172A"
      strokeWidth="2"
    />
    <circle cx="26" cy="24" r="3" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="254" cy="24" r="3" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="26" cy="146" r="3" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="254" cy="146" r="3" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
  </svg>
);

const DevilEyeBracelet: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 520 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      {/* Background shadow & aura glow */}
      <radialGradient id="nazarGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="goldBead" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
      <linearGradient id="blueBead" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <filter id="braceletShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Soft aura behind the central eye */}
    <ellipse cx="260" cy="130" rx="90" ry="70" fill="url(#nazarGlow)" />

    {/* Sparkles around bracelet */}
    <g opacity="0.85">
      <path d="M70 60 L73 70 L83 73 L73 76 L70 86 L67 76 L57 73 L67 70 Z" fill="#F59E0B" />
      <path d="M440 50 L442 58 L450 60 L442 62 L440 70 L438 62 L430 60 L438 58 Z" fill="#38BDF8" />
      <path d="M120 190 L122 196 L128 198 L122 200 L120 206 L118 200 L112 198 L118 196 Z" fill="#F43F5E" />
      <path d="M410 180 L413 188 L421 190 L413 192 L410 200 L407 192 L399 190 L407 188 Z" fill="#FBBF24" />
      <circle cx="210" cy="50" r="3" fill="#38BDF8" />
      <circle cx="310" cy="52" r="2.5" fill="#FDE047" />
    </g>

    {/* Braided Black / Navy Silk Cord Loop */}
    {/* Left Cord */}
    <path
      d="M40 130 C80 95 160 100 215 125"
      stroke="#0F172A"
      strokeWidth="4"
      strokeLinecap="round"
      filter="url(#braceletShadow)"
    />
    <path
      d="M40 130 C80 95 160 100 215 125"
      stroke="#1E3A8A"
      strokeWidth="2.5"
      strokeDasharray="4 3"
      strokeLinecap="round"
    />

    {/* Right Cord */}
    <path
      d="M305 125 C360 100 440 95 480 130"
      stroke="#0F172A"
      strokeWidth="4"
      strokeLinecap="round"
      filter="url(#braceletShadow)"
    />
    <path
      d="M305 125 C360 100 440 95 480 130"
      stroke="#1E3A8A"
      strokeWidth="2.5"
      strokeDasharray="4 3"
      strokeLinecap="round"
    />

    {/* Dainty adjustable pull cords at the ends */}
    <path d="M40 130 C30 145 20 160 15 180" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="15" cy="180" r="4" fill="url(#goldBead)" stroke="#78350F" strokeWidth="1" />
    <path d="M40 130 C35 150 32 170 30 195" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="195" r="3.5" fill="url(#goldBead)" stroke="#78350F" strokeWidth="1" />

    <path d="M480 130 C490 145 500 160 505 180" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="505" cy="180" r="4" fill="url(#goldBead)" stroke="#78350F" strokeWidth="1" />
    <path d="M480 130 C485 150 488 170 490 195" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <circle cx="490" cy="195" r="3.5" fill="url(#goldBead)" stroke="#78350F" strokeWidth="1" />

    {/* Side Beads (Left Side) */}
    {/* Bead 1 (Gold) */}
    <circle cx="85" cy="116" r="6" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1" filter="url(#braceletShadow)" />
    {/* Mini Evil Eye Bead 1 */}
    <circle cx="110" cy="110" r="9" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1.2" filter="url(#braceletShadow)" />
    <circle cx="110" cy="110" r="6" fill="#FFFFFF" />
    <circle cx="110" cy="110" r="3.5" fill="#38BDF8" />
    <circle cx="110" cy="110" r="1.8" fill="#0F172A" />
    <circle cx="109" cy="109" r="0.8" fill="#FFFFFF" />
    {/* Bead 2 (Gold Spacer) */}
    <circle cx="132" cy="107" r="5" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1" />
    {/* Bead 3 (Deep Cobalt Faceted Bead) */}
    <circle cx="152" cy="106" r="7.5" fill="url(#blueBead)" stroke="#172554" strokeWidth="1" />
    {/* Bead 4 (Gold Spacer) */}
    <circle cx="172" cy="109" r="5" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1" />
    {/* Mini Evil Eye Bead 2 */}
    <circle cx="195" cy="117" r="10" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1.2" filter="url(#braceletShadow)" />
    <circle cx="195" cy="117" r="6.8" fill="#FFFFFF" />
    <circle cx="195" cy="117" r="4" fill="#38BDF8" />
    <circle cx="195" cy="117" r="2" fill="#0F172A" />
    <circle cx="194" cy="116" r="0.9" fill="#FFFFFF" />
    {/* Gold spacer right before center */}
    <circle cx="218" cy="125" r="6" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1.2" />

    {/* Side Beads (Right Side) */}
    {/* Gold spacer right after center */}
    <circle cx="302" cy="125" r="6" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1.2" />
    {/* Mini Evil Eye Bead 3 */}
    <circle cx="325" cy="117" r="10" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1.2" filter="url(#braceletShadow)" />
    <circle cx="325" cy="117" r="6.8" fill="#FFFFFF" />
    <circle cx="325" cy="117" r="4" fill="#38BDF8" />
    <circle cx="325" cy="117" r="2" fill="#0F172A" />
    <circle cx="324" cy="116" r="0.9" fill="#FFFFFF" />
    {/* Bead (Gold Spacer) */}
    <circle cx="348" cy="109" r="5" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1" />
    {/* Bead (Deep Cobalt Faceted Bead) */}
    <circle cx="368" cy="106" r="7.5" fill="url(#blueBead)" stroke="#172554" strokeWidth="1" />
    {/* Bead (Gold Spacer) */}
    <circle cx="388" cy="107" r="5" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1" />
    {/* Mini Evil Eye Bead 4 */}
    <circle cx="410" cy="110" r="9" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1.2" filter="url(#braceletShadow)" />
    <circle cx="410" cy="110" r="6" fill="#FFFFFF" />
    <circle cx="410" cy="110" r="3.5" fill="#38BDF8" />
    <circle cx="410" cy="110" r="1.8" fill="#0F172A" />
    <circle cx="409" cy="109" r="0.8" fill="#FFFFFF" />
    {/* Bead (Gold) */}
    <circle cx="435" cy="116" r="6" fill="url(#goldBead)" stroke="#854D0E" strokeWidth="1" filter="url(#braceletShadow)" />

    {/* ========================================================= */}
    {/* MAIN CENTERPIECE: THE ICONIC DEVIL EYE MEDALLION */}
    {/* ========================================================= */}
    <g filter="url(#braceletShadow)">
      {/* Outer Golden Bezel with delicate sunburst dotting */}
      <circle cx="260" cy="130" r="38" fill="url(#goldBead)" stroke="#78350F" strokeWidth="2" />
      {/* Little bezel dots */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <circle
          key={deg}
          cx={260 + 35 * Math.cos((deg * Math.PI) / 180)}
          cy={130 + 35 * Math.sin((deg * Math.PI) / 180)}
          r="1.8"
          fill="#FEF08A"
        />
      ))}

      {/* Outer Deep Cobalt Glass Ring */}
      <circle cx="260" cy="130" r="31" fill="#1E3A8A" stroke="#0F172A" strokeWidth="1.5" />
      <path
        d="M233 118 A 31 31 0 0 1 287 118"
        stroke="#60A5FA"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Layer 2: Pure White Ring */}
      <circle cx="260" cy="130" r="22" fill="#FFFFFF" />

      {/* Layer 3: Radiant Turquoise / Cerulean Sky Blue Ring */}
      <circle cx="260" cy="130" r="14" fill="#0284C7" />
      <circle cx="260" cy="130" r="12" fill="#38BDF8" />

      {/* Layer 4: Deep Black Pupil */}
      <circle cx="260" cy="130" r="6.5" fill="#0F172A" />

      {/* Layer 5: High-Shine Glass Glint Highlight */}
      <circle cx="256" cy="126" r="2.8" fill="#FFFFFF" />
      <circle cx="263" cy="133" r="1.2" fill="#FFFFFF" opacity="0.8" />
    </g>

    {/* Little dangling gold charm under the eye: 4-point star charm */}
    <g transform="translate(260, 168)" filter="url(#braceletShadow)">
      {/* Little link ring */}
      <circle cx="0" cy="4" r="3" fill="none" stroke="url(#goldBead)" strokeWidth="1.5" />
      {/* Dainty 4-point star charm */}
      <path
        d="M0 10 L3 17 L10 20 L3 23 L0 30 L-3 23 L-10 20 L-3 17 Z"
        fill="url(#goldBead)"
        stroke="#854D0E"
        strokeWidth="1"
      />
      <circle cx="0" cy="20" r="1.5" fill="#FFFFFF" />
    </g>
  </svg>
);

interface SunflowerBouquetProps {
  recipient?: string;
  styleVariant?: "chic" | "kraft";
  noteText?: string;
  className?: string;
}

const SunflowerBouquet: React.FC<SunflowerBouquetProps> = ({
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
  const floretRing2 = [10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350];

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


const WashiTape: React.FC<{ color?: "yellow" | "pink" | "blue" | "peach"; className?: string }> = ({
  color = "yellow",
  className = "w-24 h-6"
}) => {
  const colorMap = {
    yellow: "bg-[#FBBF24]/80 border-[#F59E0B]",
    pink: "bg-[#FB7185]/80 border-[#F43F5E]",
    blue: "bg-[#7DD3FC]/80 border-[#38BDF8]",
    peach: "bg-[#FDBA74]/80 border-[#FB923C]"
  };
  return (
    <div
      className={`relative z-10 shadow-xs backdrop-blur-[1px] transform ${colorMap[color]} ${className}`}
      style={{
        clipPath: "polygon(0% 15%, 4% 0%, 96% 0%, 100% 15%, 96% 100%, 4% 100%)",
        borderTop: "1px dashed rgba(255,255,255,0.7)",
        borderBottom: "1px dashed rgba(255,255,255,0.7)"
      }}
    />
  );
};

// ============================================================================
// HAND-DRAWN DOODLE FLOATING BALLOONS & WHIMSICAL SPARKLES
// ============================================================================

interface DoodleBalloonProps {
  color: "yellow" | "blue" | "pink" | "peach";
  scribble?: string;
  className?: string;
  onClick?: () => void;
}

const DoodleBalloon: React.FC<DoodleBalloonProps> = ({
  color,
  scribble,
  className = "",
  onClick
}) => {
  const themes = {
    yellow: {
      fill: "#FEF08A",
      stroke: "#D97706",
      string: "#B45309",
      text: "#92400E",
      highlight: "#FFFFFF"
    },
    blue: {
      fill: "#BAE6FD",
      stroke: "#0284C7",
      string: "#0369A1",
      text: "#0369A1",
      highlight: "#FFFFFF"
    },
    pink: {
      fill: "#FECDD3",
      stroke: "#E11D48",
      string: "#BE123C",
      text: "#9F1239",
      highlight: "#FFFFFF"
    },
    peach: {
      fill: "#FED7AA",
      stroke: "#EA580C",
      string: "#C2410C",
      text: "#9A3412",
      highlight: "#FFFFFF"
    }
  };

  const theme = themes[color];

  return (
    <svg
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      {/* Hand-drawn curly, wobbly string dangling below */}
      <path
        d="M50 96 C44 112 56 126 46 142 C38 156 58 170 48 184 C42 192 50 198 46 200"
        stroke={theme.string}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sketched Balloon Knot */}
      <path
        d="M44 94 L56 94 L50 99 Z"
        fill={theme.stroke}
        stroke={theme.stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Main Hand-drawn Organic Balloon Egg Body with double sketch outline */}
      <path
        d="M50 8 C26 8 16 30 16 52 C16 75 34 89 45 94 C48 95 52 95 55 94 C66 89 84 75 84 52 C84 30 74 8 50 8 Z"
        fill={theme.fill}
        fillOpacity="0.88"
        stroke={theme.stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle imperfect sketch line for authentic notebook doodling */}
      <path
        d="M52 10 C30 10 20 31 19 53 C18 73 35 87 46 92"
        stroke={theme.stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Sketched White Reflective Highlight */}
      <path
        d="M28 24 C23 34 23 46 27 56"
        stroke={theme.highlight}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="20" r="1.8" fill={theme.highlight} />

      {/* Optional Handwritten Scribbles inside Balloon */}
      {scribble && (
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill={theme.text}
          fontSize={scribble.length > 2 ? "12" : "16"}
          fontFamily="Kalam, Caveat, cursive"
          fontWeight="bold"
          letterSpacing="0.5"
          transform="rotate(-4 50 56)"
        >
          {scribble}
        </text>
      )}
    </svg>
  );
};

interface DoodleSparkleProps {
  type?: "star4" | "star8" | "cross" | "dots";
  color?: string;
  className?: string;
}

const DoodleSparkle: React.FC<DoodleSparkleProps> = ({
  type = "star4",
  color = "#F59E0B",
  className = "w-5 h-5"
}) => {
  if (type === "star4") {
    // 4-point hand-drawn ink sparkle
    return (
      <svg viewBox="0 0 50 50" fill="none" className={className}>
        <path
          d="M25 4 C25 15 15 25 4 25 C15 25 25 35 25 46 C25 35 35 25 46 25 C35 25 25 15 25 4 Z"
          fill={color}
          stroke={color}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="25" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  if (type === "star8") {
    // 8-point hand-drawn starburst
    return (
      <svg viewBox="0 0 60 60" fill="none" className={className}>
        <path
          d="M30 4 L33 22 L49 11 L38 27 L56 30 L38 33 L49 49 L33 38 L30 56 L27 38 L11 49 L22 33 L4 30 L22 27 L11 11 L27 22 Z"
          fill={color}
          opacity="0.9"
        />
        <circle cx="30" cy="30" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (type === "cross") {
    // Whimsical + cross sparkle
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" className={className}>
        <path d="M20 6 L20 34" />
        <path d="M6 20 L34 20" />
        <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" stroke="none" />
      </svg>
    );
  }

  // Ink dot clusters
  return (
    <svg viewBox="0 0 40 40" fill={color} className={className}>
      <circle cx="20" cy="20" r="3" />
      <circle cx="10" cy="26" r="1.5" opacity="0.75" />
      <circle cx="30" cy="14" r="1.5" opacity="0.75" />
    </svg>
  );
};

const BALLOON_STREAM = [
  { id: 1, color: "yellow" as const, scribble: "HBD", left: "3%", anim: "animate-balloon-1", duration: "16s", delay: "0s", size: 68 },
  { id: 2, color: "pink" as const, scribble: "♥", left: "11%", anim: "animate-balloon-2", duration: "20s", delay: "3.5s", size: 60 },
  { id: 3, color: "blue" as const, scribble: "!", left: "19%", anim: "animate-balloon-3", duration: "18s", delay: "7s", size: 64 },
  { id: 4, color: "peach" as const, scribble: undefined, left: "27%", anim: "animate-balloon-4", duration: "22s", delay: "1.5s", size: 56 },
  { id: 5, color: "pink" as const, scribble: "100%", left: "35%", anim: "animate-balloon-1", duration: "19s", delay: "11s", size: 66 },
  { id: 6, color: "yellow" as const, scribble: "✨", left: "43%", anim: "animate-balloon-2", duration: "23s", delay: "5s", size: 58 },
  { id: 7, color: "blue" as const, scribble: undefined, left: "51%", anim: "animate-balloon-3", duration: "17s", delay: "9.5s", size: 70 },
  { id: 8, color: "peach" as const, scribble: "HBD", left: "59%", anim: "animate-balloon-4", duration: "21s", delay: "2.5s", size: 62 },
  { id: 9, color: "yellow" as const, scribble: "!", left: "67%", anim: "animate-balloon-1", duration: "18s", delay: "8s", size: 65 },
  { id: 10, color: "pink" as const, scribble: "♥", left: "75%", anim: "animate-balloon-2", duration: "22s", delay: "13s", size: 60 },
  { id: 11, color: "blue" as const, scribble: "100%", left: "83%", anim: "animate-balloon-3", duration: "19s", delay: "4s", size: 66 },
  { id: 12, color: "peach" as const, scribble: undefined, left: "91%", anim: "animate-balloon-4", duration: "17s", delay: "10s", size: 62 },
  { id: 13, color: "yellow" as const, scribble: undefined, left: "7%", anim: "animate-balloon-3", duration: "24s", delay: "15s", size: 58 },
  { id: 14, color: "pink" as const, scribble: "HBD", left: "47%", anim: "animate-balloon-1", duration: "20s", delay: "17s", size: 64 },
  { id: 15, color: "blue" as const, scribble: "✨", left: "87%", anim: "animate-balloon-2", duration: "18s", delay: "16s", size: 60 },
  { id: 16, color: "peach" as const, scribble: "!", left: "96%", anim: "animate-balloon-4", duration: "21s", delay: "6.5s", size: 64 }
];

const SPARKLES_FIELD = [
  { id: 1, top: "8%", left: "5%", type: "star4" as const, color: "#F59E0B", size: 22, anim: "animate-sparkle-1", duration: "3.2s", delay: "0.2s" },
  { id: 2, top: "14%", left: "20%", type: "cross" as const, color: "#FB7185", size: 18, anim: "animate-sparkle-2", duration: "4.1s", delay: "1.4s" },
  { id: 3, top: "6%", left: "88%", type: "star8" as const, color: "#FBBF24", size: 26, anim: "animate-sparkle-1", duration: "3.8s", delay: "0.8s" },
  { id: 4, top: "24%", left: "93%", type: "star4" as const, color: "#38BDF8", size: 20, anim: "animate-sparkle-3", duration: "4.5s", delay: "2.1s" },
  { id: 5, top: "32%", left: "4%", type: "dots" as const, color: "#F43F5E", size: 22, anim: "animate-sparkle-2", duration: "3.5s", delay: "1.0s" },
  { id: 6, top: "45%", left: "14%", type: "star4" as const, color: "#F59E0B", size: 24, anim: "animate-sparkle-1", duration: "3.9s", delay: "2.5s" },
  { id: 7, top: "52%", left: "86%", type: "cross" as const, color: "#F59E0B", size: 18, anim: "animate-sparkle-3", duration: "4.2s", delay: "0.5s" },
  { id: 8, top: "68%", left: "6%", type: "star8" as const, color: "#FB7185", size: 26, anim: "animate-sparkle-2", duration: "3.6s", delay: "1.8s" },
  { id: 9, top: "78%", left: "92%", type: "star4" as const, color: "#38BDF8", size: 22, anim: "animate-sparkle-1", duration: "4.0s", delay: "1.2s" },
  { id: 10, top: "86%", left: "16%", type: "cross" as const, color: "#F43F5E", size: 16, anim: "animate-sparkle-3", duration: "3.3s", delay: "2.8s" },
  { id: 11, top: "92%", left: "84%", type: "star4" as const, color: "#F59E0B", size: 20, anim: "animate-sparkle-2", duration: "3.7s", delay: "0.4s" },
  { id: 12, top: "18%", left: "54%", type: "star4" as const, color: "#FBBF24", size: 18, anim: "animate-sparkle-1", duration: "4.4s", delay: "1.9s" },
  { id: 13, top: "62%", left: "48%", type: "dots" as const, color: "#38BDF8", size: 20, anim: "animate-sparkle-3", duration: "3.4s", delay: "0.9s" },
  { id: 14, top: "38%", left: "82%", type: "star8" as const, color: "#F43F5E", size: 24, anim: "animate-sparkle-2", duration: "4.3s", delay: "2.3s" }
];

const FloatingBalloonsAndSparklesLayer: React.FC<{
  onPopBalloon?: () => void;
}> = ({ onPopBalloon }) => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-1 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Floating Doodle Balloons Stream */}
      {BALLOON_STREAM.map((b) => (
        <div
          key={b.id}
          className={`absolute bottom-0 pointer-events-auto ${b.anim}`}
          style={{
            left: b.left,
            animationDuration: b.duration,
            animationDelay: b.delay,
            width: `${b.size}px`
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              onPopBalloon?.();
            }}
            className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
            title="Pop balloon!"
          >
            <DoodleBalloon
              color={b.color}
              scribble={b.scribble}
              className="w-full drop-shadow-xs"
            />
          </div>
        </div>
      ))}

      {/* Whimsical Twinkling Hand-Drawn Sparkles */}
      {SPARKLES_FIELD.map((s) => (
        <div
          key={s.id}
          className={`absolute pointer-events-none ${s.anim}`}
          style={{
            top: s.top,
            left: s.left,
            animationDuration: s.duration,
            animationDelay: s.delay,
            width: `${s.size}px`,
            height: `${s.size}px`
          }}
        >
          <DoodleSparkle
            type={s.type}
            color={s.color}
            className="w-full h-full drop-shadow-xs"
          />
        </div>
      ))}
    </div>
  );
};

// ============================================================================
// AUDIO ENGINE (HTML5 Audio + Web Audio API synthesizer fallback)
// Guarantees soothing music and voice tones even if files are not yet in ./audio/
// ============================================================================

class SynthAudioEngine {
  private ctx: AudioContext | null = null;
  private bgTimer: number | null = null;
  private isSynthesizing = false;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Plays a charming lo-fi indie acoustic chord progression (Mismatched vibe)
  public startBgSynth(volume = 0.35) {
    if (this.isSynthesizing) return;
    this.isSynthesizing = true;
    const ctx = this.getContext();

    // Chords: E maj (E, G#, B), C#m (C#, E, G#), A maj (A, C#, E), B maj (B, D#, F#)
    const chords = [
      [329.63, 415.3, 493.88], // E4
      [277.18, 329.63, 415.3], // C#4
      [220.0, 277.18, 329.63], // A3
      [246.94, 311.13, 369.99] // B3
    ];
    let step = 0;

    const playChord = () => {
      if (!this.isSynthesizing) return;
      const notes = chords[step % chords.length];
      step++;

      notes.forEach((freq, idx) => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = idx === 0 ? "triangle" : "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

          // Gentle plucked envelope
          const now = ctx.currentTime + idx * 0.08;
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(volume * 0.12, now + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 2.0);
        } catch {
          // Fallback ignore
        }
      });

      this.bgTimer = window.setTimeout(playChord, 1800);
    };

    playChord();
  }

  public stopBgSynth() {
    this.isSynthesizing = false;
    if (this.bgTimer) {
      clearTimeout(this.bgTimer);
      this.bgTimer = null;
    }
  }

  // Voice note speech / cheerful synthesizer playback
  public playVoiceNoteSynth(text: string, onEnd: () => void) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.15;
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
      window.speechSynthesis.speak(utterance);
    } else {
      // Audio chime sequence fallback
      const ctx = this.getContext();
      const freqs = [392, 440, 523.25, 659.25, 783.99];
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.frequency.value = f;
        g.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.2);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.2 + 0.3);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.2);
        osc.stop(ctx.currentTime + i * 0.2 + 0.35);
      });
      setTimeout(onEnd, 2000);
    }
  }

  // Celebratory sound chime sequence for gift box pop-up reveal
  public playGiftBoxRevealSound() {
    try {
      const ctx = this.getContext();
      // Cheerful bright arpeggio: C5, E5, G5, B5, C6 with sparkling overtone
      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.5];
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.09);
        g.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.09);
        g.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.09 + 0.04);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.09 + 0.65);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.09);
        osc.stop(ctx.currentTime + i * 0.09 + 0.7);
      });
    } catch {
      // Fallback ignore
    }
  }

  public stopVoiceNoteSynth() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }
}

const audioEngine = new SynthAudioEngine();

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Birthday Personalization (defaults to "Anjali", while hero title displays "Chikki Mam")
  const [recipientName] = useState<string>(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chikki_recipient_name", "Anjali");
    }
    return "Anjali";
  });

  // Hero Status (persisted from user edits)
  const [heroStatusText] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chikki_hero_status");
      if (saved) return saved;
    }
    return "Status: 100% matched with another wonderful year!";
  });

  // Audio Playback State
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);
  const [bgVolume, setBgVolume] = useState(0.35); // Gentle 35% volume per spec
  const [isBgAudioMuted, setIsBgAudioMuted] = useState(false);
  const [usingSynthBg, setUsingSynthBg] = useState(false);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const ytPlayerRef = useRef<HTMLIFrameElement | null>(null);
  const ytVideoId = getYouTubeVideoId(BACKGROUND_MUSIC_URL);
  const isYouTube = Boolean(ytVideoId);

  // Auto-pause background music coordinator when voice note opens/plays
  const wasBgMusicPlayingBeforeVoiceNote = useRef<boolean>(false);
  const wasBgMusicPlayingBeforeGiftModal = useRef<boolean>(false);
  const [isBoxPopped, setIsBoxPopped] = useState<boolean>(false);

  // Modals state
  const [activeModal, setActiveModal] = useState<"polaroid" | "voiceNote" | "surprise" | null>(null);

  // Sunflower Bouquet presentation style ("chic" | "kraft")
  const [bouquetStyle, setBouquetStyle] = useState<"chic" | "kraft">("chic");

  // Card 1: Polaroid state
  const [isPolaroidFlipped, setIsPolaroidFlipped] = useState(false);
  const [polaroidCaption] = useState(
    "Delhi Campus Hackathon 2024 · Cold coffee, 3 AM bugs & you ☕❤️"
  );
  const [backNoteText] = useState(
    "You came for the code, but you ended up redefining what teamwork and friendship look like. Whenever a bug seemed impossible, your stubborn brilliance found the semicolon.\n\nHappy Birthday! Don't ever change that fiery ambition. (And yes, I promise not to spill cold coffee on your presentation again)."
  );
  const [customPolaroidSrc] = useState<string>(POLAROID_PHOTO_1);

  // Card 2: Voice note state
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [voiceProgress, setVoiceProgress] = useState(0); // 0 to 100
  const [voiceDuration] = useState(42); // 42 seconds default demo
  const [voiceCurrentTime, setVoiceCurrentTime] = useState(0);
  const [voiceSpeed, setVoiceSpeed] = useState<1 | 1.25 | 1.5>(1);
  const voiceAudioRef = useRef<HTMLAudioElement | null>(null);
  const voiceYtPlayerRef = useRef<HTMLIFrameElement | null>(null);
  const voiceYtVideoId = getYouTubeVideoId(SPECIAL_VOICE_NOTE_URL);
  const isVoiceYouTube = Boolean(voiceYtVideoId);
  const voiceIntervalRef = useRef<number | null>(null);
  const [voiceTranscript] = useState<string>(() => {
    const updated = "“Hey Birthday Star! Ashish here. If Anjali taught me one thing, it's that the best algorithms can't predict how much you mean to everyone around you. Happy Birthday! May your cold coffee always stay chilled, your code compile on the first try, and your dreams launch into production flawlessly. Cheers to another 100% matched year!”";
    if (typeof window !== "undefined") {
      localStorage.setItem("chikki_voice_transcript", updated);
    }
    return updated;
  });

  const [voiceNoteImageSrc, setVoiceNoteImageSrc] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("chikki_voice_photo") || null;
    }
    return null;
  });

  // Card 3: Special Surprise state (Persists any edited text in localStorage)
  const [isCandleBlown, setIsCandleBlown] = useState(false);
  const [wishLikes, setWishLikes] = useState(108);
  const [hasLikedWish, setHasLikedWish] = useState(false);
  const [surpriseNote] = useState<string>(() => {
    const updated = `Dear Anjali,\n\nToday, we deploy all love, zero bugs, and infinite happiness into your new year.\n\nKeep dreaming big, coding fearlessly, and being utterly irreplaceable.\n\nAnd yeahhh!!! I promise not to make fun on you, specially in your bad mood`;
    if (typeof window !== "undefined") {
      localStorage.setItem("chikki_surprise_note", updated);
    }
    return updated;
  });

  // Campus Match Algorithm Code (reactive to recipientName and preserved from edits)
  const defaultAlgorithmCode = `// Delhi Hackathon: Compatibility Evaluation
const matchResult: MatchResult = {
  recipient: "${recipientName}",
  status: "100% Matched",
  birthdayWishes: Infinity,
  message: "May your algorithms always succeed & your heart be full!"
};`;

  const [customCode, setCustomCode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chikki_algorithm_code");
      if (saved) {
        if (
          saved.includes("evaluateBirthdayMatch") ||
          saved.includes("coldCoffeeSpills") ||
          saved.includes("Chikki Mam")
        ) {
          localStorage.setItem("chikki_algorithm_code", defaultAlgorithmCode);
          return defaultAlgorithmCode;
        }
        return saved;
      }
    }
    return defaultAlgorithmCode;
  });
  const [codeCopied, setCodeCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chikki_algorithm_code");
      if (
        !saved ||
        saved.includes("evaluateBirthdayMatch") ||
        saved.includes("coldCoffeeSpills") ||
        saved.includes("Chikki Mam")
      ) {
        setCustomCode(defaultAlgorithmCode);
        localStorage.setItem("chikki_algorithm_code", defaultAlgorithmCode);
      }
    }
  }, [recipientName, defaultAlgorithmCode]);

  // Sticky desk notes on the scrapbook (Persisted in localStorage)
  interface StickyNoteItem {
    id: number;
    color: string;
    tape: "yellow" | "pink" | "blue" | "peach";
    rotate: string;
    text: string;
    author: string;
  }

  const [stickyNotes, setStickyNotes] = useState<StickyNoteItem[]>(() => {
    const defaultNotes: StickyNoteItem[] = [
      {
        id: 1,
        color: "bg-[#FEF08A] text-[#854D0E]",
        tape: "pink",
        rotate: "-rotate-2",
        text: "☕ Ashish's Rule #1: Cold coffee is temporary, cracking jokes on serious situation is permanent.",
        author: "Ashish"
      },
      {
        id: 2,
        color: "bg-[#BAE6FD] text-[#0369A1]",
        tape: "yellow",
        rotate: "rotate-3",
        text: "💻 Anjali's To-Do:\n1. Fix critical bug\n2. Celebrate Birthday\n3. Always be careful",
        author: "Anjali"
      },
      {
        id: 3,
        color: "bg-[#FED7AA] text-[#9A3412]",
        tape: "blue",
        rotate: "-rotate-1",
        text: "⚡ Status: 100% Matched\nCompatibility: Infinite\nLatency: 0ms",
        author: "Algorithm"
      }
    ];

    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("chikki_sticky_notes");
        if (saved) {
          let updated = saved;
          if (updated.includes("Chikki Mam")) {
            updated = updated.replace(/Chikki Mam/g, "Anjali");
          }
          if (updated.includes("Don't spill coffee on laptop")) {
            updated = updated.replace(/Don't spill coffee on laptop/g, "Always be careful");
          }
          if (updated.includes("3. Don't spill coffee")) {
            updated = updated.replace(/3\. Don't spill coffee[^\n"]*/g, "3. Always be careful");
          }
          localStorage.setItem("chikki_sticky_notes", updated);
          return JSON.parse(updated);
        }
      } catch {
        // ignore
      }
    }
    return defaultNotes;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("chikki_sticky_notes", JSON.stringify(stickyNotes));
      } catch {
        // ignore
      }
    }
  }, [stickyNotes]);

  const [newStickyText, setNewStickyText] = useState("");
  const [newStickyAuthor, setNewStickyAuthor] = useState("");
  const [showAddSticky, setShowAddSticky] = useState(false);

  // Sticky note inline editing
  const [editingStickyId, setEditingStickyId] = useState<number | null>(null);
  const [editStickyText, setEditStickyText] = useState("");
  const [editStickyAuthor, setEditStickyAuthor] = useState("");

  const handleStartEditSticky = (note: StickyNoteItem) => {
    setEditingStickyId(note.id);
    setEditStickyText(note.text);
    setEditStickyAuthor(note.author);
  };

  const handleSaveSticky = (id: number) => {
    const updated = stickyNotes.map((n) =>
      n.id === id
        ? {
            ...n,
            text: editStickyText.trim() || n.text,
            author: editStickyAuthor.trim() || n.author
          }
        : n
    );
    setStickyNotes(updated);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("chikki_sticky_notes", JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
    setEditingStickyId(null);
  };

  const handleDeleteSticky = (id: number) => {
    const filtered = stickyNotes.filter((n) => n.id !== id);
    setStickyNotes(filtered);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("chikki_sticky_notes", JSON.stringify(filtered));
      } catch {
        // ignore
      }
    }
    if (editingStickyId === id) setEditingStickyId(null);
  };

  // Cassette player collapsed / expanded view
  const [isCassetteMinimized, setIsCassetteMinimized] = useState(false);

  // ==========================================================================
  // BACKGROUND MUSIC HANDLERS & AUTOPLAY LOGIC
  // ==========================================================================

  // Initialize background audio element, attempt immediate autoplay,
  // and attach global interaction fallback if blocked by browser policy.
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    let onPlayEvent: (() => void) | null = null;
    let onPauseEvent: (() => void) | null = null;
    let onErrorEvent: (() => void) | null = null;

    if (!isYouTube) {
      audio = bgAudioRef.current;
      if (!audio) {
        audio = new Audio(BACKGROUND_MUSIC_URL);
        bgAudioRef.current = audio;
      }

      audio.loop = true;
      audio.volume = bgVolume;

      onPlayEvent = () => {
        setIsBgMusicPlaying(true);
        setUsingSynthBg(false);
      };
      onPauseEvent = () => {
        setIsBgMusicPlaying(false);
      };
      onErrorEvent = () => {
        setUsingSynthBg(true);
        audioEngine.startBgSynth(bgVolume);
        setIsBgMusicPlaying(true);
      };

      audio.addEventListener("play", onPlayEvent);
      audio.addEventListener("pause", onPauseEvent);
      audio.addEventListener("error", onErrorEvent);
    } else {
      // YouTube mode starts in active state
      setIsBgMusicPlaying(true);
    }

    // Track active one-time interaction listeners so we can cleanly remove them
    let listenersAttached = false;
    const interactionEvents = [
      "click",
      "touchstart",
      "pointerdown",
      "keydown",
      "scroll"
    ] as const;

    const cleanupInteractionListeners = () => {
      if (!listenersAttached) return;
      listenersAttached = false;
      interactionEvents.forEach((evt) => {
        window.removeEventListener(evt, triggerPlayOnUserInteraction);
        document.removeEventListener(evt, triggerPlayOnUserInteraction);
      });
    };

    const triggerPlayOnUserInteraction = () => {
      if (isYouTube) {
        try {
          ytPlayerRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*"
          );
          ytPlayerRef.current?.contentWindow?.postMessage(
            JSON.stringify({
              event: "command",
              func: "setVolume",
              args: [Math.round(bgVolume * 100)]
            }),
            "*"
          );
        } catch {
          // ignore
        }
        setIsBgMusicPlaying(true);
        cleanupInteractionListeners();
      } else {
        const currentAudio = bgAudioRef.current;
        if (currentAudio) {
          currentAudio
            .play()
            .then(() => {
              setIsBgMusicPlaying(true);
              cleanupInteractionListeners();
            })
            .catch((err) => {
              console.log("Audio play after interaction error:", err);
              audioEngine.startBgSynth(bgVolume);
              setIsBgMusicPlaying(true);
              cleanupInteractionListeners();
            });
        } else {
          cleanupInteractionListeners();
        }
      }
    };

    const attachGlobalInteractionFallback = () => {
      if (listenersAttached) return;
      listenersAttached = true;
      interactionEvents.forEach((evt) => {
        window.addEventListener(evt, triggerPlayOnUserInteraction, {
          once: true,
          passive: true
        });
        document.addEventListener(evt, triggerPlayOnUserInteraction, {
          once: true,
          passive: true
        });
      });
    };

    // 2. The Autoplay Attempt: immediately call .play() on mount if native audio
    if (!isYouTube && audio) {
      try {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsBgMusicPlaying(true);
            })
            .catch((error) => {
              console.log("Autoplay blocked by browser, awaiting interaction:", error);
              setIsBgMusicPlaying(false);
              attachGlobalInteractionFallback();
            });
        }
      } catch (err) {
        console.log("Synchronous play error:", err);
        attachGlobalInteractionFallback();
      }
    } else {
      // For YouTube, attach fallback to ensure playback begins on first touch if autoplay was prevented
      attachGlobalInteractionFallback();
    }

    return () => {
      cleanupInteractionListeners();
      if (audio) {
        if (onPlayEvent) audio.removeEventListener("play", onPlayEvent);
        if (onPauseEvent) audio.removeEventListener("pause", onPauseEvent);
        if (onErrorEvent) audio.removeEventListener("error", onErrorEvent);
        audio.pause();
      }
      if (isYouTube) {
        try {
          ytPlayerRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
            "*"
          );
        } catch {
          // ignore
        }
      }
      // Explicit Voice Note Cleanup on unmount
      if (voiceAudioRef.current) {
        voiceAudioRef.current.pause();
        voiceAudioRef.current.currentTime = 0;
      }
      if (voiceYtPlayerRef.current) {
        try {
          voiceYtPlayerRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
            "*"
          );
          voiceYtPlayerRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
            "*"
          );
        } catch {
          // ignore
        }
      }
      if (voiceIntervalRef.current) {
        clearInterval(voiceIntervalRef.current);
        voiceIntervalRef.current = null;
      }
      audioEngine.stopVoiceNoteSynth();
      audioEngine.stopBgSynth();
    };
  }, [isYouTube]);

  // Update volume
  useEffect(() => {
    if (bgAudioRef.current) {
      bgAudioRef.current.volume = isBgAudioMuted ? 0 : bgVolume;
    }
    if (isYouTube) {
      try {
        ytPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "setVolume",
            args: [isBgAudioMuted ? 0 : Math.round(bgVolume * 100)]
          }),
          "*"
        );
      } catch {
        // ignore
      }
    }
  }, [bgVolume, isBgAudioMuted, isYouTube]);

  const toggleBgMusic = () => {
    if (isBgMusicPlaying) {
      pauseBgMusic();
    } else {
      playBgMusic();
    }
  };

  const playBgMusic = () => {
    setIsBgMusicPlaying(true);
    if (isYouTube) {
      try {
        ytPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
        ytPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "setVolume",
            args: [isBgAudioMuted ? 0 : Math.round(bgVolume * 100)]
          }),
          "*"
        );
      } catch {
        // ignore
      }
    } else if (bgAudioRef.current) {
      bgAudioRef.current
        .play()
        .then(() => {
          setIsBgMusicPlaying(true);
          setUsingSynthBg(false);
        })
        .catch(() => {
          setUsingSynthBg(true);
          audioEngine.startBgSynth(bgVolume);
          setIsBgMusicPlaying(true);
        });
    } else {
      setUsingSynthBg(true);
      audioEngine.startBgSynth(bgVolume);
      setIsBgMusicPlaying(true);
    }
  };

  const pauseBgMusic = () => {
    setIsBgMusicPlaying(false);
    if (isYouTube) {
      try {
        ytPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        );
      } catch {
        // ignore
      }
    }
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
    }
    audioEngine.stopBgSynth();
  };

  // ==========================================================================
  // SMART AUDIO COORDINATION WITH MODALS
  // Per requirement: When Card 2 (voice note) is opened or playing,
  // BACKGROUND_MUSIC_URL must automatically pause to avoid sound overlap.
  // When closed, background music should resume smoothly if it was on originally.
  // ==========================================================================

  // Sunflower Gift Box Open handler (silent, keeps background music smooth)
  const handleOpenSunflowerGiftModal = () => {
    triggerConfetti();
    setActiveModal("polaroid");
    setIsBoxPopped(false);
    setTimeout(() => {
      setIsBoxPopped(true);
      triggerConfetti();
    }, 280);
  };

  const handleReplayBoxPop = () => {
    setIsBoxPopped(false);
    setTimeout(() => {
      setIsBoxPopped(true);
      triggerConfetti();
    }, 260);
  };

  // Audio ducking coordinator for background music during voice notes
  const isBgDuckedRef = useRef<boolean>(false);

  const duckBgMusic = () => {
    // Only apply volume reduction if background music is currently active
    if (!isBgMusicPlaying) return;
    isBgDuckedRef.current = true;
    if (bgAudioRef.current && !isBgAudioMuted) {
      bgAudioRef.current.volume = 0.08;
    }
    if (isYouTube && !isBgAudioMuted) {
      try {
        ytPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "setVolume",
            args: [8]
          }),
          "*"
        );
      } catch {
        // ignore
      }
    }
  };

  const restoreBgMusicVolume = () => {
    if (!isBgDuckedRef.current) return;
    isBgDuckedRef.current = false;
    // Instantly restore background volume if active
    if (bgAudioRef.current && !isBgAudioMuted) {
      bgAudioRef.current.volume = bgVolume;
    }
    if (isYouTube && !isBgAudioMuted) {
      try {
        ytPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "setVolume",
            args: [Math.round(bgVolume * 100)]
          }),
          "*"
        );
      } catch {
        // ignore
      }
    }
  };

  const handleOpenVoiceNoteModal = () => {
    setActiveModal("voiceNote");
  };

  const handleVoiceEnded = () => {
    setIsVoicePlaying(false);
    setVoiceProgress(0);
    setVoiceCurrentTime(0);
    // Restore background music volume when voice note finishes
    restoreBgMusicVolume();
  };

  const handleCloseModal = () => {
    if (activeModal === "polaroid") {
      setIsPolaroidFlipped(false);
      // Resume background music smoothly if it was on before gift modal
      if (wasBgMusicPlayingBeforeGiftModal.current) {
        playBgMusic();
        wasBgMusicPlayingBeforeGiftModal.current = false;
      }
    }
    if (activeModal === "voiceNote") {
      stopVoiceNote();
      restoreBgMusicVolume();
    }
    setActiveModal(null);
  };

  // Voice note play/pause (Supports both YouTube links and direct audio files)
  const playVoiceNote = () => {
    // Audio Ducking: Drop background music volume to 0.08 (8%) instead of pausing!
    duckBgMusic();

    setIsVoicePlaying(true);

    if (isVoiceYouTube) {
      try {
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "unMute", args: [] }),
          "*"
        );
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
          "*"
        );
      } catch (err) {
        console.error("YouTube play error", err);
      }
      startVoiceProgressTimer();
    } else if (voiceAudioRef.current) {
      voiceAudioRef.current.playbackRate = voiceSpeed;
      voiceAudioRef.current
        .play()
        .then(() => {
          startVoiceProgressTimer();
        })
        .catch(() => {
          // Play simulated speech synthesis
          startVoiceProgressTimer();
          audioEngine.playVoiceNoteSynth(voiceTranscript, () => {
            handleVoiceEnded();
          });
        });
    } else {
      startVoiceProgressTimer();
      audioEngine.playVoiceNoteSynth(voiceTranscript, () => {
        handleVoiceEnded();
      });
    }
  };

  const togglePlayVoiceNote = () => {
    if (isVoicePlaying) {
      pauseVoiceNote();
    } else {
      playVoiceNote();
    }
  };

  const pauseVoiceNote = () => {
    setIsVoicePlaying(false);
    if (voiceIntervalRef.current) {
      clearInterval(voiceIntervalRef.current);
      voiceIntervalRef.current = null;
    }
    // Restore background music volume when manually paused
    restoreBgMusicVolume();

    if (isVoiceYouTube) {
      try {
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        );
      } catch {
        // ignore
      }
    }
    if (voiceAudioRef.current) {
      voiceAudioRef.current.pause();
    }
    audioEngine.stopVoiceNoteSynth();
  };

  const stopVoiceNote = () => {
    pauseVoiceNote();
    setVoiceProgress(0);
    setVoiceCurrentTime(0);
    restoreBgMusicVolume();

    if (isVoiceYouTube) {
      try {
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        );
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
          "*"
        );
        voiceYtPlayerRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "seekTo", args: [0, true] }),
          "*"
        );
      } catch {
        // ignore
      }
      // Re-assign src to force instant stream destruction
      if (voiceYtPlayerRef.current && voiceYtVideoId) {
        voiceYtPlayerRef.current.src = `https://www.youtube.com/embed/${voiceYtVideoId}?enablejsapi=1&autoplay=0&controls=0&playsinline=1`;
      }
    }

    if (voiceAudioRef.current) {
      voiceAudioRef.current.pause();
      voiceAudioRef.current.currentTime = 0;
    }
    audioEngine.stopVoiceNoteSynth();
  };

  const startVoiceProgressTimer = () => {
    if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current);
    voiceIntervalRef.current = window.setInterval(() => {
      setVoiceCurrentTime((prev) => {
        const next = prev + 0.5 * voiceSpeed;
        if (next >= voiceDuration) {
          setIsVoicePlaying(false);
          setVoiceProgress(100);
          if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current);
          return voiceDuration;
        }
        setVoiceProgress((next / voiceDuration) * 100);
        return next;
      });
    }, 500);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeModal) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  // Trigger confetti burst
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F59E0B", "#F43F5E", "#38BDF8", "#FBBF24", "#FB7185"]
    });
  };

  // Card 3: Open surprise modal with confetti explosion
  const handleOpenSurpriseModal = () => {
    setActiveModal("surprise");
    triggerConfetti();
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#F43F5E", "#F59E0B", "#38BDF8"]
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#F43F5E", "#F59E0B", "#38BDF8"]
      });
    }, 300);
  };

  // Blow candle action
  const handleBlowCandle = () => {
    setIsCandleBlown(true);
    triggerConfetti();
  };

  // Add new sticky note
  const handleAddSticky = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStickyText.trim()) return;
    const colors = [
      { color: "bg-[#FEF08A] text-[#854D0E]", tape: "pink" as const },
      { color: "bg-[#BAE6FD] text-[#0369A1]", tape: "yellow" as const },
      { color: "bg-[#FED7AA] text-[#9A3412]", tape: "blue" as const },
      { color: "bg-[#FBCFE8] text-[#9D174D]", tape: "peach" as const }
    ];
    const picked = colors[stickyNotes.length % colors.length];
    const rotations = ["-rotate-2", "rotate-2", "-rotate-3", "rotate-3", "-rotate-1", "rotate-1"];
    const rot = rotations[Math.floor(Math.random() * rotations.length)];

    setStickyNotes([
      ...stickyNotes,
      {
        id: Date.now(),
        color: picked.color,
        tape: picked.tape,
        rotate: rot,
        text: newStickyText,
        author: newStickyAuthor.trim() || "Campus Friend"
      }
    ]);
    setNewStickyText("");
    setNewStickyAuthor("");
    setShowAddSticky(false);
    triggerConfetti();
  };

  return (
    <div className="min-h-screen bg-notebook-grid text-[#1E293B] font-sans antialiased relative selection:bg-[#F43F5E] selection:text-white pb-20">
      {/* Background YouTube Audio Player (when YouTube link is provided) */}
      {isYouTube && ytVideoId && (
        <iframe
          ref={ytPlayerRef}
          id="bg-youtube-audio-stream"
          title="Background YouTube Audio"
          src={`https://www.youtube.com/embed/${ytVideoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${ytVideoId}&controls=0&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="fixed -top-[800px] -left-[800px] w-1 h-1 opacity-0 pointer-events-none"
        />
      )}

      {/* Background Music Audio Element for local/direct audio files */}
      {!isYouTube && (
        <audio
          ref={bgAudioRef}
          src={BACKGROUND_MUSIC_URL}
          preload="auto"
          loop
          playsInline
        />
      )}

      {/* Secret Voice Note YouTube Player (when YouTube link is provided) */}
      {isVoiceYouTube && voiceYtVideoId && (
        <iframe
          ref={voiceYtPlayerRef}
          id="voice-youtube-audio-stream"
          title="Special Guest Voice Note Audio"
          src={`https://www.youtube.com/embed/${voiceYtVideoId}?enablejsapi=1&autoplay=0&controls=0&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="fixed -top-[800px] -left-[800px] w-1 h-1 opacity-0 pointer-events-none"
        />
      )}

      {/* Hidden Audio Element for Voice Note (when using direct mp3/audio files) */}
      {!isVoiceYouTube && (
        <audio
          ref={voiceAudioRef}
          src={SPECIAL_VOICE_NOTE_URL}
          preload="auto"
          playsInline
          onEnded={handleVoiceEnded}
        />
      )}

      {/* Floating Doodle Balloons & Whimsical Sparkles Layer */}
      <FloatingBalloonsAndSparklesLayer onPopBalloon={triggerConfetti} />

      {/* ==================================================================== */}
      {/* MAIN CONTAINER */}
      {/* ==================================================================== */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 relative z-10">
        {/* ================================================================== */}
        {/* HERO HEADER (Mismatched Title Sequence Aesthetic) */}
        {/* ================================================================== */}
        <section className="text-center relative mb-14 sm:mb-16">
          {/* Decorative Doodles positioned around title */}
          <div className="hidden md:block absolute -top-4 left-12 -rotate-12">
            <WashiTape color="yellow" className="w-28 h-6" />
          </div>
          <div className="hidden md:block absolute -top-2 right-16 rotate-12">
            <WashiTape color="blue" className="w-24 h-5" />
          </div>

          {/* Music Player placed right over top of THE URL UNIVERSE · INTERNET */}
          <div className="flex justify-center mb-2.5">
            <button
              type="button"
              onClick={toggleBgMusic}
              aria-label={isBgMusicPlaying ? "Pause Background Music" : "Play Background Music"}
              className="px-3 py-1 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-md backdrop-blur-md border border-slate-700/80 hover:border-amber-400/60 hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-1.5 text-[11px] font-mono-code cursor-pointer group select-none"
              title={isBgMusicPlaying ? "Click to Pause Music" : "Click to Play Music"}
            >
              {isBgMusicPlaying ? (
                <>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <Disc3 className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:3.5s]" />
                  <span className="font-semibold tracking-wide text-slate-200 flex items-center gap-1">
                    Music: <span className="text-emerald-400 font-bold">ON</span>
                  </span>
                  <span className="text-[10px] font-medium text-amber-200 bg-amber-500/20 px-1.5 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Pause className="w-2 h-2 fill-current" />
                    <span>Pause</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex rounded-full h-1.5 w-1.5 bg-slate-500" />
                  <Disc3 className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-semibold tracking-wide text-slate-300 flex items-center gap-1">
                    Music: <span className="text-slate-400 font-bold">OFF</span>
                  </span>
                  <span className="text-[10px] font-medium text-emerald-200 bg-emerald-500/20 px-1.5 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <Play className="w-2 h-2 fill-current" />
                    <span>Play</span>
                  </span>
                </>
              )}
            </button>
          </div>

          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono-code text-xs px-2.5 py-1 bg-[#FDE68A] text-[#92400E] rounded-md border border-[#F59E0B] font-semibold tracking-wide shadow-xs">
              THE URL UNIVERSE · INTERNET
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-hand">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 inline" />
              Special Hackathon Release
            </span>
          </div>

          {/* Bold Mismatched Title Banner */}
          <div className="relative inline-block my-2">
            {/* Background Cutout Shadow Effect */}
            <div className="absolute inset-0 bg-[#0F172A] transform translate-x-1.5 translate-y-1.5 rounded-2xl -rotate-1" />

            <div className="relative bg-white border-3 border-[#0F172A] rounded-2xl px-6 sm:px-12 py-5 sm:py-6 shadow-xl transform rotate-1">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                {/* "Happy Birthday : Chikki Mam" in vibrant cutout style with staggered popup animation */}
                <span
                  onClick={triggerConfetti}
                  className="bg-[#F59E0B] text-slate-950 px-3 py-1 rounded-lg transform -rotate-2 shadow-xs border-2 border-slate-900 inline-block font-sans animate-popup-word1 hover:scale-105 transition-transform cursor-pointer select-none"
                  title="Click for celebratory confetti!"
                >
                  Happy
                </span>
                <span
                  onClick={triggerConfetti}
                  className="bg-[#38BDF8] text-slate-950 px-3 py-1 rounded-lg transform rotate-2 shadow-xs border-2 border-slate-900 inline-block font-sans animate-popup-word2 hover:scale-105 transition-transform cursor-pointer select-none"
                  title="Click for celebratory confetti!"
                >
                  Birthday
                </span>
                <span className="text-[#0F172A] font-hand text-4xl sm:text-6xl md:text-7xl ml-1 font-bold">
                  :
                </span>
                <span
                  onClick={triggerConfetti}
                  className="bg-[#F43F5E] text-white px-4 py-1 rounded-xl transform -rotate-1 shadow-xs border-2 border-slate-900 inline-block font-hand font-bold tracking-normal animate-popup-word3 hover:scale-105 transition-transform cursor-pointer select-none"
                  title="Click for celebratory confetti!"
                >
                  Chikki Mam
                </span>
              </div>
            </div>
          </div>

          {/* Subtext with Coffee Cup & Coder Message */}
          <div className="mt-5 max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 bg-[#FFFBEB] border border-amber-300 rounded-2xl sm:rounded-full px-5 py-2.5 shadow-xs relative group/status">
              <CoffeeCupDoodle className="w-8 h-8 text-[#0F172A] shrink-0" />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-base font-hand font-bold text-[#0F172A]">
                    {heroStatusText}
                  </p>
                </div>
                <p className="text-xs text-slate-500 font-mono-code">
                  {"<"}Birthday.celebrate(recipient=&quot;{recipientName}&quot;, happiness=Infinity) /{">"}
                </p>
              </div>
            </div>

            {/* Recipient Display Pill */}
            <div className="mt-3 flex items-center gap-2 text-xs font-mono-code text-slate-600">
              <span>Celebrating for:</span>
              <span className="font-bold text-[#F43F5E] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 shadow-2xs">
                {recipientName}
              </span>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* INTERACTIVE SCRAPBOOK CARDS (3 CLICKABLE MODULES) */}
        {/* ================================================================== */}
        <section className="mb-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* -------------------------------------------------------------- */}
            {/* CARD 1: "The Sunflower Gift Box / Surprise" */}
            {/* -------------------------------------------------------------- */}
            <div className="relative group/gift flex flex-col items-center">
              {/* Animated hand-drawn bouncy scribble arrow & indicator pointing to the box */}
              <div className="absolute -top-12 -left-6 sm:-left-10 z-30 pointer-events-none flex items-center gap-1.5 animate-bounce" style={{ animationDuration: "2.4s" }}>
                <span className="font-hand text-sm sm:text-base font-extrabold text-rose-600 bg-white/95 px-2.5 py-1 rounded-full shadow-md border border-rose-300 -rotate-6">
                  Unwrap the Sunshine! 🎁
                </span>
                <ScribbleBouncyArrow className="w-12 h-10 text-rose-500 transform rotate-12" />
              </div>

              {/* Tilted washi tape strip holding down card */}
              <div className="absolute -top-3.5 z-20 transform -rotate-6 group-hover/gift:-rotate-3 transition-transform">
                <WashiTape color="yellow" className="w-24 h-6" />
              </div>

              {/* Tilted Cardboard Gift Box Frame with hover jiggle/bounce */}
              <div
                onClick={handleOpenSunflowerGiftModal}
                className="w-full max-w-sm bg-white p-3.5 pb-5 rounded-sm shadow-md hover:shadow-2xl border-2 border-slate-300 transform -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer relative group-hover/gift:border-amber-400"
              >
                {/* Gift Box Stage */}
                <div className="w-full aspect-4/3 bg-gradient-to-br from-[#FFFBEB] via-[#FED7AA]/40 to-[#FFE4E6]/50 rounded-xs overflow-hidden relative border border-amber-200/80 flex flex-col items-center justify-center p-2 group-hover/gift:brightness-105 transition-all">
                  {/* Floating handwritten tag */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1 font-hand text-xs font-bold text-amber-900 bg-white/95 px-2.5 py-0.5 rounded-full shadow-xs border border-amber-300 -rotate-3 z-10">
                    <span>For {recipientName} 🌻</span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-full font-mono-code flex items-center gap-1 z-10 border border-amber-400/40">
                    <Gift className="w-3 h-3 text-amber-400" />
                    <span>SURPRISE BOX</span>
                  </div>

                  {/* Hand-drawn Doodle Cardboard Gift Box with gentle hover bounce / jiggle */}
                  <div className="transform group-hover/gift:scale-110 group-hover/gift:-rotate-3 transition-transform duration-300 drop-shadow-md mt-1 animate-pulse">
                    <DoodleCardboardGiftBox recipient={recipientName} className="w-36 h-36 sm:w-44 sm:h-44" />
                  </div>
                </div>

                {/* Handwritten Card Caption */}
                <div className="mt-3 px-1 text-center">
                  <span className="inline-block font-mono-code text-[11px] text-[#F43F5E] bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 font-bold hover:bg-rose-100 transition-colors shadow-2xs">
                    🎁 Tap to unwrap surprise box &rarr;
                  </span>
                </div>

                {/* Scribbled Doodle Heart at bottom corner */}
                <div className="absolute -bottom-2 -right-2 transform rotate-12">
                  <ScribbledHeartDoodle className="w-6 h-6" />
                </div>
              </div>

              {/* Hand-drawn arrow note */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 font-hand">
                <HandDrawnArrowDoodle className="w-8 h-4 transform -rotate-45" />
                <span>For {recipientName} 🌻 · Click to open!</span>
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* CARD 2: "Special Guest Voice Note" (On the Desk) */}
            {/* -------------------------------------------------------------- */}
            <div className="relative group flex flex-col items-center">
              {/* Tilted washi tape strip holding down Card 2 */}
              <div className="absolute -top-3.5 z-20 transform rotate-3 group-hover:rotate-1 transition-transform">
                <WashiTape color="pink" className="w-24 h-6" />
              </div>

              {/* Hand-drawn Cassette Tape Card with authentic scrapbook doodle styling */}
              <div
                onClick={handleOpenVoiceNoteModal}
                className="w-full max-w-sm bg-[#FFFDF7] p-4 pb-5 rounded-2xl shadow-md hover:shadow-2xl border-3 border-[#0F172A] transform rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer relative"
              >
                {/* Cassette Illustration */}
                <div className="relative p-2 bg-[#FFF9ED] rounded-xl border border-amber-200/80 shadow-inner group-hover:border-rose-300 transition-colors">
                  <HandDrawnCassetteDoodle isPlaying={isVoicePlaying} />
                </div>

                {/* Hand-drawn doodle play button CTA */}
                <div className="mt-4 flex items-center justify-center gap-2.5 py-2.5 px-4 bg-[#F43F5E] text-white rounded-xl shadow-[3px_3px_0px_#0F172A] font-hand text-lg font-bold group-hover:bg-[#E11D48] transition-colors border-2 border-slate-900">
                  <Play className="w-5 h-5 fill-current" />
                  <span>Click to Listen</span>
                </div>
              </div>

              {/* Messy handwritten label below as requested */}
              <div className="mt-3.5 flex items-center gap-1.5 text-sm text-slate-800 font-hand font-bold">
                <SparkleStarDoodle className="w-4 h-4 text-rose-500" />
                <span className="text-[#F43F5E] underline decoration-wavy decoration-rose-400">
                  A Secret Voice Note! 🎧
                </span>
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* CARD 3: "The Special Birthday Surprise" */}
            {/* -------------------------------------------------------------- */}
            <div className="relative group flex flex-col items-center">
              {/* Tilted washi tape strip */}
              <div className="absolute -top-3.5 z-20 transform -rotate-3 group-hover:rotate-0 transition-transform">
                <WashiTape color="blue" className="w-24 h-6" />
              </div>

              {/* Sealed Digital Envelope / Locked Project Folder */}
              <div
                onClick={handleOpenSurpriseModal}
                className="w-full max-w-sm bg-[#F0F9FF] p-5 rounded-xl shadow-md hover:shadow-2xl border-2 border-[#38BDF8] transform -rotate-2 hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Diagonal "TOP SECRET" Banner */}
                <div className="absolute -right-8 top-5 bg-[#F59E0B] text-slate-950 text-[10px] font-mono-code font-bold py-1 px-8 rotate-45 shadow-xs border-y border-amber-600">
                  CONFIDENTIAL
                </div>

                {/* Folder Header */}
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="w-5 h-5 text-[#0284C7]" />
                  <div>
                    <p className="font-mono-code text-xs font-bold text-slate-800">
                      Project_BirthdayApp_v1.0
                    </p>
                    <p className="text-[10px] text-sky-600 font-mono-code">Status: Ready to Deploy</p>
                  </div>
                </div>

                {/* Wax Seal / Interactive Stamp Graphic */}
                <div className="my-5 flex flex-col items-center justify-center p-4 bg-white/80 rounded-lg border border-sky-200 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#F43F5E] text-white flex items-center justify-center shadow-md border-2 border-dashed border-white transform group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7 text-amber-200 animate-spin" style={{ animationDuration: "6s" }} />
                  </div>
                  <p className="font-hand text-lg font-bold text-slate-900 mt-2">
                    Sealed Birthday Letter
                  </p>
                  <p className="text-xs text-slate-500 font-script">
                    Tap to break seal & release confetti!
                  </p>
                </div>

                {/* Unlock CTA */}
                <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#0284C7] text-white rounded-lg shadow-sm font-hand text-base font-bold group-hover:bg-[#0369A1] transition-colors">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Unwrap Special Surprise</span>
                </div>
              </div>

              {/* Hand-drawn note */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 font-hand">
                <ScribbledHeartDoodle className="w-4 h-4" />
                <span>Strictly open on birthday!</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CODER DESK EXTRAS: STICKY NOTES & MISMATCHED ALGORITHM */}
        {/* ================================================================== */}
        <section className="mb-16 bg-[#FFFBEB]/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 relative shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-amber-200 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-600" />
                <h3 className="font-hand text-2xl font-bold text-slate-900">
                  Delhi Hackathon Desk Pins & Notes
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-mono-code mt-0.5">
                Real sticky notes from the project war room
              </p>
            </div>
            <button
              onClick={() => setShowAddSticky(!showAddSticky)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F59E0B] text-slate-950 font-hand font-bold text-sm rounded-lg hover:bg-amber-400 shadow-xs transition-colors self-start sm:self-auto"
            >
              <span>+ Pin Your Own Wish</span>
            </button>
          </div>

          {/* Add Sticky Note Drawer */}
          {showAddSticky && (
            <form
              onSubmit={handleAddSticky}
              className="mb-8 p-4 bg-white rounded-xl border-2 border-amber-300 shadow-md max-w-lg mx-auto"
            >
              <h4 className="font-hand text-base font-bold text-slate-900 mb-2">
                Pin a quick message to the desk:
              </h4>
              <textarea
                value={newStickyText}
                onChange={(e) => setNewStickyText(e.target.value)}
                placeholder="Write a sweet birthday wish or campus coder joke..."
                className="w-full text-sm p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-hand"
                rows={3}
                required
              />
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={newStickyAuthor}
                  onChange={(e) => setNewStickyAuthor(e.target.value)}
                  placeholder="Your Name (e.g. Ashish, Anmol)"
                  className="flex-1 text-xs p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F43F5E] text-white rounded-md text-xs font-bold hover:bg-rose-600 transition-colors"
                >
                  Post Note
                </button>
              </div>
            </form>
          )}

          {/* Sticky Notes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stickyNotes.map((note) => (
              <div
                key={note.id}
                className={`p-5 rounded-md shadow-md ${note.color} ${note.rotate} hover:rotate-0 transition-transform duration-200 relative group/note`}
              >
                {/* Washi Tape on sticky note */}
                <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2">
                  <WashiTape color={note.tape} className="w-16 h-4" />
                </div>

                <p className="font-hand text-base leading-relaxed whitespace-pre-line mt-1">
                  {note.text}
                </p>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-mono-code opacity-80">
                  <span>— {note.author}</span>
                  <Heart className="w-3.5 h-3.5 fill-current ml-1 text-rose-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Mismatched Campus Match Algorithm Code Snippet */}
          <div className="mt-8 bg-[#0F172A] text-slate-100 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 text-xs font-mono-code">
              <div className="flex items-center gap-2 text-amber-400">
                <Code2 className="w-4 h-4" />
                <span className="font-semibold">campus_match_algorithm.ts</span>
                <span className="hidden sm:inline-flex bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px]">
                  TypeScript
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden md:inline text-emerald-400 text-[11px]">
                  Compiled without errors ✓
                </span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(customCode);
                    setCodeCopied(true);
                    setTimeout(() => setCodeCopied(false), 2000);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] cursor-pointer border border-slate-700"
                  title="Copy code"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{codeCopied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            <pre className="font-mono-code text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed whitespace-pre-wrap selection:bg-amber-500/30">
              <code>{customCode}</code>
            </pre>
          </div>
        </section>

        {/* ================================================================== */}
        {/* FOOTER */}
        {/* ================================================================== */}
        <footer className="text-center pt-8 border-t border-slate-300/80 text-slate-600">
          <div className="flex items-center justify-center gap-2 mb-2 font-hand text-lg">
            <span>Made with cold coffee & code for</span>
            <span className="font-bold text-[#F43F5E]">{recipientName}</span>
            <CoffeeCupDoodle className="w-6 h-6 inline" />
          </div>
          <p className="text-xs text-slate-500 font-mono-code">
            Inspired by Netflix’s Mismatched · Happy Birthday!
          </p>
        </footer>
      </main>

      {/* ==================================================================== */}
      {/* MODAL 1: THE SUNFLOWER GIFT BOX SURPRISE (KOREAN BIRTHDAY POP-UP) */}
      {/* ==================================================================== */}
      {activeModal === "polaroid" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFDF7] w-full max-w-xl rounded-3xl shadow-2xl p-5 sm:p-7 border-3 border-amber-400 relative animate-in zoom-in-95 duration-200 max-h-[94vh] overflow-y-auto"
            style={{
              backgroundImage: "radial-gradient(#FDE68A 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-30 p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-full shadow-md border border-slate-200 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Washi tape over modal */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
              <WashiTape color="yellow" className="w-32 h-7" />
            </div>

            {/* Headline and Subtitle */}
            <div className="text-center mt-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-mono-code font-bold border border-amber-300">
                <span>🎁</span>
                <span>SUNFLOWER GIFT BOX UNWRAPPED</span>
              </div>
            </div>

            {/* The Open-Box Animation & Sunflower Bouquet Pop-Up Stage */}
            <div className="w-full bg-gradient-to-b from-[#FFFBEB] via-[#FEF3C7]/40 to-[#FFE4E6]/50 rounded-2xl p-3 sm:p-4 border-2 border-amber-300/80 shadow-inner relative overflow-hidden flex flex-col items-center justify-center min-h-[360px] sm:min-h-[440px]">
              {/* The Sunflower Bouquet Illustration */}
              <div
                className={`w-full max-w-md flex items-center justify-center transform transition-all duration-700 ease-out z-10 ${
                  isBoxPopped
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-6 scale-95 opacity-0"
                }`}
              >
                <div className="w-full h-84 sm:h-[420px] flex items-center justify-center drop-shadow-2xl">
                  <SunflowerBouquet
                    recipient={recipientName}
                    styleVariant={bouquetStyle}
                    className="w-full h-full max-h-[420px]"
                  />
                </div>
              </div>

              {/* The Dedicated Florist Note Card: "flowers from the person who annoys you sometimes" */}
              <div className="relative z-30 mt-3 max-w-sm w-full bg-[#FFFDF7] p-3 sm:p-3.5 rounded-xl shadow-md border-2 border-amber-300 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="absolute -top-2.5 left-6">
                  <WashiTape color="pink" className="w-16 h-4" />
                </div>
                <div className="flex items-start gap-2.5 pt-0.5">
                  <span className="text-xl sm:text-2xl select-none">💌</span>
                  <div className="flex-1">
                    <p className="font-hand text-base sm:text-lg font-bold text-amber-950 leading-snug">
                      “flowers from the person who annoys you sometimes”
                    </p>
                    <div className="flex items-center justify-between text-xs text-amber-800 font-hand mt-1.5 pt-1.5 border-t border-amber-200">
                      <span className="font-semibold">For {recipientName} 🌻</span>
                      <span className="italic font-bold text-rose-600">— Ashish ☕😜</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Interactive Controls */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-amber-200">
              <button
                type="button"
                onClick={handleReplayBoxPop}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl font-hand text-sm font-bold shadow-xs transition-colors"
                title="Pop and unwrap the box again"
              >
                <RotateCw className="w-4 h-4" />
                <span>Unwrap Again! 🎁</span>
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-7 py-2.5 bg-[#F59E0B] hover:bg-amber-500 text-slate-950 rounded-xl font-hand text-base sm:text-lg font-extrabold shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Take them! 🌻</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 2: SPECIAL GUEST VOICE NOTE (The Reveal) */}
      {/* ==================================================================== */}
      {activeModal === "voiceNote" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Torn Notebook Paper / Digital Sticky Note Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFDF8] bg-notebook-grid w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-7 border-3 border-[#0F172A] relative animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto transform -rotate-1"
          >
            {/* Colorful washi tape pinning sticky note to screen */}
            <div className="absolute -top-3 left-8 transform -rotate-6 z-20">
              <WashiTape color="pink" className="w-24 h-6" />
            </div>
            <div className="absolute -top-3 right-12 transform rotate-6 z-20">
              <WashiTape color="yellow" className="w-20 h-5" />
            </div>

            {/* Sketched 'X' Close Button in Top Right */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-30 p-2 text-slate-800 hover:text-rose-600 bg-white hover:bg-slate-50 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A] hover:rotate-12 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* The Header: "SURPRISE GUEST!" in playful, bold, handwritten hot pink/charcoal font */}
            <div className="text-center pt-2 mb-4">
              <h2 className="font-hand text-3xl sm:text-4xl font-extrabold text-[#F43F5E] tracking-wide -rotate-1">
                SURPRISE GUEST!
              </h2>
              <p className="font-hand text-sm sm:text-base text-slate-600 mt-1">
                A secret voice message recorded specially for {recipientName} 🎧✨
              </p>
            </div>

            {/* The Photo: Authentic Polaroid Photo centered with doodle tape at corner */}
            <div className="relative my-4 flex justify-center">
              {/* Doodle tape holding Polaroid corner */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-12 z-20 transform -rotate-12">
                <WashiTape color="blue" className="w-20 h-5" />
              </div>

              {/* Authentic Polaroid Frame: thick white border, tilted, drop shadow */}
              <div className="bg-white p-3 pb-7 rounded-xs shadow-xl border border-slate-300/80 transform rotate-1 hover:rotate-0 transition-transform duration-300 w-64 text-center">
                <div className="w-full aspect-square bg-slate-100 rounded-xs overflow-hidden border border-slate-200 relative group">
                  <img
                    src={voiceNoteImageSrc || SPECIAL_PHOTO_URL}
                    alt="Special Guest · Shubman Gill"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "./images/special-birthday-photo.jpg";
                    }}
                  />
                  {/* Camera icon to upload/change photo */}
                  <label
                    className="absolute bottom-1.5 right-1.5 bg-black/60 hover:bg-black text-white p-1.5 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Change picture"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const result = event.target?.result as string;
                            setVoiceNoteImageSrc(result);
                            try {
                              localStorage.setItem("chikki_voice_photo", result);
                            } catch {
                              // ignore
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
                {/* Polaroid Chin Handwritten Caption */}
                <p className="font-hand text-sm font-bold text-slate-800 mt-2.5 tracking-wide">
                  Special Guest · Shubman Gill 🌟
                </p>
              </div>
            </div>

            {/* The Voice Note Button: Hand-drawn sketch style with soft pastel background */}
            <div className="my-5 text-center">
              <button
                type="button"
                onClick={togglePlayVoiceNote}
                className={`w-full py-3.5 px-6 rounded-2xl border-3 border-slate-900 shadow-[4px_4px_0px_#0F172A] hover:shadow-[2px_2px_0px_#0F172A] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3 cursor-pointer group select-none ${
                  isVoicePlaying
                    ? "bg-[#FFE4E6] text-[#E11D48]"
                    : "bg-[#FEF08A] hover:bg-[#FDE047] text-slate-900"
                }`}
              >
                {isVoicePlaying ? (
                  <>
                    {/* Animated Waveform Indicator */}
                    <div className="flex items-center gap-1 h-5">
                      {[10, 18, 24, 14, 26, 16, 22, 12].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#E11D48] rounded-full animate-pulse"
                          style={{
                            height: `${h}px`,
                            animationDuration: `${0.35 + (i % 3) * 0.15}s`
                          }}
                        />
                      ))}
                    </div>
                    <span className="font-hand text-xl font-bold tracking-wide">
                      Playing Secret Voice Message...
                    </span>
                    <Pause className="w-5 h-5 fill-current ml-0.5" />
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 fill-current text-slate-900 group-hover:scale-110 transition-transform" />
                    <span className="font-hand text-xl font-bold tracking-wide">
                      Play Secret Voice Message
                    </span>
                  </>
                )}
              </button>

              <p className="font-mono-code text-[11px] text-slate-500 mt-2">
                {isVoicePlaying
                  ? "Background music ducked to 8% · Click to pause"
                  : "Ducks background music for a cinematic voiceover"}
              </p>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between text-xs font-hand text-slate-500">
              <span>Recorded with warm wishes & cold coffee ✨</span>
              <button
                type="button"
                onClick={handleCloseModal}
                className="font-bold text-rose-600 hover:text-rose-700 underline underline-offset-2"
              >
                Close note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 3: THE SPECIAL BIRTHDAY SURPRISE */}
      {/* ==================================================================== */}
      {activeModal === "surprise" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7EE] w-full max-w-xl rounded-2xl shadow-2xl p-6 sm:p-8 border-3 border-amber-400 relative animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-full shadow-xs transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Washi tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <WashiTape color="blue" className="w-32 h-6" />
            </div>

            <div className="text-center mb-4">
              <span className="font-mono-code text-xs bg-amber-200 text-amber-900 px-3 py-1 rounded-full font-bold">
                🎉 CONFIDENTIAL SURPRISE UNWRAPPED!
              </span>
            </div>

            {/* Interactive Candle Blow Experience */}
            <div className="my-5 bg-white p-4 rounded-xl border border-amber-200 shadow-xs flex flex-col items-center justify-center text-center">
              <div
                onClick={handleBlowCandle}
                className="cursor-pointer group flex flex-col items-center p-2 rounded-lg hover:bg-amber-50 transition-colors"
                title="Click to blow out candle!"
              >
                {/* Flame or Sparkle */}
                {!isCandleBlown ? (
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-8 bg-gradient-to-t from-amber-500 to-rose-500 rounded-full blur-[1px] animate-bounce group-hover:scale-125 transition-transform relative">
                      <div className="w-2 h-4 bg-white rounded-full mx-auto mt-2" />
                    </div>
                    {/* Wick */}
                    <div className="w-0.5 h-3 bg-slate-800" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-1">
                    <Sparkles className="w-8 h-8 text-amber-500 animate-spin" />
                    <span className="font-mono-code text-[11px] text-emerald-600 font-bold mt-1">
                      WISH GRANTED! ✨
                    </span>
                  </div>
                )}

                {/* Cake/Candle Body */}
                <div className="w-16 h-8 bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300 rounded-t-lg border-2 border-slate-800 flex items-center justify-center">
                  <span className="text-[10px] font-mono-code font-bold">🎂 CAKE</span>
                </div>

                <p className="font-hand text-sm font-bold text-slate-700 mt-2">
                  {!isCandleBlown ? "Click the flame to blow the candle! 🕯️" : "The flame is blown! Make a silent wish! 🎉"}
                </p>
              </div>
            </div>

            {/* 👁️🗨️ Devil Eye Protection Bracelet Presentation Showcase */}
            <div className="bg-gradient-to-b from-[#0B1329] via-[#0F172A] to-[#1E293B] p-4 sm:p-5 rounded-2xl border-2 border-amber-400 shadow-xl my-4 text-white relative overflow-hidden group">
              {/* Subtle velvet cushion texture overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              {/* Top Banner Tag */}
              <div className="flex items-center justify-between mb-2 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-mono-code font-bold border border-amber-400/40">
                  <span className="text-sm">👁️🗨️</span>
                  <span>SURPRISE GIFT · DEVIL EYE BRACELET</span>
                </div>
                <span className="font-hand text-xs text-sky-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "4s" }} />
                  Charged with Good Vibes
                </span>
              </div>

              {/* The Devil Eye Bracelet SVG Display */}
              <div className="w-full h-52 sm:h-64 flex items-center justify-center relative my-1 transform group-hover:scale-[1.02] transition-transform duration-300">
                <DevilEyeBracelet className="w-full h-full max-w-lg drop-shadow-[0_10px_24px_rgba(56,189,248,0.3)]" />
              </div>

              {/* Jewelry Description Card */}
              <div className="mt-2 text-center bg-slate-900/80 backdrop-blur-xs p-3.5 rounded-xl border border-sky-500/30 relative z-10">
                <h4 className="font-hand text-xl sm:text-2xl font-bold text-amber-300 flex items-center justify-center gap-2">
                  <span>🧿</span>
                  <span>Devil Eye Protection Bracelet</span>
                  <span>🧿</span>
                </h4>
                <div className="mt-2.5 inline-flex items-center gap-2 text-[11px] font-mono-code text-slate-300 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Blessing: Infinite Luck &bull; Protection: 100% &bull; Buri Nazar: Blocked</span>
                </div>
              </div>
            </div>

            {/* Personal Birthday Letter */}
            <div className="bg-[#FFFBEB] p-5 rounded-xl border border-amber-300 text-left relative shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-code text-[11px] text-amber-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>💌</span>
                  <span>Personal Birthday Letter:</span>
                </span>
                <span className="text-xs font-hand text-amber-700 font-semibold">
                  For {recipientName}
                </span>
              </div>

              <p className="font-hand text-base sm:text-lg text-slate-800 whitespace-pre-line leading-relaxed mt-2">
                {surpriseNote}
              </p>

              <div className="mt-4 pt-3 border-t border-amber-200 flex items-center justify-between">
                <span className="text-xs font-hand text-slate-500 italic">
                  With all our warmth, smiles & code ✨
                </span>

                {/* Like Button */}
                <button
                  onClick={() => {
                    if (!hasLikedWish) {
                      setWishLikes((prev) => prev + 1);
                      setHasLikedWish(true);
                      triggerConfetti();
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code transition-colors ${
                    hasLikedWish
                      ? "bg-rose-100 text-rose-700 font-bold"
                      : "bg-white text-slate-600 hover:text-rose-600 border border-slate-200"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLikedWish ? "fill-current text-rose-500" : ""}`} />
                  <span>{wishLikes} Hearts</span>
                </button>
              </div>
            </div>

            {/* More Confetti Button */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={triggerConfetti}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#F43F5E] hover:bg-[#E11D48] text-white rounded-xl font-hand text-base font-bold shadow-md hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Launch More Confetti!</span>
              </button>

              <button
                onClick={handleCloseModal}
                className="px-4 py-2.5 bg-slate-900 text-white rounded-xl font-hand text-base font-bold hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
