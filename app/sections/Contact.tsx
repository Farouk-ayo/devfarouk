import { socialLinks } from "@/datas/data";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className="text-center w-full sm:w-[85%] m-auto pb-52 lg:py-52"
      id="contact"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-2 justify-center items-center w-full sm:w-[85%] m-auto">
        <div className="flex items-center gap-4 w-full max-w-sm mb-4">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary-color-3 shrink-0">Let&apos;s Connect</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <h2 className="text-lg sm:text-3xl text-gray-900 dark:text-white font-bold font-display">
          What next? Let&apos;s talk!
        </h2>
        <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 max-w-prose">
          I&apos;m currently open to new job opportunities. Contact me if you are
          interested in having me on your team, working on your project, seeking
          mentorship, or just want to say hello. Send an email to{" "}
          <Link
            href={"mailto:mustaphafarouk41@gmail.com"}
            className="text-secondary-color-3 font-semibold hover:underline"
          >
            mustaphafarouk41@gmail.com
          </Link>
          {" "}or click below.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"mailto:mustaphafarouk41@gmail.com"}
          className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 border border-secondary-color-3 bg-secondary-color-3 text-white hover:bg-primary-color hover:border-primary-color text-sm font-medium rounded-sm transition-all"
        >
          Send A Message
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={16}
            height={16}
          />
        </Link>
      </div>
      <ul className="flex flex-row justify-center gap-4 mt-10 items-center">
        {socialLinks.map((socialLink, id) => (
          <li key={id} className={`flex items-center cursor-pointer gap-5`}>
            <Link
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialLink.simpleIcon}
                alt={socialLink.name}
                height={20}
                width={20}
                className="transition-all duration-300 filter grayscale dark:grayscale-0 hover:grayscale-0 dark:filter dark:brightness-0 dark:invert hover:dark:brightness-100 hover:dark:invert-0"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Contact;
