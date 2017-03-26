var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article1':{
        title : 'Article One',
        heading : 'Article One',
        date : 'Feb 23 2017',
        content :`<p> 
               This is article one.This is the content of article 1.
               </p> 
               <p> 
               This is article one.This is the content of article 1.
               </p> 
               <p> 
               This is article one.This is the content of article 1. 
               </p>`
    },
    'article2':{
        title : 'Article Two',
        heading : 'Article Two',
        date : 'Feb 23 2017',
        content :`<p> 
               This is article Two.This is the content of article 2.
               </p> 
               <p> 
               This is article Two.This is the content of article 2.
               </p> 
               <p> 
               This is article Two.This is the content of article 2. 
               </p>`
    },
    'article3':{
        title : 'Article Three',
        heading : 'Article Three',
        date : 'Feb 23 2017',
        content :`<p> 
               This is article Three.This is the content of article 3.
               </p> 
               <p> 
               This is article Three.This is the content of article 3.
               </p> 
               <p> 
               This is article Three.This is the content of article 3. 
               </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate=`<html>
          <head> 
          <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href ="/ui/style.css" rel="stylesheet"/>
          </head>
          <body>
            <div class="container">
              <div>
              <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date}
              </div>
              <div>
                  ${content}
              </div>
            </div>
          </body>
         </html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) { //articleName = article1
   //article[articleName]={}
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

var counter=0;
app.get('/counter', function (req, res){
   counter = counter+1;
   res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/Kavi.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Kavi.jpg'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
