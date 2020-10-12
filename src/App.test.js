import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { mockData } from "./mockData";
jest.mock("./api/fetchShow");

describe("App tests", () => {
  test("renders without errors", () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);
  });

  test("renders with the dropdown menu", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);
    expect(dropdown).toBeTruthy();
  });

  test("dropdown shows list of seasons", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);

    userEvent.click(dropdown);
    const seasonOption = await screen.findByText(/season 1/i);
    expect(seasonOption).toBeTruthy();
  });

  test("selected season shows episodes correctly", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);

    userEvent.click(dropdown);
    const seasonOption = await screen.findByText(/season 1/i);

    userEvent.click(seasonOption);
    expect(
      await screen.findByText(/chapter one: the vanishing of will byers/i)
    ).toBeTruthy();
  });
});
