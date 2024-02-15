"use client";
import { useEffect, useRef } from "react";
import { register, SwiperContainer } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import Swiper from "swiper/types/swiper-class";

register();

export default function SwiperComponent() {
  const swiperElRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    function onSwiperSlideChange(event: CustomEvent<[e: Swiper]>) {
      console.log("realIndex", event.detail[0].realIndex);
    }

    const ref = swiperElRef?.current;
    // swiper@v11.xから 「prefix `swiper` + swiper-element.d.ts内のcustomEvent名」を結合させたイベント名を指定する必要がある
    // @ts-ignore
    ref?.addEventListener("swiperslidechange", onSwiperSlideChange);
    return () => {
      // @ts-ignore
      ref?.removeEventListener("swiperslidechange", onSwiperSlideChange);
    };
  }, [swiperElRef]);

  return (
    <div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        autoplay-delay="4000"
        autoplay-disable-on-interaction="false"
        initial-slide="0"
        centered-slides="true"
        navigation-prev-el=".button-prev" // assign navigation class
        navigation-next-el=".button-next" // assign navigation class
        speed="500"
      >
        <swiper-slide key="1">1</swiper-slide>
        <swiper-slide key="2">2</swiper-slide>
      </swiper-container>

      {/* navigation */}
      <div className="button-prev absolute top-[3px] z-10 cursor-pointer flex justify-center left-2">
        {"<"}
      </div>
      <div className="button-next absolute top-[3px] z-10 cursor-pointer flex justify-center right-2">
        {">"}
      </div>
    </div>
  );
}
