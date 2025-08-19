import clsx from "clsx";

const Chevron: React.FC<{ down?: boolean }> = ({ down }) => {
  return (
    <div className="w-fit h-fit absolute top-4 right-3">
      <div
        className={clsx("w-2 h-2", {
          "-mb-1 border-t-1 border-r-1 -rotate-45": !down,
          "-mt-1 border-b-1 border-r-1 rotate-45": down,
        })}
      />
    </div>
  );
};

export default Chevron;
