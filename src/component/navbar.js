var Navbar = require("../module/navbarModule");
var m = require("mithril");


module.exports = {
    view: function() {
        return m("div", {class: "topnav", id: "myTopnav"}, [
            m("a", {href: "#cv"/*Navbar.route.contact, oncreate: m.route.link*/}, "CV"),
            m("a", {href: "#project"/*Navbar.route.contact, oncreate: m.route.link*/}, "Projekt"),
            m("a", {href: "#experience"/*Navbar.route.contact, oncreate: m.route.link*/}, "Kunskaper"),
            m("a", {href: "#contact"/*Navbar.route.contact, oncreate: m.route.link*/}, "Kontakt")
        ])
    }
};