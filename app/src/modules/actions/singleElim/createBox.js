//-------------------------------------------------------
//create the box that bracket will be built in
//-------------------------------------------------------
function findBox(heats, main, extra) {
  //for now calling the width of each round 200px height 50px
  //width of lines 10px;
  //subject to change
  var rndWid = 200;
  var rndHgt = 55;
  var svgWid = 20;

  var width = heats * rndWid + (heats - 1) * svgWid;
  var height = main / 2 * rndHgt + rndHgt * 1.5;

  if (extra > main / 2) {
    height = main * rndHgt;
  }

  var box = {
    width: width,
    height: height,
    rndWid: rndWid,
    rndHgt: rndHgt,
    svgWid: svgWid
  };

  return box;
}
