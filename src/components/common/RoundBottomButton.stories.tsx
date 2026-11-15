import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import RoundBottomButton from "./RoundBottomButton";

const meta = {
  title: "Components/Button/RoundBottomButton",
  component: RoundBottomButton,
  tags: ["autodocs"],
  args: {
    buttonMessage: "다음",
    handleClick: fn(),
  },
} satisfies Meta<typeof RoundBottomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
