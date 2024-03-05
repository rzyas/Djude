const bm_waktu_start = document.getElementById('bm_waktu_start')

function main_notification(warna, value){
    const bm_nofikasi = document.getElementById('bm_nofikasi')
    const bm_div_0 = document.createElement('div')
    const bm_div_1 = document.createElement('div')
    const bm_div_2 = document.createElement('div')
    const bm_p_0 = document.createElement('p')
    const bm_p_1 = document.createElement('p')
    const waktu = new Date()
    let get_waktu = waktu
    bm_div_0.setAttribute('id', 'notifikasi_content')
    bm_div_1.setAttribute('id', 'main_notif')
    bm_div_2.setAttribute('id', 'notif_0')
    bm_p_0.setAttribute('id', 'notif_1')
    bm_p_1.setAttribute('id', 'bm_waktu')

    bm_div_2.style.backgroundColor = warna
    bm_p_0.innerText = value
    
    function update_waktu(){
        const tapil = getStatusWaktu(get_waktu)
        bm_p_1.innerText = tapil
        setInterval(function(){
            const updatedTapil = getStatusWaktu(get_waktu)
            bm_p_1.innerText = updatedTapil
        }, 60000)
    }
    update_waktu()

    bm_div_1.appendChild(bm_div_2)
    bm_div_1.appendChild(bm_p_0)
    bm_div_1.appendChild(bm_p_1)
    bm_div_0.appendChild(bm_div_1)

    const firstChild = bm_nofikasi.firstChild

    bm_nofikasi.insertBefore(bm_div_0, firstChild)
}

const waktu_start = new Date()
const tangkap_waktu = waktu_start
bm_waktu_start.innerText = getStatusWaktu(tangkap_waktu)
setInterval(function(){
    const update_tangkap_waktu = getStatusWaktu(tangkap_waktu)
    bm_waktu_start.innerText = update_tangkap_waktu
}, 60000)

function getStatusWaktu(timestamp) {
    const currentTime = new Date();
    const waktuPost = new Date(timestamp);
    const selisih = (currentTime.getTime() - waktuPost.getTime()) / 1000; // dalam detik
    
    // Konversi detik menjadi menit, jam, hari, minggu, dan tahun
    const detik = selisih;
    const menit = Math.floor(detik / 60);
    const jam = Math.floor(menit / 60);
    const hari = Math.floor(jam / 24);
    const minggu = Math.floor(hari / 7);
    const tahun = currentTime.getFullYear() - waktuPost.getFullYear();

    if (selisih < 60) {
        return "Baru saja";
    } else if (menit === 1) {
        return "1 menit yang lalu";
    } else if (menit > 1 && menit <= 60) {
        return menit + " menit yang lalu";
    } else if (jam < 24) {
        if (jam === 1) {
            return "1 jam yang lalu";
        } else if (jam < 5) {
            return jam + " jam yang lalu";
        } else if (jam < 24) {
            return waktuPost.toLocaleTimeString('id-ID', { hour: 'numeric', minute: 'numeric' });
        }
    } else if (hari < 7) {
        if (hari === 1) {
            return "1 hari yang lalu";
        } else {
            return hari + " hari yang lalu";
        }
    } else if (minggu < 52) {
        if (minggu === 1) {
            return "1 minggu yang lalu";
        } else {
            return minggu + " minggu yang lalu";
        }
    } else {
        return tahun + " tahun yang lalu";
    }
}

//! UI NOTIFIKASI
function popup_nofitication(warna, text0, text1){
    const popup_container = document.getElementById('popup_container')
    popup_container.style.display = 'grid'

    const div_popup_content = document.createElement('div')
    const div_popup_color = document.createElement('div')
    const div_popup_icon = document.createElement('div')
    const svg_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg_path.setAttribute('d', 'M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm20,319.91H236v-40h40ZM272,304H240l-6-160h44Z');

    const div_popup_text_container = document.createElement('div')
    const p_pupup_text_0 = document.createElement('p')
    const p_pupup_text_1 = document.createElement('p')

    div_popup_content.setAttribute('id', 'popup_content')
    div_popup_color.setAttribute('id', 'popup_color')
    div_popup_icon.setAttribute('id', 'popup_icon')
    p_pupup_text_0.setAttribute('id', 'pupup_text_0')
    p_pupup_text_1.setAttribute('id', 'pupup_text_1')

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("id", "popup_notif_icon");
    svgElement.setAttribute("viewBox", "0 0 512 512");

    const polygonElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygonElement.setAttribute("points", "240 304 272 304 278 144 234 144");
    polygonElement.setAttribute("style", "fill:none");

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm20,319.91H236v-40h40ZM272,304H240l-6-160h44Z");

    svgElement.appendChild(polygonElement);
    svgElement.appendChild(pathElement);
    
    p_pupup_text_0.innerText = text0
    p_pupup_text_1.innerText = text1
    div_popup_color.style.backgroundColor = warna
    svgElement.style.fill = warna
    div_popup_content.style.border = `2px solid #444`

    div_popup_icon.appendChild(svgElement)
    div_popup_text_container.appendChild(p_pupup_text_0)
    div_popup_text_container.appendChild(p_pupup_text_1)

    div_popup_content.appendChild(div_popup_color)
    div_popup_content.appendChild(div_popup_icon)
    div_popup_content.appendChild(div_popup_text_container)

    popup_container.appendChild(div_popup_content)

    setTimeout(function(){
        div_popup_content.style.marginTop = '10px'
        div_popup_content.style.transition = '.1s'
    }, 10)

    setTimeout(function(){
        div_popup_content.style.marginTop = '0'
        div_popup_content.style.transition = '.1s'
    }, 4960)

    setTimeout(function(){
        const popup_container = document.getElementById('popup_container');
        const firstChild = popup_container.firstElementChild;
        if (firstChild) {
            popup_container.removeChild(firstChild);
        }
    }, 5000);
    
    
}