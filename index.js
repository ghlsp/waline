const Waline = require('@waline/vercel'); 
  
 module.exports = Waline({ 
   

   reaction: [
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png',
  ],

   forbiddenWords: [ 
     '习近平', 
     '毛泽东', 
     '快递', 
     '空包', 
     '代发', 
     '单号', 
     '购买', 
     '傻逼', 
     'SB', 
     '你没🐎', 
     '你没有妈', 
     '你没马', 
     '你没有🐎' 
   ],
 });
