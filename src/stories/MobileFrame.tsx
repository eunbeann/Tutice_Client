import type { Decorator } from "@storybook/react";
import { styled } from "styled-components";

/**
 * 32rem x 56.8rem 모바일 화면 프레임이에요.
 * transform을 걸어서 position: fixed / absolute 인 컴포넌트(하단 버튼, 모달, 스낵바)가
 * Storybook 화면 전체가 아니라 이 프레임 안에 붙도록 해요.
 */
export const withMobileFrame: Decorator = (Story) => (
  <Frame>
    <Story />
  </Frame>
);

const Frame = styled.div`
  position: relative;
  overflow: hidden;

  width: 32rem;
  height: 56.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.grey100};

  transform: translateZ(0);
`;
