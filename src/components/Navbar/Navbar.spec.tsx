import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Navbar from "./Navbar";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("<Navbar />", () => {
  it("renders the component", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
    }));
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
