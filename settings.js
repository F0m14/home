// Change Text Size
const textInput = document.getElementById('text-input');
const fontSizeSlider = document.getElementById('font-size');
const storedFontSize = localStorage.getItem('font-size');
const fontSizeText = document.getElementById('font-size-text');

if (storedFontSize) {
  fontSizeSlider.value = storedFontSize;
  updateFontSize();
}

fontSizeSlider.addEventListener('input', function() {
  updateFontSize();
  
  localStorage.setItem('font-size', fontSizeSlider.value);
});

function updateFontSize() {
  const elements = document.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = `${fontSizeSlider.value}px`;
    fontSizeText.innerHTML = `${fontSizeSlider.value}px`;
  }
}

window.addEventListener('load', function() {
  updateFontSize();
});