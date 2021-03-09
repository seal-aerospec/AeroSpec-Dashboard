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
      // console.log("type of info", typeof(info));
      // const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
      // const header = Object.keys(info.items[0])
      // const csv = [
      //   header.join(','), // header row first
      //   ...info.items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
      // ].join('\r\n')
      setDeviceData(info.items);
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