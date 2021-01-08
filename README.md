# Plot.ly - Belly Button Biodiversity

You will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

1. Use the D3 library to read in samples.json.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use sample_values as the values for the bar chart.
    - Use otu_ids as the labels for the bar chart.
    - Use otu_labels as the hovertext for the chart.
  
![image](https://user-images.githubusercontent.com/69765842/104057402-1f8f7c80-51c0-11eb-8aae-fd24d8b75c6d.png)

3. Create a bubble chart that displays each sample.
  - Use otu_ids for the x values.
  - Use sample_values for the y values.
  - Use sample_values for the marker size. 
  - Use otu_ids for the marker colors.
  - Use otu_labels for the text values.
  
  ![image](https://user-images.githubusercontent.com/69765842/104057441-2a4a1180-51c0-11eb-88a6-90a0b61fe522.png)
 
4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page.
6. Update all of the plots any time that a new sample is selected.

Deployment
Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.
 
