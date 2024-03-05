const ui_bg_reset = document.getElementById('ui_bg_reset')
const btn_reset_gacha_yes = document.getElementById('btn_reset_gacha_yes')
const btn_reset_gacha_no = document.getElementById('btn_reset_gacha_no')


btn_gacha_reset.addEventListener('click', function(){
    ui_bg_reset.style.display = 'grid'
})

btn_reset_gacha_yes.addEventListener('click', function(){
    del_all_gacha()
    ui_bg_reset.style.display = 'none'
})

btn_reset_gacha_no.addEventListener('click', function(){
    ui_bg_reset.style.display = 'none'
})

function del_all_gacha(){
    gacha_img.setAttribute('src', default_img)
    while (hasil_gacha_img.firstChild){
        hasil_gacha_img.removeChild(hasil_gacha_img.firstChild)
    }
    hasil_gacha.length = 0

    setTimeout(function(){
        elem_div = document.createElement('div')
        elem_p = document.createElement('p')
        elem_img = document.createElement('img')
        
        elem_div.setAttribute('id', 'bg_gacha')
        elem_p.setAttribute('id', 'p0_bg_gacha')
        elem_img.setAttribute('id', 'img_bg_gacha')
        setTimeout(function(){
            const p0_bg_gacha = document.getElementById('p0_bg_gacha')
            p0_bg_gacha.innerText = 'RZYAS COIN'
        },200)
        elem_img.setAttribute('src', 'img_bg/bg_gacha.jpg')

        hasil_gacha_img.appendChild(elem_div)
        elem_div.appendChild(elem_p)
        elem_div.appendChild(elem_img)
    }, 100)
}