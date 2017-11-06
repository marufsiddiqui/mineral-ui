const svg = require('./svg');

function animate(attributeName, {keyTimes, values, ...rest}) {
  let opts = {};
  let init = {
    ...rest,

    attributeName,
    repeatCount: "indefinite",
    values: values.join(";")
  };
  if(keyTimes && Array.isArray(keyTimes)) {
    opts = {
      keyTimes: keyTimes.join(";")
    };
  }
  const str =  svg.animate(Object.assign(opts, init));
  return str;
}

function line(one, two, color) {
  return svg.path(
    {
      d: `M${one.x},${one.y}L${two.x},${two.y}z`,
      stroke: color
    }
  );
}

function triangle({one, two, three, dur, color, keyTimes, centroid, brightest}) {
  let opts={}, children=[];
  const path = {
    d: `M${one.x},${one.y}L${two.x},${two.y}L${three.x},${three.y}z`
  };

  if(Array.isArray(color)) {
    children = [
      animate("fill", {
        keyTimes,
        dur,
        values: color
      })
    ];
    opts = {
      fill: color[color.length - 1]
    };
  } else {
    opts = {fill: color};
  }
  return svg.path(Object.assign(opts, path), ...children);
}

module.exports = {
  animate,
  line,
  triangle
};