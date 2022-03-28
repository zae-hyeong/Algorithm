#include<stdio.h>
#include<stdlib.h>

typedef struct _brand {
	int set;
	int one;
} Brand;

int main() {
	int n, m;
	int i;
	int min_set, min_one;
	int numOfSet, numOfOne;
	int result=0;

	Brand *arr = malloc(sizeof(Brand)*m);

	scanf("%d %d", &n, &m);
	
	min_set=1001;
	min_one=1001;
		for(i=0; i<m; i++) {
		scanf("%d %d", &arr[i].set, &arr[i].one);

	        if(min_set > arr[i].set) //기타줄 세트의 최소값 구하기
        	        min_set = arr[i].set;

                if(min_one > arr[i].one) //기타줄 낱개의 최소값 구하기
                        min_one = arr[i].one;
	}

	numOfSet = n/6;
	numOfOne = n%6;

//	printf("총 구매 필요한 기타줄 개수:%d\n세트 개수:%d\n낱개 개수:%d\n\n세트 최소값:%d\n낱개 최소값:%d\n", n, numOfSet, numOfOne, min_set, min_one);
	
	if(min_set>=min_one*6) //낱개가 더 싼 경우
		result = min_one*n;
	else {//세트가 더 싼 경우
		if(min_set<=min_one*numOfOne && numOfOne != 0) //낱개가 존재하고 낱개 여러개보다 세트가 싼 경우
			result = min_set*(numOfSet+1);
		else
			result = min_set*numOfSet + min_one*numOfOne;

	}

	printf("%d\n", result);

}
