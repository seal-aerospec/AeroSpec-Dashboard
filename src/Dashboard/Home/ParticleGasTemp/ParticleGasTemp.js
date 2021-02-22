/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getFrontendteamschema } from '../../../graphql/queries'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const initialTemp = { Temperature_c: '' };
const initialGasState = { equiv_CO2_ppm: '' };
const initialParticle = {
  Particle_Count_0_3um: '',
  PC_0_5um: '',
  PC_1_0num: '',
  PC_10um: '',
  PC_2_5um: '',
  PC_5um: '',
  Env_PM_smaller_than_1_0: '',
  Env_PM_smaller_than_10: '',
  Env_PM_smaller_than_2_5: '',
};

export default function ParticleGasTemp () {
    const [tempState, setTempState] = useState(initialTemp);
    const [particleState, setParticleState] = useState(initialParticle);
    const [gasState, setGasState] = useState(initialGasState);

    async function displayParticle() {
        try {
          const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
          const info = store.data.getFrontendteamschema;
          //const payload = JSON.parse(info.payload);
          const newData = {
            Particle_Count_0_3um: info.Particle_Count_0_3um,
            PC_0_5um: info.PC_0_5um,
            PC_1_0num: info.PC_1_0num,
            PC_10um: info.PC_10um,
            PC_2_5um: info.PC_2_5um,
            PC_5um: info.PC_5um,
            Env_PM_smaller_than_1_0: info.Env_PM_smaller_than_1_0,
            Env_PM_smaller_than_10: info.Env_PM_smaller_than_10,
            Env_PM_smaller_than_2_5: info.Env_PM_smaller_than_2_5,
          };
          setParticleState(newData);
          //console.log(newData);
          //console.log(payload);
        } catch (err) {
          console.log('error: ', err);
        }
      }
    
      async function displayTemp() {
        try {
          const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
          console.log(store);
          const info = store.data.getFrontendteamschema;
          //const payload = JSON.parse(info.payload);
          const newData = {
            Temperature_c: info.Temperature_c
          };
          setTempState(newData);
          //console.log(newData);
          //console.log(payload);
        } catch (err) {
          console.log('error: ', err);
        }
      }
    
      async function displayGas() {
        try {
          const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
          const info = store.data.getFrontendteamschema;
          //console.log('info: ' + info);
          //const payload = JSON.parse(info.payload);
          const newData = {
            equiv_CO2_ppm: info.equiv_CO2_ppm
          };
          setGasState(newData);
          //console.log(newData);
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

    //   useEffect(() => {
    //     displayTemp();
    //     //displayParticle();
    //     //displayGas();
    //   }, []);

      return (
          <Container>

          </Container>
          <div>
            <div>
                <p>{tempState.Temperature_c}</p>
            </div>
          </div>
      )
}
