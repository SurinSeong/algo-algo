// 프로그래머스 기초 문제

// flag에 따라 다른 값 반환하기.

function solution(a, b, flag) {
   var answer = 0;
   if (flag) {
      answer = a + b;
   } else {
      answer = a - b;
   }
   return answer;
}

// 대문자로 바꾸기

function solution(myString) {
   var answer = '';
   answer = myString.toUpperCase();
   return answer;
}

// 마지막 두 원소

function solution(num_list) {
   var answer = num_list;
   var lastNum = num_list[num_list.length - 1];
   var lastNumBefore = num_list[num_list.length - 2];
   if (lastNum > lastNumBefore) {
      answer.push(lastNum - lastNumBefore);
   } else {
      answer.push(lastNum * 2);
   }
   return answer;
}

// n 번째 원소부터

function solution(num_list, n) {
   var answer = [];
   for (var i = n - 1; i < num_list.length; i++) {
      answer.push(num_list[i]);
   }
   return answer;
}

// n의 배수

function solution(num, n) {
   var answer = 0;
   if (num % n === 0) {
      answer = 1;
   }
   return answer;
}

// 문자열의 앞의 n글자

function solution(my_string, n) {
   var answer = '';
   for (var i = 0; i < n; i++) {
      answer = answer + my_string[i];
   }
   return answer;
}

// 이어 붙인 수

function solution(num_list) {
   var answer = 0;
   var even = '';
   var odd = '';
   for (var i = 0; i < num_list.length; i++) {
      if (num_list[i] % 2 === 0) {
         even = even + num_list[i].toString();
      } else {
         odd = odd + num_list[i].toString();
      }
   }
   answer = Number(even) + Number(odd);
   return answer;
}
