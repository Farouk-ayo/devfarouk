import Image from "next/image";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-24 items-center py-24 bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%]">
      <section className=" w-full  xl:w-[50%] relative pb-10   flex flex-col gap-4 lg:w-[60%]">
        <div className="flex flex-col gap-2">
          <span className=" font-medium text-lg">Hi, I'm</span>
          <h1 className=" font-semibold text-6xl">Farouk Mustapha</h1>
        </div>
        <div className="relative">
          <h2 className=" py-1 px-2 bg-secondary-color-3 text-white font-semibold w-max rounded-md text-xl">
            A Front-end Developer
          </h2>
          <h2 className="text-black text-3xl font-bold mt-4">
            I <span className=" text-secondary-color-3 ">D</span>
            <span className="text-black">esign</span> &{" "}
            <span className=" text-secondary-color-3 ">D</span>
            <span className="text-black">evelop</span> WebApps
          </h2>
          <p className="mt-2">
            I love turning designs and ideas into cool web experiences, and work
            closely with Product designers and backend developers to bring these
            ideas to life.
          </p>
        </div>
        <Link
          href={"mailto:your.mustaphafarouk41@gmail.com"}
          className="flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max  mt-5   border-[1px] hover:bg-[#FBEDDD]  transition-all border-black rounded-lg"
        >
          Get in Touch
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={25}
            height={25}
          />{" "}
        </Link>
      </section>
      <section
        className=" w-full justify-center md:justify-center relative flex lg:justify-end items-center xl:w-[50%] h-[25rem] bg-center lg:bg-right bg-contain bg-no-repeat lg:w-[40%]"
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
      >
        <div className="relative h-[18rem] w-[18rem] lg:h-[17rem] lg:w-[17rem]">
          <Image
            alt="profile image"
            src={"/profile.webp"}
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
