const button = document.getElementById("toastButton");

button.addEventListener("click", showToast);

function showToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const gif = document.createElement("img");
  gif.src = "./img/secret.gif";
  gif.alt = "secret GIF";
  toast.appendChild(gif);

  document.body.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3000);
}
