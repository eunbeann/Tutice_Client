import type { Meta, StoryObj } from "@storybook/react";

import { STUDENT_COLOR } from "../../core/common/studentColor";
import { theme } from "../../style/theme";
import StudentNameLabel from "./StudentNameLabel";

const meta = {
  title: "Components/Label/StudentNameLabel",
  component: StudentNameLabel,
  tags: ["autodocs"],
  args: {
    studentName: "김튜티",
    subject: "수학",
    backgroundColor: STUDENT_COLOR[0],
    color: theme.colors.grey600,
    isBig: true,
  },
} satisfies Meta<typeof StudentNameLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {};

export const Small: Story = {
  args: { isBig: false },
};
