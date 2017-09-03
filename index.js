function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function increaseRankBy(n) {
  let rankedLis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = (parseInt(rankedLis[i].innerHTML) + n).toString();
  }
};

function deepestChild() {
  let currentChild = document.querySelector('#grand-node');

  for (let i = 0; i < 5; i++){
    if (currentChild.children[0]) {
      currentChild = currentChild.children[0];
      console.log(currentChild);
    } else {
      console.log(currentChild);
      return currentChild;
    }
  }
}
