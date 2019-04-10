import { h } from "hyperapp"
import * as d3 from 'd3'
import ResizeManager from "../../service/ResizeManager.js"


const GraphBar=(id)=>el=>{
  // 2. Use the margin convention practice
  var margin = {top: 20, right: 20, bottom: 20, left: 24},
      initWidth = 410,  // graph initial width
      width = 410,      // graph initial width
      maxWidth = 692,   // graph maximum width
      height = 80;      // graph height

  const tooltipDecimals = 2;

  // The number of datapoints
  var n = 33;

  //  Random Dataset8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
  var dataset = d3.range(n).map((d)=>{ return {"y": d3.randomUniform(1)() } })


  // Builds D3 Graph
  function buildGraph() {

    // Remove graph if exists
    if(d3.select(el)) d3.select(el).select("svg").remove()

    // 5. X scale will use the index of our data
    var xScale = d3.scaleBand()
        .rangeRound([0, width]) // output
        .padding(0.1);

    // 6. Y scale will use the randomly generate number
    var xxScale = d3.scaleLinear()
        .domain([0, 20]) // input
        .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    var yScale = d3.scaleLinear()
        .domain([0, 1]) // input
        .range([height, 0]); // output


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
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xxScale).ticks(10)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale).ticks(3)) // Create an axis component with d3.axisLeft

    // 12. Appends a rectangle for each datapoint
    svg.selectAll(".bar")
        .data(dataset)
      .enter().append("rect") // Uses the enter().append() method
        .attr("class", "bar") // Assign a class for styling
        .attr("x", (d, i)=>{ return 3+(i* width/34) })
        .attr("y", (d)=>{ return yScale(d.y) })
        //.attr("rx", "5")
        //.attr("ry", "5")
        .attr("width", width/42)
        .attr("height", (d)=>{ return height-yScale(d.y) })
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
            .duration(800)
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

      buildGraph()
}


export default GraphBar
