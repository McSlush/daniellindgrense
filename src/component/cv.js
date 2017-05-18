var CV = require("../module/cvModule");
var m = require("mithril");

module.exports = {
    oninit: function() {
        CV.loadList();
        CV.loadContent();
    },

    view: function () {
        return m("article", [
            m("h1", CV.content.title),
            m("div", CV.list.map(function (text) {
                return m("p", text.paragraph)
            }))
        ])
    }
};
