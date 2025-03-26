import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { ActionButton, Text } from "@adobe/react-spectrum";

// ❖ Action Button - Desktop - Light
interface FigmaActionButtonDesktopLightProps extends BaseFigmaProps {
  Label?: string;
  Icon?: ChildrenNode;
  "Hold Icon ?"?: boolean;
  Color?: "Standard" | "Static White" | "Static Black";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Disabled";
  "Quiet ?"?: "False" | "True";
  "Emphasis ?"?: "False" | "True";
  "Label ?"?: "False" | "True";
  "Icon ?"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "daa38153226f78c24399ff536926f77785bc4b9e",
  mapper(figma: FigmaActionButtonDesktopLightProps) {
    // Transform color prop
    const getStaticColor = (color?: string) => {
      if (color === "Static White") return "white";
      if (color === "Static Black") return "black";
      return undefined;
    };

    // Convert Figma 'True'/'False' to boolean
    const isTrue = (value?: "True" | "False") => value === "True";

    return (
      <ActionButton
        isQuiet={isTrue(figma["Quiet ?"])}
        staticColor={getStaticColor(figma.Color)}
        isDisabled={figma.State === "Disabled"}
      >
        {isTrue(figma["Icon ?"]) && figma.Icon}
        {isTrue(figma["Label ?"]) && <Text>{figma.Label}</Text>}
        {figma["Hold Icon ?"] && figma.$findOneByName("Hold Icon")}
      </ActionButton>
    );
  },
});
