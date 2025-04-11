import { WechatyBuilder } from 'wechaty';

const bot = WechatyBuilder.build({
  name: 'my-bot',
  puppet: 'wechaty-puppet-wechat',
});

bot.on('scan', (qrcode) => {
  console.log('Scan QR Code to login: ');
  require('qrcode-terminal').generate(qrcode, { small: true });
});

bot.on('login', user => console.log(`✅ Logged in as ${user}`));

bot.on('message', async message => {
  if (message.text().toLowerCase() === 'hi') {
    await message.say('Hey 👋 Ich bin dein WeChat-Bot!');
  }
});

bot.start();
