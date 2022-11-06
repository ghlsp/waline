const Waline = require('@waline/vercel'); 
  
 module.exports = Waline({ 
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
