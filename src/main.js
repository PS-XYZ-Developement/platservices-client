const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const DiscordA = require('discord.js');
const DiscordB = new DiscordA.Client({
  intents: 32767
})

module.exports = class platservicesclient {
  /**
   * @param {String} options.token token for bot
   */
  constructor(options = {}) {
    // super();
    const defaultOptions = {
      token: "none",
      prefix: "!"
    }
    options = _.defaultsDeep(options, defaultOptions)
    this.options = options;
    this.token = options.token;
    this.prefix = options.prefix;

    if(options.token == "none") return console.error('[PS-CLIENT] Invalid Token')
    // console.log(this.options) 
  }

  setStatus(status) {
    try {
      DiscordB.setActivity(status)
    } catch (err) {
      console.error('[PS-CLIENT] Only use this function in a "ready" event.')
    }
  }

  on(event) {
    const validEvents = [
      "ready",
      "message",
    ] // Valid Events
    
    if(!validEvents.includes(event)) return console.error('[PS-CLIENT] Invalid Event')
  }

  startBot() {
    DiscordB.login(this.options.token)
  }

  token() {
    console.log(this.options.token)
  }

  prefix() {
    console.log(this.options.token)
  }

  guilds() {
    let guilds = [];
    DiscordB.guilds.cache.forEach(g => {
      guilds.push(g.name)
    })
    console.log(guilds)
  }
}