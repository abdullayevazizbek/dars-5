const n = document.querySelector('.bosh_two')
const m = document.querySelector('.panja_two')
const Javob = document.querySelector('.javob')
const inputBtn = document.querySelector('.input_btn')
console.log();
// console.log(n.value);
// console.log(m);
// console.log(inputBtn);

inputBtn.addEventListener('click', function () {
    const Xato = document.querySelector('.xato')
    const u = Number(n.value)
    const j = Number(m.value)
    console.log(u);
    console.log(j);
    if (j === 0 && u === 0) {
        Xato.value.innerHTML = 'Bu yo\'laknini to\'dirmadinggiz'
        
    } else {
        if (j % u === 0) {
            const o = (j / 2) + u + 1
            // console.log(o);
            Javob.innerHTML = o
        } else {
            Javob.innerHTML = -1

        }
    }



})