import { Icon } from "@/utils/types";

const HomeIcon = ({ fill = "#5A698F" }: Icon) => {
  const fillColor = fill === "#FFF" ? "fill-white" : `fill-[${fill}]`;

  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className=" group"
    >
      <path
        fill={fill}
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        className={`${fillColor} transition-all duration-400 ease-out group-hover:fill-red-500`}
      />
    </svg>
  );
};

export default HomeIcon;
