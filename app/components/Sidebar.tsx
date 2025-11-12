import { socialLinks } from "@/datas/data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section
      className="fixed top-0 left-0 hidden md:inline-block w-[10%] h-full"
      data-aos="fade-right"
    >
      <ul className="flex flex-col justify-center items-center gap-10 h-full">
        {socialLinks.map((socialLink, id) => (
          <li
            key={id}
            className="relative flex items-center cursor-pointer gap-5"
          >
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

export default Sidebar;
