import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon — mirrors the pulse mark in components/ui/Logo.tsx
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
          borderRadius: 8,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <path
            d="M8 21.5h5.2l3-7.4 4.4 12.6 3.1-7.6 2.1 2.4H32"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
