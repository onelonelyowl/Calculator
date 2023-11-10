/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Clicking number buttons outputs correct values", () => {
  render(<App />);
  // simulate clicking numbers
  fireEvent.click(screen.getByText("1"));
  fireEvent.click(screen.getByText("2"));

  // expect the numbers to be output
  expect(screen.getByText("12")).toBeTruthy();
});

test("Clicking + button allows for new number to be input", () => {
  render(<App />);
  // simulate clicking numbers
  fireEvent.click(screen.getByText("1"));
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("3"));
  fireEvent.click(screen.getByText("2"));
  // expect the second set of numbers to be output
  expect(screen.getByText("32")).toBeTruthy();
});

test("= button outputs correct sum", () => {
  render(<App />);
  // simulate clicking numbers and operators
  fireEvent.click(screen.getByText("1"));
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("3"));
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("="));
  // expect sum to be output
  expect(screen.getByText("44")).toBeTruthy();
});
