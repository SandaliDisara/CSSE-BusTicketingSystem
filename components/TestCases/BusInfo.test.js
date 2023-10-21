import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BusInfo from '../BusInfo';

describe('BusInfo', () => {
  it('renders the BusInfo component correctly', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<BusInfo />);
    
    // Check that the component renders the expected text and elements
    expect(getByText('Bus Number:')).toBeTruthy();
    expect(getByText('From:')).toBeTruthy();
    expect(getByText('To:')).toBeTruthy();
    expect(getByText('Price:')).toBeTruthy();
    expect(getByText('Book Journey')).toBeTruthy();
    expect(getByText('Stopping Stations -')).toBeTruthy();
    
    // Check that the "Download QR Code" button is initially hidden
    const downloadButton = getByTestId('download-button');
    expect(downloadButton).toBeTruthy();
    expect(downloadButton).not.toBeVisible();
    
    // Check that the QR code text is initially displayed
    expect(getByText('Book Journey to \ngenerate QR code')).toBeTruthy();
  });

  it('toggles between "Book Journey" and "Download QR Code" on button click', () => {
    const { getByText, getByTestId } = render(<BusInfo />);
    
    // Click the "Book Journey" button
    fireEvent.press(getByText('Book Journey'));
    
    // Check that the "Download QR Code" button is now visible
    const downloadButton = getByTestId('download-button');
    expect(downloadButton).toBeVisible();
    
    // Check that the QR code text is no longer displayed
    expect(getByText('Book Journey to \ngenerate QR code')).not.toBeVisible();
    
    // Click the "Download QR Code" button
    fireEvent.press(downloadButton);
    
    // Check that the "Download QR Code" button is no longer visible
    expect(downloadButton).not.toBeVisible();
    
    // Check that the QR code text is displayed again
    expect(getByText('Book Journey to \ngenerate QR code')).toBeVisible();
  });
});
