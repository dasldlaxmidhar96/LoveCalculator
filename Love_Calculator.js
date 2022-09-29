function love(){
    let txt1 = document.getElementById("txt1").value;
    let txt2 = document.getElementById("txt2").value;
    if(txt1 || txt2){
        let total=Math.floor(Math.random()*100); //random count
        str=(txt1+txt2).replace(/\s/g,"");   //remove Space
        str=str.toLowerCase();           //Lowercase
        if(localStorage.getItem(str)){
            total=localStorage.getItem(str); //already stored in localStorage
        }else{
            localStorage.setItem(str,total); //new store and get
        }
        document.getElementById("result").innerText=total; //innertext body k 
        console.log(str);
    }else{
        alert("Please Enter Valid Name");
    }
}