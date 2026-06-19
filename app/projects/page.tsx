import { projects } from "@/datas/data";
import Card from "../components/Card";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col xl:mx-[10%] lg:mx-[7%] mx-0 md:mx-[7%] my-24 mt-24  py-8 gap-16">
      <div className=" flex items-center gap-2 sm:gap-8">
        <Link
          href={"/"}
          className="p-2 border border-gray-200 dark:border-gray-700 hover:border-secondary-color-3 hover:text-secondary-color-3 text-gray-600 dark:text-gray-400 rounded-sm transition-all flex items-center"
        >
          <IoMdArrowRoundBack size={20} />
        </Link>
        <h1 className="font-bold text-2xl sm:text-3xl font-display">Projects</h1>
      </div>
      {projects.map(
        (project, id) =>
          project && (
            <Card
              key={id}
              id={id}
              name={project?.name}
              description={project?.description}
              image={project?.image}
              liveLink={project?.liveLink}
              githubLink={project?.githubLink}
              stacks={project?.stacks}
              type={project?.type}
            />
          ),
      )}
    </div>
  );
}
