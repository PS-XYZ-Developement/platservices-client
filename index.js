const PS = require('./src/main.js')
const PSClient = new PS({
  token: process.env.tokentest,
  prefix: "%"
})

PSClient.startBot()
PSClient.guilds()