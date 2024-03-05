let usr_info_notset = true;
let simple_val = 0
const money_target = document.querySelector('#header p:nth-child(1)')

function money_alert() {
    if (usr_info_notset) {
        let i = 0;
        const intervalId = setInterval(function() {
            money_target.classList.toggle('mark');
            i++;
            if (i >= 5) {
                clearInterval(intervalId); // Hentikan interval setelah 20 kali
                money_target.removeAttribute('class'); // Hapus kelas terakhir setelah 20 kali
            }
        }, 300)
    }
}

//! _____CLOSE FORM EDIT
const btn_usr_edit_close = document.getElementById('btn_usr_edit_close')
const ui_edit_profile = document.getElementById('ui_edit_profile')

btn_usr_edit_close.addEventListener('click', function(){
    ui_edit_profile.style.display = 'none'
})

//! _____EDIT USR PROFILE
const btn_edit_user_info = document.getElementById('btn_edit_user_info')
btn_edit_user_info.addEventListener('click', function(){
    ui_edit_profile.style.display = 'grid'
    user_profile_form.style.display = 'block'
})

//! _____INP FORM
const user_profile_form = document.getElementById('user_profile_form');
const ui_edit_nama = document.getElementById('ui_edit_nama');
const ui_edit_umur = document.getElementById('ui_edit_umur');
const ui_edit_pekerjaan = document.getElementById('ui_edit_pekerjaan');
const ui_edit_lokasi = document.getElementById('ui_edit_lokasi');

const usr_nama = document.getElementById('usr_nama');
const usr_umur = document.getElementById('usr_umur');
const usr_pekerjaan = document.getElementById('usr_pekerjaan');
const usr_lokasi = document.getElementById('usr_lokasi');
const loading_bar = document.getElementById('loading_bar')

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

user_profile_form.addEventListener('submit', function(event){
    event.preventDefault()
    user_profile_form.style.display = 'inline'

    ui_edit_umur.value = ui_edit_umur.value.replace(/\D/g, '')
    
    let namaValue = ui_edit_nama.value
    if (namaValue.length > 16) {
        namaValue = namaValue.substring(0, 16);
    }
    namaValue = namaValue.toUpperCase()

    const umurValue = ui_edit_umur.value
    const pekerjaanValue = ui_edit_pekerjaan.value
    const lokasiValue = ui_edit_lokasi.value

    usr_nama.innerText = `${namaValue}`
    usr_umur.innerText = `Umur: ${umurValue}`
    usr_pekerjaan.innerText = `Pekerjaan: ${pekerjaanValue}`
    usr_lokasi.innerText = `Lokasi: ${lokasiValue}`

    setTimeout(function(){
        const waktu_acak = getRandomNumber(100, 6000)
        user_profile_form.style.display = 'none'
        loading_bar.style.display = 'block'
        setTimeout(function(){
            ui_edit_profile.style.display = 'none'
            loading_bar.style.display = 'none'
            user_profile_form.reset()
        },waktu_acak)
    }, 300);
})