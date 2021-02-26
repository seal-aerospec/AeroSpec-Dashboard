# AeroSpec Dashboard

This repository contains the code for the online dashboard for AeroSpec. This app was created with React JS and utilizes AWS Amplify and GraphQL to make API requests.

# Getting Started

### Cloning the Repository

In a terminal, clone this repository to your local machine.

HTTPS: `git clone https://github.com/seal-aerospec/AeroSpec-Dashboard.git`\
SSH: `git clone git@github.com:seal-aerospec/AeroSpec-Dashboard.git`

### Running the App Locally

After cloning the repository, run `npm install` to install any dependencies for the project. npm is a package manager for JavaScript and can be installed [here](https://www.npmjs.com/get-npm).

To run the app in development mode, run `npm start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### AWS Amplify CLI

The Amplify Command Line Interface (CLI) is a unified toolchain to create AWS cloud services for our app. Install the the command line interface [here](https://docs.amplify.aws/cli/start/install).

[insert more info here]

# File Structure

### React Frontend

### AWS Amplify Backend

# Dashboard Functionality

The AeroSpec Dashboard allows users to monitor their devices and receive information about air quality. 

#### Current Figma Wireframe: Updated wireframes 2.0

### Home

In the Home component, the user can view the blueprint and monitor the status of their device(s). The blueprint should feature dot(s) on it to represent that a device had been placed in that location. A dot can either appear blue or orange to indicate the sensor status. If the air quality crosses some threshold, the dot should be colored orange to indicate a warning. Otherwise, it should be colored blue to indicate stable air quality. 

Above the blueprint, three tabs allow the user to monitor nano particles, gases, and temperatures for each device. After selecting a device by clicking on a dot, any of the three tabs can be clicked on to show a line graph of the air quality throughout the day. The categories featured for nano particles, gases, and temperatures can be found in the [INSERT SECTION HERE] section of this document.

Below the tabs and above the blueprint is a slider. This slider allows the user to view the sensor status throughout the day. 

### Alerts

In the Alerts component, the user can view alerts sent by any sensors. Each alert should give a timestamp, an image of the device location, and a message of what the sensor detected. 

At harmful levels, the user should be notified with a large alert window that gives the problem and suggests solutions.

### Blueprints & Devices

In the Blueprints & Devices component, the user can edit their blueprint and add/delete devices. The "Edit Blueprint" button opens a popup window to allow the user to upload or drag their desired blueprint. A left sidebar shows the user's current devices. To place a device, the user must click on the correct location in the blueprint. The device should appear in the left sidebar and display relevant information about it. THe categories featured can be found in the [INSERT SECTION HERE] section of this document. To delete a device, the user must click the trash icon on the left sidebar.

It is important to note that the user must manually add and delete the device into the AeroSpec Dashboard. If the user moves a device, the user must also re-configure the device's location in this component by deleting and re-adding it [Does the data for it get deleted as well?]. There is no location tracking in the sensors.

### Settings

In the Settings component, the user can...

# Cloud Environment
