import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
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
          background:
            "radial-gradient(circle at top, rgba(241,155,97,0.9), rgba(15,17,21,1) 70%)",
          color: "white",
          fontSize: 180,
          fontWeight: 700
        }}
      >
        DK
      </div>
    ),
    size
  );
}
