#include <iostream>
#include <string>

int returnNum(){
    return 4;
}
int main(){
    std::string xx("hey its meee");
    std::cout << returnNum() << std::endl;
    std::cout << xx <<std::endl;
    returnNum();
}