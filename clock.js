function time(){
    const time = new Date().toTimeString();
    document.querySelector('.tenhours').textContent = time.charAt(0);;
    document.querySelector('.hours').textContent = time.charAt(1);
    document.querySelector('.tenminits').textContent = time.charAt(3);
    document.querySelector('.minits').textContent = time.charAt(4);
    document.querySelector('.tenseconds').textContent = time.charAt(6);
    document.querySelector('.seconds').textContent = time.charAt(7);
}
setInterval(time,1000);
