const total_bonus_gacha = document.getElementById('total_bonus_gacha')
let total_bonus_gacha_coin = 0

function get_reward_coin(){
    let real_index
    if (hasil_gacha.length == 0){
        real_index = 0
    }else{
        real_index = 1
    }

    const get_last_index = hasil_gacha[hasil_gacha.length -real_index]
    const get_coin_x100 = [
        'img_knf/karambit_class_1.jpg',
        'img_knf/m9_class_1.jpg',
        'img_knf/zulfikar_knf_class_1.jpg'
    ]

    const get_coin_x500 = [
        'img_knf/karambit_class_2.jpg',
        'img_knf/m9_class_2.jpg',
        'img_knf/zulfikar_knf_class_2.jpg'
    ]
    const get_coin_x1000 = [
        'img_knf/super_jp_1.jpg'
    ]
    const get_coin_x5000 = [
        'img_knf/super_jp_2.jpg'
    ]
    const get_coin_x10000 = [
        'img_knf/karambit_class_3.jpg',
        'img_knf/m9_class_3.jpg',
        'img_knf/zulfikar_knf_class_3.jpg'

    ]
    const get_coin_x100k = [
        'img_knf/super_jp_3.jpg'
    ]
    const get_coin_x10m = [
        'img_knf/super_jp_4.jpg'
    ]

    get_coin_x100.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 100
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 100
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
        }
    })

    get_coin_x500.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 500
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 500
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
        }
    })

    get_coin_x1000.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 1000
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 1000
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
        }
    })

    get_coin_x5000.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 5000
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 5000
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
        }
    })

    get_coin_x10000.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 10000
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 10000
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
        }
    })

    get_coin_x100k.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 100000
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 100000
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
            main_notification('gold', 'Selamat! Mendapatkan dari Gacha! $100.000.00')
        }
    })

    get_coin_x10m.forEach(value =>{
        if(value == get_last_index){
            koin_saya += 10000000
            total_koin_saya.innerText = formatDollar(koin_saya)
            total_bonus_gacha_coin += 10000000
            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
            main_notification('gold', 'SUPERRRRR!!!!!! $10.000.000.00')
        }
    })
}