import { WechatyBuilder } from 'wechaty';
import qrcode from 'qrcode-terminal'; // ⬅️ das ist der Fix!

const bot = WechatyBuilder.build({
  name: 'my-bot',
  puppet: 'wechaty-puppet-wechat4u',
});

bot.on('scan', (qrcodeText) => {
  console.log('📱 Scan this QR code in your WeChat app:');
  qrcode.generate(qrcodeText, { small: true });
});

bot.on('login', user => console.log(`✅ Logged in as ${user}`));

bot.on('message', async message => {
  if (message.text().toLowerCase() === 'hi') {
    await message.say('Hey 👋 Ich bin dein WeChat-Bot!');
  }
});

bot.start();
