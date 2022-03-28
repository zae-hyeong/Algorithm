#include<stdio.h>

int main() {
	int i, j, count;
	char c;

	count=0;
	for(i=0; i<8; i++){
		for(j=0; j<9; j++){
			scanf("%c", &c);
			if((c == 'F') && (((i+j)%2==0)))	
				count++;
		}
	}
	printf("%d\n", count);

	return 0;
}
