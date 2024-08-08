import NavigationBar from "@/components/layout/desktop-nav-bar";
import "@/app/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diary",
  description: "Diary site made by oganesson",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <NavigationBar />
        <div className="h-[48px]"></div>
        <div className="mx-auto max-w-[680px] desktop:max-w-[1128px]">
          {children}
        </div>
      </body>
    </html>
  );
}
