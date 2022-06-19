const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Available endPoints</title>
    </head>
    <body>
        <h2>End points to get data: </h2>
        <a href="/section1">/section1   <br>   </a>
        <a href="/section2">/section2   <br>   </a>
        <a href="/section3">/section3   <br>   </a>
        <a href="/section5">/section5   <br>   </a>
        <a href="/sixSection">/sixSection</a>
        
    </body>
    <style>
        a, h2 {
            text-decoration: none;
        color: teal;
        font-family: sans-serif;
        }
    </style>
    </html>`);
});

app.get('/section1', (req, res) => {
    res.send({
        "logo":"https://linkedinreplication.web.app/assets/Web/Images/post.jpg",
        "navItems":["About", "Services","Project", "Contact"],
        "backgroundImage":"https://linkedinreplication.web.app/assets/Web/Images/post.jpg",
        "heading":"The Smartest Way To Buy a House",
        "content":"It was popularised in sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.",
         "searchBar":{
             "title":"Location",
             "icon":"place",
              "info":"Find destination"
         },
        "belowContent":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    });
});


app.get('/section2', (req, res) => {
    res.send({
        "heading":"Explore Our Project",
        "paragraph1": "We love our residential design and build projects - big and small From full builds, major renovations or a new lease off life to individual space and create perfect place.",
        "housesImages":[
           { 
                    "image":"/Web/Images/backgroundImage.jpg",
                    "title":"Faishore Duel Haven",
                    "paragraph":"Manipulating the space and livingroom each apartment",
                    "date":" January 18-2022"
            
        },
        { 
                    "image":"/Web/Images/house1.jpg",
                    "title":"Modern Penthouse",
                    "paragraph":"custom furnishings and window furnishing to soften the space",
                    "date":"January 15 -2022"
            
        },
        {
                    "image":"/Web/Images/house2.jpg",
                    "title":"Faishore Home Garden",
                    "paragraph":"Renovation result is a light and breezy modern home garden",
                    "date":" January 18-2022"
            
        },
        { 
                    "image":"/Web/Images/house3.jpg",
                    "title":"Hastings Apartment",
                    "paragraph":"Apartment needed cosmetic changes to bring it to life",
                    "date":"January 10-2022"
            
        }
        ]
    });
});


app.get('/section3', (req, res) => {
    res.send({
        "image":"/Web/Images/house4.jpg",
         "heading":"Enhance you interior through design",
         "paragraph":"but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
         "largeImage":"/Web/Images/backgroundImage.jpg"
    });
});


app.get('/section5', (req, res) => {
    res.send({
        "images":["/Web/Images/face1.jpg","/Web/Images/face2.jpg",
        "/Web/Images/face3.jpg","/Web/Images/face4.jpg","/Web/Images/face5.jpg"
        ,"/Web/Images/face6.jpg","/Web/Images/face7.jpg","/Web/Images/face8.jpg","/Web/Images/face9.jpg"]
        ,"heading":"Trusted by over 150+ organziations in more than 50 countries",
        "icon":"format_quote",
        "paragraph":". It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        });
});



app.get('/sixSection', (req, res) => {
    res.send({
        "heading":"Ready to take action?",
        "paragraph":"Get in touch",
        "icon":"search",
       "logo" :"/Web/images/white.jpg",
       "logoHeading":"VEEZA",
       "list1":["Technology Park","8 - 14 Marie Curie Street","08042 Barcelona"],
       "list2":["+27799575686","veeza@gmail.com"],
       "list3":["About Us","Command Center","Documentation"]
       });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
