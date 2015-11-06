var MotionTest = MotionTest || {};

MotionTest.HandleLeapFrame = function(frame)
{
    if(!frame.valid)return;
    if(frame.hands.length == 0) return;
    var hand = frame.hands[0];
    var indexfinger = hand.indexFinger;
    var ipos = indexfinger.tipPosition;
    var tpos = hand.thumb.tipPosition;
    var x = ipos[0] - tpos[0];
    var y = ipos[1] - tpos[1];
    var z = ipos[2] - tpos[2];
    var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
    var r = hand.roll();
    var p = hand.pitch();
    Helper.SendEvent("motion",
        {
            position:indexfinger.tipPosition,
            pinch : hand.pinchStrength,
            dist : dist
        }
    );
}
