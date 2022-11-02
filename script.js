
let searching=document.querySelector('.search-username');
let profile=document.querySelectorAll('.user-list>img');
let userName=document.querySelectorAll('.namencity>h3');
let userAddress=document.querySelectorAll('.namencity>p');
let userList=[];
let ul=document.body.querySelector('.user-container>ul');



async function getUser(){
    users=await fetch(`https://randomuser.me/api?results=100`);
    data= await users.json();
    
    // console.log(data);  
    for(let i=0;i<data.results.length;i++){
        let li=document.createElement('li');
        li.classList.add('user-list');
        userList.push(li);
        li.innerHTML=`<img src="${data.results[i].picture.large}" alt="Filed to load the image" class='user-list'>
                        <div class=namencity><h3>${data.results[i].name.first} ${data.results[i].name.last}</h3> <p>${data.results[i].location.city},${data.results[i].location.state}</p>`;
        ul.appendChild(li);
        let loading=document.querySelector('.loading');
        loading.classList.add('hide-list');

    }
}
getUser();
    
// console.log(userList);

searching.addEventListener('input',(event)=>searchResults());

function searchResults(event){
    let searching=document.querySelector('.search-username');
    // console.log(searching.value)
    userList.forEach(li=>{
        data.results='';
        if(li.innerText.toLowerCase().includes(searching.value.toLowerCase())){
            // ul.appendChild(li);
            li.classList.remove('hide-list');
        }
        else{
            // ul.remove(li)
            li.classList.add('hide-list');
        }
    })

}









    
    

   
    
