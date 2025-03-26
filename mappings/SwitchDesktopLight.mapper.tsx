import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Switch } from "@adobe/react-spectrum";

// ❖ Switch - Desktop - Light
interface FigmaSwitchDesktopLightProps extends BaseFigmaProps {
  "Label ?"?: boolean;
  Label?: string; // when "Label ?" is true
  Style?: "None" | "Emphasized" | "Not Emphasized";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Disabled";
  "Toggled ?"?: "Off" | "On";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "58c3b5f46404e259c0d78483cb9426a89ff38ae5",
  mapper(figma: FigmaSwitchDesktopLightProps) {
    return (
      <Switch
        isEmphasized={figma.Style === "Emphasized"}
        isSelected={figma["Toggled ?"] === "On"}
        isDisabled={figma.State === "Disabled"}
      >
        {figma["Label ?"] && figma.Label}
      </Switch>
    );
  },
});
