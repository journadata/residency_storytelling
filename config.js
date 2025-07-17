var config = {
    // style: 'mapbox://styles/beagaga/cmcq9m7ab039p01r18c3jgyov',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYmVhZ2FnYSIsImEiOiJjbHhnYzBva2Qwdzc3MmpzaWI3ZW84aWd2In0.0H5x69f-7jRqYvNYdE3oNw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Waiting for Care',
    subtitle: 'Will I arrive alive? When queueing is not an option',
    byline: 'By Beatriz Gálvez',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: '',
            description: 'Imagine needing care for an elderly loved one, only to be told the wait could last over a year. In Catalonia, this is the reality for many families trying to access senior residencies. <br><br> <img src="./assets/residency_population.png" style="width:100%; margin-top:20px;"/>',
            location: {
                center: [1.70129, 41.69879],
                zoom: 7.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'pref_2020',
                    opacity: 1
                },
                {
                    layer: 'muni_2045',
                    opacity: 0
                }, 
                {
                    layer: 'pref_2045',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                }     
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'intro3',
            alignment: 'center',
            title: 'The average waiting time?',
            image: '',
            description: 'Is the second question that has to face most of those families. After scraping data from more than 800 residency listings provided by the regional government, the picture that emerges is one of inequality and long waits.',
            location: {
                center: [1.70129, 41.69879],
                zoom: 7.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'pref_2020',
                    opacity: 1
                },
                {
                    layer: 'muni_2045',
                    opacity: 0
                }, 
                {
                    layer: 'pref_2045',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                }     
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'intro2',
            alignment: 'center',
            title: '',
            image: './assets/residence_inglada_via.jpg',
            description: 'The average time on the waiting list is <strong> 13 months</strong>. But averages can hide extremes. At one facility, Residència de la Fundació Privada Asil Inglada, seniors and their families face the toughest test of patience—waiting a staggering 70 months, nearly six years. It’s a lifetime for those who urgently need care',
            location: {
                center: [1.69544, 41.34638],
                zoom: 19.36,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Most Public Places and Long Wait: Creu de Palau, Girona',
            image: './assets/palau_girona.jpg',
            description: '<strong>Residència per Gent Gran Creu de Palau, Girona. </strong> Creu de Palau in Girona has the highest number of public places (222) and still a waiting time of 10 months. This highlights the intense demand for public elderly care in large facilities across Catalonia.',
            location: {
                center: [2.82403, 41.95817],
                zoom: 12.99,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Top Private Center: Les Corts, 255 Places',
            image: './assets/Sanitas_LesCorts.webp',
            description: '<strong>Sanitas Residencial Les Corts </strong>in Barcelona leads with 255 private places.Despite being private, residents wait up to 4 years and 2 months for admission."',
            location: {
                center: [2.13561, 41.38603],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Longest Wait in Barcelona: 5+ Years at Sagrada Família',
            image: './assets/SanitasSagradaFamilia.webp',
            description: '<strong> Sanitas Residencial Sagrada Familia, Barcelona. </strong>Sanitas Residencial Sagrada Família has the longest wait in Barcelona — over 5 years. With only 15 public places and 133 private, demand clearly outpaces supply.',
            location: {
                center: [2.09435, 41.42105],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Fortpienc: Most Public Spots in Barcelona, Still Long Wait',
            image: './assets/FortPienc_barcelona.jpg',
            description: '<strong>Residència Municipal Fortpienc, Barcelona</strong> Fortpienc Municipal Residency offers 130 public places — the most in Barcelona — yet has an 11-month wait.Even city-run residencies face major bottlenecks.',
            location: {
                center: [2.17517, 41.40201],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro',
            alignment: 'center',
            title: 'No time for waiting lists',
            image: '',
            description: 'Behind each number is a family waiting, hoping, and counting the days. This data uncovers a pressing challenge: how to make senior care more accessible and fair for everyone in Catalonia.',
            location: {
                center: [],
                zoom: 7.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'muni_2020',
                    opacity: 1
                },
                {
                    layer: 'pref_2020',
                    opacity: 1
                },
                {
                    layer: 'muni_2045',
                    opacity: 0
                }, 
                {
                    layer: 'pref_2045',
                    opacity: 0
                },
                {
                    layer: 'public',
                    opacity: 0
                }     
            ],
            onChapterExit: [
            ]
        },
    ]
};
