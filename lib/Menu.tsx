import type { IOption } from "./Dropdown";
import CloseIcon from "./CloseIcon";
import { useMemo, useState } from "react";
import Option from "./Option";
import SearchIcon from "./SearchIcon";

interface Props {
  value?: string;
  options: IOption[];
  onClick: (value: string) => void;
  withSearch?: boolean;
  renderOption?: (option: IOption) => React.ReactNode;
}

const Menu: React.FC<Props> = ({
  value,
  options,
  onClick,
  withSearch,
  renderOption,
}) => {
  const [searchStr, setSearchStr] = useState("");

  const searchResults = useMemo(() => {
    return options.filter((option) => {
      if (!searchStr) return true;

      return option.label.toLowerCase().includes(searchStr.toLowerCase());
    });
  }, [searchStr]);

  return (
    <div
      className="absolute w-full h-fit left-0 top-full mt-2 border border-zinc-300 rounded-sm"
      onClick={(ev) => ev.stopPropagation()}
    >
      {withSearch && (
        <div className="flex items-center gap-4 px-4 border-b border-zinc-300">
          <SearchIcon />
          <input
            value={searchStr}
            onChange={(ev) => setSearchStr(ev.target.value)}
            className="py-4 h-full grow-1 outline-none"
          />
          {searchStr && (
            <CloseIcon onClick={() => setSearchStr("")} contained />
          )}
        </div>
      )}
      {(searchResults.length < 1 ? options : searchResults).map((option) => (
        <Option
          key={option.value}
          onClick={() => onClick(option.value)}
          selected={(value || "")
            .toLowerCase()
            .split(",")
            .includes(option.value.toLowerCase())}
          searchStr={searchStr}
        >
          {renderOption ? renderOption(option) : option.label}
        </Option>
      ))}
    </div>
  );
};

export default Menu;
