function getElementWidth(content, padding, border) {
    const sumLeftRightPadding = parseFloat(padding) * 2;
    const contentWidth = parseFloat(content);
    const sumLeftRightBorder = parseFloat(border) * 2;
    const allWidthElement = contentWidth + sumLeftRightPadding + sumLeftRightBorder;
    return allWidthElement;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200