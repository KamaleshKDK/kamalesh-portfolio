function closeModal(e) {
  e.target === closeBtn1
    ? (modal1.style.display = "none")
    : e.target === closeBtn2
    ? (modal2.style.display = "none")
    : e.target === closeBtn3
    ? (modal3.style.display = "none")
    : e.target === closeBtn4
    ? (modal4.style.display = "none")
    : e.target === closeBtn5
    ? (modal5.style.display = "none")
    : e.target === closeBtn6 && (modal6.style.display = "none"),
    (headerIndex.style.zIndex = "1000"),
    (slidesIndex.style.zIndex = "4"),
    (scrollIndex.style.zIndex = "100");
}
function openModal(e) {
  e.target === modalBtn1
    ? (modal1.style.display = "block")
    : e.target === modalBtn2
    ? (modal2.style.display = "block")
    : e.target === modalBtn3
    ? (modal3.style.display = "block")
    : e.target === modalBtn4
    ? ((document.getElementById("modal-content4").style.left = "63%"),
      (modal4.style.display = "block"))
    : e.target === modalBtn5
    ? ((document.getElementById("modal-content5").style.left = "63%"),
      (modal5.style.display = "block"))
    : e.target === modalBtn6 &&
      ((document.getElementById("modal-content6").style.left = "63%"),
      (modal6.style.display = "block")),
    (headerIndex.style.zIndex = "0"),
    (slidesIndex.style.zIndex = "0"),
    (scrollIndex.style.zIndex = "-1");
}
function outsideClick(e) {
  e.target === modal1
    ? ((modal1.style.display = "none"),
      (headerIndex.style.zIndex = "1000"),
      (slidesIndex.style.zIndex = "4"),
      (scrollIndex.style.zIndex = "100"))
    : e.target === modal2
    ? ((modal2.style.display = "none"),
      (headerIndex.style.zIndex = "1000"),
      (slidesIndex.style.zIndex = "4"),
      (scrollIndex.style.zIndex = "100"))
    : e.target === modal3
    ? ((modal3.style.display = "none"),
      (headerIndex.style.zIndex = "1000"),
      (slidesIndex.style.zIndex = "4"),
      (scrollIndex.style.zIndex = "100"))
    : e.target === modal4
    ? ((modal4.style.display = "none"),
      (headerIndex.style.zIndex = "1000"),
      (slidesIndex.style.zIndex = "4"),
      (scrollIndex.style.zIndex = "100"))
    : e.target === modal5
    ? ((modal5.style.display = "none"),
      (headerIndex.style.zIndex = "1000"),
      (slidesIndex.style.zIndex = "4"),
      (scrollIndex.style.zIndex = "100"))
    : e.target === modal6 &&
      ((modal6.style.display = "none"),
      (headerIndex.style.zIndex = "1000"),
      (slidesIndex.style.zIndex = "4"),
      (scrollIndex.style.zIndex = "100"));
}
const modal1 = document.querySelector("#my-modal1"),
  modalBtn1 = document.querySelector("#modalBtn1"),
  closeBtn1 = document.querySelector("#close1"),
  modal2 = document.querySelector("#my-modal2"),
  modalBtn2 = document.querySelector("#modalBtn2"),
  closeBtn2 = document.querySelector("#close2"),
  modal3 = document.querySelector("#my-modal3"),
  modalBtn3 = document.querySelector("#modalBtn3"),
  closeBtn3 = document.querySelector("#close3"),
  modal4 = document.querySelector("#my-modal4"),
  modalBtn4 = document.querySelector("#modalBtn4"),
  closeBtn4 = document.querySelector("#close4"),
  modal5 = document.querySelector("#my-modal5"),
  modalBtn5 = document.querySelector("#modalBtn5"),
  closeBtn5 = document.querySelector("#close5"),
  modal6 = document.querySelector("#my-modal6"),
  modalBtn6 = document.querySelector("#modalBtn6"),
  closeBtn6 = document.querySelector("#close6"),
  headerIndex = document.querySelector("header"),
  slidesIndex = document.querySelector(".fp-slidesNav"),
  scrollIndex = document.querySelector("#fp-nav");
modalBtn1.addEventListener("click", openModal),
  modalBtn2.addEventListener("click", openModal),
  modalBtn3.addEventListener("click", openModal),
  modalBtn4.addEventListener("click", openModal),
  modalBtn5.addEventListener("click", openModal),
  modalBtn6.addEventListener("click", openModal),
  closeBtn1.addEventListener("click", closeModal),
  closeBtn2.addEventListener("click", closeModal),
  closeBtn3.addEventListener("click", closeModal),
  closeBtn4.addEventListener("click", closeModal),
  closeBtn5.addEventListener("click", closeModal),
  closeBtn6.addEventListener("click", closeModal),
  window.addEventListener("click", outsideClick);
