# platservices-client
![](https://img.shields.io/github/package-json/v/PS-XYZ-Developement/platservices-client?style=for-the-badge) ![](https://img.shields.io/discord/898907342832279612?label=discord&style=for-the-badge)

## What exactly is platservices-client?
platservices-client is a lightweight npm module that provides a simple use of the Discord API!

### Example Code
```js
const PS = require('platservices-client')
const PSClient = new PS({
    token: "YOUR_TOKEN_HERE",
    prefix: "%"
})
  
PSClient.startBot()
```