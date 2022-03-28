#include<stdio.h>

int main() {
	int n, k;
	int ticket;
	int result;

	while(1) {
		scanf("%d %d", &n, &k);
		result = n;
		ticket = n;
		while(ticket>=k) {
			result += ticket/k;
			ticket = (ticket%k) + ticket/k;//총 티켓= 남은 티켓 + 새로 생긴 티켓
		}
		printf("%d", result);
	}

	return 0;
}
