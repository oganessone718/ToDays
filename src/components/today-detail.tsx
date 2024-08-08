"use client";

import Image from "next/image";
import UserAvatarIcon from "@/components/icons/user-avatar-icon";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export default function NavigationBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(contentRef.current).lineHeight
      );
      const lines = contentRef.current.scrollHeight / lineHeight;
      if (lines > 2) {
        setIsOverflow(true);
        console.log("...?>");
      }
    }
  }, [isExpanded]);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     setHeight(contentRef.current.scrollHeight);
  //   }
  // }, [isExpanded]);

  return (
    <div className="flex flex-col gap-[12px] bg-white shadow-lg p-[20px] rounded-[12px] max-w-[680px] shrink">
      <div className="flex justify-between items-center border-b-[1px] border-b-slate-200 border-solid h-[56px]">
        <div className="flex">
          <div className="rounded-full w-[48px] h-[48px] overflow-hidden">
            <UserAvatarIcon />
          </div>

          {/* <Image
            src="/favicon.png"
            alt="logo"
            width={48}
            height={48}
            className="mr-[12px] w-[48px] h-[48px]"
          /> */}

          <div className="flex-col">
            <p>유저이름</p>
            <p>@username</p>
          </div>
        </div>
        <div className="flex gap-[12px]">
          <p> 일부 공개 </p>
          <p> 아이콘 </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>날짜: 2024년 07월 18일 (목)</p>
        <p>기분: 🥰</p>
      </div>
      <Image
        src="/favicon.png"
        alt="logo"
        width={600}
        height={400}
        className="max-w-[600px] h-[400px]"
      />
      <div className="flex justify-between">
        <p>제목: 오늘은 내 생일!</p>
        {isOverflow && "자세히 보기"}
      </div>

      <p className={clsx({ "line-clamp-2": !isExpanded })} ref={contentRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod
        eius non dolorum cumque, architecto atque optio, officia maxime tempora
        quia ratione? Ducimus ad dolores, voluptatem aliquam error doloribus
        repellat!
      </p>

      <div className="flex justify-between bg-red-200">
        <div className="flex">
          <div>이 모 티 콘 반 응</div>
          <p>채팅 보내기...</p>
        </div>
        <div>보내기아이콘</div>
      </div>
    </div>
  );
}
