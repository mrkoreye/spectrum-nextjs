import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Picker } from "@adobe/react-spectrum";

// ❖ Picker - Desktop - Light
interface FigmaPickerDesktopLightProps extends BaseFigmaProps {
  "Help Text"?: string;
  Placeholder?: string;
  "Help Text ?"?: boolean;
  Value?: string;
  Label?: string;
  "Asterisk ?"?: boolean;
  Style?: "Standard" | "Quiet";
  "Label Position"?: "Top" | "Side";
  State?: "Default" | "Hover" | "Open" | "Focus" | "Error" | "Disabled";
  "Placeholder ?"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "2df7e325239601037ba92009c4d9f5f2b6e283d4",
  mapper(figma: FigmaPickerDesktopLightProps) {
    // Map state to corresponding props
    const isDisabled = figma.State === "Disabled";
    const isInvalid = figma.State === "Error";

    // Map label position
    const labelPosition = figma["Label Position"]?.toLowerCase() as
      | "side"
      | "top";

    return (
      <Picker
        label={figma.Label}
        placeholder={figma.Placeholder}
        isQuiet={figma.Style === "Quiet"}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={figma["Asterisk ?"] ?? false}
        labelPosition={labelPosition}
        description={figma["Help Text ?"] ? figma["Help Text"] : undefined}
        validationState={isInvalid ? "invalid" : undefined}
      />
    );
  },
});
