const sfx_ding_001 = new Audio('sfx/ui_tap.mp3')

const img_container = document.getElementById('img_container');
const gacha_box = document.getElementById('gacha_box')
const gacha_img = document.getElementById('gacha_img')
const hasil_gacha_img = document.getElementById('hasil_gacha_img')
const btn_gacha_reset = document.getElementById('btn_gacha_reset')
const total_gacha = document.getElementById('total_gacha')
const btn_gacha = document.getElementById('btn_gacha')
const btn_gacha_x10 = document.getElementById('btn_gacha_x10')
const btn_gacha_x100 = document.getElementById ('btn_gacha_x100')
const btn_gacha_x1000 = document.getElementById('btn_gacha_x1000')

let jp = 0
let waktu = 300
const total_jp = document.getElementById('total_jp')

total_jp.innerText = `Total Mendapatkan JP: 0`

const default_img = 'default_img/default_img.png'
let panjang_history = 1000
let add_total_gacha = 0

const hasil_gacha = []

const all_item = [
    'img_wpn/awm_class_1.jpg',
    'img_wpn/awm_class_2.jpg',
    'img_wpn/awm_class_3.jpg',
    'img_wpn/awm_class_4.jpg',
    'img_wpn/sf_lmg_class_1.jpg',
    'img_wpn/sf_lmg_class_2.jpg',
    'img_wpn/sf_lmg_class_3.jpg',
    'img_wpn/sf_lmg_class_4.jpg',
    'img_wpn/sf_magnum_volt_class_1.jpg',
    'img_wpn/sf_magnum_volt_class_2.jpg',
    'img_wpn/sf_magnum_volt_class_3.jpg',
    'img_wpn/sf_magnum_volt_class_4.jpg',
    'img_wpn/sf_revolver_class_1.jpg',
    'img_wpn/sf_revolver_class_2.jpg',
    'img_wpn/sf_revolver_class_3.jpg',
    'img_wpn/sf_revolver_class_4.jpg',
    'img_wpn/ss2_rz1_class_1.jpg',
    'img_wpn/ss2_rz1_class_2.jpg',
    'img_wpn/ss2_rz1_class_3.jpg',
    'img_wpn/ss2_rz1_class_4.jpg',
    'img_knf/karambit_class_2.jpg',
    'img_knf/karambit_class_3.jpg',
    'img_knf/karambit_class_4.jpg',
    'img_knf/m9_class_2.jpg',
    'img_knf/m9_class_3.jpg',
    'img_knf/m9_class_4.jpg',
    'img_knf/zulfikar_knf_class_2.jpg',
    'img_knf/zulfikar_knf_class_3.jpg',
    'img_knf/zulfikar_knf_class_4.jpg',
    'img_knf/super_jp_1.jpg',
    rate_jackpot('img_knf/super_jp_4.jpg')
]

//! FUNCTION SUPER JP 10M
function rate_jackpot(value) {
    const random_number = Math.floor(Math.random() * 10000) + 1
    
    //! 5%
    if (random_number <= 500) { 
        return value
    }
    //! 20%
    else if (random_number > 1000 && random_number <= 2000) { 
        return 'img_knf/super_jp_3.jpg'
    } else {
        return 'img_knf/super_jp_2.jpg'
    }
}


// Panggil fungsi rate_jackpot untuk memulai proses validasi
rate_jackpot();

//! FUNCTION LOOP X3
function loop_x3(value){
    for (i=0; i<3; i++){
        all_item.push(value)
    }
}
loop_x3('img_knf/zulfikar_knf_class_1.jpg')
loop_x3('img_knf/m9_class_1.jpg')
loop_x3('img_knf/karambit_class_1.jpg')

//! BTN GACHA X1000
btn_gacha_x1000.addEventListener('click', function(){
    gacha_x1000();
});

//! BTN GACHA X100
btn_gacha_x100.addEventListener('click', function(){
    gacha_x100();
});

//! BTN GACHA X10
btn_gacha_x10.addEventListener('click', function(){
    gacha_x10();
});

//! BTN GACHA X1
btn_gacha.addEventListener('click', function(){
    gacha_x1();
    
});

//! BTN GACHA
function btn_disable(){
    btn_gacha.disabled = true
    btn_gacha_x10.disabled = true
    btn_gacha_x100.disabled = true
    btn_gacha_x1000.disabled = true

    btn_gacha.innerText = 'TOMBOL NON-AKTIF'
    btn_gacha_x10.innerText = 'TOMBOL NON-AKTIF'
    btn_gacha_x100.innerText = 'TOMBOL NON-AKTIF'
    btn_gacha_x1000.innerText = 'TOMBOL NON-AKTIF'

    btn_gacha.setAttribute('id', 'btn_disable')
    btn_gacha_x10.setAttribute('id', 'btn_disable')
    btn_gacha_x100.setAttribute('id', 'btn_disable')
    btn_gacha_x1000.setAttribute('id', 'btn_disable')
}

function btn_active(){
    btn_gacha.innerText = 'Gacha 1x'
    btn_gacha_x10.innerText = 'Gacha 10x'
    btn_gacha_x100.innerText = 'Gacha 100x'
    btn_gacha_x1000.innerText = 'Gacha 1000x'

    btn_gacha.disabled = false;
    btn_gacha_x10.disabled = false;
    btn_gacha_x100.disabled = false;
    btn_gacha_x1000.disabled = false;
    
    btn_gacha.setAttribute('id', 'btn_active')
    btn_gacha_x10.setAttribute('id', 'btn_active')
    btn_gacha_x100.setAttribute('id', 'btn_active')
    btn_gacha_x1000.setAttribute('id', 'btn_active')

    const elem_span_x1 = document.createElement('span')
    const elem_span_x10 = document.createElement('span')
    const elem_span_x100 = document.createElement('span')
    const elem_span_x1000 = document.createElement('span')

    elem_span_x1.innerText = '1000 Coin'
    elem_span_x1.setAttribute('id', 'notice_harga')
    btn_gacha.appendChild(elem_span_x1)

    elem_span_x10.innerText = '10k Coin'
    elem_span_x10.setAttribute('id', 'notice_harga')
    btn_gacha_x10.appendChild(elem_span_x10)

    elem_span_x100.innerText = '100k Coin'
    elem_span_x100.setAttribute('id', 'notice_harga')
    btn_gacha_x100.appendChild(elem_span_x100)

    elem_span_x1000.innerText = '1M Coin'
    elem_span_x1000.setAttribute('id', 'notice_harga')
    btn_gacha_x1000.appendChild(elem_span_x1000)
}

//! FUNC MAIN GACHA
function main_gacha(){
    add_total_gacha += 1
    total_gacha.innerText = `History Gacha ke: ${add_total_gacha}`
    const all_item_length = all_item.length;
    const random_index = random_gen(0, all_item_length - 1)
    let random_img = all_item[random_index]
    // More Filter
    let arr_random_img = random_img.split('')
    let class_num = arr_random_img[arr_random_img.length -5]
    console.log(`before: ${class_num}`);

    switch (class_num) {
    case '1':
        class_num = 1;
        break;
    case '2':
        class_num = Math.random() < 0.5 ? 1 : 2;
        break;
    case '3':
        let rand3 = Math.random();
        if (rand3 < 0.5) {
        class_num = 1;
        } else if (rand3 < 0.8) {
        class_num = 2;
        } else {
        class_num = 3;
        }
        break;
    case '4':
        let rand4 = Math.random();
        if (rand4 < 0.5) {
        class_num = 1;
        } else if (rand4 < 0.8) {
        class_num = 2;
        } else if (rand4 < 0.95) {
        class_num = 3;
        } else {
        class_num = 4;
        jp += 1
        main_notification('crimson', 'Mendapatkan Jackpot dari Gacha!')
        total_jp.innerText = `Total Mendapatkan JP: ${jp}`
        }
        break;
    default:
        console.log('Angka tidak valid');
    }
    console.log(`after: ${class_num}`);

    arr_random_img[arr_random_img.length -5] = class_num
    const gabung = arr_random_img.join('')
    random_img = gabung

    // END More Filter
    gacha_img.setAttribute('src', random_img)
    if (hasil_gacha.length < panjang_history){
        hasil_gacha.push(random_img)
    }else{
        hasil_gacha.shift()
        hasil_gacha.push(random_img)
    }
    gacha_history()
}

//! ALL FUNCTION
function gacha_history(){
    const last_index = hasil_gacha[hasil_gacha.length -1]
    const get_hasil_gacha = hasil_gacha_img.querySelectorAll('img')
    const elem_img = document.createElement('img')
    elem_img.setAttribute('src', last_index)
    elem_img.setAttribute('id', 'gacha_result_img')
    hasil_gacha_img.appendChild(elem_img)

    //! ADD BORDER RARETY
    const regex_1 = /_1\.jpg$/
    const regex_2 = /_2\.jpg$/
    const regex_3 = /_3\.jpg$/
    const regex_4 = /_4\.jpg$/

    const hasil_gacha_img_lastChild = hasil_gacha_img.lastElementChild
    const hasil_gacha_img_lastChild_src = hasil_gacha_img_lastChild.getAttribute('src')

    if (regex_1.test(hasil_gacha_img_lastChild_src)){
        hasil_gacha_img_lastChild.setAttribute('class', 'bg_white')
    }
    else if (regex_2.test(hasil_gacha_img_lastChild_src)){
        hasil_gacha_img_lastChild.setAttribute('class', 'bg_blue')
    }
    else if (regex_3.test(hasil_gacha_img_lastChild_src)){
        hasil_gacha_img_lastChild.setAttribute('class', 'bg_purple')
    }else{
        hasil_gacha_img_lastChild.setAttribute('class', 'bg_red')
    }

    const get_all_gacha_result = document.querySelectorAll('#gacha_result_img')
    if (get_all_gacha_result.length > panjang_history){
        hasil_gacha_img.removeChild(get_all_gacha_result[0])
    }
}

function random_gen(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//! SCROLL TO VIEW
function scroll_last_img() {
    setTimeout(function() {
        const hasil_gacha_img = document.getElementById('hasil_gacha_img'); // asumsi hasil_gacha_img adalah ID dari elemen yang diinginkan
        const containerHeight = hasil_gacha_img.clientHeight;
        const scrollHeight = hasil_gacha_img.scrollHeight;
        
        if (scrollHeight > containerHeight) {
            const scrollTo = scrollHeight - containerHeight;
            hasil_gacha_img.scrollTop = scrollTo;
        }
    }, 1000)  
}


//! BTN_DETAIL INFORMASI
const btn_stat_show = document.getElementById('btn_stat_show')
const stat_container = document.getElementById('stat_container')
let simple_bool = true

btn_stat_show.addEventListener('click', function(){
    if (simple_bool){
        gacha_img.style.display = 'none'
        stat_container.style.display = 'none'
        btn_stat_show.innerText = 'Tampilkan \nInformasi'
        simple_bool = false
    }else{
        gacha_img.style.display = 'block'
        stat_container.style.display = 'block'
        btn_stat_show.innerText = 'Sembunyikan \nInformasi'
        simple_bool = true
    }   
})
function disable_banner(){
    if(hasil_gacha.length <= 1){
        const bg_gacha = document.getElementById('bg_gacha')
        bg_gacha.setAttribute('id', 'non_aktived')
    }
}