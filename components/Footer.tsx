import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#222] text-white text-center py-2">
      <p className="text-xs">
        Made with ❤️ by{" "}
        <a
          href="https://www.taherahmedashraf.com/"
          target="_blank"
          className="text-[#6C63FF]"
        >
          Taher Ahmed Ashraf
        </a>
        {" | "}
        Follow me on{" "}
        <a
          href="https://www.facebook.com/taherahmedashraf1"
          target="_blank"
          className="text-[#6C63FF]"
        >
          Facebook
        </a>
      </p>
    </div>
  );
}
