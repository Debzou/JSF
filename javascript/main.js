// check the import
const filename = "main.js";
console.log(`${filename} is imported`);

// define containe
const svgContainer = d3.select("#card")
    .append("svg")
    .attr("width",340)
    .attr("height",512);

// add pattern 
const card = svgContainer.append('svg:image')
    .attr('href','./img/none.png')
    .attr('width', 340)
    .attr('height', 512);

// add div mana
const mana = svgContainer.append('svg:text')
    .attr('x',35)
    .attr('y',62)
    .attr('id','mana')
    .text('1')
    .attr("font-size", "40px")
    .attr("fill", d3.color("white"))