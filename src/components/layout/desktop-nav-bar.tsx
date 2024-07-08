import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <div className="flex justify-between py-[12px] border-b-[1.5px] border-solid px-[24px]">
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
      <Link href="/notifications">notification icon</Link>
      <Link href="/chats">chats icon</Link>
      <Link href="/settings">settings</Link>
    </div>
  );
}
