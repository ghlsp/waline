const Waline= require('@waline/vercel'); 
  
 module.exports = Waline({ 
   forbiddenWords: [ 
     '习近平', 
     '毛泽东', 
     '快递', 
     '空包', 
     '代发', 
     '单号' 
   ], 
   disallowIPList: [ 
     '220.173.125.83', 
     '222.83.150.92' 
   ], 
   secureDomains: [ 
     'kotodama.elpsy.cn' 
   ], 
});
 Waline.init({
  el: '#waline',
  // ...
  reaction: [
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png',
    'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png',
  ],
});
