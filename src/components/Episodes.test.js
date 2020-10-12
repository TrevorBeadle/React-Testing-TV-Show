import React from "react";
import Episodes from "./Episodes";
import { render, screen } from "@testing-library/react";

describe("Episodes tests", () => {
  test("renders without errors", () => {
    render(<Episodes episodes={[]} />);
  });

  test("renders episode list when new episode data is added", () => {
    const newEpisodes = [
      {
        episode_id: 1,
        episode_name: "Chapter One: The Vanishing of Will Byers",
      },
      {
        episode_id: 2,
        episode_name: "Chapter Two: The Weirdo on Maple Street",
      },
    ];

    const { rerender } = render(<Episodes episodes={[]} />);

    rerender(<Episodes episodes={newEpisodes} />);

    expect(screen.queryAllByTestId("episode")).toHaveLength(2);
  });
});
