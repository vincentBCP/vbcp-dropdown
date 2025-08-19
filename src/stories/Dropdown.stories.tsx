import type { Meta, StoryObj } from "@storybook/react-vite";

import Dropdown from "../../lib/main";
import { fn } from "storybook/internal/test";
import { useState } from "react";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    multiple: { control: "boolean" },
    withSearch: { control: "boolean" },
  },
  args: {
    label: "Dropdown",
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
    ],
    onChange: fn(),
    multiple: false,
    withSearch: false,
  },
  render: (args) => {
    const [value, setValue] = useState<undefined | string>();
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomOption: Story = {
  args: {
    renderOption: (option) => (
      <span className="font-bold italic">{option.label}</span>
    ),
  },
};
