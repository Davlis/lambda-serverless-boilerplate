const Nexmo = require('nexmo');

class MessageService {
  constructor(config) {
    this.API_KEY = config.API_KEY;
    this.API_SECRET = config.API_SECRET;
    this.client = new Nexmo({
      apiKey: this.API_KEY,
      apiSecret: this.API_SECRET,
    });
  }

  send(from, to, text) {
    return new Promise((resolve, reject) => {
      this.client.message.sendSms(
        from,
        to,
        text,
        (e, r) => e ? reject(e) : resolve(r),
      );
    });
  }
}

module.exports = MessageService;
