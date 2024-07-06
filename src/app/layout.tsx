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
      <body>{children}</body>
    </html>
  );
}
