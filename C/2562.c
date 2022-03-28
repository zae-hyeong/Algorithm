#include<stdio.h>

int main() {
	int arr[9];
	int idx;
	int num;
	
	int i;
	for(i=0; i<9; i++) 
		scanf("%d", &arr[i]);
	num = arr[0];
	idx = 1;
	for(i=1; i<9; i++) {
		if(arr[i]>num) {
			num = arr[i];
			idx = i+1;
		}
	}

	printf("%d\n%d\n", num, idx);
	return 0;
}
