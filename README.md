# Wine Statistics App

This is a simple React application for calculating and displaying statistics for wine data. It calculates statistics like Mean, Median, and Mode for the "Flavanoids" and "Gamma" properties in the dataset and presents them in a tabular format.

## Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://classic.yarnpkg.com/) installed on your machine.

1. Clone this repository to your local machine:

   ```shell
   git clone git@github.com:pranjalee23/wine-statistics.git
   ```

2. Navigate to the project directory:

   ```shell
   cd wine-statistics-app
   ```

3. Install project dependencies using Yarn:

   ```shell
   yarn install
   ```

## Usage

To run the Wine Statistics App locally, follow these steps:

1. Start the development server:

   ```shell
   yarn start
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

3. You should see the Wine Statistics App displaying statistics for "Flavanoids" and "Gamma" in a tabular format.

**Note: For simplicity, only the first 3 values of the mode are displayed in the table.**

## How the Code Works

The code is organized into the following files and folders:

- `src/App.tsx`: The main application component that calculates statistics and renders the app.

- `src/components/StatisticsTable.tsx`: A reusable React component for rendering statistics in a tabular format.

- `src/data/wineData.json`: Given wine data in JSON format used for calculations.

- `src/utils/statistics.ts`: Utility functions for calculating Mean, Median, Mode, and Gamma.

## Customization

You can customize this app by:

- Modifying the `wineData.json` file with a different dataset.

- Adjusting the statistics calculations or adding more properties as needed in `src/utils/statistics.ts`.

- Styling the app by editing the CSS in `src/App.css` and the component-specific styles.

Feel free to extend and adapt the app to suit your specific needs.
