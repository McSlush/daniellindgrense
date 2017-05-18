var m = require("mithril");
var HeaderInfo = require("../module/headerInfoModule");

module.exports = {
    view: function() {
        return m("div", {id: "headerHolder"}, [
            m.trust(HeaderInfo.header.heading)
        ])
    }
};