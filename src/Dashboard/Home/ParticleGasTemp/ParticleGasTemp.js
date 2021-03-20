/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getFrontendteamschema, listFrontendteamschemas } from '../../../graphql/queries'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LineGraph from './LineGraph.js'

const initialDeviceData = {data: ''};

export default function ParticleGasTemp () {
  let [deviceData, setDeviceData] = useState(initialDeviceData);


  async function listDeviceInfo() {
    console.log("listDeviceInfo");
    try {
      const store = await API.graphql({ query: listFrontendteamschemas});
      const info = store.data.listFrontendteamschemas;
      console.log("info items", info.items);
      setDeviceData(info.items);
      console.log("deviceData", deviceData);
    } catch (err) {
      console.log(err);
    }
  }

    useEffect(() => {
      listDeviceInfo();
    }, []);

    return (
      <div>
        <LineGraph data={deviceData} dataCatergory="particle-PC"/>
        <LineGraph data={deviceData} dataCatergory="particle-PM"/>
        <LineGraph data={deviceData} dataCatergory="total-VoC-ppb"/>
        <LineGraph data={deviceData} dataCatergory="env-temperature"/>
        <LineGraph data={deviceData} dataCatergory="env-humidity"/>
        <LineGraph data={deviceData} dataCatergory="gas-CO2"/>
      </div>
    )
}