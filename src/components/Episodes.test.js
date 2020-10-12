import React from "react";
import Episodes from "./Episodes";
import { render, screen } from "@testing-library/react";

describe("Episodes tests", () => {
  test("renders without errors", () => {
    render(<Episodes episodes={[]} />);
  });
});
