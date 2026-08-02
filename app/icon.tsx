import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

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
          background: "#42777C",
          borderRadius: "22%",
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "Helvetica, Arial, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Y
        </span>
      </div>
    ),
    { ...size }
  );
}
