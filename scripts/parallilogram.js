function calculateParallelogramArea() {
    const base = getInputValue("parallelogram-base");
    
    const height = getInputValue("parallelogram-height");

    const area = base * height;

    setInnerText("parallelogramArea", area);
    document.getElementById("parallelogram-base").value = "";
    document.getElementById("parallelogram-height").value = "";
}

function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}

function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}