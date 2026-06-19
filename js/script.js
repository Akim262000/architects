document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

$(".project-slider").slick({
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});
