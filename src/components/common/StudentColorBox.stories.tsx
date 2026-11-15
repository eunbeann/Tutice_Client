import type { Meta, StoryObj } from "@storybook/react";

import StudentColorBox from "./StudentColorBox";

const meta = {
  title: "Components/Label/StudentColorBox",
  component: StudentColorBox,
  tags: ["autodocs"],
  argTypes: {
    lessonIdx: { control: { type: "number", min: 0, max: 9 } },
  },
  args: {
    lessonIdx: 0,
  },
} satisfies Meta<typeof StudentColorBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.8rem" }}>
      {Array.from({ length: 10 }, (_, idx) => (
        <StudentColorBox key={idx} lessonIdx={idx} />
      ))}
    </div>
  ),
};
