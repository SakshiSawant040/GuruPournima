const inputBox=document.getElementById('input-box')
const listcontainer=document.getElementById('listcontainer')
console.log(listcontainer);
function AddTask(){
    if(inputBox.value === ''){
        alert("write something")
    }else{
        let li=document.createElement('li')
        // console.log("newly created element from js",li);
        // console.log("input values ",inputBox.value);
        li.innerHTML=inputBox.value

        console.log(listcontainer);
        listcontainer.appendChild(li);

        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
        console.log("innerHTML in newly created li",li);
        inputBox.value=''
    }
    // console.log("button pressed",inputBox.value);
}
listcontainer.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
});

function saveData() {
    
}

