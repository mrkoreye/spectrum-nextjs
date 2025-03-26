import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Button } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";

// ❖ Button - Desktop - Light
interface FigmaButtonDesktopLightProps extends BaseFigmaProps {
  Label?: string;
  Icon?: ChildrenNode;
  Color?:
    | "Accent"
    | "Negative"
    | "Primary"
    | "Secondary"
    | "Static White"
    | "Static Black";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Disabled";
  "Outlined ?"?: "False" | "True";
  "Label ?"?: "False" | "True";
  "Icon ?"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "8f502b691154fe0e0e30a00d01e7a9f161cca317",
  mapper(figma: FigmaButtonDesktopLightProps) {
    // Helper function to map color to variant and staticColor
    const getButtonProps = () => {
      const color = figma.Color ?? "Primary";
      if (color === "Static White") {
        return { variant: "primary", staticColor: "white" as const };
      }
      if (color === "Static Black") {
        return { variant: "primary", staticColor: "black" as const };
      }
      return {
        variant: color.toLowerCase() as
          | "accent"
          | "negative"
          | "primary"
          | "secondary",
      };
    };

    // Determine if components should be shown
    const showIcon = figma["Icon ?"] !== "False";
    const showLabel = figma["Label ?"] !== "False";

    return (
      <Button
        {...getButtonProps()}
        isQuiet={figma["Outlined ?"] === "True"}
        isDisabled={figma.State === "Disabled"}
      >
        {showIcon && figma.Icon}
        {showLabel && <Text>{figma.Label}</Text>}
      </Button>
    );
  },
});
