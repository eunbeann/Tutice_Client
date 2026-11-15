import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "32rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    progress: 40,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Complete: Story = {
  args: { progress: 100 },
};
