LeapController =
{

    pongGame : null,
    init : function(_pongGame, leap)
    {
        var options = {
          enableGestures: false
        };
        pongGame = _pongGame;
        leap.loop(options,this.loapLoop)
        console.log(pongGame);
    },
    loapLoop : function(frame)
    {
        // Bail out early if possible
        if(!frame.valid) return;
        if(frame.hands.length == 0)return;
        frame.hands.forEach(function(hand){
            y = hand.indexFinger.tipPosition[1];
            //accelerate the position a bit.
            y = 600 - (y* 1.8) ;
            if(hand.type == "right"){
                pongGame.rightPaddle.setY(y);
            }
            else{
                pongGame.leftPaddle.setY(y);
            }
            if(!pongGame.playing && hand.pinchStrength > 0.99)
            {
                pongGame.startDoublePlayer();
            }
        });
    }
}
