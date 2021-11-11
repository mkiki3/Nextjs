const path = require('path')

module.exports = {
    resolve: {
        extensions: ['js', 'ts'],
          alias: {
        Component: path.resolve(__dirname,'./components')
    }
    }
  
}