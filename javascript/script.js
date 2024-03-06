var btns=document.querySelector("h2")

var addfriend=document.querySelector("#add")
var flag=0
/* Its use for one button. one button perform friend and unfriend  operation...*/

addfriend.addEventListener("click",function(){ 
    if(flag==0){
        btns.innerHTML="Friend"
        btns.style.color="green" 
        console.log("success")
        addfriend.innerHTML="Remove Friend"
        addfriend.style.backgroundColor="#fff"
        flag=1

    }else{
        btns.innerHTML="Unfriend"
        btns.style.color="red"
        console.log("successufullya")
        addfriend.innerHTML="Add Friend"
        addfriend.style.backgroundColor="green"
        flag=0
    }

})
    /*addfriend.addEventListener("click",function(){ 
        btns.innerHTML="Friends"
        btns.style.color="green"
        console.log("success")
    })
 
        btns.innerHTML="Unfriends"
        btns.style.color="red"
        console.log("successufullya")
 })*/
       
       

