/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getFrontendteamschema } from '../../../graphql/queries'

const initialTemp = { Temperature_c: '' };
const initialParticle = {
  Particle_Count_0_3um: '',
  PC_0_5um: '',
  PC_1_0num: '',
  PC_10um: '',
  PC_2_5um: '',
  PC_5um: ''

};
const initialGasState = {
  Env_PM_smaller_than_1_0: '',
  Env_PM_smaller_than_10: '',
  Env_PM_smaller_than_2_5: '',
  equiv_CO2_ppm: ''
};

export default function ParticleGasTemp () {
    const [tempState, setTempState] = useState(initialTemp);
    const [particleState, setParticleState] = useState(initialParticle);
    const [gasState, setGasState] = useState(initialGasState);

    async function displayParticle() {
        try {
          const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
          const info = store.data.getDeviceDataTest;
          //const payload = JSON.parse(info.payload);
          const newData = {
            Particle_Count_0_3um: info.Particle_Count_0_3um,
            PC_0_5um: info.PC_0_5um,
            PC_1_0num: info.PC_1_0num,
            PC_10um: info.PC_10um,
            PC_2_5um: info.PC_2_5um,
            PC_5um: info.PC_5um
          };
          setParticleState(newData);
          console.log(newData);
          //console.log(payload);
        } catch (err) {
          console.log('error: ', err);
        }
      }
    
      async function displayTemp() {
        try {
          const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
          const info = store.data.getDeviceDataTest;
          //const payload = JSON.parse(info.payload);
          const newData = {
            Temperature_c: info.Temperature_c
          };
          setTempState(newData);
          console.log(newData);
          //console.log(payload);
        } catch (err) {
          console.log('error: ', err);
        }
      }
    
      async function displayGas() {
        try {
          const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
          const info = store.data.getDeviceDataTest;
          console.log('info: ' + info);
          //const payload = JSON.parse(info.payload);
          const newData = {
            Env_PM_smaller_than_1_0: info.Env_PM_smaller_than_1_0,
            Env_PM_smaller_than_10: info.Env_PM_smaller_than_10,
            Env_PM_smaller_than_2_5: info.Env_PM_smaller_than_2_5,
            equiv_CO2_ppm: info.equiv_CO2_ppm
          };
          setGasState(newData);
          console.log(newData);
          //console.log(payload);
        } catch (err) {
          console.log('error: ', err);
        }
      }

      function displayAll() {
        displayTemp();
        displayParticle();
        displayGas();
      }

      useEffect(() => {
        displayTemp();
        displayParticle();
        displayGas();
      }, [tempState, particleState, gasState]);

      return (
          <div>
            <div>
                {displayAll}
            </div>
            <p>{tempState.Temperature_c}</p>
          </div>
      )
}
