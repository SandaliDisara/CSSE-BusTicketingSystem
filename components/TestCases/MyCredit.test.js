import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import MyCredit from '../MyCredit';

// Mock the necessary dependencies and libraries
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
}));
jest.mock('./config', () => ({
  db: jest.fn(),
}));

describe('MyCredit', () => {
  it('renders the credit amount and last top-up date', async () => {
    // Mock the data you expect to be returned by Firestore
    const mockCreditData = {
      amount: 100, // Set this to your desired credit amount
      date: '2023-10-16', // Set this to your desired date
    };
    // Mock Firestore functions to return the data
    const getDocMock = jest.fn(() => ({
      exists: true,
      data: jest.fn(() => mockCreditData),
    }));
    const docMock = jest.fn();
    docMock.mockReturnValue({
      get: getDocMock,
    });
    // Import your component after mocking to use the mocked functions
    jest.mock('../config', () => ({
      db: {
        collection: jest.fn(() => ({
          doc: docMock,
        })),
      },
    }));
    const { getByText } = render(<MyCredit />);
    
    // Wait for data to be fetched (You might need to adjust the waiting time)
    await waitFor(() => {
      // Verify that the credit amount and last top-up date are rendered
      expect(getByText('100')).toBeTruthy(); // Adjust the text to match your data
      expect(getByText('Last top-up date - 2023-10-16')).toBeTruthy();
    });
  });

  it('navigates to "TopUpBtn" screen when the "Top Up Credits" button is pressed', () => {
    // Mock the navigation function
    const navigateMock = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({
        navigate: navigateMock,
      }),
    }));
    const { getByText } = render(<MyCredit />);
    
    // Find the "Top Up Credits" button and press it
    const topUpButton = getByText('Top Up Credits');
    fireEvent.press(topUpButton);
    
    // Verify that the navigation function was called with the correct screen name
    expect(navigateMock).toHaveBeenCalledWith('TopUpBtn');
  });

  
});
