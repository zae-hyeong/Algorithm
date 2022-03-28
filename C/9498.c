#include<stdio.h>

int main() {
	int sc;
	scanf("%d", &sc);
	if(sc>=90 && sc<=100)
		printf("A\n");
	else if(sc>=80 && sc<90)
		printf("B\n");
	else if(sc>=70 && sc<80)
		printf("C\n");
	else if(sc>=60 && sc<70)
		printf("D\n");
	else
		printf("F\n");
	return 0;
}
