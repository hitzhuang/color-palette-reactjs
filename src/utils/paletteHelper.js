export const getAllColorsFromPalettes = (list) => {
    const merge = (array1, array2) => array1.concat(array2.colors);
    return list.reduce(merge, []);
};

export const getRandomColor = (colors) => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
};
