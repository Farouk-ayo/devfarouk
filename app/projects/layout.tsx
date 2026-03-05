import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevFarouk 👨‍💻",
  description: "Projects || DevFarouk",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
