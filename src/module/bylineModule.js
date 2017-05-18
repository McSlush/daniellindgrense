var m = require("mithril");

var Byline = {
    content: "",

    loadContent: function() {
        return m.request({
            method: "GET",
            url: "./json/byline.json",
            withCredential: true
        })
            .then(function(result) {
                Byline.content = result;
            })
    }
};

module.exports = Byline;