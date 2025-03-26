"use client";
import {
  Provider,
  defaultTheme,
  TableView,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "@adobe/react-spectrum";

export default function App() {
  return (
    <Provider theme={defaultTheme}>
      <h1>Hello World</h1>
    </Provider>
  );
}
