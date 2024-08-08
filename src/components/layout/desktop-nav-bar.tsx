import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <div className="top-0 fixed flex justify-between bg-white px-[24px] py-[12px] border-b-[1.5px] border-solid w-[100dvw] h-[48px]">
      <Link className="flex items-center" href="/">
        <Image
          className="w-[24px] h-[24px]"
          src="/favicon.png"
          alt="logo"
          width={24}
          height={24}
        />
        <p className="ml-[12px]">ToDays</p>
      </Link>
      <div className="flex gap-[24px]">
        <Link href="/my-todays">My ToDays</Link>
        <Link href="/today">To Day</Link>
      </div>
      <div>
        <Link href="/notifications">notification icon</Link>
        <Link href="/chats">chats icon</Link>
        <Link href="/settings"> settings</Link>
      </div>
    </div>
  );
}
