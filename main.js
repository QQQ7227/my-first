
// console.log("Привет всем!");
// console.log(715);

// mybirthDay = '05';
// console.log(mybirthDay);
// console.log('Добро' + 'пожаловать' + 'на курс' + 'Павел');
// alert('10.04.2023')
// let a = Infinity
// number
// let a = Infinity // 1 способ задать явно
// console.log(1/0);// разделить число на 0
// NaN
// console.log('stroka' / 2);
// bigint
// console.log(99999999999999999999999999n);

//sring строка

// let str1 = 'JOJO ${str2}'
// let str2 = "Jojo ${str1}"
// let str3 = `ANIME ${str2}`

// console.log(str1);
// console.log(str2);
// console.log(str3);

// boolean булевый
// let check = true
// let unCheck = false

// console.log(false == 0);

//null
// let nuller = null
// console.log(nuller);

// undefined
// let a ;
// console.log(a);

// typeof
// typeof x
// typeof(x)
// console.log(typeof 'cat');
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof 10n);
// console.log(typeof undefined);
// console.log(typeof null);
// let inp = document.querySelector('.text')
// let btn = document.querySelector('.check')
// let out = document.querySelector('.out')
// btn.onclick = function() {
// let e = inp.value
// out.innerHTML = e
// inp.value = ''
// }

// document.getElementById('one').innerHTML = 'Привет всем.'

// let myday = prompt('Число больше или меньше 100?')
// console.log(myday);

// if(myday > 100){
//     console.log(100);
// }
// else{
//     document.getElementById('one').innerHTML = '100';
// } 

// let year = prompt('В каком году вышел ходячий замок?')
// // не верная запись
// if(year <2004){
// console.log('Рано');
// }
// else if(year>2004){
// console.log('Поздно');
// }
// else{
// console.log('Верно');
// }
// // не совсем верная запись
// if(year <2004){
// console.log('Рано');
// }
// if(year>2004){
// console.log('Поздно');
// }
// if(year ==2004){
// console.log('Верно');
// }


// let day = prompt('Сколько днй в неделе?')
// let week = (day == 7) ? 'Отлично' : 'Ты не умеешь считать'
// // let Результат = Условие ? если True Первый вариант : иначе Второй вариант
// // if(day== 7){
// // week =true
// // }
// // else{
// // week = false
// // }
// console.log(week);

// ВОзведение в степень **

// console.log(2**2);

// Оператор остатка от деления %

// console.log(10%2.5);

//< > - оператор больше или меньше
//>= <= - Больше или равно меньше или равно
//== - Не строгое равно
// === - CТрогое равно
// = - оператор присваивания
// != - не равно

// ||
// true || true = true
// false || true = true
// true || false = true
// false || false = false

// let a =4
// let b = 10
// if(a<5 || a>5){
// console.log(b);
// }
 

// &&
// true || true = true
// false || true = false
// true || false = false
// false || false = false

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



// let i = 0;

// while(i<3){
// // alert(i)
// i++
// }
// 1 итерация i = 0
// 2 итерация i = 1
// 3 итерация i = 2
// 4 итерация i = 3

// let i = 0;
// // i++
// // ++i
// console.log(++i);    

// ключевое слово do{
//     тело цикла
//     } ключевое слово while(условие)

// for(let i = 0; i < 20;i+=2){
//     console.log(i);
//     }


//     for(let i = 0; i < 3;i++){
//         console.log(i);
//         }
        
//         // (Если условие == true -> Выполнить тело, Выполнить шаг)
//         // (Если условие == true -> Выполнить тело, Выполнить шаг)
//         // (Если условие == true -> Выполнить тело, Выполнить шаг)
//         // ......
        
//         // выполняем начало
//         let i = 0;
//         // Если условие == true -> Выполнить тело, Выполнить шаг
//         if(i<3){console.log(i)};i++
//         // Если условие == true -> Выполнить тело, Выполнить шаг
//         if(i<3){console.log(i)};i++
//         // Если условие == true -> Выполнить тело, Выполнить шаг
//         if(i<3){console.log(i)};i++
//         // Если условие == true -> Выполнить тело, Выполнить шаг
//         // конец цикла


//         let i = 0
//         for(i = 0; i < 3;i++){
//         console.log(i);
//         }
//         console.log(i);


//         let i = 0
//         for(;;){
//         console.log(i++);
//         if(i>10) break;
//         console.log(i+10);
//         }


//         for(let i =0; i<10; i++){
//             if(i % 2 ==0 ){
//             console.log(i);
//             }
            
//             }


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


// let a = 5;
// switch(a){
// case 12:
// alert('Правильно');
// break

// case 5:
// case 10:
// alert(1)
// break
// alert(2)
// break
// default:
// alert('результат кривой однознанчно')

// }

// let a = '1';
// let b = 0;
// switch(+a){
// case b + 1:
// console.log('Выполнится потому как значением +а, будет в точности равно и + 1');
// break
// default:
// console.log('Это не выполнится ');
// }
// let c = + a
// console.log();


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



// let= null
// let= 'Пока'
// let= 'Привет'
// alert(null ?? 'Пока' ?? 'Привет')


// function decloration
//
// ключевое слово function название функции(параметры){
//     тело функции
//     }
//     function one(){
//     console.log('Наша первая осознанная функция');
//     }

// let i = 0
// function one(){
// console.log('Наша первая осознанная функция');
// alert('Ты нажал кнопку ' + i + ' раз')
// i+=1
// }

// let btn = document.querySelector('.check')

// btn.onclick = one

// function borsh(){
//     console.log('порезать лук ');
//     console.log('овощи');
//     console.log('поставить кастрюлю ');
    
//     }
//     borsh()

// let a = 12
// let b = 118

// function multiply(){
// return a + b

// }
// multiply()

// let a = prompt('Ваше имя?')
// function mlt(x,y){
// return x + y
// }
// let c = mlt('Добро пожаловать ', a )
// console.log(c);

    // const one = document.querySelector('.one')
    // one.onclick = function (){  
    // alert=2
    // }

    // document.button.innerHTML = (one.onclick= function(){alert=2})


    // const one = document.querySelector('.one')
    // one.onclick = function (){
    // Element.style.widthHeight = '300px'
    // }   

    const one = document.querySelector('.one')
    one.onclick = function (){




    Mydiv1.classlist.remove('Mydiv1')
    }