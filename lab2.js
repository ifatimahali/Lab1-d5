let url = "https://rickandmortyapi.com/api/character"

async function imageList(){
    let res = await fetch(url)
    let data = await res.json();
    console.log(data.results);
    let listImage = document.querySelector(".image")

    
    
    data.results.forEach(e => {
        let img = document.createElement("img")
        let namE = document.createElement("h1")
        let divImage = document.createElement("div")

        namE.innerText = e.name 
        img.src = e.image;
        console.log(img)


        listImage.append(namE);
        listImage.append(img);
        document.querySelector(".image").append(divImage)

    })
}
imageList()