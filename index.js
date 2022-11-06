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
     '220.173.125.84', 
     '222.83.150.92' 
   ], 
   secureDomains: [ 
     'blog.ivil.top', 'ivil.top'
   ], 
});
