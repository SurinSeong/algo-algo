# 프로그래머스 Lv2 카펫(완전탐색)

def solution(brown, yellow):
    answer_row = 0
    answer_col = 0
    for i in range(1, yellow + 1):
        a, b = 0, 0
        if yellow % i == 0:
            a = yellow // i
            b = i
        if (2*a + 2*b + 4) == brown:
            answer_col = a + 2
            answer_row = b + 2
    answer = [answer_row, answer_col]
    print(answer)
    return answer