let url = "https://coffee.alexflipnote.dev/random.json"

fetch(url)
.then (data => data.json())
.then(res => {
    console.log(res.file);
   let image =  document.querySelector(".image")
   image.src= res.file
})