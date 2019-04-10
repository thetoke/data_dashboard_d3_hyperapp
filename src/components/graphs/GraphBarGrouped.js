import { h } from "hyperapp";
import * as d3 from 'd3'
import ResizeManager from "../../service/ResizeManager.js"
import Log from "../../utils/Log.js"
import transforms from "../../datatransform/*.js"
import request from "../../service/Request.js"


const GraphBarGrouped=(apiurl,transform,title)=>el=>{

  // 2. Use the margin convention practice
  var margin = {top: 20, right: 20, bottom: 20, left: 29},
      initWidth = 410,  // graph initial width
      width = 410,      // graph initial width
      maxWidth = 692,   // graph maximum width
      height = 80;      // graph height

  // Tooltip no. of decimals
  var tooltipDecimals = 2;

  // Group
  var itemsInGroup = 7;
  var groupPadding = 12;

  // The number of datapoints
  var n = 28;

  //  Random Dataset8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
  var dataset = d3.range(n).map((d)=>{ return {"y": d3.randomUniform(1)() } })
  var weeks = [1,2,3,4];

  // Gets transformed data and packs it into local objects
  function recivedData( response ) {

      // Logging the response
      Log('INFO', 'SUMMARY ➜ '+ title +' ☻ DATA TRANSFORM', response)

      if (response) {
      //dataset = response.data.details[ i ].values
      var output=[]
      weeks = []

      let counter = 0;
      let graphdata = response.details;
      for (let i=0; i<graphdata.length; i++) {
           weeks.push( graphdata[i].week )
           for (let j=0; j<graphdata[i].values.length; j++) {
               counter++;
               if( counter < 29 ) output.push( {y: graphdata[i].values[j]} )
           }
      }

      //console.log(output);
      //dataset = d3.range(n).map((d)=>{ return {"y": output } })
      dataset = output

      if (response.overall) {
        el.parentElement.querySelector("blockvalue").innerText = Number(Number(response.overall.amount).toFixed(0)).toLocaleString('de-DE')
        el.parentElement.querySelector("blockchange").innerText = response.overall.change
      }

      buildGraph()
      }
  }

  // Ask API for data, Transform data, call response
  if(transforms[transform].default) { let quote = request.getQuery(apiurl).then(transforms[transform].default).then(recivedData) }


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
        .domain([0, 20])    // input
        .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function(d) { return d.y; })]) // input
        .range([0, height]); // output

    // 6. Y scale will use the randomly generate number
    var verticalScale = d3.scaleLinear()
        .domain([d3.max(dataset, function(d) { return d.y; }), 0 ]) // input
        .range([0, height]); // output

    // 6. Y scale will use the randomly generate number
    var verticalScaleMaximum = d3.scaleLinear()
        .domain([d3.max(dataset, function(d) { return ( Math.round( d.y / 1000)*1000 ); }), d3.max(dataset, function(d) { return ( Math.round( d.y /1000)*1000 ); }) ]) // input
        .range([height, height]); // output

    var yScales = d3.scaleLinear()
        .domain([0, 20])
        .range([0, width]); // output

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
        .call(d3.axisBottom(xxScale)
                .tickValues([ 2.5, 7.5, 12.5, 17.5 ])
                .tickFormat((d,i) => { return ("Week "+ weeks[i]) }));
    // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag / vertical scale
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(verticalScale).ticks(2, "s")) // Create an axis component with d3.axisLeft

    //svg.append("g")
    //    .attr("class", "y axis")
    //    .attr("transform", "translate(0," + -80 + ")")
    //    .call(d3.axisLeft( (verticalScaleMaximum).ticks(2, "s") )) // Create an axis component with d3.axisLeft

    // grid lines
    svg.append("g")
        .attr("class", "grid")
        .attr("stroke", "#8798AD")
        .call(
          d3.axisBottom(yScales)
            .tickValues([ 0, 5, 10, 15, 20])
            .tickSize(80)
            //.tickFormat("")
        )
        .selectAll("text").remove()

    var xpos = -width/groupPadding*0.7; //-13
    var barColor

    // 12. Appends a rectangle for each datapoint
    svg.selectAll(".bar")
        .data(dataset)
      .enter().append("rect") // Uses the enter().append() method
        .attr("class", "barGrouped") // Assign a class for styling
        .attr("x", (d, i)=>{
          if (i%itemsInGroup == 0) xpos += width/groupPadding
          else xpos += width/35.3
          return xpos
        })
        .attr("fill", (d, i)=>{
          if (i < 21) barColor = "#AEBACA";
          else barColor = "#2E5BFF";
          return barColor
        })
        .attr("y", (d)=>{ return height - yScale(d.y) })
        .attr("width", width/43)
        .attr("height", (d)=>{ return yScale(d.y) })
        .on("mouseover",function(d) {
          var mouse = d3.mouse(this);
          tip.transition()
            .duration(100)
            .style("opacity", 1);
          tip
            .text( Number(Number(d.y).toFixed(0)).toLocaleString('de-DE') )
            .style("left", mouse[0]+27+"px")
            .style("top", mouse[1]+110+"px");
          }
        )
        .on("mouseout",function(d) {
          tip.transition()
            .duration(500)
            .style("opacity", 0);
          }
        )
        .transition()
        .duration(1000)
        .ease(d3.easeExp)
          .attr("height", (d)=>{
              return yScale(d.y) }) //Just the data value
          .attr("y", (d)=>{
              return (height - yScale(d.y))
          }); //Svg height minus data value


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


export default GraphBarGrouped
