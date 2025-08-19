import { useEffect, useState } from "react";
import Menu from "./Menu";
import Chevron from "./Chevron";
import clsx from "clsx";
import SelectedOption from "./SelectedOption";

export interface IOption {
  value: string;
  label: string;
}

export interface Props {
  /** label */
  label: string;
  /** options */
  options: IOption[];
  /** value */
  value?: string;
  /** onChange */
  onChange: (value?: string) => void;
  /** multiple */
  multiple?: boolean;
  /** withSearch */
  withSearch?: boolean;
  /** renderOption */
  renderOption?: (option: IOption) => React.ReactNode;
}

const Dropdown = ({
  label,
  options,
  value,
  onChange,
  multiple,
  withSearch,
  renderOption,
}: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (ev: any) => {
      const target = ev.target;

      if (target.classList.contains("vbcp-dropdown")) return;

      const parent = target.closest(`.vbcp-dropdown`);

      if (!parent) {
        setOpen(false);
        return;
      }
    };

    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <div className="flex">
      <span className="shrink-0 w-[150px] mt-2 mr-4">{label}</span>
      <div
        className={clsx(
          "bg-white vbcp-dropdown relative w-full h-fit rounded-sm border border-zinc-300 py-1 pl-2 pr-6 flex flex gap-2 flex-wrap min-h-[44px]"
        )}
        onClick={() => setOpen(!open)}
      >
        <Chevron down={open} />
        {value &&
          value?.split(",").map((val) => (
            <SelectedOption
              key={val}
              onClose={() => {
                onChange(
                  value
                    ?.split(",")
                    .filter((v) => v !== val)
                    .filter((v) => !!v)
                    .join(",")
                );
              }}
            >
              {options.find((option) => option.value === val)?.label}
            </SelectedOption>
          ))}
        {open && (
          <Menu
            value={value}
            options={options}
            withSearch={withSearch}
            renderOption={renderOption}
            onClick={(val) => {
              if (multiple) {
                const arr = value?.split(",") || [];

                if (arr.includes(val)) return;

                arr.push(val);
                onChange(arr.filter((v) => !!v).join(","));
              } else {
                onChange(val);
                setOpen(false);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

/** Dropdown */
export default Dropdown;
