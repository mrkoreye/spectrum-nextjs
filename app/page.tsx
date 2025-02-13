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
      <TableView aria-label="Example table with static contents">
        <TableHeader>
          <Column key={0}>
            <div className="self-stretch my-auto text-sm font-semibold text-black">
              Header
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/465357c74ad04d88ad977617f9ffad36/fbcbc6fe03d6758fcc995cdec23d89c0e52de883695eb3e197e4218a060658ee?apiKey=465357c74ad04d88ad977617f9ffad36&" />
          </Column>
          <Column key={1}>Header</Column>
          <Column key={2}>Header</Column>
          <Column key={3}>Header</Column>
        </TableHeader>
        <TableBody>
          <Row key={0}>
            <Cell key={0}>Row item alpha</Cell>
            <Cell key={1}>Row item alpha</Cell>
            <Cell key={2}>987</Cell>
            <Cell key={3}>654</Cell>
          </Row>
          <Row key={1}>
            <Cell key={0}>Row item bravo</Cell>
            <Cell key={1}>Row item bravo</Cell>
            <Cell key={2}>987</Cell>
            <Cell key={3}>654</Cell>
          </Row>
          <Row key={2}>
            <Cell key={0}>Row item charlie</Cell>
            <Cell key={1}>Row item charlie</Cell>
            <Cell key={2}>987</Cell>
            <Cell key={3}>654</Cell>
          </Row>
          <Row key={3}>
            <Cell key={0}>Row item delta</Cell>
            <Cell key={1}>Row item delta</Cell>
            <Cell key={2}>987</Cell>
            <Cell key={3}>654</Cell>
          </Row>
          <Row key={4}>
            <Cell key={0}>Row item echo</Cell>
            <Cell key={1}>Row item echo</Cell>
            <Cell key={2}>987</Cell>
            <Cell key={3}>654</Cell>
          </Row>
        </TableBody>
      </TableView>
    </Provider>
  );
}
