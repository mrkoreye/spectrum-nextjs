"use client";
import {
  SSRProvider,
  TextField,
  Provider,
  defaultTheme,
} from "@adobe/react-spectrum";

export default function App() {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <TextField
          label="Label"
          isQuiet={false}
          isRequired
          description="Help Text"
          maxLength={50}
          validationState="valid"
        />
      </Provider>
    </SSRProvider>
  );
}
