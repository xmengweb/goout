console.log('test');
const myname = document.querySelectorAll('.aui-well-item-bd h3');

let n = prompt("请输入姓名,例如张三", "张三");
myname.forEach(element => {
    element.innerHTML = `申请人：${n}`;
});


const mytime = document.getElementById('mytime');
mytime.addEventListener('click', () => {
    var tall = prompt("请输入出校日期,例如08-07", "08-27");
    if (tall != null) {
        let [a, b] = tall.split('-');
        mytime.innerHTML = `通行时间：2022-${a}-${b}
        8:14:00--2022-${a}-${b} 22:14:46
    `;
    }
})