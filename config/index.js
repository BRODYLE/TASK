var configValues = require("./config");

module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://'+configValues.myhost+'/'+configValues.mydb;
    }
}