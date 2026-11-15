import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { withMobileFrame } from "../../stories/MobileFrame";
import BasicSingleModal from "./BasicSingleModal";

const meta = {
  title: "Components/Modal/BasicSingleModal",
  component: BasicSingleModal,
  tags: ["autodocs"],
  decorators: [withMobileFrame],
  args: {
    children: "수업 일정이 변경되었어요",
    buttonName: "확인",
    handleClickSingleButton: fn(),
  },
} satisfies Meta<typeof BasicSingleModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
