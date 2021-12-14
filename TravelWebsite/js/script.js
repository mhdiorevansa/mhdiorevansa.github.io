let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function checkBooking(){
    var tempat = document.getElementById("namatempat").value;
    var jumlah = document.getElementById("banyakpengunjung").value;
    var mulai = document.getElementById("mulai").value;
    var selesai = document.getElementById("selesai").value;

    if(tempat == "" || jumlah == "" || mulai == "" || selesai ==""){
        alert("form tidak boleh kosong");
    }
    else{
        alert("berhasil di booking");
    }
}

function checkKomentar(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nohp = document.getElementById("nohp").value;
    var subjek = document.getElementById("subjek").value;
    var komen = document.getElementById("komen").value;
    

    if(nama == "" || email == "" || nohp == "" || subjek =="" || komen == ""){
        alert("form tidak boleh kosong");
    }
    else{
        alert("komentar dikirim");
    }
}