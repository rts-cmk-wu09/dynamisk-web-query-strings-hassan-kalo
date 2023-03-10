    const likeIcon = '✧'
    const likedIcon = '✦'
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.append(wrapper);

    const urlParams = new URLSearchParams(window.location.search);
    const urlParam_id = urlParams.get("id");
  
    fetch(`data/${urlParam_id}.json`)
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.title;
        const h2 = document.createElement("h2");
        h2.innerText = data.destination;
        const h3 = document.createElement("h3");
        h3.innerText = data.title;
        const h4 = document.createElement("h4");
        h4.innerText = data.subtitle;
        const p = document.createElement("p");
        p.innerText = data.text;
        const div = document.createElement("div");
        div.id = 'appartment' + urlParam_id;
        
        div.classList.add("appartment");
        const ul = document.createElement("ul");
        data.facilities.forEach((element) => {
          const li = document.createElement("li");
          li.innerText = element;
          ul.append(li);
        });
        const likeBtn = document.createElement('span')
        likeBtn.classList.add('like-btn')
        div.append(img, h2, h3, h4, p, ul,likeBtn);
        likeBtn.innerText = localStorage.getItem('appartment' + urlParam_id) || likeBtn;
        likeBtn.addEventListener('click',likeBtnFunc)
        wrapper.append(div);
        div.dataset.favorite = localStorage.getItem('appartment' + urlParam_id) || likeBtn;

      });

      function likeBtnFunc(){
        console.log(this.parentNode.id)
        if(localStorage.getItem(this.parentNode.id) == null || localStorage.getItem(this.parentNode.id) == likeIcon){
          localStorage.setItem(this.parentNode.id,likedIcon)
          this.innerText = likedIcon
        }
        else{
          localStorage.setItem(this.parentNode.id,likeIcon)
          this.innerText = likeIcon
        }
      }