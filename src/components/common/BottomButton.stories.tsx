import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { withMobileFrame } from "../../stories/MobileFrame";
import BottomButton from "./BottomButton";

const meta = {
  title: "Components/Button/BottomButton",
  component: BottomButton,
  tags: ["autodocs"],
  decorators: [withMobileFrame],
  args: {
    isActive: true,
    disabled: false,
    children: "다음",
    onClick: fn(),
  },
} satisfies Meta<typeof BottomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {};

export const Inactive: Story = {
  args: { isActive: false, disabled: true },
};
