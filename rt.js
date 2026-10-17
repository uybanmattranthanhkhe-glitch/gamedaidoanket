/* Kênh thời gian thực Ably: điện thoại gửi câu hỏi/đáp án -> TV nhận ngay.
   Nếu Ably lỗi, trò chơi vẫn chạy bằng Apps Script như cũ. */
(function(){
  var KEY="ejRH6Q.CxqIQg:k0Y0Ox315uymfY9zEBgiFGSTEDZAUtGcbEh_juIlQRk",CH="game-6sacmau",ch=null;
  try{if(window.Ably){ch=new Ably.Realtime({key:KEY}).channels.get(CH)}}catch(e){}
  window.RT={
    pub:function(ev,d){try{ch&&ch.publish(ev,d)}catch(e){}},
    sub:function(ev,cb){try{ch&&ch.subscribe(ev,function(m){cb(m.data)})}catch(e){}}
  };
})();
