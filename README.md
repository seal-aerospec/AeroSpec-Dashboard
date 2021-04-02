# AeroSpec Dashboard

This repository contains the code for the online dashboard for AeroSpec. This app was created with React JS and utilizes AWS Amplify and GraphQL to make API requests.

[Deployed Version](https://main.d82284rw2hq6k.amplifyapp.com/home)

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

# File Structure

### React Frontend

The [src](https://github.com/seal-aerospec/AeroSpec-Dashboard/tree/main/src) folder contains all React components, assets, and files for the AeroSpec dashboard. Within this folder, different components of the dashboard are labeled by their folder name. 

#### App.js

The [App](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/src/App.js) component houses all other child components displayed on the dashboard. Components displayed include the topbar, the sidebar, and the main content of the page. React Router is used to switch between different pages/main contents.

#### Home

The [Home](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/src/Dashboard/Home/index.js) component displays the blueprint, current devices, and air quality information to the user. 

#### Device Details

The [Device Details](https://github.com/seal-aerospec/AeroSpec-Dashboard/tree/main/src/Dashboard/Home/DeviceDetails) component displays graphs related to air quality information with the Particle, Gas, and Temperature component. See the Particle, Gas, and Temperature section for more details on how the data is displayed.

#### Particle, Gas, and Temperature

The [ParticleGasTemp](https://github.com/seal-aerospec/AeroSpec-Dashboard/tree/main/src/Dashboard/Home/ParticleGasTemp) folder contains two React components: ParticleGasTemp and LineGraph. 

ParticleGasTemp contains a function for fetching data with a GraphQL API request. This request is made with the useEffect hook. The data is stored in the variable deviceData and passed down as a prop to various LineGraph components.

LineGraph utilizes the [Chart.js](https://www.chartjs.org/) library to create dynamic line graphs. The functional component takes in data about air quality and the data category this graph should present. Based on the category, the air quality data is parsed from props.data. Then, the graph must be configured on the data set, the x-axis representing time, and given colors. Lastly, a new Chart object is made with the configuration

#### Alerts

The [Alerts](https://github.com/seal-aerospec/AeroSpec-Dashboard/tree/main/src/Dashboard/Alerts) component displays any alerts about air quality to the user.

#### Blueprints and Devices

The [Blueprints and Devices](https://github.com/seal-aerospec/AeroSpec-Dashboard/tree/main/src/Dashboard/BlueprintsAndDevices) component allows the user to edit their blueprint, add/delete devices, and view device data. This component contains a function for fetching device information, such as battery percentage and wifi strength.

#### Settings

The [Settings](https://github.com/seal-aerospec/AeroSpec-Dashboard/tree/main/src/Dashboard/Settings) component allows the user to edit account and payment information.

#### Assets

The [Assets](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/src/Dashboard/assets) folder contains any UI components, such as images. Within Assets, the UI_component folder stores all UI component assets created by the UX team in PNG format. UI_component_svg stores the SVG formatted version of the assets found in UII_component. The SVG format is useful when creating icons in React. Other components include example blueprints and miscellaneous React components.

### AWS Amplify Backend

[AWS Amplify](https://aws.amazon.com/amplify/) is used for the backend of the dashboard. With this tool, we can deploy and manage our web app, connect our frontend to our database, DynamoDB, and more.

[GraphQL](https://graphql.org/) is used to make API requests to fetch and update data from DynamoDB. To fetch data, GraphQL requires a schema of what the request should fetch. The [current schema](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/amplify/backend/api/aerospecdashboard/schema.graphql) fetches device and air quality information. 

 `type frontendteamschema @model {`\
	&nbsp;&nbsp;`id: ID!`\
  &nbsp;&nbsp;`Battery: String!`\
  &nbsp;&nbsp;`Date: String!`\
  &nbsp;&nbsp;`Env_PM_smaller_than_1_0: String!`\
  &nbsp;&nbsp;`Env_PM_smaller_than_10: String!`\
  &nbsp;&nbsp;`Env_PM_smaller_than_2_5: String!`\
  &nbsp;&nbsp;`equiv_CO2_ppm: String!`\
  &nbsp;&nbsp;`Latitude: String!`\
  &nbsp;&nbsp;`Longitude: String!`\
  &nbsp;&nbsp;`Particle_Count_0_3um: String!`\
  &nbsp;&nbsp;`PC_0_5um: String!`\
  &nbsp;&nbsp;`PC_1_0num: String!`\
  &nbsp;&nbsp;`PC_10um: String!`\
  &nbsp;&nbsp;`PC_2_5um: String!`\
  &nbsp;&nbsp;`PC_5um: String!`\
  &nbsp;&nbsp;`Relative_Humidity: String!`\
  &nbsp;&nbsp;`Serial_Number: String!`\
  &nbsp;&nbsp;`Temperature_c: String!`\
  &nbsp;&nbsp;`Time: String!`\
  &nbsp;&nbsp;`total_VoC_ppb: String!`\
  &nbsp;&nbsp;`Wifi_Strength: String!`\
`}`

In addition to a schema, queries need to be defined in order to fetch data for the dashboard. Current queries can be found [here](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/src/graphql/queries.js). Queries may specify device IDs to retrieve data from and list specific fields.

To add, delete, or update a device in the database, mutations need to be defined. Current mutations can be found [here](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/readme/src/graphql/mutations.js).

To get real-time updates from our backend on device information and air quality data, subscriptions need to be defined. Current subscriptions can be found [here](https://github.com/seal-aerospec/AeroSpec-Dashboard/blob/main/readme/src/graphql/subscriptions.js).

# Dashboard Functionality

The AeroSpec Dashboard allows users to monitor their devices and receive information about air quality. 

#### Current Figma Wireframe: [Updated wireframes 2.0](https://www.figma.com/file/RujMwMkt23v33BYChcnD0R/AeroSpec-Wireframes)

### Home

In the Home component, the user can view the blueprint and monitor the status of their device(s). The blueprint should feature dot(s) on it to represent that a device had been placed in that location. A dot can either appear blue or orange to indicate the sensor status. If the air quality crosses some threshold, the dot should be colored orange to indicate a warning. Otherwise, it should be colored blue to indicate stable air quality. 

Above the blueprint, three tabs allow the user to monitor nano particles, gases, and temperatures for each device. After selecting a device by clicking on a dot, any of the three tabs can be clicked on to show a line graph of the air quality throughout the day. The categories featured for nano particles, gases, and temperatures can be found in the AWS Amplify Backend section of this document.

Below the tabs and above the blueprint is a slider. This slider allows the user to view the sensor status throughout the day. 

### Alerts

In the Alerts component, the user can view alerts sent by any sensors. Each alert should give a timestamp, an image of the device location, and a message of what the sensor detected. 

At harmful levels, the user should be notified with a large alert window that gives the problem and suggests solutions.

### Blueprints & Devices

In the Blueprints & Devices component, the user can edit their blueprint and add/delete devices. The "Edit Blueprint" button opens a popup window to allow the user to upload or drag their desired blueprint. A left sidebar shows the user's current devices. To place a device, the user must click on the correct location in the blueprint. The device should appear in the left sidebar and display relevant information about it. The categories featured can be found in the AWS Amplify Backend section of this document. To delete a device, the user must click the trash icon on the left sidebar.

It is important to note that the user must manually add and delete the device into the AeroSpec Dashboard. If the user moves a device, the user must also re-configure the device's location in this component by deleting and re-adding it [Does the data for it get deleted as well?]. There is no location tracking in the sensors.

### Settings

In the Settings component, the user can update their account such as payment, contact, and user information. Saved updates should be reflected in the database.

# Cloud Environment
