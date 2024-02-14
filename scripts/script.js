function triangleCalculateArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);

  const area = 0.5 * base * height;
  const areaCalculate = document.getElementById("triangleArea");
  areaCalculate.innerText = area;

  document.getElementById("triangle-base").value = "";
  document.getElementById("triangle-height").value = "";
}

function rectangleCalculateArea() {
  const rectangleBaseInput = document.getElementById("rectangle-base");
  const rectangleBaseText = rectangleBaseInput.value;
  const base = parseFloat(rectangleBaseText);

  const rectangleHeightInput = document.getElementById("rectangle-height");
  const rectangleHeightText = rectangleHeightInput.value;
  const height = parseFloat(rectangleHeightText);

  const area = base * height;
  const areaCalculate = document.getElementById("rectangleArea");
  areaCalculate.innerText = area;

  document.getElementById("rectangle-base").value = "";
  document.getElementById("rectangle-height").value = "";
}
