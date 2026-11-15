import type { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/style/globalStyle";
import { theme } from "../src/style/theme";

/**
 * 앱의 GlobalStyle은 body를 32rem 폭으로 고정하고 화면 폭마다 html font-size를 바꿔요.
 * Storybook에서는 문서 페이지가 좁아지지 않도록 body 고정을 풀고,
 * 1rem = 10px(62.5%)로 고정해서 Figma 수치와 1:1로 맞춰요.
 * 모바일 화면 맥락이 필요한 컴포넌트는 src/stories/MobileFrame 데코레이터를 써요.
 */
const StorybookOverride = createGlobalStyle`
  html {
    display: block;
    font-size: 62.5% !important;
  }
  body {
    width: auto;
    height: auto;
    font-family: "Pretendard", sans-serif;
  }
`;

const preview: Preview = {
  decorators: [
    (Story) => (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StorybookOverride />
          <Story />
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    options: {
      storySort: {
        order: ["Foundations", ["Colors", "Typography"], "Components"],
      },
    },
  },
};

export default preview;
