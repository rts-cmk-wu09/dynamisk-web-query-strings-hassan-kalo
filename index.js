//.then(response=>response.json())
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.append(wrapper)


fetch('data/destinations.json')
  .then(response => response.json())
  .then(data => {
        for (let i = 0; i < data.destinations.length; i++) {
            const img = document.createElement('img')
            img.src = data.destinations[i].image 
            img.alt = data.destinations[i].title
            const h3 = document.createElement('h3')
            const a = document.createElement('a')
            a.innerText = data.destinations[i].title
            a.href = `destination.html?id=${data.destinations[i].id}`
            h3.append(a)
            const h4 = document.createElement('h4')
            h4.innerText = data.destinations[i].subtitle
            const div = document.createElement('div')
            div.classList.add('appartment')
            div.append(img,h3,h4)
            wrapper.append(div)
        }}
    )
  .catch(error => console.error(error))

