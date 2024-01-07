# Holiday Tracker

Welcome to the Holiday Tracker, a simple one-page website that provides information about today's date and upcoming holidays.

## Overview

The Holiday Tracker displays the following information:

1. **Current Date:** Shows today's date.
2. **Holiday Status:** Indicates whether today is a holiday or not.
3. **Next Nearest Holiday:** Provides details about the upcoming holiday.

## Usage

1. Open the `index.html` file in a web browser.
2. The website will dynamically update to show the current date, holiday status, and details about the next nearest holiday.

## Holiday Data

You can customize the holiday data by updating the `script.js` file with your specific holidays, including their names and dates.

```javascript
const holidays = [
    { name: "New Year's Day", date: "2024-01-01" },
    { name: "Independence Day", date: "2024-07-04" },
    // Add more holidays as needed
];
