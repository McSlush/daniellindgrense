var m = require("mithril");
var Experience = require("../module/experienceModule");

module.exports = {
    oninit: function() {
        Experience.loadList();
    },

    view: function() {
        return m("div", {class: "experienceHolder"}, [
            m("h2", "Kunskaper"),
            Experience.list.map(function(exp) {
                return m("div", {class: "experienceRating"}, [
                    m("p", {class: "experienceLanguage"}, exp.language, [
                        m("div", {class: "rank " + exp.rankExtension})
                    ])
                ])
            })
        ])
    }
};