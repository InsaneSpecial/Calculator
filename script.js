var a="", b="";
var sign="";

function add(){
    a=(Number(a)+Number(b))
    return a
}

function sub(){
    a=(Number(a)-Number(b))
    return a
}

function multiply(){
    a=(Number(a)*Number(b))
    return a
}

function divide(){
    a=(Number(a)/Number(b))
    return a
}
function calculate(){
    var result="";
    switch (sign){
        case'+':
        result =add();
        break;

        case'-':
        result =sub();
        break;

        case'*':
        result =multiply();
        break;

        case'/':
        result =divide();
        break;
    }

    document.getElementById('numdisplay').innerHTML=result;
    b="";
    sign="";
}
function perform(m){
    if(m=="="){
        if((a!="")&(b!="")){
            calculate();
        }
    }
    else if ((m=="+")||(m=="-")||(m=="*")||(m=="/")){
        
    }
}