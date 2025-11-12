import { projects } from "@/datas/data";
import Card from "../components/Card";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Works = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-28 pb-48 lg:pt-48"
      id="works"
    >
      <header className="flex flex-row gap-4  justify-start lg:justify-end items-center font-b">
        <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
          <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
            03. Things I've Built
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
        </div>
      </header>
      <div className="flex flex-col gap-24 mt-10">
        {projects
          .slice(0, 5)
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
                  liveLink={project?.liveLink}
                  stacks={project?.stacks}
                  type={project?.type}
                />
              )
          )}
        <div className="flex justify-center items-center">
          <Button asChild variant={"link"}>
            <Link
              href={"/works"}
              className=" flex font-bold border-b border-transparent  transition-all "
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
export default Works;
