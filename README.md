### Project Description:

Paste the following code into the `<body>` of the HTML file:

```
<div id="reindeer"></div>
```

Paste the following code into your JavaScript file:

```
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");
```

The task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML `<div>` element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

### Technologies used:

HTML, Javascript.

### How to run this project (Node must be installed on your machine):

```
git clone https://github.com/isabelramos/colored-reindeer.git
cd colored-reindeer
npm install http-server -g
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributors:
[Isabel Ramos](https://github.com/isabelramos)