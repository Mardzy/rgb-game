$(() => {
  const colorDisplay = $('#colorDisplay');
  let numSquares = 6;
  let colors = [];
  let pickedColor;
  const h1 = $('h1');
  const messageDisplay = $('#message');
  const resetButton = $('#reset');
  const modeButtons = $('.mode');
  const squares = $('.square');

  function init() {
    setupModeButtons();
    setupSquares();
    reset();
  }
  init();

  function removeSelected() {
    modeButtons[0].removeClass('selected');
    modeButtons[1].removeClass('selected');
    this.addClass('selected');
    if(this.textContent ==='Easy') numSquares = 3;
    else numSquares = 6;
    reset();
  }

  function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener('click', removeSelected);
    }
  }
  function styleBackGround() {
    var clickedColor = $(this).css( 'backgroundColor');
    if (clickedColor === pickedColor) {
      messageDisplay.text('Correct!');
      resetButton.text('Play Again?');
      changeColors(clickedColor);
      h1.css( 'backgroundColor', clickedColor );
      // h1.style.backgroundColor = clickedColor;
    } else {
      $(this).css( 'backgroundColor', '#232323' );

      // this.style.backgroundColor = '#232323';
      messageDisplay.text('Try Again');
    }
  }

  function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', styleBackGround);
    }
  }

  function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.text(pickedColor);
    resetButton.text('New Colors');
    messageDisplay.text('');

    for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = 'none';
      }
      squares[i].style.backgroundColor = colors[i];
    }
    h1.css( 'backgroundColor', 'steelblue' );
  }

  resetButton.on('click', reset);


  function changeColors(color) {

    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
  }

  function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(randomColor());
    }
    return arr;
  }

  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
});
