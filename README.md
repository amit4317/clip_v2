# Terminal Command Executor Chrome Extension Documentation

## Overview

The Terminal Command Executor extension allows users to highlight a command on any webpage, right-click to run it in the terminal, and view the output in a sidebar within the browser.

## File Structure

1. **popup.html**: Provides the user interface for the extension's popup.
2. **server.py**: Sets up a Flask server to handle command execution.
3. **manifest.json**: Configures the Chrome extension.
4. **background.js**: Handles the context menu and command execution.
5. **content.js**: Creates a sidebar to display the command output.

## Description of Files

### popup.html

This file defines the HTML structure and styling for the popup that appears when the extension icon is clicked. It includes a title and a brief description of the extension's functionality.

### server.py

This Python script sets up a Flask web server to handle incoming POST requests. It receives commands from the extension, executes them in the terminal, and returns the output. The server uses Flask-CORS to allow cross-origin requests from the extension.

### manifest.json

The manifest file is a JSON file that provides important information about the extension, including its name, version, description, and permissions. It specifies the background script and content scripts needed for the extension to function, as well as the context menu item that will appear when the user right-clicks on highlighted text.

### background.js

The background script manages the extension's lifecycle events. It creates a context menu item when the extension is installed. When the context menu item is clicked, it sends the highlighted command to the server for execution and handles the response.

### content.js

The content script runs in the context of web pages and is responsible for creating a sidebar within the browser window. This sidebar displays the output of the executed commands. It listens for messages from the background script and updates the sidebar with the command output.

## Requirements

- **Python 3.x**
- **Flask**: A web framework for Python
- **Flask-CORS**: A Flask extension for handling Cross-Origin Resource Sharing (CORS)

## Setup and Installation

### Setting Up the Server

1. **Install Python**: Make sure Python is installed on your machine. You can download it from the [official website](https://www.python.org/downloads/).

2. **Install Flask**: Open a terminal and run the following command to install Flask:
   ```bash
   pip install Flask
   ```

3. **Install Flask-CORS**: Run the following command to install Flask-CORS:
   ```bash
   pip install Flask-CORS
   ```

4. **Run the Server**: Navigate to the directory containing `server.py` and run:
   ```bash
   python server.py
   ```
   This will start the Flask server on `http://localhost:5000`.

### Setting Up the Chrome Extension

1. **Prepare the Files**: Ensure you have the following files in a directory:
   - `popup.html`
   - `server.py`
   - `manifest.json`
   - `background.js`
   - `content.js`

2. **Load the Extension**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click "Load unpacked" and select the directory containing the extension files.

3. **Use the Extension**:
   - Highlight a command on any webpage.
   - Right-click and select "Run Command in Terminal" from the context menu.
   - The command will be sent to the server for execution.
   - The output will be displayed in a sidebar within the browser.

## Usage

1. **Highlight a command** on any webpage.
2. **Right-click** and select "Run Command in Terminal" from the context menu.
3. The command will be sent to the server for execution.
4. The output will be displayed in a sidebar within the browser.

## Conclusion

This Chrome extension provides a seamless way to execute terminal commands directly from the browser, making it a powerful tool for developers and power users.
