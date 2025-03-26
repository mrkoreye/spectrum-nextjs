import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Cell, Text } from "@adobe/react-spectrum";

// ❖ _Cell
interface FigmaCellProps extends BaseFigmaProps {
  "Cell Title"?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "f991243a1075c8115b885e5befd5bba61c6fe2d6",
  mapper(figma: FigmaCellProps) {
    return (
      <Cell>
        <Text>{figma["Cell Title"]}</Text>
      </Cell>
    );
  },
});
