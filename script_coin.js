const total_koin_saya = document.getElementById('total_koin_saya')
const total_topup = document.getElementById('total_topup')

let total_topup_coin = 0
let koin_saya = 0 
const harga_gacha_x1 = 1000
const harga_gacha_x10 = harga_gacha_x1*10
const harga_gacha_x100 = harga_gacha_x1*100
const harga_gacha_x1000 = harga_gacha_x1*1000

total_koin_saya.innerText = koin_saya.toString();

function formatDollar(angka) {
    if(angka !== undefined){
        return '$' + angka.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    } else {
        return '$0.00';
    }
}

function top_up() {
    const selectedAmount = document.getElementById("total_top_up").value;
    koin_saya += parseInt(selectedAmount)
    total_topup_coin += parseInt(selectedAmount)
    const hasil_topup = parseInt(selectedAmount)
    // alert("Anda telah memilih top-up sebesar " + selectedAmount + " koin.");
    popup_nofitication('gold', `Top-Up ${formatDollar(hasil_topup)}`, 'Semakin sedikit jumblah anda Top-Up dapat melambangkan tahta anda seebagai suhu gacor')
    total_koin_saya.innerText = formatDollar(koin_saya).toString()
    total_topup.innerText = `Total Top-up: ${formatDollar(total_topup_coin)}`
    const tampil = `Top-Up Sebesar: ${formatDollar(parseInt(selectedAmount))}`
    main_notification('goldenrod', tampil)
}

document.getElementById("top-up-button").addEventListener("click", top_up);
//! GACHA X1
function gacha_x1() {
    if (koin_saya < harga_gacha_x1) {
        popup_nofitication('goldenrod', 'Gacha 1x Gagal !', 'Silahkan dapatkan lebbih banyak uang dari Trade di Black Market atau dari Top-Up')
        money_alert()
    }else{
        main_notification('cyan', 'GACHA X1')
        btn_disable()
        setTimeout(function(){
            btn_active()
        }, waktu);
        main_gacha()
        let soundEffect = new Audio(sfx_ding_001.src)
        soundEffect.play()
        koin_saya -= harga_gacha_x1
        total_koin_saya.innerText = formatDollar(koin_saya)
        get_reward_coin()
        update_statistik()
        gacha_strike()
        scroll_last_img()
        level_up()
        disable_banner()
        add_item_count()
    }
}

//! GACHA X10
function gacha_x10(){
    if (koin_saya < harga_gacha_x10){
        popup_nofitication('goldenrod', 'Gacha 10x Gagal !', 'Silahkan dapatkan lebbih banyak uang dari Trade di Black Market atau dari Top-Up')
        money_alert()
    }else{
        main_notification('cyan', 'GACHA X10')
        btn_disable()
        setTimeout(function(){
            btn_active()
        }, waktu*10)
        for (let i = 0; i < 10; i++) {
            setTimeout(function(){
                main_gacha()
                koin_saya -= harga_gacha_x1
                total_koin_saya.innerText = formatDollar(koin_saya)
                let soundEffect = new Audio(sfx_ding_001.src)
                soundEffect.play()
                get_reward_coin()
                update_statistik()
                gacha_strike()
                scroll_last_img()
                level_up()
                disable_banner()
                add_item_count()
            }, i * waktu)
        }
    }
}

//! GACHA X100
function gacha_x100(){
    if (koin_saya < harga_gacha_x100){
        popup_nofitication('goldenrod', 'Gacha 100x Gagal !', 'Silahkan dapatkan lebbih banyak uang dari Trade di Black Market atau dari Top-Up')
        money_alert()
    }else{
        main_notification('cyan', 'GACHA X100')
        btn_disable()
        setTimeout(function(){
            btn_active()
        }, waktu*100)
        for (let i = 0; i < 100; i++) {
            setTimeout(function(){
                main_gacha()
                koin_saya -= harga_gacha_x1
                total_koin_saya.innerText = formatDollar(koin_saya)
                let soundEffect = new Audio(sfx_ding_001.src)
                soundEffect.play()
                get_reward_coin()
                update_statistik()
                gacha_strike()
                scroll_last_img()
                level_up()
                disable_banner()
                add_item_count()
            }, i * waktu)
        }
    }
}

//! GACHA X1000
function gacha_x1000(){
    if (koin_saya < harga_gacha_x1000){
        popup_nofitication('goldenrod', 'Gacha 1000x Gagal !', 'Silahkan dapatkan lebbih banyak uang dari Trade di Black Market atau dari Top-Up')
        money_alert()
    }else{
        main_notification('cyan', 'GACHA X1000')
        btn_disable()
        setTimeout(function(){
            btn_active()
        }, waktu*1000)
        for (let i = 0; i < 1000; i++) {
            setTimeout(function(){
                main_gacha()
                koin_saya -= harga_gacha_x1
                total_koin_saya.innerText = formatDollar(koin_saya)
                let soundEffect = new Audio(sfx_ding_001.src)
                soundEffect.play()
                get_reward_coin()
                update_statistik()
                gacha_strike()
                scroll_last_img()
                level_up()
                disable_banner()
                add_item_count()
            }, i * waktu); 
        }
    }
}