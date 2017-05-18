var m = require("mithril");
var Contact = require("../module/contactModule");

module.exports = {
    oninit: function() {
        Contact.loadContent()
    },

    view: function() {
        return m("div", [
            m("h2", "Kontakt"),
            m("div", {id: "contactInfo"}, [
                m("p", Contact.content.title),
                m("p", Contact.content.mail),
                m.trust(Contact.content.linkedIn)
            ])
        ])
    }
};