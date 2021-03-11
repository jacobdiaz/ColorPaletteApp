import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    colors: {
      // Loop through each color in the starter
    },
  };

  // Create a new colors array with all the levels
  for (let level of levels) {
    newPalette.colors[level] = [
      // 50 : []
      // 100: []
      // 200: []
    ];
  }

  // Loop over the colors array
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"), // Replace spaces in the id name with a dash
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}

// Range goes from  ( darken color -> original color -> white )
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end]; // generating an array with 3 color hex values () darken color, og color, white
}
function getScale(hexColor, numOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors); // Creates a range from those three generated colors. Returns n colors
}

export { generatePalette };
