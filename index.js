const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
  console.log('준비됐다');
  client.user.setActivity('ㄴ 도움말')
});

client.on('message', message => {
  if (message.content === 'ㄴ 도움말') {
    message.channel.send('ㄴ (대화말) | ㄴ 봇개디 | ㄴ 개발자 | ㄴ 대화말 보기');
  }
  if (message.content === 'ㄴ 봇개디') {
    message.channel.send('봇개디는 많은 봇 개발자와 봇들이 모여있는 봇 개발자 디스코드입니다. 우리의 서버 봇개디로 놀러오세요! https://discord.gg/7QXuH2u')
  }
  if (message.content === 'ㄴ 개발자') {
    message.channel.send('봇 개발자 : 네즈#9999')
  }
  if (message.content === 'ㄴ 대화말 보기') {
    message.channel.send('(접두사: ㄴ) 안녕 | 넌 누구야? | 놀아줘 | 추가예정')
  }
});

client.on('message', message => {
  if (message.content === 'ㄴ 안녕') {
    message.channel.send('안녕하세요!');
  }
  if (message.content === 'ㄴ 넌 누구야?') {
    message.channel.send('봇개디는 많은 봇 개발자와 봇들이 모여있는 봇 개발자 디스코드입니다. 우리의 서버 봇개디로 놀러오세요! https://discord.gg/7QXuH2u')
  }
  if (message.content === 'ㄴ 놀아줘') {
    message.channel.send('싫은데')
  }
  if (message.content === 'ㄴ 추가예정') {
    message.channel.send('이스터에그를 찾으셨습니다. 축하드려요!')
  }
});

client.login(process.env.TOKEN);
