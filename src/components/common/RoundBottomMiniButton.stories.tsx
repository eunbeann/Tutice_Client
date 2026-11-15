import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import RoundBottomMiniButton from "./RoundBottomMiniButton";

const meta = {
  title: "Components/Button/RoundBottomMiniButton",
  component: RoundBottomMiniButton,
  tags: ["autodocs"],
  args: {
    isGreen: true,
    children: "확인",
    onClick: fn(),
  },
} satisfies Meta<typeof RoundBottomMiniButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {};

export const Light: Story = {
  args: { isGreen: false, children: "취소" },
};

export const Pair: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1.6rem" }}>
      <RoundBottomMiniButton {...args} isGreen={false}>
        취소
      </RoundBottomMiniButton>
      <RoundBottomMiniButton {...args} isGreen>
        확인
      </RoundBottomMiniButton>
    </div>
  ),
};
