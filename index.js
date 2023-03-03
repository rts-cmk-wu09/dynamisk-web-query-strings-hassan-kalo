const likeIcon = "✧";
const likedIcon = "✦";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.append(wrapper);

fetch("data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.destinations.length; i++) {
      const img = document.createElement("img");
      img.src = data.destinations[i].image;
      img.alt = data.destinations[i].title;
      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      a.innerText = data.destinations[i].title;
      a.href = `destination.html?id=${data.destinations[i].id}`;
      h3.append(a);
      const h4 = document.createElement("h4");
      h4.innerText = data.destinations[i].subtitle;
      const div = document.createElement("div");
      div.id = "appartment" + data.destinations[i].id;
      div.classList.add("appartment");
      const likeBtn = document.createElement("span");
      likeBtn.classList.add("like-btn");
      likeBtn.innerText =
        localStorage.getItem("appartment" + data.destinations[i].id) ||
        likeIcon;
      likeBtn.addEventListener("click", likeBtnFunc);
      div.append(img, h3, h4, likeBtn);
      wrapper.append(div);
    }
  })
  .catch((error) => console.error(error));

function likeBtnFunc() {
  if (
    localStorage.getItem(this.parentNode.id) == null ||
    localStorage.getItem(this.parentNode.id) == likeIcon
  ) {
    localStorage.setItem(this.parentNode.id, likedIcon);
    this.innerText = likedIcon;
  } else {
    localStorage.setItem(this.parentNode.id, likeIcon);
    this.innerText = likeIcon;
  }
}
