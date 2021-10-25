const mains = document.querySelectorAll(".main");

mains.forEach((ele) => {
  ele.addEventListener("click", () => {
    removeClassActive();
    ele.classList.add("active");
  });
});

const removeClassActive = () => {
  mains.forEach((ele) => {
    ele.classList.remove("active");
  });
};
