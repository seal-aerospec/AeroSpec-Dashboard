import './App.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getAeroSpec } from './graphql/queries'
import {listAeroSpecs} from './graphql/queries'
import Dashboard from './Dashboard'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { id: '', deviceName: '' }

const App = () => {
//  const [formState, setFormState] = useState(initialState)
//
//  async function displayDevice() {
//    try {
//      const store = await API.graphql({ query: getAeroSpec, variables: {id: '123lol'} });
//      const info = store.data.getAeroSpec;
//      const newS = {id: info.id, deviceName: info.deviceName};
//      setFormState(newS);
//      console.log(formState);
//    }catch (err) {
//      console.log('error: ', err);
//    }
//  }
//
//  return (
//    <div class="container-fluid">
//  <div class="row">
//    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
//      <div class="sidebar-sticky pt-3">
//        <ul class="nav flex-column">
//          <li class="nav-item">
//            <a class="nav-link active" href="#">
//              <span data-feather="home"></span>
//              Home <span class="sr-only">(current)</span>
//            </a>
//          </li>
//          <li class="nav-item">
//            <a class="nav-link" href="#">
//              <span data-feather="file"></span>
//              Alerts
//            </a>
//          </li>
//          <li class="nav-item">
//            <a class="nav-link" href="#">
//              <span data-feather="shopping-cart"></span>
//              Blueprints And Devices
//            </a>
//          </li>
//          <li class="nav-item">
//            <a class="nav-link" href="#">
//              <span data-feather="users"></span>
//              Settings
//            </a>
//          </li>
//        </ul>
//      </div>
//    </nav>
//    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
//      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//        <h1 class="h2">Dashboard</h1>
//        <div class="btn-toolbar mb-2 mb-md-0">
//          <div class="btn-group mr-2">
//            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
//            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
//          </div>
//          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
//            <span data-feather="calendar"></span>
//            This week
//          </button>
//        </div>
//      </div>
//
//      <div>
//        <button onClick={displayDevice}>Data</button>
//        <p>{formState.id}    {formState.deviceName}</p>
//      </div>
//
//      <h2>Section title</h2>
//      <div class="table-responsive">
//        <table class="table table-striped table-sm">
//          <thead>
//            <tr>
//              <th>#</th>
//              <th>Header</th>
//              <th>Header</th>
//              <th>Header</th>
//              <th>Header</th>
//            </tr>
//          </thead>
//          <tbody>
//            <tr>
//              <td>Placeholder</td>
//              <td>Placeholder</td>
//              <td>Placeholder</td>
//              <td>Placeholder</td>
//              <td>Placeholder</td>
//            </tr>
//          </tbody>
//        </table>
//      </div>
//    </main>
//  </div>
//</div>
//  )
    return (
    <Dashboard />
    );
}
export default App;