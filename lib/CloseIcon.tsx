import clsx from "clsx";

const CloseIcon: React.FC<{ onClick: () => void; contained?: boolean }> = ({
  onClick,
  contained,
}) => {
  return (
    <div
      className={clsx(
        "text-lg flex items-center justify-center h-4 w-4 rounded-full rotate-45 cursor-pointer",
        {
          "bg-zinc-400 text-white": contained,
          "border border-zinc-600 text-zinc-600": !contained,
        }
      )}
      onClick={onClick}
    >
      <span className="-mt-[2px]">&#43;</span>
    </div>
  );
};

export default CloseIcon;
