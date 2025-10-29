// 프로그래머스 기초문제

// 수 조작하기 1
function solution(n, control) {
   var answer = 0;
   for (var i = 0; i < control.length; i++) {
      if (control[i] === 'w') {
         n = n + 1;
      } else if (control[i] === 's') {
         n = n - 1;
      } else if (control[i] === 'd') {
         n = n + 10;
      } else {
         n = n - 10;
      }
   }
   answer = n;
   return answer;
}

// 주사위 게임2

function solution(a, b, c) {
   var answer = 0;
   if (a === b && b === c) {
      answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
   } else if (a != b && b != c && a != c) {
      answer = a + b + c;
   } else if (a === b && b != c) {
      answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
   } else {
      answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
   }
   return answer;
}

// 주사위 게임2 인상적인 풀이법

function solution(a, b, c) {
   const dsttCnt = new Set([a, b, c]).size; // JS에서 Set는 중복되지 않음.

   switch (
      dsttCnt // switch 사용으로 깔끔하게 작성.
   ) {
      case 3:
         return a + b + c;
      case 2:
         return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
      case 1:
         return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
   }
}
