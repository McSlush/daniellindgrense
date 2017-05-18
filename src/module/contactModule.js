var m = require("mithril");

var Contact = {
    content: "",

    loadContent: function() {
        m.request({
            method: "GET",
            url: "./json/contact.json",
            withCredentials: true
        })
            .then(function(response) {
                Contact.content = response;
            })
    }
};

module.exports = Contact;