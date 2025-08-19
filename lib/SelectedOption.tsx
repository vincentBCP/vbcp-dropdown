import CloseIcon from "./CloseIcon";

const SelectedOption: React.FC<{ children: any; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div
      className="min-h-[34px] shrink-0 max-w-full text-sm rounded-full py-1 px-3 flex items-center gap-2 bg-zinc-100"
      onClick={(ev) => ev.stopPropagation()}
    >
      {children}
      <CloseIcon onClick={onClose} />
    </div>
  );
};

export default SelectedOption;
