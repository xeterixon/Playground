var SwipeDetector = SwipeDetector || {};
SwipeDetector.Enabled = true;
SwipeDetector.HandleLeapFrame = function(frame)
{
    if(!SwipeDetector.Enabled)return;
    if(!frame.valid)return;
    if (frame.gestures.length > 0) {
      frame.gestures.forEach(function(gesture) {
        if (gesture.type == "swipe") {
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
          //Classify as right-left or up-down
          if (isHorizontal) {
            if (gesture.direction[0] > 0) {
              swipeDirection = "right";
            } else {
              swipeDirection = "left";
            }
          } else { //vertical
            if (gesture.direction[1] > 0) {
              swipeDirection = "up";
            } else {
              swipeDirection = "down";
            }
          }
          if (gesture.state == "start") {
              gesture.handIds.forEach(function(id) {
              var hand = frame.hand(id);
              Helper.SendEvent("swipe",
              {
                  direction: swipeDirection,
                  hand: hand.type,
                  state : gesture.state,
                  speed : gesture.speed
              });
            });
          }
        }
      });
    }
};
