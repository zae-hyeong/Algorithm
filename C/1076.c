#include<stdio.h>
#include<string.h>

int main() {
	char*arr[10] = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
	int arr2[10] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000};

	int i, ii, num;
	char tmp[7];
	
	num=0;

	for(i=0; i<3; i++) {
		scanf("%s", tmp);
		for(ii=0; ii<10; ii++) {
			if(!(strcmp(arr[ii], tmp))) {
				if(i==2) {
					num=num*arr2[ii];
					break;
				}
				else {
					num=num*10+ii;
					break;
				}
			}
		}
	}
	printf("%d\n", num);
}
