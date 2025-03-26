import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ColorPicker } from "@adobe/react-spectrum";
import { ColorEditor } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";

// ❖ Color Loupe - Desktop - Light
interface FigmaColorLoupeDesktopLightProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "59d9c100e0d7071292ceedcaa61cd177c093d081",
  mapper(figma: FigmaColorLoupeDesktopLightProps) {
    return (
      <ColorPicker label="Color" size="M">
        <Flex direction="column" gap="size-300">
          <ColorEditor />
        </Flex>
      </ColorPicker>
    );
  },
});
