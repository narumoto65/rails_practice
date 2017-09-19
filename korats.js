function calc(x){
    document.getElementById("oppai").innerHTML = "";
        
    for(var i = 1; i < x; i++){
        if(x == ""){
            break;
        }
        var count = 0;
        var k = i;
        while(k!=1){
            if(k%2 == 0){
                k = k/2;
                count++;
                console.log("偶数");
            }
            else if(k%2!=0){
                 k = k*3 + 1;
                 console.log("奇数");
            }
        }
        document.getElementById("oppai").innerHTML += i+"の計算回数:"+count+"<br>";
    }
}
