import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Counter } from "../components/Counter";

test("increments the counter", () => {
  const { container } = render(<Counter />);
  const button = container.firstElementChild;
  if (button) {
    expect(button.textContent).toBe("0");
    fireEvent.click(button);
    expect(button.textContent).toBe("1");
  }
});
