import Link from "next/link";

const Copyright = () => {
  return (
    <div className="  py-6  flex flex-col justify-center items-center font-medium text-base sm:text-lg border-t ">
      <p className=" text-center">
        Designed by
        <Link
          href={"https://github.com/Farouk-ayo/devfarouk"}
          className=" text-secondary-color-3   font-bold font-idgrotesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          devfarouk 👨‍💻
        </Link>{" "}
        (Inspirations from{" "}
        <Link
          href={"https://www.geekmaros.dev/"}
          className=" font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Geekmaros
        </Link>{" "}
        )
      </p>
      <div></div>
      <p className=" ">&copy; 2024 All rights reserved.</p>
    </div>
  );
};
export default Copyright;
