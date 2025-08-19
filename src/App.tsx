import { useState } from "react";
import Dropdown from "../lib/main";

const App: React.FC = () => {
  const [value, setValue] = useState<undefined | string>();

  return (
    <Dropdown
      label="Dropdown"
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ]}
      value={value}
      onChange={setValue}
      multiple
      withSearch
      // renderOption={(option) => (
      //   <span className="font-bold italic">{option.label}</span>
      // )}
    />
  );
};

export default App;
