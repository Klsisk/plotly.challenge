//Create a function plotting (Bar, gauge, bubble)
function plotting(sample) {
  // Get the data from the json file
  d3.json("data/samples.json").then((importedData) => {
    var metadata = importedData.metadata;
    var array = metadata.filter(object => object.id == sample);
    var results = array[0];
    var metadata_panel = d3.select("#sample-metadata");
    metadata_panel.html("");
    Object.entries(results).forEach(([key, value]) => {
      metadata_panel.append("p").text(`${key}: ${value}`);
    });
  });
}
//Create a function for building the charts
function buildChart(sample) {
  d3.json("data/samples.json").then((importedData) => {
    var samples = importedData.samples;
    var array = samples.filter(object => object.id == sample);
    var results = array[0];
    var otu_ids = results.otu_ids;
    var otu_labels = results.otu_labels;
    var sample_values = results.sample_values;
    // Bubble Chart
    var layoutForBubble = {
      title: "<b>Bacteria Cultures Per Sample</b>",
      margin: {t: 0},
      hovermode: "closest",
      xaxis: {title: "<b>OTU ID</b>"},
      margin: {t: 30},
      //titlefont: {size: 30 }
      font:{
        family:'Georgia, serif',
        size:14, 
        color: 'darkblue'
      }
    };
    var dataForBubble = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: "Picnic"
            }
    }];
    
    Plotly.newPlot("bubble", dataForBubble, layoutForBubble);
	
	//Horizontal Bar Chart
	// Slice the first 10 objects for plotting and reverse the array due to Plotly's default
	var yticks = otu_ids.slice(0, 10).map(otuName => `OTU ${otuName}`).reverse();
	var dataForHorizontalBar = [
	  {
		y: yticks,
		x: sample_values.slice(0, 10).reverse(),
		text: otu_labels.slice(0, 10).reverse(),
		type: "bar",
		orientation: "h",
	  }];
	var layoutForBar = {
	title: "<b>Top 10 OTUs Found in Individual</b>",
	margin: {
	  l: 100,
	  r: 100,
	  t: 100,
	  b: 100
  },
  font:{
    family:'Georgia, serif',
    size:14, 
    color: 'darkblue'
  }
	};
	Plotly.newPlot("bar", dataForHorizontalBar, layoutForBar);
  });
}
// Create init function
function init() {
 var dropdownMenu = d3.select("#selDataset");
  d3.json("data/samples.json").then((data) => {
    var dataset = data.names;
    dataset.forEach((id) => {
      dropdownMenu
        .append("option")
        .text(id)
        .property("value", id);
    });
    var sample1 = dataset[0];
    buildChart(sample1);
    plotting(sample1);
  });
}
// Create optionChanged function
function optionChanged(newData) {
  buildChart(newData);
  plotting(newData);
}
init();