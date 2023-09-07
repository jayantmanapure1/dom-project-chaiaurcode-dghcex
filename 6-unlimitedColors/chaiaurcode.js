const randomColor = function () {
  let hex = '123456789abcdef';
  let color = '#';

  for (i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16);
  }
  return color;
};

console.log(randomColor());

let intervalID;
const startChanging = () => {
  intervalID = setInterval(changebackground, 100);
  function changebackground() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChanging = () => {
  clearInterval(intervalID);
};
document.querySelector('#start').addEventListener('click', startChanging);

document.querySelector('#stop').addEventListener('click', stopChanging);
