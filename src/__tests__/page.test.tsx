import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "@/app/layout/Header";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
