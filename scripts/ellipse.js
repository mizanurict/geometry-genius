function calculateEllipseArea() {
    const ellipseMajor = inputValue('ellipse-major');
    const ellipseMinor = inputValue('ellipse-minor');
    const area = 3.14 * ellipseMajor * ellipseMinor;
    setValue("ellipse-area", area);
}