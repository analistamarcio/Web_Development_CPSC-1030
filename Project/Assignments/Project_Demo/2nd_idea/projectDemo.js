let control = document.getElementById("wrapper");

control.addEventListener("wheel", scrolling);
let posX = 0;


function scrolling() {
  if (control.scrollTop > 0) {
    posX++;
    control.scrollTop = 0;
  } else {
    posX--;
  }

  console.log("posX = " + posX);
}

// control.addEventListener('scroll', function (e) {
//   // get the scrollDemo
//   let div = document.getElementById('scrollDemo');
//   // get the target
//   let target = e.target;
//   // handle each button's click
//   switch (target.id) {
//     case 'btnScrollLeft':
//       div.scrollLeft += 20;
//       break;

//     case 'btnScrollTop':
//       div.scrollTop += 20;
//       break;
//   }
// });
