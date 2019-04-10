import { h } from "hyperapp"
import * as d3 from 'd3'
import ResizeManager from "../../service/ResizeManager.js"
import Log from "../../utils/Log.js"
import transforms from "../../datatransform/*.js"
import request from '../../service/Request.js'


const GraphCircular=(apiurl,transform,title)=>el=>{

  // 2. Use the margin convention practice
  var margin = {top: 0, right: 20, bottom: 0, left: 20},
    initWidth = 410,  // graph initial width
    width = 665 // Use the window's width
    , maxWidth = 692
    , height = 240 // Use the window's height
    , radius = Math.min(width, height)/2;

  // Labels for the legend
  const legendLabels = ['SEA','Native','YouTube','Facebook']
  const legendPositionsMobile = ["translate(-100,60)", "translate(-100,160)", "translate(60,60)", "translate(60,160)"]
  const legendPositionsDesktop = ["translate(-295,-60)", "translate(-295,50)", "translate(245,-60)", "translate(245,50)"]
  var legendPositions = legendPositionsDesktop;

  // Tooltip no. of decimals
  const tooltipDecimals = 0;
  var yTranslation = height/2;

  //var color = d3.scaleOrdinal(d3.schemeCategory10);
  var color = d3.scaleOrdinal(['#2E5BFF','#8C54FF','#00C1D4','#FAD050'])
  var colorLabel = d3.scaleOrdinal(['#FAD050','#00C1D4','#2E5BFF','#8C54FF'])
  var color2 = d3.scaleOrdinal(['#2E5BFF','#FFF','#8C54FF','#FFF','#00C1D4','#FFF','#FAD050','#FFF'])

  // Random Dataset
  var n = 4;
  var datasetInverted = [];
  var dataset = d3.range(n).map((d)=>{ return {"x": d3.randomUniform(30000)() } })
  var dataset2 = d3.range(n*2).map((d,i)=>{
    var count = Math.floor(i/2)
    var val
    if(i%2 == 0) val = dataset[count].x*.7
    else val = dataset[count].x*.3
    return {"x": val}
  })
  var datasetInverted = d3.range(n).map((d, i)=>{ return {"x": dataset2[i].x } })



  // Gets transformed data and packs it into local objects
  function recivedData( response ) {

    // Logging the response
    Log('INFO', 'SUMMARY ➜ '+ title +' ☻ DATA TRANSFORM', response)

    dataset = response.dataset
    dataset2 = response.dataset2
    datasetInverted = response.datasetInverted

    el.parentElement.querySelector("blockoverall").innerText = response.overall[0]
    el.parentElement.querySelector("blockspent").innerText = response.overall[1]

    buildGraph()
  }

  // Ask API for data, Transform data, call response
  if(apiurl) { let quote = request.getQuery(apiurl).then(transforms[transform].default).then(recivedData) }

  // Builds D3 Graph
  function buildGraph() {

      // Remove graph if exists
      if(d3.select(el)) {
        d3.select(el).select("svg").remove()
        d3.select(el).selectAll('svg').remove()
      }

      // Create a Pie
      var pie = d3.pie(dataset)
          .value( d=>d.x )
          .sort(null);

      // Create an Arc
      var arc = d3.arc()
          .innerRadius(radius-60)
          .outerRadius(radius-20);

      var arc2 = d3.arc()
          .innerRadius(radius-20)
          .outerRadius(radius-10);

      // The number of datapoints
      var n = 5;

      // 5. X scale will use the index of our data
      var xScale = d3.scaleLinear()
          .domain([0, n-1]) // input
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
          .attr("width", width)
          .attr("height", height);

      // 12. Appends a circle for each datapoint
      var path = svg.append("g")
        .attr("transform", "translate(" + width/2 + "," + yTranslation + ")")
        .selectAll("path")
          .data(pie(datasetInverted))
        .enter().append("path") // Uses the enter().append() method
          .attr("fill", (d,i)=>{ return color(i) })
          .attr("stroke", "#fff")
          .attr("stroke-width", "0px")
          .attr("d", arc) // Assign a class for styling
          .on("mouseover", function(d,i) {
            var mouse = d3.mouse(this);
            tip.transition()
              .duration(100)
              .style("opacity", 1);
            tip
              .text(dataset[i].x.toFixed(tooltipDecimals))
              .style("left", mouse[0]+330+"px")
              .style("top", mouse[1]+220+"px");
            }
          )
          .on("mouseout", function(d) {
            tip.transition()
              .duration(400)
              .style("opacity", 0);
            }
          )


      // 12. Appends a circle for each datapoint
      var path2 = svg.append("g")
        .attr("transform", "translate(" + width/2 + "," + yTranslation + ")")
        .selectAll("path")
          .data(pie(dataset2))
        .enter().append("path") // Uses the enter().append() method
          .attr("fill", (d, i)=>{ return color2(i) })
          .attr("opacity", ".3")
          .attr("stroke", "#fff")
          .attr("stroke-width", "0px")
          .attr("d", arc2) // Assign a class for styling
          .on("mouseover", function(d,i) {
            var mouse = d3.mouse(this);
            tip.transition()
              .duration(100)
              .style("opacity", 1);
            tip
              .text(dataset2[i].x.toFixed(tooltipDecimals))
              .style("left", mouse[0]+330+"px")
              .style("top", mouse[1]+220+"px");
            }
          )
          .on("mouseout",function(d) {
            tip.transition()
              .duration(400)
              .style("opacity", 0);
            }
          )


      // Legend
      var legend5 = svg.append("g")
        .attr("transform", "translate(" + width/2 + "," + height/2 + ")")
      .selectAll('.legend')
          .data(legendLabels)

      var p = legend5.enter().append("g").attr("class", "legendCircular")
          p.attr("transform", (d,i)=>{ return legendPositions[i] })
          p.append("span").attr("class", "key-dot").style("background", (d, i)=>{ return color(legendLabels.length-i) })

          p.append("circle") // Uses the enter().append() method
            .attr("class", "dotLegend") // Assign a class for styling
            .attr("fill", (d, i)=>{ return colorLabel(i) })
            .attr("r", 8)
            .attr("transform", "translate(-22,-6.5)")
          p.insert("text").text( (d, i)=>{ return legendLabels[i] })
            .attr("font-size", "18px")
            .attr("fill", "#8798AD")

          // Legend Labels
          p.insert("text").text("Overall")
            .attr("font-size", "13px")
            .attr("fill", "#8798AD")
            .attr("transform", "translate(-30,29)")
          p.insert("text").text("Spent")
            .attr("font-size", "13px")
            .attr("fill", "#8798AD")
            .attr("transform", "translate(-30,49)")

          // Legend Data
          p.insert("text").text( (d,i)=>{ return dataset[i].x.toFixed(0) })
            .attr("font-size", "13px")
            .attr("fill", "#8798AD")
            .attr("transform", "translate(40,29)")
          p.insert("text").text( (d,i)=>{ return dataset2[i*2].x.toFixed(0) })
            .attr("font-size", "13px")
            .attr("fill", "#8798AD")
            .attr("transform", "translate(40,49)")

      }

      // On Screen Resize
      function onResize (entry) {
          if (entry.contentRect) {
              var screenWidth = entry.contentRect.width

              if (screenWidth < 651) {
                  width = screenWidth
                  height = 490
                  legendPositions = legendPositionsMobile
                  yTranslation = 140
                  buildGraph()
              }
              else {
                  width = screenWidth
                  height = 250
                  legendPositions = legendPositionsDesktop
                  yTranslation = height/2
                  buildGraph()
              }
          }
      }

      // Resize Observer Callback
      el.parentElement.onresize = onResize;
      // Instantiate Resize Observer
      let resizeObserver = ResizeManager;
      resizeObserver.observe(el.parentElement);

      buildGraph()
}


export default GraphCircular
