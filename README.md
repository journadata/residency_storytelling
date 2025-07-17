# Interactive Storytelling: Waiting Times for Elderly Residencies in Catalonia



## Project Overview

The main objective of this project was to analyze the waiting time to access elderly residency centers in Catalonia. While the idea seemed simple at first, the process involved several technical challenges, including web scraping, data cleaning, and ultimately, presenting the results in a compelling visual way using Mapbox and Scrollama.

## Step 1: Data Collection via Web Scraping

I started with a public website: [https://infocentres.esocial.gencat.cat/centres-extranet-front/cerca-de-centres/ambits/1](https://infocentres.esocial.gencat.cat/centres-extranet-front/cerca-de-centres/ambits/1). This site listed all the elderly residency centers in Catalonia, but unfortunately, the data was not directly accessible for analysis or download.

By inspecting the URL patterns, I realized that each residency center had a unique numeric identifier at the end of the URL. This allowed me to create a simple form of pagination, systematically scraping pages one by one by incrementing the final part of the URL.

The goal was to extract the key variable: **waiting time**. With a custom Python script using `requests` and `BeautifulSoup`, I looped through the possible IDs, scraping and storing the content.

## Step 2: Data Cleaning and Exploration

After scraping, I loaded everything into a Pandas DataFrame. The cleaning process included:

- Removing missing or malformed entries.
- Extracting numeric values from text-based waiting time descriptions.
- Calculating the **minimum** and **maximum** waiting times.
- Identifying residencies with the **longest** and **shortest** queues.

This step helped me understand the broad variance in waiting times across Catalonia.

## Step 3: Geolocation (Almost)

Initially, I wanted to geolocate all the residency centers to display them on a map. However, geolocating them accurately turned out to be very difficult due to incomplete address data and limitations in the scraped information. 

Rather than get stuck, I chose to leave geolocation for a future iteration with a simpler dataset in my next project and shift focus to something I had wanted to explore for a while: **scroll-driven storytelling with Mapbox**.

## Step 4: Building the Story with Mapbox and Scrollama

I followed the [Mapbox Storytelling Template](https://labs.mapbox.com/storytelling/), which provides a ready-made framework to connect map interactions with a scrolling narrative.

### Tools Used

- **Mapbox GL JS** to render and animate maps.
- **Scrollama.js** for scroll interaction.
- **Visual Studio Code** with the **Live Server** extension for development.

### Setup Process

1. **Cloned the storytelling template repository**.
2. **Installed Live Server** in VS Code to avoid CORS issues while testing locally.
3. **Customized the **``** file**, adding my access token and writing the narrative sections based on my data.
4. **Skipped geolocation**, so each chapter is more textual and thematic.
5. **Styled and edited **`` to personalize the appearance of the project.

### Config.js Highlights

```javascript
var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: false,
    title: 'Waiting for a Place',
    subtitle: 'Residency access times in Catalonia',
    byline: 'By a Digital Storyteller',
    footer: 'Data scraped from gencat.cat',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            title: 'An Invisible Queue',
            image: '',
            description: 'Access to public residencies in Catalonia can involve years of waiting. But how long, exactly?',
            location: {
                center: [1.5, 41.8],
                zoom: 7,
                pitch: 0,
                bearing: 0
            }
        },
        {
            id: 'longest',
            alignment: 'left',
            title: 'The Longest Waits',
            description: 'Some residencies report wait times of over 1000 days.',
            location: {
                center: [1.5, 41.8],
                zoom: 7,
                pitch: 0,
                bearing: 0
            }
        },
        {
            id: 'shortest',
            alignment: 'left',
            title: 'Shorter Waits',
            description: 'A small number of centers had wait times below 90 days.',
            location: {
                center: [1.5, 41.8],
                zoom: 7,
                pitch: 0,
                bearing: 0
            }
        }
    ]
};
```

## Deployment

You can publish your story using any static file hosting service. I suggest GitHub Pages or Netlify. Just upload `index.html` and `config.js` in the same directory.

## What I Learned

- How to reverse engineer simple web pagination logic to scrape data.
- How to clean and structure scraped text into usable tabular form.
- How to design a data story using a scroll-driven map interface.
- The value of knowing when to pivot: dropping the geolocation allowed me to move forward and deliver the final storytelling project.

## What Needs Improvement

- **Geocoding**: For the next iteration, I want to use a more structured geolocation process. This means:

  - Cleaning and standardizing address data.
  - Using a batch geocoder API like Nominatim or Mapbox Geocoding API.
  - Saving lat/lon coordinates to enrich the dataset visually on the map.

- **Layer Import in Mapbox**: I need to better understand how to import external datasets (e.g., GeoJSON) into Mapbox. My goals include:

  - Loading custom GeoJSON layers with residency locations using `map.on('load', () => { map.addSource(...) })`.
  - Styling these layers dynamically (e.g., coloring points by wait time with `circle-color`).
  - Possibly adding interactive tooltips or popups using `map.on('click', 'layer-id', ...)`.
  - Hosting the GeoJSON either locally or through a CDN like GitHub Pages.

## Built With

- Mapbox GL JS
- Scrollama.js
- Python (for scraping and cleaning)
- Pandas
- HTML/CSS/JS


---

This project is a mix of technical scraping, light data journalism, and a testbed for future geo-based storytelling projects. I hope to revisit this with proper geolocation and data layers next time.

