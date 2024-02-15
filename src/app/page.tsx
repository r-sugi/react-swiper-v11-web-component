"use client";

import SwiperComponent from "./swipter";

export default function Home() {
  if (typeof window === "undefined") {
    return <div>Hello</div>;
  }
  return <SwiperComponent />;
}
