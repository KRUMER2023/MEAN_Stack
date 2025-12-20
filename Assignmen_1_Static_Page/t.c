#include<stdio.h>

int main(){
    int a = 3;
    int b = 2;
    int ans = 0;
    for(int i=1; i<=a; i++){
        ans += b;
    }
    printf("%d",ans);
}

