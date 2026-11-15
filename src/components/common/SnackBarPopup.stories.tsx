import type { Meta, StoryObj } from "@storybook/react";

import { withMobileFrame } from "../../stories/MobileFrame";
import SnackBarPopup from "./SnackBarPopup";

const meta = {
  title: "Components/SnackBarPopup",
  component: SnackBarPopup,
  tags: ["autodocs"],
  decorators: [withMobileFrame],
  argTypes: {
    children: { control: false },
  },
  args: {
    isCheck: true,
    children: <span style={{ color: "#FFFFFF", fontSize: "1.4rem" }}>출결 알림을 보냈어요</span>,
  },
} satisfies Meta<typeof SnackBarPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCheck: Story = {};

export const TextOnly: Story = {
  args: { isCheck: false },
};
