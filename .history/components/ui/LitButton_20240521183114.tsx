import React from "react";

const LitButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <div className="absolute inline-flex inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default LitButton;
