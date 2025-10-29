// 프로그래머스 기초문제

// 두 수의 연산값 비교하기

function solution(a, b) {
   var answer = 0;
   var ab = a.toString() + b.toString();
   var ab2 = 2 * a * b;
   if (Number(ab) > ab2) {
      answer = Number(ab);
   } else {
      answer = ab2;
   }

   return answer;
}

// 문자열의 뒤의 n글자

function solution(my_string, n) {
   var answer = '';
   var strLen = my_string.length;
   for (var i = strLen - n; i < strLen; i++) {
      answer = answer + my_string[i];
   }
   return answer;
}

// 문자열 곱하기

function solution(my_string, k) {
   var answer = '';
   for (var i = 0; i < k; i++) {
      for (var j = 0; j < my_string.length; j++) {
         answer = answer + my_string[j];
      }
   }
   return answer;
}

// 원소들의 곱과 합

function solution(num_list) {
   var answer = 0;
   var gob = 1;
   var hab = 0;
   for (var i = 0; i < num_list.length; i++) {
      gob = gob * num_list[i];
      hab = hab + num_list[i];
   }
   if (gob > hab * hab) {
      answer = 0;
   } else {
      answer = 1;
   }
   return answer;
}

function solution(num_list) {
   var answer = 0;
   var gob = 1;
   var hab = 0;
   for (var i = 0; i < num_list.length; i++) {
      gob = gob * num_list[i];
      hab = hab + num_list[i];
   }
   if (gob > hab ** 2) {
      answer = 0;
   } else {
      answer = 1;
   }
   return answer;
}
