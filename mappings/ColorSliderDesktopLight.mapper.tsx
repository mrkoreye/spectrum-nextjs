import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ColorSlider } from "@adobe/react-spectrum";

// ❖ Color Slider - Desktop - Light
interface FigmaColorSliderDesktopLightProps extends BaseFigmaProps {
  Handle?: "In Track" | "At Edge";
  Orientation?: "Horizontal" | "Vertical";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "91316ac5072b0d424f489b965b85c45cf4a100a7",
  mapper(figma: FigmaColorSliderDesktopLightProps) {
    return (
      <ColorSlider
        channel="hue"
        orientation={
          (figma.Orientation?.toLowerCase() as "horizontal" | "vertical") ??
          "horizontal"
        }
        isDisabled={figma.State === "Disabled"}
      />
    );
  },
});
