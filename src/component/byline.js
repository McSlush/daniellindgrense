var m = require("mithril");
var Byline = require("../module/bylineModule");

module.exports = {
    oninit: function() {
        Byline.loadContent();
    },

    view: function () {
        return m("div", [
            m("img", {id: "profileImg", src: Byline.content.img, alt: Byline.content.imgAlt, title: Byline.content.imgTitle}),
            m("p", Byline.content.text),
            m("p", Byline.content.languages),
            m("div", {class: "social"}, [
                m.trust(Byline.content.linkedIn),
                m.trust(Byline.content.gitHub)
            ])
        ])
    }
};