import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevFarouk 👨‍💻",
  description: "Works || DevFarouk",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
