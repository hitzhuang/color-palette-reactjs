export const getAllColorsFromPalettes = (list) => {
    const merge = (array1, array2) => array1.concat(array2.colors);
    return list.reduce(merge, []);
};

export const getRandomColor = (colors) => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
};

const COLOR_PALETTES = "color_palettes";
export const getPalettesFromLocalStorage = () => {
    let palettes = localStorage.getItem(COLOR_PALETTES);
    return JSON.parse(palettes);
};

export const savePalettesToLocalStorage = (palettes) => {
    localStorage.setItem(COLOR_PALETTES, JSON.stringify(palettes));
};
