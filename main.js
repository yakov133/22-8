//targil 1
// let arr = [
//     {   
//         name:"eat",
//         isCompleted:false
//     },
//     {   
//         name:"work",
//         isCompleted:true
//     },
//     {   
//         name:"vecation",
//         isCompleted:false
//     },
//     {   
//         name:"run",
//         isCompleted:false
//     },
//     {   
//         name:"read",
//         isCompleted:true
//     }
// ]
// for(let i = 0; i < arr.length;i++){
//     let num = Math.floor(Math.random() * 2000 +1);
//     if(arr[i].isCompleted){
//         document.write(`<p id="${num}" x>name: ${arr[i].name},  isCompleted:  ${arr[i].isCompleted}</p>`);
//     }else{
//         document.write(`<p id="${num}">name: ${arr[i].name},  isCompleted:  ${arr[i].isCompleted}</p>`);
//      }
// }

// function addNewTask(){
//     const inputPointer = document.getElementById("el");
//     let num = Math.floor(Math.random() * 2000 +1);
//     let status = num % 2 ? true : false;
//     arr.push({
//         name:inputPointer.value,
//         isCompleted:status
//     })
//     if(status){
//     document.body.innerHTML += `<p id="${num}" class="Completed">name: ${arr[arr.length-1].name},  isCompleted:  ${arr[arr.length-1].isCompleted}</p>`
//     }else{
//         document.body.innerHTML += `<p id="${num}" >name: ${arr[arr.length-1].name},  isCompleted:  ${arr[arr.length-1].isCompleted}</p>`
//     }
    
// }

//targil 2
    // let movies = [
    //     {
    //         name:"avatar",
    //         imgSrc:"https://wallpapershome.com/images/pages/pic_v/17870.jpg",
    //         players:["jon","lee","brus"]
    //     },
    //     {
    //         name:"good deeds",
    //         imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfKV7OPv3i3VkkTXGLyRXLpjZheZobPBIMw&usqp=CAU",
    //         players:["jon","lee","brus"]
    //     },
    //     {
    //         name:"fast and furious",
    //         imgSrc:"https://wallpaperaccess.com/full/348078.jpg",
    //         players:["jon","lee","brus"]
    //     },
    //     {
    //         name:"player one",
    //         imgSrc:"https://images8.alphacoders.com/911/thumb-1920-911204.jpg",
    //         players:["jon","lee","brus"]
    //     },
    //     {
    //         name:"Lucy",
    //         imgSrc:"https://wallpapercave.com/wp/wp3559091.jpg",
    //         players:["jon","lee","brus"]
    //     },
    // ];
    // for(let i = 0; i < movies.length; i++){
    //     document.body.innerHTML += `<div>
    //     <p>name: ${movies[i].name}</p>
    //     <p>players: ${movies[i].players}</p>
    //     <p><img width="400px" height="500px"src="${movies[i].imgSrc}"></p>
    //     </div>`
    // }
    
    // targil 3
    function targil3(){
        const valueOFInput = document.getElementById("addtargil3").value;
        document.body.innerHTML += `<p> ${valueOFInput}</p>`
    }

    //targil 4
    function targil4(){
        const str1 = document.getElementById("str1").value;
        const str2 = document.getElementById("str2").value;
        let obj = {
            str1,
            str2
        }
        console.log(obj);
    }

    //targil 5
    function targil5(){
         const userName = document.getElementById("name");
         const userEmail = document.getElementById("email");
         const userAge = document.getElementById("age");
             
         let obj = {
             name:userName.value,
             email:userEmail.value,
             age:userAge.value
         }
         document.body.innerHTML += `
         <p>name: ${obj.name}</p>
         <p>email: ${obj.email}</p>
         <p>age: ${obj.age}</p>`
    
     }

     
     //targil 6
     function targil6(){
        const userName = document.getElementById("name6");
        const userEmail = document.getElementById("lastName6");
        let person = {
            name:userName.value,
            lastName:userEmail.value
        }
        console.log(person);
     }

     //targil 7
    //  for(let i = 1; i <= 10; i++){
    //      document.body.innerHTML += `<p>${i}</p>`
    //  }


     //targil 8
     let arrOfEmails = ["yakov133@walla.com","yakovka133@gmail.com"];
     function targil8(){
        const userEmail = document.getElementById("email8").value;
        if(arrOfEmails.includes(userEmail)){
            document.body.innerHTML += `<p> is in the arr</p>`;
        }else{
            document.body.innerHTML += `<p> is in NOT the arr</p>`
        }

     }
     
     //targil 9
     function targil9(){
        const userInput = document.getElementById("text9").value;
        document.body.innerHTML += `<p>string: ${userInput}</p>`;
        document.body.innerHTML += `<p>string:string length ${userInput.length}</p>`;
     }


     //targil 10
     function targil10(){
        let obj = {
            name:document.getElementById("name10").value,
            age:document.getElementById("age10").value,
            cuontry:document.getElementById("cuntry10").value,
            pic:document.getElementById("pic10").value
        }

        console.log(obj);
        document.body.innerHTML += `
        <div>
        <p>name: ${obj.name}</p>
        <p>age: ${obj.age}</p>
        <p>country: ${obj.cuontry}</p>
        <p><img width="400px" height="500px src="${obj.pic}"> </p>
        </div>`   
     }