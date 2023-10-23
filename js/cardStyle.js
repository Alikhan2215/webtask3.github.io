function switchCardStyle() {
  const card = document.querySelector('.main_card');

  // check the current card style
  if (card.classList.contains('card-default')) {
    // switch to the alternate style
    card.classList.remove('card-default');
    card.classList.add('card-alternate');
  } else {
    // switch back to the default style
    card.classList.remove('card-alternate');
    card.classList.add('card-default');
  }
}

function switchBlockStyle() {
  const centralBlock = document.querySelector('.central-block');

  // check the current style
  if (centralBlock.classList.contains('card-default')) {
    // switch to the alternate style
    centralBlock.classList.remove('card-default');
    centralBlock.classList.add('card-alternate');
  } else {
    // switch back to the default style
    centralBlock.classList.remove('card-alternate');
    centralBlock.classList.add('card-default');
  }
}
