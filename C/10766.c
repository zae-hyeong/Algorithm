#include<stdio.h>
#include<string.h>

int main() {
	char*arr[10] = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
	int i, ii;
	int num=0;

	char tmp[10];
	int arr[3];

	for(i=0; i<3; i++) {
		scanf("%s", tmp);
		for(ii=0; ii<10; ii++) {
			if(!(strcmp(arr[ii], tmp))) 
				arr[i]=ii;
		}
	}
	num=arr[0]*10+arr[1];

	for(i=0;i<arr[2]; i++)
		num *=10;
	
	printf("%d\n", num);
}
