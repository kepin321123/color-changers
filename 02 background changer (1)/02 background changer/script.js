const hexcolor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

const button = document.getElementById("buttonchanger")
const color = document.getElementById("color")
console.log(button)

// textcontent & innertext & innerhtml

// color.textContent = 'halo selamat datang'
// color.innerText = 'halo selamat datang'
// color.innerHTML = '<h1>halo selamat datang</h1>'

function changecolor(){
    // alert('icikiwirrrrrrr')
    let warna = "#"
    for(let i=1;i<=6;i++){
        warna += hexcolor[randomnumber()]
    }
    

    console.log(warna)
    color.textContent = warna
    document.body.style.backgroundColor = warna
    console.log(randomnumber())

}

function randomnumber(){
   return Math.floor(Math.random() * hexcolor.length)
}