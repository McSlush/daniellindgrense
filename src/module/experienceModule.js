var m = require("mithril");

var Experience = {
    list: [],

    loadList: function () {
        return m.request({
            method: "GET",
            url: "./json/experience.json",
            withCredentials: true
        })
            .then(function(result) {
                Experience.list = result
            })
    }
};

module.exports = Experience;