import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe("Test the button", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("should contain button", () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it("button text should say 'GET DATA'", () => {
    const desiredText = 'GET DATA';
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(desiredText);
  });
  it("button should be disabled after click'", () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });

});

describe("Test the loading spinner", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("loading spinner should not appear on initialization", () => {
    const spinner = screen.queryByTestId('spinner-container');
    expect(spinner).toBeNull();
  });
  it("loading spinner should render after button click", async () => {
    const button = screen.getByRole('button');
    expect(screen.queryByTestId('spinner-container')).toBeNull();
    await fireEvent.click(button);
    expect(screen.queryByTestId('spinner-container')).toBeInTheDocument();
  });
});

describe("Test the Data Table", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Data Table doesn't render on init", () => {
    const datatable = screen.queryByTestId('datatable-component');
    expect(datatable).toBeNull();
  });
  // it("Data Table renders after async fetch responds succesfully", () => {
  //   const spinner = screen.queryByTestId('spinner-container');
  //   expect(spinner).toBeNull();
  // });
  // it("Data Table doesn't loads after async fetch fails", () => {
  //   const spinner = screen.queryByTestId('spinner-container');
  //   expect(spinner).toBeNull();
  // });
});

// describe("Test Data Service funtion", () => {
//   beforeEach(() => {
//     render(<App />);
//   });
//   it("Data Table doesn't render on init", () => {
//     const datatable = screen.queryByTestId('datatable-component');
//     expect(datatable).toBeNull();
//   });
// });

// Test that error message appears only when data fectch fails

