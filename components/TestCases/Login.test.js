import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../Login';

describe('Login', () => {
  it('renders the Login component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    
    // Check that the component renders the expected text and input elements
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    
    // Check that the input fields are rendered
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('handles successful login', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Login />);
    
    // Fill in the login fields
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(emailInput, 'johndoe@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    // Mock the Firebase Firestore functions used in the component
    const getDocsMock = jest.fn();
    jest.mock('firebase/firestore', () => ({
      collection: jest.fn(),
      query: jest.fn(),
      where: jest.fn(),
      getDocs: getDocsMock,
    }));

    // Mock the querySnapshot
    getDocsMock.mockResolvedValueOnce({
      empty: false,
      docs: [
        {
          id: 'user123',
          data: () => ({
            name: 'John Doe',
            email: 'johndoe@example.com',
          }),
        },
      ],
    });

    // Click the Login button
    fireEvent.press(getByText('Login'));

    // Wait for the navigation to the "Home" screen
    await waitFor(() => {
      expect(queryByText('Invalid Email or Password !')).toBeNull();
      expect(queryByText('Login Successfully')).toBeTruthy();
      expect(queryByText('Name: John Doe')).toBeTruthy();
      expect(queryByText('Email: johndoe@example.com')).toBeTruthy();
    });
  });

  it('handles unsuccessful login', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Login />);
    
    // Fill in the login fields
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(emailInput, 'invalid@example.com');
    fireEvent.changeText(passwordInput, 'wrongpassword');

    // Mock the Firebase Firestore functions used in the component
    const getDocsMock = jest.fn();
    jest.mock('firebase/firestore', () => ({
      collection: jest.fn(),
      query: jest.fn(),
      where: jest.fn(),
      getDocs: getDocsMock,
    }));

    // Mock an empty querySnapshot to simulate an unsuccessful login
    getDocsMock.mockResolvedValueOnce({ empty: true });

    // Click the Login button
    fireEvent.press(getByText('Login'));

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(queryByText('Invalid Email or Password !')).toBeTruthy();
      expect(queryByText('Login Successfully')).toBeNull();
    });
  });
});
