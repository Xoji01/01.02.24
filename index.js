let cont = document.querySelector('.container')
let btn_five = document.querySelector('[data-five]')
let btn_all = document.querySelector('[data-all]')
let total_view = document.querySelector('#total')

btn_five.onclick = () => {
    reload(arr.slice(0, 5))
}

btn_all.onclick = () => {
    reload(arr)
}

reload(arr)

function reload(products) {
    cont.innerHTML = ""

    for (let item of products) {
        // create
        let div_item = document.createElement('div')
        let img = document.createElement('img')
        let descrip_div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let button = document.createElement('button')

      
        //styling


        div_item.classList.add('item')
        descrip_div.classList.add('description')
        
        img.src = item.image
        img.alt = item.title


        h2.innerHTML = `${item.category} (${item.rating.count})`
        p.innerHTML = item.description.slice(0, 100)
        button.innerHTML = "save"

        div_item.append(img, descrip_div)
        descrip_div.append(h2, p, button )
        
        cont.append(div_item)
        
      
    }}