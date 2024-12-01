document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".pricing-box");
  const radios = document.querySelectorAll('input[type="radio"]');

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      const radio = this.querySelector('input[type="radio"]');
      radio.checked = true;

      boxes.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      document.querySelectorAll(".options").forEach((opt) => {
        opt.classList.remove("visible");
      });
      this.querySelector(".options").classList.add("visible");

      const price = this.querySelector(".current-price").textContent;
      document.querySelector(".total").textContent = `Total: ${price}`;
    });
  });

  document.getElementById("unit2").checked = true;
  boxes[1].classList.add("active");
  document.getElementById("options2").classList.add("visible");
});
