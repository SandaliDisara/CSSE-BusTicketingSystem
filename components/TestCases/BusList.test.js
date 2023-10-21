import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BusList from '../BusList';

describe('BusList', () => {
  it('renders the BusList component correctly', () => {
    const { getByText, getByPlaceholderText, getAllByTestId } = render(<BusList />);
    
    // Check that the component renders the expected text and input elements
    expect(getByText('Enter Your Journey')).toBeTruthy();
    expect(getByText('Choose Transport')).toBeTruthy();
    expect(getByPlaceholderText('From')).toBeTruthy();
    expect(getByPlaceholderText('To')).toBeTruthy();
    
    // Check that the "Search Journey" button is rendered
    expect(getByText('Search Journey')).toBeTruthy();
    
    // Check that at least one bus item is rendered
    const busItems = getAllByTestId('bus-item');
    expect(busItems.length).toBeGreaterThan(0);
  });

  it('navigates to the Bus Information screen on "Book" button click', () => {
    const { getByText } = render(<BusList />);
    
    // Mock the useNavigation hook
    const navigateMock = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({ navigate: navigateMock }),
      useRoute: () => ({ params: { userName: 'Test User' } }),
    }));

    // Click the "Book" button on the first bus item
    fireEvent.press(getByText('Book'));

    // Check that the navigate function was called with the correct screen name and route params
    expect(navigateMock).toHaveBeenCalledWith("Bus Information", {
        busNo: "BU1839",
        from: "kalutara",
        to: "colombo",
        price: "Rs. 550",
        stations: "T1, T2, B4, B5",
      });
  });
});
