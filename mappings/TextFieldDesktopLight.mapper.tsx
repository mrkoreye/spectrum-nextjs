import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextField } from "@adobe/react-spectrum";

// ❖ Text Field - Desktop - Light
interface FigmaTextFieldDesktopLightProps extends BaseFigmaProps {
  "Value ?"?: boolean;
  "Validation Checkmark ?"?: boolean;
  "Character Count ?"?: boolean;
  Label?: string;
  "Character Count"?: string;
  "Help Text ?"?: boolean;
  Value?: string; // when "Value ?" is true
  "Asterisk ?"?: boolean;
  "Help Text"?: string;
  Style?: "Standard" | "Quiet";
  "Label Position"?: "Top" | "Side";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Error" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "89234c24c363e80cce71d1677985037bd119551e",
  mapper(figma: FigmaTextFieldDesktopLightProps) {
    const label = figma.$findOneByName("Label")?.$textContent;
    const asterick = figma.$findOneByName("Asterisk");
    const helpText = figma.$findOneByName("Help Text")?.$textContent;
    const validation = figma.$findOneByName("Validation Checkmark");
    return (
      <TextField
        label={label}
        labelPosition={figma["Label Position"] === "Top" ? "top" : "side"}
        isRequired={asterick ? true : false}
        description={helpText ?? undefined}
        validationState={validation ? "valid" : undefined}
        contextualHelp={figma["Help Text ?"] ? figma["Help Text"] : undefined}
      />
    );
  },
});
