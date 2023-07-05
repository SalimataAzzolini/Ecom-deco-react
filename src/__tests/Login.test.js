import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import { accountService } from "../_services/account.service";
import { act as domAct } from "react-dom/test-utils";

jest.mock("../_services/account.service", () => ({
  accountService: {
    loginUser: jest.fn().mockResolvedValue({ token: "testToken" }),
  },
}));

describe("Test du composant Login", () => {
  test("Soumission du formulaire de connexion", async () => {
    const mockNavigate = jest.fn();
    const mockSetUserDatas = jest.fn();

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    jest.mock("../_contexts/userDatasContext", () => ({
      UserDatasContext: {
        Consumer: ({ children }) =>
          children({ setUserDatas: mockSetUserDatas }),
      },
    }));

    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByLabelText("EMAIL");
    const passwordInput = getByLabelText("PASSWORD");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const loginButton = getByText("LOGIN");

    domAct(() => {
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(accountService.loginUser).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });

    expect(mockNavigate).toHaveBeenCalledWith("/user", { replace: true });

    await waitFor(() => {
      expect(mockSetUserDatas).toHaveBeenCalled();
    });
  });
});
