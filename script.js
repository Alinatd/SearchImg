const accesKey = "tTtc3C2YpPzScnv0EdvSPOoOGF17lIYtGkI7WML6uFQ"
const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const searchMoreBtn = document.getElementById('show-more-btn')
const conta = document.getElementById('container')
 
let keyword = "";
let page = 1;

async function searchImages(){
keyword = searchBox.value
const url = `https://api.unsplash.com/search/photos?page=${page}3&query=${keyword}&client_id=${accesKey}`

const response = await fetch(url)
const data = await response.json()

// console.log(data)
const results = data.results

results.map((result)=>{
    const image = document.createElement('img')
    image.src = result.urls.small
    const imageLink = document.createElement('a')
    imageLink.href= result.links.html
    imageLink.target = "_blank"

imageLink.append(image)
searchResult.append(imageLink)

})
searchMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    searchResult.innerHTML = ""
    page = 1 
    searchImages()
})
searchMoreBtn.addEventListener("click",()=>{
    page++
    searchImages()
})