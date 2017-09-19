var colorPick;
var age;

function sentaku(){
    var radio_button2 = document.getElementsByName("age");
    var radio_button = document.getElementsByName("color");
    for(var i = 0; i < radio_button2.length; i++){
        if(radio_button2[i].checked){
            age=radio_button2[i].value;
            document.getElementById("keikoku").innerHTML = "";
        }
    }
    if(age === undefined){
       document.getElementById("keikoku").innerHTML = "成熟度を選択してください";
    } 
    for(var i = 0; i <radio_button.length; i++){
        if(radio_button[i].checked){
            colorPick = radio_button[i].value;
            document.getElementById("keikoku2").innerHTML = "";
        }
        if( colorPick === undefined){
            document.getElementById("keikoku2").innerHTML = "色を選択してください";
        }
    }
    combine(age,colorPick);
}
function combine(a,b){
    if( a == 0 && b ==0){
        document.getElementById("selectedCat").innerHTML = "<img src='white_kitten.jpg' alt='白子猫' width='600' height='600'>" 
    }
    else if( a == 0 && b == 1){
        document.getElementById("selectedCat").innerHTML = "<img src='black_kitten.jpg' alt='黒子猫' width='640' height='420'>"
    }
    else if(a == 0 && b ==2){
        document.getElementById("selectedCat").innerHTML = "<img src='grey_kitten.jpg' alt='灰色子猫' width='640'height='500'>"
    }
    else if(a == 0 && b==3){
        document.getElementById("selectedCat").innerHTML = "<img src='stripe_kitten.jpg' alt='三毛子猫' width='640' height='450'>"
    }
    else if(a==1 && b==0){
        document.getElementById("selectedCat").innerHTML = "<img src='white_cat.jpg' alt='白猫 width='640' height='450'>"
    }
    else if(a == 1 && b == 1){
        document.getElementById("selectedCat").innerHTML = "<img src='black_cat.jpg' alt='黒猫' width='640' height='500'>"
    }
    else if(a==1 && b == 2){
        document.getElementById("selectedCat").innerHTML = "<img src = 'grey_cat.jpg' alt=灰色猫 width='640' height='450'>"
    }
    else if(a==1 && b== 3){
        document.getElementById("selectedCat").innerHTML = "<img src='stripe_cat.jpg' alt='三毛猫'witdh='480' height='640'>"
    }
    else if(a == 2){
        document.getElementById("selectedCat").innerHTML = "<img src='kat.jpg' width='780' height='515' alt = '手書き猫'>"
    }

}

