const strike_count_1 = document.getElementById('strike_count_1')
const strike_count_2 = document.getElementById('strike_count_2')
const strike_count_3 = document.getElementById('strike_count_3')
const strike_count_4 = document.getElementById('strike_count_4')

let new_strike_1 = 0
let new_strike_2 = 0
let new_strike_3 = 0
let new_strike_4 = 0

let max_strike_1 = 0
let max_strike_2 = 0
let max_strike_3 = 0
let max_strike_4 = 0

let antrian_depan
let antrian_belakang

function gacha_strike(){
    const regex = /\w(?=.{4}$)/
    const last_index = hasil_gacha[hasil_gacha.length -1]

 
    if (hasil_gacha.length <= 1){
        antrian_depan = regex.exec(last_index)
        antrian_depan = antrian_depan[0]
    }else if (hasil_gacha.length > 1){
        antrian_belakang = regex.exec(last_index)
        antrian_belakang = antrian_belakang[0]
        if (antrian_depan === antrian_belakang){
            console.log('same');
            switch(antrian_belakang){
                case '1':
                    new_strike_1 +=1
                    ui_strike_popup(`Cummon X${new_strike_1}`, '#999')
                    break;
                case '2':
                    new_strike_2 +=1
                    ui_strike_popup(`Rare X${new_strike_2}`, 'dodgerblue')
                    break;
                case '3':
                    new_strike_3 +=1
                    ui_strike_popup(`Unique X${new_strike_3}`, 'purple')
                    break;
                case '4':
                    new_strike_4 +=1
                    ui_strike_popup(`Super X${new_strike_4}`, 'red')
                    break;
                default:
                    console.log('error scirpt strike');
            }

        }else{
            if (new_strike_1 > max_strike_1){
                max_strike_1 = new_strike_1
                strike_count_1.innerText = max_strike_1
                new_strike_1 = 0
            }else{
                new_strike_1 = 0   
            }

            if (new_strike_2 > max_strike_2){
                max_strike_2 = new_strike_2
                strike_count_2.innerText = max_strike_2
                new_strike_2 = 0
            }else{
                new_strike_2 = 0   
            }          
            
            if (new_strike_3 > max_strike_3){
                max_strike_3 = new_strike_3
                strike_count_3.innerText = max_strike_3
                new_strike_3 = 0
            }else{
                new_strike_3 = 0   
            }

            if (new_strike_4 > max_strike_4){
                max_strike_4 = 0
                max_strike_4 = new_strike_4
                strike_count_4.innerText = max_strike_4
                new_strike_4 = 0 
            }else{
                new_strike_4 = 0   
            }
            console.log('nope');
        }
        antrian_depan = antrian_belakang
    }else{
        antrian_depan = antrian_belakang
    }  
}

//! UI STRIKE NOTIFICATION
function ui_strike_popup(value, color) {
    const ui_strike = document.getElementById('ui_strike')

    const elem_div = document.createElement('div')
    elem_div.innerText = value
    elem_div.setAttribute('class', 'notification')
    ui_strike.appendChild(elem_div)

    // Applying transition after appending the element
    setTimeout(function () {
        elem_div.style.color = color
        elem_div.style.right = '40px'

        setTimeout(function () {
            elem_div.style.opacity = '0'
        }, 1000)

        setTimeout(function () {
            ui_strike.removeChild(elem_div)
        }, 2000)
    }, 400);
}

//! USER LEVEL
const level = document.getElementById('level')
const usr_level_bar_1 = document.getElementById('usr_level_bar_1')
const next_exp = document.getElementById('next_exp')
const spawn_coin = document.getElementById('spawn_coin')
const jabatan = document.getElementById('jabatan')

let _level = 0
let _exp_level = 100
let _usr_exp = 0

function level_up(another_reward) {

    const regex = /\w(?=.{4}$)/;
    const last_index = hasil_gacha[hasil_gacha.length - 1];
    const find_num = regex.exec(last_index)[0];

    if (find_num == 1) {
        const reward = 10;
        _usr_exp += reward;
    } else if (find_num == 2) {
        const reward = 50;
        _usr_exp += reward;
    } else if (find_num == 3) {
        const reward = 200;
        _usr_exp += reward;
    } else if (find_num == 4) {
        const reward = 1000;
        _usr_exp += reward;
    } else {
        _usr_exp += 0;
    }

    while (_usr_exp >= _exp_level){
        if (_usr_exp > _exp_level){
            _usr_exp -= _exp_level
            _level += 1
            _exp_level *= 1.1
        }else{
            return _usr_exp 
        }
    }
    while (another_reward >= _exp_level){
            another_reward -= _exp_level
            _level += 1
            _exp_level *= 1.1
            if (another_reward <= _exp_level){
                _usr_exp += another_reward
            }
    }
        
    let main_exp = _exp_level.toFixed(0);
    let persentase = (_usr_exp / _exp_level) * 100;
    let usr_exp_gen = _usr_exp.toFixed(0);
    const presentase_hasil = persentase.toFixed(1);

    level.innerText = `LEVEL ${_level}`;
    usr_level_bar_1.style.width = `${presentase_hasil}%`;
    usr_level_bar_1.style.transition = '.3s';

    next_exp.innerText = `Next EXP (${usr_exp_gen}/${main_exp}) ${presentase_hasil}%`;
    if (_level <= 5) {
        jabatan.innerText = `(NORMAL PEOPLE)`;
    } else if (_level > 5 && _level <= 15) {
        jabatan.innerText = `(MANUSIA GABUT)`;
    } else if (_level > 15 && _level <= 25) {
        jabatan.innerText = `(HOMELESS SIMULATION)`;
    } else if (_level > 25 && _level <= 50) {
        jabatan.innerText = `(AMERICAN ZOMBIE)`;
    } else if (_level > 50 && _level <= 100) {
        jabatan.innerText = `(MENTRI GACHOR NERAKA)`;
    } else if (_level > 100 && _level <= 200) {
        jabatan.innerText = `(MAJIKAN JUDI)`;
    } else if (_level > 200 && _level <= 500) {
        jabatan.innerText = `(DIREKTUR PERJUDIAN)`;
    } else {
        jabatan.innerText = `(SANG SIA-SIA)`;
    }
}
