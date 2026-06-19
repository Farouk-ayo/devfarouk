import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { SiLoom } from "react-icons/si";

interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  loomLink?: string;
  liveLink?: string;
  githubLink?: string;
  stacks: Array<string>;
}

const Card = ({
  id,
  name,
  type,
  description,
  image,
  loomLink,
  liveLink,
  githubLink,
  stacks,
}: CardProps) => {
  const isEven = id % 2 === 0;
  return (
    <section
      className={`flex flex-col lg:flex-row w-full md:px-12 items-center px-4 sm:px-6 group `}
      data-aos={`fade-up`}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div
        className={`w-full sm:w-[90%] lg:w-[60%] shadow ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {liveLink ? (
          <Link
            href={liveLink}
            className="w-full block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt={`${name} Image`}
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-[370px] lg:grayscale-[50%] lg:group-hover:grayscale-0 transition-all lg:object-left rounded-t-lg lg:rounded-lg shadow-lg"
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={`${name} Image`}
            className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-[370px] lg:grayscale-[50%] lg:group-hover:grayscale-0 transition-all lg:object-left rounded-t-lg lg:rounded-lg shadow-lg"
          />
        )}
      </div>
      <div
        className={`relative z-10 p-4 lg:p-0 w-full sm:w-[90%] lg:w-[40%] lg:bg-transparent dark:lg:bg-transparent lg:rounded-none rounded-b-lg bg-white dark:bg-gray-900 shadow lg:shadow-none ${
          isEven ? "lg:order-2 lg:text-right" : "lg:order-1 lg:text-left"
        }`}
      >
        <h6 className="text-xs font-bold text-secondary-color-3 font-mono tracking-widest uppercase mb-1">{type}</h6>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h1>
        <div
          className={`px-0 py-0 lg:px-5 lg:py-6 lg:bg-white dark:lg:bg-gray-900 lg:shadow text-gray-700 dark:text-gray-200 text-sm lg:text-base mr-0 ml-0 ${
            isEven ? "lg:-ml-16" : "lg:-mr-16"
          } mt-2 rounded-none relative lg:border-t-2 lg:border-secondary-color-3`}
        >
          {description}
        </div>
        <div className="px-0 lg:text-left mt-3 lg:px-2 flex gap-x-3 gap-y-1 flex-wrap font-mono">
          {stacks.map((stack, index) => (
            <span key={index} className="text-xs font-bold text-gray-500 dark:text-gray-400 before:content-['·'] before:mr-1.5 before:text-secondary-color-3">{stack}</span>
          ))}
        </div>
        <div
          className={`flex gap-2 items-center justify-start mt-4 ${
            isEven ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          {loomLink && (
            <Link
              href={loomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-gray-200 dark:border-gray-700 hover:border-secondary-color-3 hover:text-secondary-color-3 dark:hover:border-secondary-color-3 transition-all text-gray-500 dark:text-gray-400"
              title="Watch Loom Demo"
            >
              <SiLoom size={15} />
            </Link>
          )}

          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-gray-200 dark:border-gray-700 hover:border-secondary-color-3 hover:text-secondary-color-3 dark:hover:border-secondary-color-3 transition-all text-gray-500 dark:text-gray-400"
              title="View Live"
            >
              <FiExternalLink size={15} />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-gray-200 dark:border-gray-700 hover:border-secondary-color-3 hover:text-secondary-color-3 dark:hover:border-secondary-color-3 transition-all text-gray-500 dark:text-gray-400"
              title="View on GitHub"
            >
              <FiGithub size={15} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
