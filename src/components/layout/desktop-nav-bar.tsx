import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <div className="flex justify-between py-[12px] border-b-[1.5px] border-solid px-[24px]">
      <Link className="flex items-center" href="/">
        <Image
          className="w-[16px] h-[16px]"
          src="/favicon.png"
          alt="logo"
          width={16}
          height={16}
        />
        <p className="ml-[2px]">Diary</p>
      </Link>
      <div className="flex gap-[24px]">
        <Link href="/my-diary">My Diary</Link>
        <Link href="/chats">Chats</Link>
        <Link href="/friends">Friends</Link>
      </div>
      <Link href="/sign-in">Sign in</Link>
    </div>
  );
}
