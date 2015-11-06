var Helper = Helper || {};
Helper.SendEvent = function(t, obj)
{
    var event = new CustomEvent(t,
      {
          detail: obj
      }
    );
    document.dispatchEvent(event);
}
