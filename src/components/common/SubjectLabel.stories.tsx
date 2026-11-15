import type { Meta, StoryObj } from "@storybook/react";

import { STUDENT_COLOR } from "../../core/common/studentColor";
import { theme } from "../../style/theme";
import SubjectLabel from "./SubjectLabel";

const meta = {
  title: "Components/Label/SubjectLabel",
  component: SubjectLabel,
  tags: ["autodocs"],
  args: {
    subject: "수학",
    backgroundColor: STUDENT_COLOR[0],
    color: theme.colors.grey600,
  },
} satisfies Meta<typeof SubjectLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Finished: Story = {
  args: { backgroundColor: theme.colors.grey70 },
};

export const StudentColors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", maxWidth: "32rem" }}>
      {STUDENT_COLOR.slice(0, 10).map((color, idx) => (
        <SubjectLabel key={color} {...args} subject={`과목 ${idx}`} backgroundColor={color} />
      ))}
    </div>
  ),
};
