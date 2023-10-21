import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import BusList from "../components/BusList"; // Import your component

// Mock Firebase Firestore and its functions
jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  getDocs: jest.fn(),
}));

// Mock Firebase Firestore data
const mockBusData = [
  { busNo: "BU1839", stations: "T1, T2, B4, B5", price: "Rs. 550" },
  { busNo: "BU1238", stations: "B2, B3, T1, B1", price: "Rs. 450" },
  // Add more mock data as needed
];

describe("BusList Component", () => {
  it("fetches bus data and displays it", async () => {
    // Set up mock functions
    const querySpy = jest.fn();
    const whereSpy = jest.fn();
    const getDocsSpy = jest.fn();

    // Mock Firestore functions
    require("firebase/firestore").collection.mockReturnValue({
      query: querySpy,
    });
    querySpy.mockReturnValue({ where: whereSpy });
    whereSpy.mockReturnValue({ getDocs: getDocsSpy });
    getDocsSpy.mockResolvedValue({
      forEach: (callback) => mockBusData.forEach(callback),
    });

    // Render the component
    const { getByText, getByTestId } = render(
      <BusList from="kalutara" to="colombo" />
    );

    // Wait for data to load
    await waitFor(() => {
      // Assert that the bus data is displayed
      expect(getByText("BU1839")).toBeTruthy();
      expect(getByText("T1, T2, B4, B5")).toBeTruthy();
      expect(getByText("BU1238")).toBeTruthy();
      expect(getByText("B2, B3, T1, B1")).toBeTruthy();
      // You can add more assertions as needed for other elements in the component
    });

    // Check if Firestore functions were called with the correct arguments
    expect(querySpy).toHaveBeenCalledWith(expect.anything(), "busses");
    expect(whereSpy).toHaveBeenCalledWith("from", "==", "kalutara");
    expect(whereSpy).toHaveBeenCalledWith("to", "==", "colombo");
    expect(getDocsSpy).toHaveBeenCalled();
  });

  it('performs a search when the "Search Journey" button is pressed', () => {
    const { getByText } = render(<BusList from="kalutara" to="colombo" />);
    const searchButton = getByText("Search Journey");

    fireEvent.press(searchButton);

    // Add expectations or assertions based on the expected behavior when the button is pressed
  });
});
