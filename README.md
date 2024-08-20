# Quote Generator App

This is a Quote Generator application built with React and TypeScript. It allows users to view random quotes, add quotes to their favorites, and remove them from their favorites list. The application utilizes the Context API for state management and fetches quotes from an external API.

## UI Demo

![Screenshot 1](/public/ui.gif)

## Table of Contents

- [Quote Generator App](#quote-generator-app)
- [UI Demo](#ui-demo)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Contributing](#contributing)

## Features

- **View Random Quotes**: Users can view random quotes from the quote generator API.
- **Add to Favorites**: Users can add their favorite quotes to a favorites list.
- **Remove from Favorites**: Users can remove quotes from their favorites list.
- **View Favorites**: Users can view a list of all their favorite quotes.

## Usage

1. **Get a Random Quote**: Click the "Get Quote" button to fetch and display a random quote.
2. **Add to Favorites**: Click the "Add to Favorites" button to save the quote to your favorites list.
3. **Remove from Favorites**: Click the "Remove from Favorites" button to delete the quote from your favorites list.
4. **View Favorites**: Click on the "Favorites" tab to see all the quotes you've added to your favorites.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static type checking and improved code quality.
- **Context API**: For managing global state related to quotes and favorites.
- **Quote API**: For fetching random quotes.

## API

The application uses the following API to fetch quotes:
- **API Endpoint**: `https://type.fit/api/quotes`

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the code style and include tests for new features.
