import { ImageResponse } from "next/og";

import { siteConfig } from "@/src/data/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, rgba(15,17,21,1) 0%, rgba(31,36,45,1) 52%, rgba(241,155,97,1) 140%)",
          color: "#f5f2ed"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28
          }}
        >
          <span>&lt;D/&gt;</span>
          <span>Frontend Engineer</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700, maxWidth: 900 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, maxWidth: 850, color: "#d9cfc4" }}>
            High-performance interfaces, thoughtful motion, and strong product execution.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24 }}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>SEO</span>
          <span>Motion</span>
        </div>
      </div>
    ),
    size
  );
}
