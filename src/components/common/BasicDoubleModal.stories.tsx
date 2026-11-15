import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { withMobileFrame } from "../../stories/MobileFrame";
import BasicDoubleModal from "./BasicDoubleModal";

const meta = {
  title: "Components/Modal/BasicDoubleModal",
  component: BasicDoubleModal,
  tags: ["autodocs"],
  decorators: [withMobileFrame],
  args: {
    children: "수업을 삭제할까요?",
    leftButtonName: "취소",
    rightButtonName: "삭제",
    handleClickLeftButton: fn(),
    handleClickRightButton: fn(),
  },
} satisfies Meta<typeof BasicDoubleModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
