//-------------------------------------------------------
//create the box that bracket will be built in
//-------------------------------------------------------
module.exports = function findBox(init) {
  const main = init.main;
  const heats = init.heats.length;
  const extra = init.extra;
  //for now calling the width of each round 200px height 50px
  //width of lines 10px;
  //subject to change
  const rndWid = 200;
  const rndHgt = 55;
  const svgWid = 20;
  const width = heats * rndWid + (heats - 1) * svgWid;
  let height = main / 2 * rndHgt + rndHgt * 3;
  if (extra > main / 2) {
    height = main * rndHgt + rndHgt * 2;
  }
  const box = {
    width: width,
    height: height,
    rndWid: rndWid,
    rndHgt: rndHgt,
    svgWid: svgWid
  };
  return box;
};
