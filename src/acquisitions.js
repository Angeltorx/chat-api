import Chart from "chart.js/auto";
import { incrementarValor } from "./funciones";
import { getAquisitionsByYear } from './api'

(async function () {
//  const data = [
//  { year: 2010, count: 10 },
//  { year: 2011, count: 20 },
//  { year: 2012, count: 15 },
//  { year: 2013, count: 25 },
//  { year: 2014, count: 22 },
//  { year: 2015, count: 30 },
//  { year: 2016, count: 28 },
//].map(row=>({...row, count:incrementarValor(row.count) }));

const data = await getAquisitionsByYear();

  new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Ventas por año",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
