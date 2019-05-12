import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Counter } from "../components/Counter";

afterEach(() => {
  window.localStorage.removeItem("count");
});

test("increments the counter", () => {
  const { container } = render(<Counter />);
  const button = container.firstElementChild;
  if (button) {
    expect(button.textContent).toBe("0");
    fireEvent.click(button);
    expect(button.textContent).toBe("1");
  }
});

test("reads and write to LocalStorage", () => {
  window.localStorage.setItem("count", "3");
  const { container } = render(<Counter />);
  const button = container.firstElementChild;
  if (button) {
    expect(button.textContent).toBe("3");
    fireEvent.click(button);
    expect(button.textContent).toBe("4");
    expect(window.localStorage.getItem("count")).toBe("4");
  }
});
