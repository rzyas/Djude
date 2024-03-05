const main_rate1 = document.getElementById('main_rate1')
const main_rate2 = document.getElementById('main_rate2')
const main_rate3 = document.getElementById('main_rate3')
const main_rate4 = document.getElementById('main_rate4')

const rate_1_count = document.getElementById('rate_1_count')
const rate_2_count = document.getElementById('rate_2_count')
const rate_3_count = document.getElementById('rate_3_count')
const rate_4_count = document.getElementById('rate_4_count')

const rate_1_persen = document.getElementById('rate_1_persen')
const rate_2_persen = document.getElementById('rate_2_persen')
const rate_3_persen = document.getElementById('rate_3_persen')
const rate_4_persen = document.getElementById('rate_4_persen')

let gacha_rate_1 = 0
let gacha_rate_2 = 0
let gacha_rate_3 = 0
let gacha_rate_4 = 0

function update_statistik(){
    let simpel_index
    if (hasil_gacha.length == 0){
        simpel_index = 0
    }else{
        simpel_index = 1
    }
    const true_last_index = hasil_gacha[hasil_gacha.length -simpel_index]
    const regex_rate_1 = /_1\.jpg$/.test(true_last_index)
    const regex_rate_2 = /_2\.jpg$/.test(true_last_index)
    const regex_rate_3 = /_3\.jpg$/.test(true_last_index)
    const regex_rate_4 = /_4\.jpg$/.test(true_last_index)

    if(regex_rate_1){
        gacha_rate_1+=1
    }
    else if(regex_rate_2){
        gacha_rate_2+=1
    }
    else if(regex_rate_3){
        gacha_rate_3+=1
    }else if(regex_rate_4){
        gacha_rate_4+=1
    }else{
        console.log(`terdapat data yang error: ${true_last_index}`);
    }

    const totalItems = gacha_rate_1 + gacha_rate_2 + gacha_rate_3 + gacha_rate_4;

    const hasil_1 = (gacha_rate_1 / totalItems) * 100
    const hasil_2 = (gacha_rate_2 / totalItems) * 100
    const hasil_3 = (gacha_rate_3 / totalItems) * 100
    const hasil_4 = (gacha_rate_4 / totalItems) * 100

    const bulakan_hasil_1 = parseFloat(hasil_1.toFixed(1))
    const bulakan_hasil_2 = parseFloat(hasil_2.toFixed(1))
    const bulakan_hasil_3 = parseFloat(hasil_3.toFixed(1))
    const bulakan_hasil_4 = parseFloat(hasil_4.toFixed(1))

    main_rate1.style.transition = '.3s'
    main_rate2.style.transition = '.3s'
    main_rate3.style.transition = '.3s'
    main_rate4.style.transition = '.3s'
    main_rate1.style.width = `${bulakan_hasil_1}%`
    main_rate2.style.width = `${bulakan_hasil_2}%`
    main_rate3.style.width = `${bulakan_hasil_3}%`
    main_rate4.style.width = `${bulakan_hasil_4}%`

    rate_1_persen.innerText = `${bulakan_hasil_1}%`
    rate_2_persen.innerText = `${bulakan_hasil_2}%`
    rate_3_persen.innerText = `${bulakan_hasil_3}%`
    rate_4_persen.innerText = `${bulakan_hasil_4}%`

    rate_1_count.innerText = `X${gacha_rate_1}`
    rate_2_count.innerText = `X${gacha_rate_2}`
    rate_3_count.innerText = `X${gacha_rate_3}`
    rate_4_count.innerText = `X${gacha_rate_4}`
}