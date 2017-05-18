var m = require("mithril");
var CV = require("./component/cv");
var Navbar = require("./component/navbar");
var HeaderInfo = require("./component/headerInfo");
var Byline = require("./component/byline");
var Project = require("./component/project");
var Experience = require("./component/experience");
var Contact = require("./component/contact");


m.mount(document.getElementById("headerInfo"), HeaderInfo);
m.mount(document.getElementById("navbar"), Navbar);
m.mount(document.getElementById("byline"), Byline);
m.mount(document.getElementById("cv"), CV);
m.mount(document.getElementById("project"), Project);
m.mount(document.getElementById("experience"), Experience);
m.mount(document.getElementById("contact"), Contact);