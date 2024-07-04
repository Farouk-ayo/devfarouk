import { socialLinks } from "@/datas/data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="fixed top-0  left-0 w-[10%] h-full">
      <ul className="flex flex-col justify-center items-center gap-10 h-full">
        {socialLinks.map((socialLink, id) => (
          <li
            key={id}
            className={`grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5`}
          >
            <Link href={socialLink.link}>
              <img
                src={socialLink.simpleIcon}
                alt={socialLink.name}
                height={20}
                width={20}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Sidebar;
