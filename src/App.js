import './App.css';

/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getAeroSpec } from './graphql/queries'
import {listAeroSpecs} from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { id: '', deviceName: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)

  async function displayDevice() {
    try {
      const store = await API.graphql({ query: getAeroSpec, variables: {id: '123lol'} });
      const info = store.data.getAeroSpec;
      const newS = {id: info.id, deviceName: info.deviceName};
      setFormState(newS);
      console.log(formState);
    }catch (err) {
      console.log('error: ', err);
    }
  }


  return (
      <div>
        <button onClick={displayDevice}>Data</button>
        <p>{formState.id}    {formState.deviceName}</p>
      </div>
  )
}
export default App;