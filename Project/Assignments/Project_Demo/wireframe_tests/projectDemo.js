let control = document.getElementById("wrapper");

control.addEventListener("wheel", scrolling);
let scrllVal = 0;
let shownDivL = document.getElementById("aboutLeft");
let shownDivR = document.getElementById("aboutRight");
// let shownDivElem = document.getElementById(shownDiv);
let inMovLeft = shownDivL.previousElementSibling;
let inMovRight = shownDivR.nextElementSibling;


function scrolling() {
  // console.log(inMovLeft.id.replace("Left", ""));
  if (control.scrollTop > 0) {
    if (inMovRight.offsetLeft - inMovLeft.offsetLeft >= shownDivL.offsetWidth) {
      for (let i = 0; i < 4; i++) {
        scrllVal--;
        // control.scrollTop = 0;
        shownDivL.style.marginLeft = scrllVal + "px";
        shownDivR.style.marginRight = scrllVal + "px";
      }
    } else {
      // left and right parts are together already
      changePage(1);
    }
  } else {
    if (inMovRight.offsetLeft - inMovLeft.offsetLeft <= 3 * shownDivL.offsetWidth - 4) {
      for (let i = 0; i < 4; i++) {
        scrllVal++;
        shownDivL.style.marginLeft = scrllVal + "px";
        shownDivR.style.marginRight = scrllVal + "px";
      }
    } else {
      // left and right parts are totally out of previous page
      changePage(0);
    }
  }

  // console.log("scrllVal = " + scrllVal +
  //   " inMovLeft = " + inMovLeft.offsetLeft +
  //   " inMovRight = " + inMovRight.offsetLeft +
  //   " diff = " + (inMovRight.offsetLeft - inMovLeft.offsetLeft));
}

function changePage(direction) {
  let pages = ["about", "work", "education", "skills", "contact"];
  let pageIndex = pages.indexOf(inMovLeft.id.replace("Left", ""));

  // console.log(inMovLeft.id.replace("Left", ""));

  if (direction === 1) {
    // direction = 1 means next page
    if (pageIndex < pages.length - 1) {
      shownDivL = document.getElementById(inMovLeft.id);
      shownDivR = document.getElementById(inMovRight.id);

      inMovRight = inMovRight.nextElementSibling;
      inMovLeft = inMovLeft.previousElementSibling;
      scrllVal = 0;
    }
  } else {
    // direction != 1 means previous page
    if (pageIndex > 1) {
      shownDivL = inMovLeft.nextElementSibling.nextElementSibling;
      shownDivR = inMovRight.previousElementSibling.previousElementSibling;

      inMovRight = inMovRight.previousElementSibling;
      inMovLeft = inMovLeft.nextElementSibling;
      scrllVal = -shownDivL.offsetWidth;
    }
  }

  // console.log(inMovLeft.id.replace("Left", ""));
}
