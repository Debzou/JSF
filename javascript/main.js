// check the import
const filename = "main.js";
console.log(`${filename} is imported`);

// coordinate mana
// with one number
const mx1 = 35;
const my1 = 64;
// with two number
const mx2 = 23;
const my2 = 64;


// define container
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
    .attr('x',mx2)
    .attr('y',my2)
    .attr('id','mana')
    .text('10')
    .attr("font-size", "40px")
    .attr("fill", d3.color("white"))