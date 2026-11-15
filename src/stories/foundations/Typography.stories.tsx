import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "styled-components";

import { theme } from "../../style/theme";

type FontName = keyof typeof theme.fonts;

function readValue(css: string, property: string) {
  const match = css.match(new RegExp(`${property}\\s*:\\s*([^;]+);`));
  return match ? match[1].trim() : "-";
}

function toPx(rem: string) {
  const value = parseFloat(rem);
  return Number.isNaN(value) ? rem : `${Math.round(value * 10 * 100) / 100}px`;
}

function TypographyTable() {
  const names = Object.keys(theme.fonts) as FontName[];

  return (
    <Table>
      <thead>
        <tr>
          <Th>Token</Th>
          <Th>Weight</Th>
          <Th>Size</Th>
          <Th>Line height</Th>
          <Th>Letter spacing</Th>
          <Th>Preview</Th>
        </tr>
      </thead>
      <tbody>
        {names.map((name) => {
          const css = theme.fonts[name];
          return (
            <tr key={name}>
              <Td>
                <code>{name}</code>
              </Td>
              <Td>{readValue(css, "font-weight")}</Td>
              <Td>{toPx(readValue(css, "font-size"))}</Td>
              <Td>{toPx(readValue(css, "line-height"))}</Td>
              <Td>{toPx(readValue(css, "letter-spacing"))}</Td>
              <Td>
                <Sample $font={name}>튜티스 수업 관리 Tutice 123</Sample>
              </Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

const meta = {
  title: "Foundations/Typography",
  component: TypographyTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`src/style/theme.ts`의 `theme.fonts` 토큰이에요. 코드에서는 `${({ theme }) => theme.fonts.body01}`처럼 써요. px 값은 1rem = 10px 기준이에요.',
      },
    },
  },
} satisfies Meta<typeof TypographyTable>;

export default meta;

export const Scale: StoryObj<typeof meta> = {};

const Table = styled.table`
  width: 100%;
  font-family: "Pretendard", sans-serif;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.grey900};
`;

const Th = styled.th`
  padding: 1rem 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
  text-align: left;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey500};
`;

const Td = styled.td`
  padding: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
  vertical-align: middle;
  white-space: nowrap;
`;

const Sample = styled.span<{ $font: FontName }>`
  ${({ theme, $font }) => theme.fonts[$font]};
`;
