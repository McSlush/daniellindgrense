var m = require("mithril");

var CV = {
    list: [],
    content: "",

    loadList: function() {
        return m.request({
            method: "GET",
            url: "./json/cv.json",
            withCredentials: true
        })
            .then(function(result) {
                CV.list = result.texts
            })
    },

    loadContent: function() {
        return m.request({
            method: "GET",
            url: "./json/cv.json",
            withCredentials: true
        })
            .then(function(result) {
                CV.content = result
            })
    }
};

module.exports = CV;
