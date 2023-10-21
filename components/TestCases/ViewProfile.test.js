import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ViewProfile from '../ViewProfile';

describe('ViewProfile', () => {
  it('renders the ViewProfile component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<ViewProfile />);
    
    // Check that the component renders the expected text and input elements
    expect(getByText('Hi, Test User')).toBeTruthy();
    expect(getByText('Name:')).toBeTruthy();
    expect(getByText('Email:')).toBeTruthy();
    expect(getByText('Phone Number:')).toBeTruthy();
    
    // Check that the input fields are rendered and are not editable
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Phone Number')).toBeTruthy();
    expect(getByPlaceholderText('Name').props.editable).toBe(false);
    expect(getByPlaceholderText('Email').props.editable).toBe(false);
    expect(getByPlaceholderText('Phone Number').props.editable).toBe(false);
  });

  it('navigates to the Profile screen on Edit button click', () => {
    const { getByText } = render(<ViewProfile />);
    
    // Mock the useNavigation hook
    const navigateMock = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({ navigate: navigateMock }),
    }));

    // Click the "Edit Profile Data" button
    fireEvent.press(getByText('Edit Profile Data'));

    // Check that the navigate function was called with the correct screen name
    expect(navigateMock).toHaveBeenCalledWith('Profile');
  });

  it('performs profile data deletion', () => {
    const { getByText } = render(<ViewProfile />);
    
    // Mock the useNavigation hook
    const navigateMock = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({ navigate: navigateMock }),
    }));

    // Click the "Delete Profile Data" button
    fireEvent.press(getByText('Delete Profile Data'));

    
  });
});
