var m = require("mithril");
var Project = require("../module/projectModule");

module.exports = {
    oninit: function () {
        Project.loadList();
    },

    view: function () {
        return m("div", [
            m("h2", "Projekt"),
            Project.list.map(function (project) {
                return m("figure", {class: "projectHolder"}, [
                    m("h4", project.title),
                    m("img", {class: "projectImg", src: project.img, alt: project.alt, title: project.title}),
                    m("figcaption", project.figcaption),
                    m("a", {rel: project.rel, href: project.link, target: "_blank"}, [
                        m("p", project.gitText)
                    ])
                ])
            })
        ])
    }
};