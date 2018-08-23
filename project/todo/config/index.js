var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${configValues.username}:${configValues.password}@ds129762.mlab.com:29762/node-todos`;
    }
}