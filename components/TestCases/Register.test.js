import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Register from '../Register';

describe('Register', () => {
  it('renders the Register component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Register />);
    
    // Check that the component renders the expected text and input elements
    expect(getByText('Register')).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Phone Number')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    
    // Check that the input fields are rendered
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Phone Number')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('validates and handles registration correctly', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Register />);
    
    // Mock the Firebase Firestore functions used in the component
    const addDocMock = jest.fn();
    jest.mock('firebase/firestore', () => ({
      collection: jest.fn(),
      addDoc: addDocMock,
    }));

    // Fill in the registration fields
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const phoneInput = getByPlaceholderText('Phone Number');
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'johndoe@example.com');
    fireEvent.changeText(phoneInput, '1234567890');
    fireEvent.changeText(passwordInput, 'password123');

    // Click the Register button
    fireEvent.press(getByText('Register'));

    // Check that validation errors are not displayed
    expect(() => getByText('Name is required')).toThrowError();
    expect(() => getByText('Invalid Email')).toThrowError();
    expect(() => getByText('Invalid phone number')).toThrowError();
    expect(() => getByText('Password is required')).toThrowError();

    // Check that Firestore's `addDoc` was called with the correct data
    expect(addDocMock).toHaveBeenCalledWith(expect.anything(), {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      password: 'password123',
    });

    // Check that the "Registered Successfully" message is displayed
    expect(getByText('Registered Successfully!')).toBeTruthy();
  });

});
