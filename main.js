// Домашняя работа: Занятие 2.

// document.getElementById('one').innerHTML = 'Привет всем.'

// Домашняя работа: Занятие 3.
// let myday = prompt('Число больше или меньше 100?')
// console.log(myday);

// Домашняя работа: Занятие 4.

// let a = 5
// let b = 10

// if(a + b>15){
// console.log('Да');
// }
// else if (a + b == 15){
// console.log('Равны');
// }
// else{
//     console.log('Нет');
// }

// Домашняя работа: Занятие 5.
// for(let i =1;i<=50;i++){
//     console.log(i);
// }

// for(let i =50;i>24;i--){
//     console.log(i);
// }

// let i = 2500;
// while(i<3000){
//   i++;
//   if(i % 2)
//    console.log(i);
// }

// Домашняя работа: Задание 6.
// let a = 2;
// let b = 2;

// if(a === b){
//     console.log('Равны');
// }
// else{
//     console.log('Не равны');
// }

// let result = (a === b)
//     console.log(result);

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Да');
//     break;
//   case 5:
//     alert('Нет');
//     break;
//   default:
//     alert("Не сработало");
// }

//     let a = 1-3;
//     let b = 3-6;
//     let c = 6-9;
//     let d = 9-12;
//     let = prompt('Какое число?')
// switch (a|| b|| c|| d) {
//   case a:
//     alert('зима');
//     break;
//   case b:
//     alert('весна');
//     break;
//   case c:
//     alert('лето');
//     break;
//   case d:
//     alert('осень');
//     break;
// }
// Домашняя работа: Задание 7.

    // let menu = prompt("Калькулятор: 1) сложение, 2) вычитание, 3)умножение, 4) деление")
    // let qwert = document.querySelector('.qwert')
    // function calc1(a, b) {
    //     if (menu == 1){
    //     let s1 = prompt("a");
    //     let s2 = prompt("b");
    //     let sum = +s1 + +s2;
    //     qwert.innerHTML = sum;
    //     }
    //     }
    //     function calc2(a, b) {
    //     if (menu ==2){
    //     let s1 = prompt("a");
    //     let s2 = prompt("b");
    //     let sub = s1 - s2;
    //     qwert.innerHTML =sub;
    //     }
    //     }
    //     function calc3(a, b) {
    //     if (menu == 3){
    //     let s1 = prompt("a");
    //     let s2 = prompt("b");
    //     let multi = s1 * s2;
    //     qwert.innerHTML = multi;
    //     }
    //     }
    //     function calc4(a, b) {
    //     if (menu == 4){
    //     let s1 = prompt("a");
    //     let s2 = prompt("b");
    //     let div = s1 / s2;
    //     qwert.innerHTML =div;
    //     }
    //     }
        
    //     calc1()
    //     calc2()
    //     calc3()
    //     calc4()

    // Домашняя работа: Задание 8.

    // const one = document.querySelector('.one')
    // one.onclick = function (){
    // Element.style.widthHeight = '300px'
    // }   

    // const one = document.querySelector('.one')
    // one.onclick = function (){




    // Mydiv1.classlist.remove('Mydiv1')
    // }


    // Домашняя работа: Задание 9.
    // let one = document.querySelector('.one');
    // let Mydiv1 = document.querySelector('.Mydiv1');



    // let a=[0,1,2,3,4,5,6,7,8,9,10,11,12];
    // one.onclick = a.splice(4,7)  
    // if (i < a.length){
    // Mydiv1.innerHTML += a[i++] + "<br />"};

    // Домашняя работа: Задание 10.

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=57.15&lon=65.51&appid=7ac3da5e7f1876686f8c4dbe01b8d452')
    .then(function(resp){return resp.json()})
    .then(function(data){
        document.querySelector('.wind').textContent = data.wind.speed
        document.querySelector('.humidity').textContent = data.main.humidity
        document.querySelector('.country').innerHTML = data.sys.country.
        document.querySelector('.sunrise').textContent = data.sys.sunrise.
        document.querySelector('.sunset').textContent = data.sys.sunset.
        console.log(data);
    })


    

     
     
    
    

