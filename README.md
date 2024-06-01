# Pricing Component

This is a simple traffic-based pricing component built with React. It features a slider to adjust the page views and a toggle switch for monthly or yearly billing with a discount for yearly billing.

## Features

- Responsive design for mobile and desktop
- Adjustable page views using a slider
- Toggle switch for monthly and yearly billing
- Automatic price calculation based on page views and billing period
- Simple and clean design

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/like-rounak/TraaficPricce.git
    ```


2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

The app should now be running at `http://localhost:3000`.

## Technologies Used

- React
- CSS
- [React Slider](https://github.com/zillow/react-slider) for the page views slider

## Project Structure

```plaintext
pricing-component/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── PricingCard.js
│   │   ├── PricingCard.css
│   │   ├── ToggleSwitch.js
│   │   └── ToggleSwitch.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
