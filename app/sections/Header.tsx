import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-40 lg:mt-0 items-center  bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] min-h-screen  ">
      <section
        className=" w-full  xl:w-[70%] relative pb-10   flex flex-col gap-4 lg:w-[70%]"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2">
          <span className=" font-medium text-lg">Hi, I'm</span>
          <h1 className=" font-bold  text-6xl md:text-7xl font-display">
            Farouk Mustapha
          </h1>
        </div>
        <div className="relative">
          <Badge
            variant={"secondary"}
            className=" font-display text-bases sm:text-xl"
          >
            A Software Developer!
          </Badge>
          <p className="mt-2">
            I specialize in building responsive Web and Mobile Apps using
            <span className="font-semibold"> React</span>,{" "}
            <span className="font-semibold">React Native</span>,{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">JavaScript</span>,{" "}
            <span className="font-semibold">TypeScript</span>,{" "}
            <span className="font-semibold">WebGL</span>,{" "}
            <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>, and other
            modern tools — turning designs into delightful user experiences.
          </p>
        </div>
        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:your.mustaphafarouk41@gmail.com"}
            className="flex items-center border-black justify-center gap-3 px-5 py-2  font-bold w-max  border-[1px]  mt-5 "
          >
            Get in Touch
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />{" "}
          </Link>
        </Button>
      </section>
      <section
        className=" w-full justify-center md:justify-center relative flex lg:justify-end items-center xl:w-[30%] h-[25rem] bg-center lg:bg-right bg-contain bg-no-repeat lg:w-[30%] group"
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
        data-aos="zoom-in"
      >
        <div className="relative h-[18rem] w-[18rem] lg:h-[17rem] lg:w-[17rem]">
          <Image
            alt="profile image"
            src={"/profile.webp"}
            className=" grayscale-[70%]  transition-all "
            style={{
              borderRadius: "50%",
              height: "100%",
              width: "100%",
            }}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </section>
    </header>
  );
};
export default Header;
