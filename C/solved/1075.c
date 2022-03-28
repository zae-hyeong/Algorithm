#include<stdio.h>

int main() { 
    int a, b, c, n, result, tmp;
    scanf("%d", &a);
    scanf("%d", &b);

    tmp=a%100;
    a=a-tmp;
   
    n=1;
    do{
        c=b*n;
        n++;
    }while(c<a);
    printf("%d\n", c);
    result=c%100;
    
    if(result<10)
        printf("0%d\n", result);
    else
        printf("%d\n", result);
    
}
