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
  componentKey: "d7e16e9bc3abdde60a2b5918383e22d4de6c280c",
  mapper(figma: FigmaTextFieldDesktopLightProps) {
    const label = figma.$findOneByName("Label")?.$textContent;
    const helpText = figma.$findOneByName("Help Text")?.$textContent;
    const validation = figma.$findOneByName("Validation Checkmark");

    const result = `
      <TextField
        label="${label}"
        labelPosition="${figma["Label Position"] === "Top" ? "top" : "side"}"
        isRequired="${figma["Asterisk ?"]}"
        description="${helpText ?? undefined}"
        validationState="${validation ? "valid" : undefined}
        contextualHelp="${
          figma["Help Text ?"] ? figma["Help Text"] : undefined
        }"
      />
    `;

    console.log(figma);
    console.log(result);
    return (
      <TextField
        label={label}
        labelPosition={figma["Label Position"] === "Top" ? "top" : "side"}
        isRequired={figma["Asterisk ?"]}
        description={helpText ?? undefined}
        validationState={validation ? "valid" : undefined}
        contextualHelp={figma["Help Text ?"] ? figma["Help Text"] : undefined}
      />
    );
  },
});
