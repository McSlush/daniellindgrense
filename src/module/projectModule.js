var m = require("mithril");

var Project = {
    list: [],

    loadList: function () {
        return m.request({
            method: "GET",
            url: "./json/project.json",
            withCredentials: true
        })
            .then(function (result) {
                Project.list = result
            })
    }
};

module.exports = Project;