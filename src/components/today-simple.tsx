import Image from "next/image";
import UserAvatarIcon from "@/components/icons/user-avatar-icon";
import { useState, useRef, useEffect } from "react";

export default function NavigationBar() {
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
      <div className="flex justify-center">
        <p> 오늘은 내 생일!</p>
      </div>

      <div className="flex justify-between">
        <p> 🥰</p>
      </div>
      <Image
        src="/favicon.png"
        alt="logo"
        width={600}
        height={400}
        className="max-w-[600px] h-[400px]"
      />
    </div>
  );
}
