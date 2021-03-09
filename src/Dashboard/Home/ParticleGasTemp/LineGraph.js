import React, { useEffect, useState } from 'react';
var Chart = require('chart.js');

export default function LineGraph(props) {

  const COLORS = [
    '#EC6E85',
    '#56A0E5',
    '#6DBEBF',
    '#F7CE6B',
    '#bff77c',
    '#f798b5',
    '#9e99f7',
    '#89def7',
    '#7ef78b',
    '#f7ae46',
    '#95b5fe',
    '#4dbc42',
    '#bc404a'
  ]

  // parse the data and draw the graph
  function parseData(data, dataCatergory) {
    let dataToArr = Object.values(data);
    dataToArr.sort((a,b) => {
      if (parseInt(a["Time"]) > parseInt(b["Time"])) {
        return 1;
      } else if (parseInt(a["Time"]) === parseInt(b["Time"])) {
        return 0;
      } else {
        return -1;
      }
    })
    console.log("dataToArr", dataToArr);
    let fieldsToGet = [];
    // separate case for different field groups
    switch (dataCatergory) {
      case "particle-PC":
        fieldsToGet = ["Particle_Count_0_3um", "PC_0_5um", "PC_10um", "PC_2_5um", "PC_5um"];
        break;
      case "particle-PM":
        fieldsToGet = ["Env_PM_smaller_than_1_0", "Env_PM_smaller_than_10", "Env_PM_smaller_than_2_5"];
        break;
      case "total-VoC-ppb":
        fieldsToGet = ["total_VoC_ppb"];
        break;
      case "env-temperature":
        fieldsToGet = ["Temperature_c"];
        break;
      case "env-humidity":
        fieldsToGet = ["Relative_Humidity"];
        break;
      case "gas-CO2":
        fieldsToGet = ["equiv_CO2_ppm"];
        break;
    }
    console.log("fieldsToGet:", fieldsToGet);
    // dataSets = {fieldName: [dataByTimeArr]}
    let dataSets = {};
    let timeArr = [];
    let currentTime = 0;
    for (let i = 0; i < dataToArr.length; i++) {
      if (!(dataToArr[i]["Time"] == undefined)) {
        let hour = dataToArr[i]["Time"].slice(0, 2);
        let minute = dataToArr[i]["Time"].slice(2, 4);
        timeArr.push( hour + ":" + minute);
      }
      for (let j = 0; j < fieldsToGet.length; j++) {
        let fieldDataByTime = dataSets[fieldsToGet[j]];
        if (fieldDataByTime == undefined) {
          dataSets[fieldsToGet[j]] = [];
        }
        dataSets[fieldsToGet[j]].push(dataToArr[i][fieldsToGet[j]]);
      }
    }
    let config = setConfig(dataSets, timeArr, COLORS);
    let selector = "#" + props.dataCatergory;
    var myChart = new Chart(document.querySelector(selector).getContext('2d'), config);
  }

  // set the configuration to the graph that could be fetch from Chart.js
  function setConfig(dataSets, time, colors) {
    let fieldsConfig = [];
    let colorId = 0;
    for (let field in dataSets) {
      let fieldConfig = {
        label: field,
        borderColor: colors[colorId],
        backgroundColor: colors[colorId],
        data: dataSets[field]
      };
      fieldsConfig.push(fieldConfig);
      colorId += 1;
    }
    return {
      type: 'line',
      data: {
        labels: time,
        datasets: fieldsConfig
      },
      options: {
        responsive: true,
        title: {
            display: false,
            fontSize: 20,
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'um'
                }
            }]
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }
    };
  }

  useEffect(() => {
    parseData(props.data, props.dataCatergory);
  });

  return (
    <div>
      <canvas id={props.dataCatergory}></canvas>
      {/* {parseData(props.data, props.dataCatergory)} */}
    </div>
  );
}