import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Badge } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";

// ❖ Badge - Desktop - Light
interface FigmaBadgeDesktopLightProps extends BaseFigmaProps {
  Icon?: ChildrenNode;
  Label?: string;
  "Status / Color"?:
    | "Positive"
    | "Informative"
    | "Negative"
    | "Neutral"
    | "Seafoam"
    | "Indigo"
    | "Purple"
    | "Fuchsia"
    | "Magenta"
    | "Yellow";
  State?: "Default" | "Focus" | "Hover" | "Touch" | "Disabled";
  "Label ?"?: "False" | "True";
  "Icon ?"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a598d41f3f41d506f18bb1cf0291c76186c1aa3f",
  mapper(figma: FigmaBadgeDesktopLightProps) {
    // Normalize the status/color to match Badge variant
    const variant = figma["Status / Color"]?.toLowerCase() ?? "neutral";

    // Check if we should show icon and label
    const showIcon = figma["Icon ?"] === "True";
    const showLabel = figma["Label ?"] === "True";

    return (
      <Badge variant={variant}>
        {showIcon && figma.Icon}
        {showLabel && <Text>{figma.Label}</Text>}
      </Badge>
    );
  },
});
