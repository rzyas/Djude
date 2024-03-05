let items = [
    'img_knf/karambit_class_4.jpg',
    'img_knf/m9_class_4.jpg',
    'img_knf/zulfikar_knf_class_4.jpg',
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
    'img_wpn/ss2_rz1_class_4.jpg'
]

const menu_trading = document.getElementById('menu_trading')
const menu_notif = document.getElementById('menu_notif')
const menu_store = document.getElementById('menu_store')

const bm_nofikasi = document.getElementById('bm_nofikasi')
const bm_trade = document.getElementById('bm_trade')



const main_table_live = document.getElementById('main_table_live')
const panjang_items = items.length
const regex_items = /\/img_wpn\/([^\/]+)_class_/
const regex_price = /\w(?=.{4}$)/

//! BTN TRADE
menu_trading.addEventListener('click', function(){
    bm_nofikasi.style.display = 'none'
    menu_notif.style.backgroundColor = '#333'
    menu_notif.style.color = '#777'

    bm_trade.style.display = 'grid'
    menu_trading.style.backgroundColor = '#222'
    menu_trading.style.color = 'white'
})

//! BTN NOTIF
menu_notif.addEventListener('click', function(){
    bm_nofikasi.style.display = 'block'
    menu_notif.style.backgroundColor = '#222'
    menu_notif.style.color = 'white'

    bm_trade.style.display = 'none'
    menu_trading.style.backgroundColor = '#333'
    menu_trading.style.color = '#777'
})

//! BTN STORE

function random_time(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function tbl_live_trade(){
    let no = 0
    for (let value of items){
        no++
        
        const elem_tr = document.createElement('tr')
        const no_td = document.createElement('td')
        const name_td = document.createElement('td')
        const img_td = document.createElement('td')
        const item_count = document.createElement('p')
        const img_live = document.createElement('img')
        const price_td = document.createElement('td')
        const live_price_td = document.createElement('td')
        const btn_td = document.createElement('td')
        const btn_trade = document.createElement('button')
        const btn_sell = document.createElement('button')
        const tbl_div = document.createElement('div')

        const find_num = regex_price.exec(value)[0]; // Perbaikan 1

        no_td.innerText = no
        function cleanString(string) {
            const wordsToRemove = ['img_knf/', 'img_wpn/', '_class_1', '_class_2', '_class_3', '_class_4'];
            for (let i = 0; i < wordsToRemove.length; i++) {
                string = string.replace(new RegExp(wordsToRemove[i], 'g'), '');
            }
            
            string = string.replace(/\.jpg/g, '');
            string = string.replace(/_/g, ' ');
            string = string.toUpperCase();
            return string;
        }
        name_td.innerText = cleanString(value)
        img_live.setAttribute('id', 'img_live')
        img_live.setAttribute('src', value)
        elem_tr.setAttribute('id', 'elem_tr_live')
        let price_item = 0; // Perbaikan 4
        
        if(find_num === "1"){ // Perbaikan 2
            price_item = 100
        }else if (find_num === "2"){ // Perbaikan 2
            price_item = 500
        }else if(find_num === "3"){ // Perbaikan 2
            price_item = 10000
        }else if(find_num === "4"){ // Perbaikan 2
            price_item = 75000
        }else{
            price_item = 0
        }
        
        let to_usd = price_item.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        live_price_td.innerText = 0
        price_td.innerText = to_usd; // Perbaikan 5

        let get_value = price_td.innerText
        function parseCurrencyToInteger(currencyString) {
            const cleanString = currencyString.replace(/\$|,/g, '');
            const integerValue = parseInt(cleanString, 10);
            return integerValue;
        }
        const integer = parseCurrencyToInteger(get_value);

        let hasil = integer
        let arr_live_price = []
        let indikator = 'no data'
        let after_trade
        setInterval(function(){
            let stonk = 100
            let modal = 50

            let max_winlose = (hasil * stonk) / 100
            let max_lose = (hasil * modal) / 100
            let random_winlose = Math.random() * max_winlose
            let live_price = random_winlose + max_lose

            let updown = 'no data'
            let to_usd = live_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            const perubahan = live_price - price_item
            const presentase = (perubahan / price_item) * 100
            hasil = live_price
            if (hasil >= price_item){
                updown = 'up'
                live_price_td.style.transition = '.4s'
                live_price_td.style.backgroundColor = '#00800b'

                const tax1persen = (live_price * 1) / 100
                const tax2persen = (live_price * 2) / 100
                const tax5persen = (live_price * 5) / 100
                const tax7persen = (live_price * 7) / 100

                const stonk_100 = (price_item * 100) / 100
                const stonk_500 = (price_item * 500) / 100
                const stonk_1k = (price_item * 1000) / 100
                const stonk_5k = (price_item * 5000) / 100

                if (hasil >= stonk_5k) {
                    hasil -= tax7persen
                } else if (hasil >= stonk_1k) {
                    hasil -= tax5persen
                } else if (hasil >= stonk_500) {
                    hasil -= tax2persen
                } else if (hasil >= stonk_100) {
                    hasil -= tax1persen
                }                

                const stonk_200 = (price_item * 200) / 100
                const anjlok_10 = (price_item * 10) / 100
                if (hasil >= stonk_200){
                    const anjlok = Math.random() * 100
                    if (anjlok >= 90){
                        hasil -= anjlok_10
                    }
                }

                const lucky_7 = (price_item * 100) / 100
                const get_lucky_7 = (price_item * 7) / 100

                if (hasil >= lucky_7){
                    const lucky = Math.random() * 100
                    if (lucky >= 90){
                        hasil += get_lucky_7
                        console.log(`${no_td.textContent} yey lucky 7%`);
                    }
                }
            }else if (hasil <= price_item){
                updown = 'down'
                live_price_td.style.transition = '.4s'
                live_price_td.style.backgroundColor = '#800000'

                const minlose = (price_item * 10) / 100 //default 10
                const lose_50 = (price_item * 50) / 100
                const lucky_20 = (price_item * 20) / 100

                if (hasil <= minlose){
                    hasil = minlose
                    let comeback_random = Math.random() * 100
                    const comback_10 = (price_item * 10) / 100
                    const comback_20 = (price_item * 20) / 100
                    const comback_40 = (price_item * 40) / 100
                    const comback_77 = (price_item * 77) / 100
                    const comback_200 = (price_item * 200) / 100
                    if (comeback_random >= 98) { //default 98
                        hasil += comback_200
                        console.log(`${no_td.textContent} dapat lucky 200%`);
                        const tampil = `NO:${no_td.textContent}. ${name_td.textContent} Naik drastis 200%`
                        main_notification('gold', tampil)
                    } else if (comeback_random >= 95) {
                        hasil += comback_77
                        const tampil = `NO:${no_td.textContent}. ${name_td.textContent} Naik 77%`
                        main_notification('gold', tampil)
                    } else if (comeback_random >= 90) {
                        hasil += comback_40
                    } else if (comeback_random >= 80) {
                        hasil += comback_20
                    } else if (comeback_random >= 50) {
                        hasil += comback_10
                    }
                    
                }
                if (hasil <= lose_50){
                    const lucky = Math.random() * 100
                    if (lucky >= 80){
                        hasil += lucky_20
                        console.log(`${no_td.textContent} dapat lucky 20%`);
                    }
                }
            }

            let presentase_after_trade = 0
            if (arr_live_price.length == 0){
                arr_live_price[0] = hasil
            }else{
                arr_live_price[1] = hasil
                if (arr_live_price[0] >= arr_live_price[1]){
                    indikator = 'down'
                    after_trade = arr_live_price[1] - arr_live_price[0]
                    presentase_after_trade = (after_trade / hasil) * 100
                    arr_live_price[0] = hasil
                }else{
                    after_trade = arr_live_price[1] - arr_live_price[0]
                    presentase_after_trade = (after_trade / hasil) * 100

                    indikator = 'up'
                    arr_live_price[0] = hasil

                }
            }

            let final_after_trade = formatDollar(after_trade / 2)
            live_price_td.innerText = `${to_usd} \n Total: (${updown} ${presentase.toFixed(2)}%) \n(${indikator} ${final_after_trade}) \n(${indikator} ${presentase_after_trade.toFixed(2)}%)`
        },5000)
        
        no_td.setAttribute('id', 'no_td')
        name_td.setAttribute('id', 'name_td')
        btn_trade.innerText = 'Jual'
        btn_sell.innerText = 'Beli'
        btn_td.setAttribute('id', 'btn_td')
        img_td.setAttribute('id', 'img_td')
        item_count.setAttribute('class', 'item_count')
        item_count.innerText = 0
        item_count.setAttribute('id', value)

        elem_tr.appendChild(no_td)
        img_td.appendChild(img_live)
        img_td.appendChild(item_count)
        elem_tr.appendChild(img_td)
        elem_tr.appendChild(name_td)
        elem_tr.appendChild(price_td)
        elem_tr.appendChild(live_price_td)
        btn_td.appendChild(btn_trade)
        btn_td.appendChild(btn_sell)
        elem_tr.appendChild(btn_td)

        main_table_live.appendChild(elem_tr)
        main_table_live.appendChild(tbl_div)


        //btn trade
        btn_trade.addEventListener('click', function(){
            btn_trade.disabled = true;
            let timeleft = 30;
            let check_count = item_count.textContent

            if (parseInt(check_count) == 0 ){
                popup_nofitication('crimson', 'Item Yang Dimiliki: 0', 'Anda dapat mendapatkan beberapa item dari Trade di Black Market atau dari Gacha!')
                setTimeout(function(){
                    btn_trade.disabled = false
                },500)
            }else{
                setTimeout(function(){
                    btn_trade.innerText = `Terjual Dalam \n ${format_waktu(timeleft)}`
                    const countdown_trade = setInterval(() => {
                        btn_trade.innerText = `Terjual Dalam \n ${format_waktu(timeleft)}`
                        timeleft--;
                
                        if(timeleft == -2){
                            clearInterval(countdown_trade); // Hentikan interval jika timeleft <= 0
                            btn_trade.innerText = 'Jual'; // Update teks tombol setelah hitungan mundur selesai
                            btn_trade.disabled = false; // Aktifkan tombol kembali setelah hitungan mundur selesai
                            
                            const get_all_count = parseInt(check_count)
                            const total = hasil * get_all_count
                            total_bonus_gacha_coin += total
                            total_bonus_gacha.innerText = `Total Income: ${formatDollar(total_bonus_gacha_coin)}`
    
                            const convert_exp = total/4
                            level_up(convert_exp)
    
                            const tampil = `Trading: NO:${no_td.textContent}. ${name_td.textContent}. ${formatDollar(total)}`
                            main_notification('red', tampil)
                            if (total >= price_item){
                                popup_nofitication('red', `Yuhuu.. Money! Dapat: ${formatDollar(total)}`, 'Anda mendapakan harga jual yang lebih tinggi dari harga awal, Selamat!')
                            }else if(total <= price_item){
                                popup_nofitication('red', `Upss.. Dapat: ${formatDollar(total)}`, 'Saya harap anda membeli barang ini ketika sedang turn, harga yang anda dapatkan dibawah harga awal!')
                            }

                            koin_saya += total
                            total_koin_saya.innerText = formatDollar(koin_saya)
                            item_count.textContent = parseInt(0)
                        }
                    }, 1000)
                }, 100)
            }
        })

        //btn buy
        let cooldown_time
        btn_sell.addEventListener('click', function(){
            btn_sell.disabled = true
            let check_count = parseInt(item_count.textContent)
            if (koin_saya <= hasil){
                setTimeout(function(){
                    popup_nofitication('goldrod', 'Tidak dapat membeli !', 'Silahkan Trade di Black Maerket atau lakukan Top-Up Untuk mendapatkan uang yang lebih banyak!')
                    btn_sell.disabled = false
                }, 100)
            }else{

                if(find_num === "1"){
                    cooldown_time = 3
                }else if (find_num === "2"){
                    cooldown_time = 10
                }else if(find_num === "3"){
                    cooldown_time = 30
                }else if(find_num === "4"){ 
                    cooldown_time = 120
                }

                setTimeout(function(){
                    btn_sell.innerText = `Cooldown Time \n (${format_waktu(cooldown_time)})`;
                    cooldown_time -= 1;
                    let intervalID = setInterval(function() {
                        btn_sell.innerText = `Cooldown Time \n (${format_waktu(cooldown_time)})`;
                        cooldown_time -= 1;
                        if (cooldown_time === -2) {
                            btn_sell.disabled = false;
                            btn_sell.innerText = 'Beli'
                            clearInterval(intervalID);
                        }
                    }, 1000);
                }, 100)
                              
                item_count.innerText = check_count +=1
                koin_saya -= hasil
                total_koin_saya.innerText = formatDollar(koin_saya)
                const tampil = `Membeli: NO: ${no_td.textContent}. ${name_td.textContent}, ${formatDollar(hasil)}`
                main_notification('red', tampil)
            }
        })

    }
}

tbl_live_trade();

function add_item_count(){
    last_index = hasil_gacha[hasil_gacha.length -1]
    const gen_id = document.getElementById(`${last_index}`)
    if  (gen_id){
        let last_count = parseInt(gen_id.textContent)
        gen_id.textContent = last_count+1
    }else{
        console.log('get coin');
    }
}

function format_waktu(seconds) {
    if (seconds < 60) {
        return seconds + " detik";
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return minutes + " menit " + (seconds % 60) + " detik";
    } else {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        return hours + " jam " + minutes + " menit";
    }
}