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
      } catch (err) {
        console.log('error: ', err);
      }
    }
  
    async function displayTemp() {
      try {
        const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
        console.log(store);
        const info = store.data.getFrontendteamschema;
        const newData = {
          Temperature_c: info.Temperature_c
        };
        setTempState(newData);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  
    async function displayGas() {
      try {
        const store = await API.graphql({ query: getFrontendteamschema, variables: {id: '0'} });
        const info = store.data.getFrontendteamschema;
        const newData = {
          equiv_CO2_ppm: info.equiv_CO2_ppm
        };
        setGasState(newData);
      } catch (err) {
        console.log('error: ', err);
      }
    }

    useEffect(() => {
      displayTemp();
      displayParticle();
      displayGas();
    }, []);

    return (
      <Container>
        <Typography variant="body1" style={{whiteSpace: 'pre-line'}} >
          Temperature: {tempState.Temperature_c}
          <br />
          equiv_CO2_ppm: {gasState.equiv_CO2_ppm}
          <br />
          Particle_Count_0_3um: {particleState.Particle_Count_0_3um}
          <br />
          PC_0_5um: {particleState.PC_0_5um}
          <br />
          PC_1_0num: {particleState.PC_10um}
          <br />
          PC_10um: {particleState.PC_10um}
          <br />
          PC_2_5um: {particleState.PC_2_5um}
          <br />
          PC_5um: {particleState.PC_5um}
          <br />
          Env_PM_smaller_than_1_0: {particleState.Env_PM_smaller_than_1_0}
          <br />
          Env_PM_smaller_than_10: {particleState.Env_PM_smaller_than_10}
          <br />
          Env_PM_smaller_than_2_5: {particleState.Env_PM_smaller_than_2_5}
          <br />
        </Typography>
      </Container>
    )
}
