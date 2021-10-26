document.write("<br><span style='color:red;font:20px Tahoma;'>1. Выведите числа от 1 до 50 и от 35 до 8.</span><br><br>");

let i = 1;

while(i <= 50) {
    document.write(i + "; ");
    i++;
}

document.write('<br><br>');

i = 35;

while(i >= 8) {
    document.write(i + "; ");
    i--;
}

document.write("<br><br><span style='color:red;font:20px Tahoma;'> 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом (br /) друг от друга, чтобы получить столбец, а не строку.</span><br>");

i = 89;

while(i >= 11) {
    document.write('<br>' + i + ";");
    i--;
}

document.write("<br><br><span style='color:red;font:20px Tahoma;'>3. С помощью цикла найдите сумму чисел от 0 до 100.</span><br><br>");

let summ = 0;

for (i = 0; i <= 100; i++) {
    summ += i;
}

document.write(summ);

document.write("<br><br><span style='color:red;font:20px Tahoma;'>4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).</span><br><br>");

summ = 0;

for (i = 1; i <= 5; i++) {
    summ += i;
    
    document.write(summ + '; ');
}

document.write("<br><br><span style='color:red;font:20px Tahoma;'>5. Выведите чётные числа от 8 до 56. Решить задание через while и for.</span><br><br>");

for(i = 8; i <= 56; i++) {
    if (i % 2 != 0) continue;

    document.write(i + '; ');
}

document.write("<br><br><span style='color:red;font:20px Tahoma;'>6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10)</span><br>");

let j = 0;

for (i = 2; i <= 10; i++) {

    document.write('<br>');

    for (j = 1; j <= 10; j++) { 
    
        document.write(i + "*" + j + "=" + (i * j) + "<br>"); 
    }  
     
}

document.write("<br><span style='color:red;font:20px Tahoma;'>7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.</span><br><br>");

let n = 0;
let num = 0;

for (n = 1000; n >= 50; n = n/2, num++);

document.write(n + '; ' + num);

document.write("<br><br><span style='color:red;font:20px Tahoma;'>8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь может ввести отрицательное значение.</span><br><br>");

i = 0;
summ = 0;
let ch = 0;

while ((ch = prompt("Введите число", 0)) !== "0" && ch != null) {
    ++i;
    summ += +ch;
}

document.write("Чисел введено: " + i + "; Сумма чисел: " + summ + "; Среднее арифметическое: " + (summ / i));

document.write("<br><br><span style='color:red;font:20px Tahoma;'>9. Дана строка с числами разделенными пробелами «4 98 4 328 6 1 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.</span><br><br>");

let numStr = '4 98 4 328 6 1 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min, max;
num = '';

for (let i = 0; i < numStr.length; i++) {
     if (numStr[i] != ' ') {
         num += numStr[i];
     }

     if (numStr[i] == ' ' || i == numStr.length-1) {
         num = +num;

         if (min == undefined) min = num;
         if (max == undefined) max = num;

         if (min > num) min = num;
         if (max < num) max = num;

         num = '';
     }
 }

 document.write('Самое маленькое число - ' + min + '; Самое большое число - ' + max);

 document.write("<br><br><span style='color:red;font:20px Tahoma;'>10. Дано произвольное целое число n. Написать программу, которая:<br>a. разбивает число n на цифры и выводит их на экран;<br>b. подсчитывает сколько цифр в числе n;<br>c. находит сумму цифр числа n;<br>d. меняет порядок цифр числа n на обратный.</span><br><br>");

n = 159874;
i = 0;
summ = 0;
let nStr = String(n);
let nStrRev = '';

for(; i < nStr.length; i++) {
    document.write(nStr[i]);
    summ += +nStr[i];
    nStrRev += nStr[(nStr.length - 1) - i];
}

document.write('Count: ' + i);
document.write('Sum: ' + summ); 
document.write(nStrRev);