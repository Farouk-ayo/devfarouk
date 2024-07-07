import { projects } from "@/datas/data";
import Card from "../components/Card";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const Works = () => {
  return (
    <section className="flex flex-col px-40 py-12">
      <header className="flex flex-row gap-4 justify-end items-center font-semibold">
        <span className=" text-2xl">03. Things I've Built</span>
        <div className=" w-  ">
          <div className=" w-36 mr-auto border-b-[1px] border-b-border-color"></div>
        </div>
      </header>
      <div className="flex flex-col gap-24 mt-10">
        {projects
          .slice(0, 4)
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
        <Link
          href={"/works"}
          className="flex justify-center items-center text-black font-bold"
        >
          <span className="">View All Projects</span>

          <span>
            <IoArrowForward size={20} className=" text-secondary-color-3" />
          </span>
        </Link>
      </div>
    </section>
  );
};
export default Works;
