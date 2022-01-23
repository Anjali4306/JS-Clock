//------------------------------------For clock hands------------------------------------------------
setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime + stime / 10;
    srotation = 6 * stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
//------------------------------------For background color change-------------------------------------
const button = document.querySelector('button');
button.addEventListener('click', function() {
    const newcolor = makeRandColor();
    document.body.style.backgroundColor = newcolor;

})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}