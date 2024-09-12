const btn = document.getElementById("btn");
const text = document.getElementById("text");

// btn.addEventListener("click", () => {
// text.textContent = "ボタンをクリックしました";
// });

// setTimeout(() => {
// btn.addEventListener("click", () => {
// text.textContent = "ボタンをクリックしました";
// });
// }, 2000);

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
