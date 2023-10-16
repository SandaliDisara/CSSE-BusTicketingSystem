import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TopUpOptions from '../TopUpOptions';

// Mock necessary dependencies
jest.mock('../config', () => ({
  db: jest.fn(),
}));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  updateDoc: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  getDoc: jest.fn(),
}));

describe('TopUpOptions', () => {
  it('renders options with correct text and prices', () => {
    const { getByText } = render(<TopUpOptions />);
    
    // Check that the options with their text and prices are rendered correctly
    expect(getByText('100 Credits')).toBeTruthy();
    expect(getByText('Rs. 500')).toBeTruthy();
    expect(getByText('250 Credits')).toBeTruthy();
    expect(getByText('Rs. 750')).toBeTruthy();
    expect(getByText('500 Credits')).toBeTruthy();
    expect(getByText('Rs. 1200')).toBeTruthy();
  });

  it('updates top-up amount when an option is pressed', async () => {
    const { getByText } = render(<TopUpOptions />);
    const topUpAmountInput = getByPlaceholderText('Enter Amount');

    // Find and press an option to top up
    const topUpOption = getByText('100 Credits');
    fireEvent.press(topUpOption);

    // Wait for the input to be updated
    await waitFor(() => {
      expect(topUpAmountInput.props.value).toBe('100');
    });
  });

  // Add more test cases to cover component behavior, e.g., input validation, top-up button press
});
