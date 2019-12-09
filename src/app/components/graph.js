/*jshint esversion: 6 */
"use strict";

/**
 * We look in the DOM of the Correlation html for the element that has id
 * @param graph
 * @param showGraph
 */
const graph = document.getElementById("graph");
const buttonGraph = document.getElementById("showGraph");

//We add to graph a style in linia that we can modify later
graph.style.display = "none";

/**
 * we add the button content in addition to the function we want when we click on it.
 * This function will show or hide the graph of the elements
 */
buttonGraph.textContent = "Mostrar gráfica";
buttonGraph.onclick = function() {
    if (graph.style.display === "none") {
        graph.style.display = "flex";
        buttonGraph.textContent = "Ocultar gráfica";
    } else if (graph.style.display === "flex") {
        graph.style.display = "none";
        buttonGraph.textContent = "Mostrar gráfica";
    }
};

/**
 * We create the
 * @name Graph object
 * by referring to the prototyping of the javascript parent objec
 */
const Graph = Object.create(Object);

/**
 * We will add the properties
 * @property @name h2 -> title of the graph
 * @property @name divGraph -> the content of graph
 * @property @name info -> object to obtain the information
 * that we want to belong to this object and add the desired content
 */
Graph.h2 = document.createElement("h2");
Graph.h2.textContent =
    "Gráfica de la correlación de los eventos y su probabilidad de que se transforme en pulpo";
Graph.h2.setAttribute("class", "title");

Graph.divGraph = document.createElement("div");
Graph.divGraph.setAttribute("class", "grid horizontal");

Graph.info = require("../../back/scripts/index");

Graph.prototype.createGraph = function create() {
    /**
     * This function is the creation of the bar graph, we ask you to create
     * the ordered graph from least to greatest and also indicates what the name
     * of the event is and when you get on top of each of the events it tells us
     * its probability, even if you have it in the table
     * @function sortTable -> order table
     * @function toPrecision -> number decimals that we want
     */
    const paletteNegatives = ['#f0f4f8', '#d9e2ec', '#bcccdc',
        '#9fb3c8', '#829ab1', '#627d98', '#486581',
        '#334e68',
        '#243b53',
        '#102a43'
    ];
    const palettePositives = [
        '#f48fb1',
        '#f06292',
        '#ec407a',
        '#e91e63',
        '#d81b60',
        '#c2185b',
        '#ad1457',
        '#880e4f'
    ];
    let indexNegatives = paletteNegatives.length - 1;
    let indexPositives = 0;
    let arrayTemp = [];
    this.info.sortTable().forEach(row => {
        let newPhi = row.phi > 0 ? row.phi : row.phi * -1;
        let div = document.createElement("div");

        if (row.phi < 0) {
            div.setAttribute("style", `--bar-value:${newPhi * 100}%; background-color: ${paletteNegatives[indexNegatives]}`);
            if (!arrayTemp.includes(row.phi)) {
                arrayTemp.push(row.phi);
                indexNegatives--;
            }
        } else {
            div.setAttribute("style", `--bar-value:${newPhi * 100}%; background-color: ${palettePositives[indexPositives]}`);
            if (!arrayTemp.includes(row.phi)) {
                arrayTemp.push(row.phi);
                indexPositives++;
            }
        }
        div.setAttribute("data-md-tooltip", `Evento: ${row.item} Probabilidad: ${(row.phi * 100).toPrecision(4)}%`);
        div.setAttribute("class", "bar");

        Graph.divGraph.appendChild(div);
    });
    graph.appendChild(Graph.divGraph);
};

graph.appendChild(Graph.h2);
Graph.createGraph();