const withOffline = require('next-offline')

module.exports = withOffline({
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js'
  }
})
