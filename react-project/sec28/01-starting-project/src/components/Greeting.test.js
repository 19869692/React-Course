import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWordElement = screen.getByText("Hello World", { exact: false });
    expect(helloWordElement).toBeInTheDocument();
  });

  test("renders It's good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const greetingElement = screen.getByText("It's good to see you");
    expect(greetingElement).toBeInTheDocument();
  });

  test("renders Changed! as a text", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const greetingElement = screen.getByText("Changed!");
    expect(greetingElement).toBeInTheDocument();
  });

  test("does not render 'Good to see you' when button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const greetingElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(greetingElement).toBeNull();
  });
});
