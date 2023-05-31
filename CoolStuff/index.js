// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const el = document.getElementById("title");
// const originalText = el.innerText;

// let interval = null;

// const doCoolEffect = (event) => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     const newText = event.target.innerText.split("").map((letter, index) => {
//         if(index < iteration) {
//           return originalText[index];
//         }

//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");

//     event.target.innerText = newText;

//     if(iteration >= originalText.length){
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 30);
// }

// el.addEventListener('mouseover', (event) => doCoolEffect(event));
// // el.onmouseover = (event) => doCoolEffect(event);
