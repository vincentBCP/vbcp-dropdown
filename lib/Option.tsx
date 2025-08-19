import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface Props {
  onClick: () => void;
  selected?: boolean;
  children: any;
  searchStr?: string;
}

const Option: React.FC<Props> = ({
  children,
  onClick,
  selected,
  searchStr,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [originalHTML, setOriginalHTML] = useState("");

  useEffect(() => {
    if (!divRef.current) return;

    const element = divRef.current;

    if (!originalHTML) {
      setOriginalHTML(element.innerHTML);
      return;
    }

    if (!searchStr) {
      element.innerHTML = originalHTML;
      return;
    }

    const regex = new RegExp(searchStr, "gi"); // Case-insensitive and global search
    const innerHTML = originalHTML;
    const highlightedHTML = innerHTML.replace(
      regex,
      `<span class="bg-teal-300">$&</span>`
    );
    element.innerHTML = highlightedHTML;
  }, [searchStr, originalHTML]);

  return (
    <div
      ref={divRef}
      className={clsx("py-2 px-4 cursor-pointer", {
        "bg-green-100": selected,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Option;
