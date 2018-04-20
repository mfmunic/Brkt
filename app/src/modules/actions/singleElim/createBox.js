//-------------------------------------------------------
//create the box that bracket will be built in
//-------------------------------------------------------
module.exports = function findBox(init) {
  const { main, extra } = init;
  const heats = init.heats.length;
  // const extra = init.extra;
  //for now calling the width of each round 200px height 50px
  //width of lines 10px;
  //subject to change
  const rndWid = 200;
  const rndHgt = 70;
  const svgWid = 20;
  const extHgt = 40;
  const width = heats * rndWid + (heats - 1) * svgWid;
  let height = main / 2 * rndHgt + rndHgt;
  if (extra > main / 2) {
    height = main * rndHgt + extHgt * (main / 2);
  }
  const box = {
    width,
    height,
    rndWid,
    rndHgt,
    svgWid,
    extHgt
  };
  return box;
};
