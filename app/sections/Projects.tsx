import { projects } from "@/datas/data";
import Card from "../components/Card";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-28 pb-48 lg:pt-48"
      id="projects"
    >
      <header className="flex flex-row gap-4 justify-center lg:justify-end items-center overflow-visible">
        {/* mobile left line */}
        <div className="w-[5%] lg:hidden border-b border-gray-200 dark:border-gray-700"></div>

        <span className="text-2xl sm:text-3xl font-bold font-display">
          Things I&apos;ve Built
        </span>

        <span className="hidden lg:block text-[5.5rem] font-black text-secondary-color-3 opacity-[0.12] dark:opacity-[0.25] leading-none pointer-events-none select-none">03</span>

        {/* mobile right line */}
        <div className="w-[5%] lg:hidden border-b border-gray-200 dark:border-gray-700"></div>
      </header>
      <div className="flex flex-col gap-24 mt-10">
        {projects
          .slice(0, 9)
          .map(
            (project, id) =>
              project && (
                <Card
                  key={id}
                  id={id}
                  name={project?.name}
                  description={project?.description}
                  image={project?.image}
                  githubLink={project?.githubLink}
                  loomLink={project?.loomLink}
                  liveLink={project?.liveLink}
                  stacks={project?.stacks}
                  type={project?.type}
                />
              ),
          )}
        <div className="flex justify-center items-center">
          <Button asChild variant={"link"}>
            <Link
              href={"/projects"}
              className=" flex font-medium border-b border-transparent  transition-all "
            >
              <span className="">View All Projects</span>

              <span>
                <IoArrowForward size={20} className=" text-secondary-color-3" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Projects;
