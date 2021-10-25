const mains = document.querySelectorAll(".main");

mains.forEach((ele) => {
  ele.addEventListener("click", () => {
    remove();
    ele.classList.add("active");
  });
});

const remove = () => {
  mains.forEach((ele) => {
    ele.classList.remove("active");
  });
};
