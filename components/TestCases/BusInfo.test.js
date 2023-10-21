import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BusInfo from "../BusInfo";

describe("BusInfo", () => {
  it("renders the BusInfo component correctly", () => {
    const { getByText, getByTestId } = render(
      <BusInfo
        route={{
          params: {
            busNo: "BU1839",
            from: "kalutara",
            to: "colombo",
            price: "Rs. 550",
            stations: "T1, T2, B4, B5",
          },
        }}
      />
    );

    expect(getByText("Bus Number:")).toBeTruthy();
    expect(getByText("From:")).toBeTruthy();
    expect(getByText("To:")).toBeTruthy();
    expect(getByText("Price:")).toBeTruthy();
    expect(getByText("Book Journey")).toBeTruthy();
    expect(getByText("Stopping Stations -")).toBeTruthy();

    const downloadButton = getByTestId("download-button");
    expect(downloadButton).toBeTruthy();
    expect(downloadButton).not.toBeVisible();

    expect(getByText("Book Journey to \ngenerate QR code")).toBeTruthy();
  });

  it('toggles between "Book Journey" and "Download QR Code" on button click', () => {
    const { getByText, getByTestId } = render(
      <BusInfo
        route={{
          params: {
            busNo: "BU1839",
            from: "kalutara",
            to: "colombo",
            price: "Rs. 550",
            stations: "T1, T2, B4, B5",
          },
        }}
      />
    );

    fireEvent.press(getByText("Book Journey"));

    const downloadButton = getByTestId("download-button");
    expect(downloadButton).toBeVisible();

    expect(getByText("Book Journey to \ngenerate QR code")).not.toBeVisible();

    fireEvent.press(downloadButton);

    expect(downloadButton).not.toBeVisible();

    expect(getByText("Book Journey to \ngenerate QR code")).toBeVisible();
  });
});
