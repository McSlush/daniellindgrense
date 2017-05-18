var m = require("mithril");

var Navbar = {
    route: {
        cv: "/cv",
        project: "/projekt",
        experience: "/kunskaper",
        contact: "/kontakt"
    },

    controller: function () {
        return Navbar.route;
    }
};

module.exports = Navbar;