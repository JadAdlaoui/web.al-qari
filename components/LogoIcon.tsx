export default function LogoIcon({ size = 56 }: { size?: number }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <circle cx="28" cy="28" r="28" fill="#0C3B2E" />
      {/* Left page */}
      <path d="M14 18C14 16.9 14.9 16 16 16L26 16C27.1 16 28 16.9 28 18L28 38C28 38 24 36 20 37C16 38 14 38 14 38Z" fill="#C5942A" opacity="0.9" />
      {/* Right page */}
      <path d="M42 18C42 16.9 41.1 16 40 16L30 16C28.9 16 28 16.9 28 18L28 38C28 38 32 36 36 37C40 38 42 38 42 38Z" fill="#C5942A" opacity="0.9" />
      {/* Spine */}
      <rect x="26.5" y="15" width="3" height="24" rx="1.5" fill="#FFF8EB" />
      {/* Lines left */}
      <line x1="17" y1="21" x2="25" y2="21" stroke="#FFF8EB" strokeWidth="1" opacity="0.6" />
      <line x1="17" y1="24" x2="25" y2="24" stroke="#FFF8EB" strokeWidth="1" opacity="0.6" />
      <line x1="17" y1="27" x2="25" y2="27" stroke="#FFF8EB" strokeWidth="1" opacity="0.6" />
      {/* Lines right */}
      <line x1="31" y1="21" x2="39" y2="21" stroke="#FFF8EB" strokeWidth="1" opacity="0.6" />
      <line x1="31" y1="24" x2="39" y2="24" stroke="#FFF8EB" strokeWidth="1" opacity="0.6" />
      <line x1="31" y1="27" x2="39" y2="27" stroke="#FFF8EB" strokeWidth="1" opacity="0.6" />
      {/* Mic */}
      <rect x="25" y="39" width="6" height="9" rx="3" fill="#C5942A" />
      <path d="M22 44C22 47.3 24.7 50 28 50C31.3 50 34 47.3 34 44" stroke="#C5942A" strokeWidth="1.5" fill="none" />
      <line x1="28" y1="50" x2="28" y2="53" stroke="#C5942A" strokeWidth="1.5" />
      <line x1="25" y1="53" x2="31" y2="53" stroke="#C5942A" strokeWidth="1.5" />
    </svg>
  );
}
