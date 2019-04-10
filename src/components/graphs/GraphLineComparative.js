import { h, app } from "hyperapp"
import * as d3 from 'd3'
import ResizeManager from "../../service/ResizeManager.js"

//class ListBox extends Chart{
const GraphLineComparative=(id)=>el=>{

  // 2. Use the margin convention practice
  var margin = {top: 20, right: 20, bottom: 20, left: 24},
      initWidth = 410,  // graph initial width
      width = 410,      // graph initial width
      maxWidth = 692,   // graph maximum width
      height = 80;      // graph height

  const tooltipDecimals = 2;

  // The number of datapoints
  var n = 21;


  // Builds D3 Graph
  function buildGraph() {

    // Remove graph if exists
    if(d3.select(el)) d3.select(el).select("svg").remove()

    // Random Dataset 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset = d3.range(n).map( (d)=>{ return {"y": d3.randomUniform(1)() } })

    // 5. X scale will use the index of our data
    var xScale = d3.scaleLinear()
        .domain([0, n-1]) // input
        .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    var yScale = d3.scaleLinear()
        .domain([0, 1]) // input
        .range([height, 0]); // output


    // 7. d3's line generator
    var line = d3.line()
        .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
        .y(function(d) { return yScale(d.y); }) // set the y values for the line generator
        .curve(d3.curveLinear) // apply smoothing to the line

    // define the area
    var area = d3.area()
        .x(function(d, i) { return xScale(i); })
        .y0(height)
        .y1(function(d) { return yScale(d.y); });

    // Tooltip
    var tip = d3.select(el).append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)

    // 1. Add the SVG to the page and employ #2
    var svg = d3.select(el).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // 3. Call the x axis in a group tag
    svg.append("g")
        .attr("class", "x axis")
        .attr("color", "#B0BAC9")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg.append("g")
        .attr("class", "y axis")
        .attr("color", "#B0BAC9")
        .call(d3.axisLeft(yScale).ticks(3)) // Create an axis component with d3.axisLeft

    var defs = svg.append("defs");
    var gradient = defs.append("linearGradient")
       .attr("id", "svgGradient")
       .attr("x1", "0")
       .attr("x2", "0")
       .attr("y0", "200")
       .attr("y1", "0%")
       .attr("y2", "100%");
    gradient.append("stop")
       .attr('class', 'start')
       .attr("offset", "0%")
       .attr("stop-color", "#2E5BFF")
       .attr("stop-opacity", .15);
    gradient.append("stop")
       .attr('class', 'end')
       .attr("offset", "95%")
       .attr("stop-color", "#2E5BFF")
       .attr("stop-opacity", 0);

    // area gradient

    svg.append("path")
       .datum(dataset)
       .attr("class", "area")
       .attr("fill", "url(#svgGradient)")
       .attr("d", area);

    // 9. Append the path, bind the data, and call the line generator
    // 9. Append the path, bind the data, and call the line generator
    svg.append("path")
        .datum(dataset) // 10. Binds data to the line
        .attr("class", "line") // Assign a class for styling
        .attr("d", line); // 11. Calls the line generator

    // 12. Appends a circle for each datapoint
    svg.selectAll(".dot")
        .data(dataset)
      .enter().append("circle") // Uses the enter().append() method
        .attr("class", "dot") // Assign a class for styling
        .attr("cx", (d, i)=>{ return xScale(i) })
        .attr("cy", (d)=>{ return yScale(d.y) })
        .attr("r", 3.5)
        .on("mouseover",function(d) {
          var mouse = d3.mouse(this);
          tip.transition()
            .duration(100)
            .style("opacity", 1);
          tip
            .text(d.y.toFixed(tooltipDecimals))
            .style("left", mouse[0]+27+"px")
            .style("top", mouse[1]+110+"px");
          }
        )
        .on("mouseout",function(d) {
          tip.transition()
            .duration(1000)
            .style("opacity", 0);
          }
        )
    }

    // On Screen Resize
    function onResize (entry) {
      if (entry.contentRect) {

        let screenWidth = entry.contentRect.width

        if (screenWidth < maxWidth) {
            width = screenWidth - 35
            buildGraph()
        }
        else
            width = initWidth
            buildGraph()
        }
    }

    // Resize Observer Callback
    el.parentElement.onresize = onResize;
    // Instantiate Resize Observer
    let resizeObserver = ResizeManager;
    resizeObserver.observe(el.parentElement);
}


export default GraphLineComparative
