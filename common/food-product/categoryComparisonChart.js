const d3 = require('d3');
const categoryComparisonChart = {};

categoryComparisonChart.create = (el, data) => {
  const margin = { top: 50, right: 50, bottom: 30, left: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.5);

  const y = d3.scaleLinear()
      .rangeRound([height, 0]);

  const xAxis = d3.axisBottom()
      .scale(x);

  const yAxis = d3.axisLeft()
      .scale(y);

  const svg = d3.select(el).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const colorForGoodNutrients = d3.scaleOrdinal()
    .range(['#3182bd', '#9ecae1']);
  const colorForBadNutrients = d3.scaleOrdinal()
    .range(['#e6550d', '#fdae6b']);
  const colorForNeutralNutrients = d3.scaleOrdinal()
    .range(['#a1d99b', '#74c476']);

  colorForGoodNutrients
    .domain(d3.keys(data[0]).filter((key) => key !== 'nutrient' && key !== 'quality'));
  colorForBadNutrients
    .domain(d3.keys(data[0]).filter((key) => key !== 'nutrient' && key !== 'quality'));
  colorForNeutralNutrients
    .domain(d3.keys(data[0]).filter((key) => key !== 'nutrient' && key !== 'quality'));

  data.forEach((d) => {
    const { product, category, quality } = d;
    const dataPoints = { [product]: 'product', [category]: 'category' };
    const highestLevel = dataPoints[Math.max(product, category)];
    let y0 = 0;
    let order;
    if (quality === 'BadNutrients') {
      order = colorForBadNutrients.domain().map((dpoints) => dpoints).sort((a, b) => +d[a] - +d[b]);
    } else if (quality === 'GoodNutrients') {
      order = colorForGoodNutrients
        .domain().map((dpoints) => dpoints).sort((a, b) => +d[a] - +d[b]);
    } else {
      order = colorForNeutralNutrients
        .domain().map((dpoints) => dpoints).sort((a, b) => +d[a] - +d[b]);
    }

    d.levels = order.map((name) => {
      let result;
      if (name === highestLevel) {
        result = { quality, name, y0, y1: Math.max(product, category) };
      } else {
        result = { quality, name, y0, y1: y0 += +d[name] - y0 };
      }
      return result;
    });
    d.total = Math.max(d.product, d.category);
  });

  data.sort((a, b) => b.total - a.total);

  x.domain(data.map((d) => d.nutrient));
  y.domain(d3.extent(data, (d) => d.total)).nice();

  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

  svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('dx', -80)
      .attr('dy', 15)
      .style('fill', 'black')
      .style('text-anchor', 'middle')
      .text('nutrient level per 100g/100mL');

  const nutrient = svg.selectAll('.nutrient')
      .data(data)
    .enter()
      .append('g')
      .attr('class', 'g')
      .attr('transform', (d) => `translate(${x(d.nutrient)},0)`);

  const tooltip = d3.select('body').append('div')
      .style('visibility', 'hidden')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('background-color', 'rgba(0, 0, 0, 0.5)')
      .style('padding-top', '10px')
      .style('padding-right', '10px')
      .style('padding-bottom', '10px')
      .style('padding-left', '10px')
      .style('color', '#FFFFFF')
      .style('font-weight', 'bold');

  nutrient.selectAll('rect')
      .data((d) => d.levels)
    .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', x.step() / 2)
      .attr('y', (d) => y(d.y1))
      .attr('height', (d) => y(d.y0) - y(d.y1))
      .on('mouseover', (d) => {
        tooltip.text(`${d.name}: ${d.y1.toFixed(2)}`)
            .style('visibility', 'visible')
            .style('left', `${d3.event.pageX}px`)
            .style('top', `${d3.event.pageY - 28}px`);
      })
      .on('mouseout', () => tooltip.style('visibility', 'hidden'))
      .style('fill', (d) => {
        const { quality } = d;
        let resultColor;
        if (quality === 'BadNutrients') {
          resultColor = colorForBadNutrients(d.name);
        } else if (quality === 'GoodNutrients') {
          resultColor = colorForGoodNutrients(d.name);
        } else {
          resultColor = colorForNeutralNutrients(d.name);
        }
        return resultColor;
      });
};

module.exports = categoryComparisonChart;
