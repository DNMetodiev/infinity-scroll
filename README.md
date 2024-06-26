# Infinite Scroll Project

## About

This project implements an infinite scroll feature using the Unsplash API to load and display images as the user scrolls. It showcases dynamic content loading, API usage, and modern JavaScript async/await patterns.

### Features

- Infinite scrolling of images
- Responsive design
- Utilizes the Unsplash API for beautiful, random images

### Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

To run this project locally, you'll need:

- A modern web browser
- Your own Unsplash API access key

### Setup

1. Clone this repository to your local machine.
2. Obtain an API access key from [Unsplash Developers](https://unsplash.com/developers).
3. Create a `config.js` file in the root of the project with the following content, replacing `YOUR_API_KEY_HERE` with your actual Unsplash API key:

    ```javascript
    // config.js
    const config = {
      API_KEY: 'YOUR_API_KEY_HERE'
    };
    ```

4. Add `config.js` to your `.gitignore` file to keep your API key secure.
5. Open `index.html` in your browser to run the project.
