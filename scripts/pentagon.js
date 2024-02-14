function calculatePentagonArea() {
    const parameter = inputValue("pentagon-parameter");
    const apothem = inputValue("pentagon-apothem");

    const pentagonArea = 0.5 * parameter * apothem;

    setValue("pentagon-area", pentagonArea);

    document.getElementById("pentagon-parameter").value="";
    document.getElementById("pentagon-apothem").value = "";
}

function inputValue(inputFieldId) {
    const input = document.getElementById(inputFieldId);
    const inputText = input.value;
    const value = parseFloat(inputText);
    return value;
}
function setValue(elementId, area) {
    const pentagonValue = document.getElementById(elementId);
    pentagonValue.innerText = area;
}