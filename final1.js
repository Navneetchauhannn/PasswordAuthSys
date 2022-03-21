// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSTRG-BXOc9X0ZLMcGe3Lb1HiLm_97XPY",
    authDomain: "password-9dd66.firebaseapp.com",
    projectId: "password-9dd66",
    storageBucket: "password-9dd66.appspot.com",
    messagingSenderId: "212638729425",
    appId: "1:212638729425:web:50f8e1838564dd114cb1f0",
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// loginForm
const auth = firebase.auth();

var imageArray = [[1,2,3,4,5,6,7,8,9],
                 [11,12,13,14,15,16,17,18,19],
                 [21,22,23,24,25,26,27,28,29]];
            var n=3; // no of varient
            var array = [];

            function random() {
                array = [];
                
                for(let i=0; i<9; i++) {
                    var ran = Math.floor((Math.random()*n));
                    array.push(imageArray[ran][i]);
                }
                
                //shuffle images
                for(let i=array.length-1; i>0; i--) {
                    const j = Math.floor(Math.random() * (i+1));
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }


                //display shuffled images
                document.getElementById('a0').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[0]}.jpg" id="a" style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('a1').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[1]}.jpg" id="b" style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('a2').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[2]}.jpg" id="c" style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('b0').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[3]}.jpg" id="d"  style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('b1').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[4]}.jpg" id="e" style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('b2').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[5]}.jpg" id="f" style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('c0').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[6]}.jpg" id="g"  style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('c1').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[7]}.jpg" id="h" style="height: 80px; width: 80px;"></button>
                `;
                document.getElementById('c2').innerHTML=`
                    <button onclick="fill()"><img src="images/${array[8]}.jpg" id="i" style="height: 80px; width: 80px;"></button>
                `;
            }
            
            function fill(e) {
                var cur = document.getElementById('password').value;
                e = e || window.event;
                e = e.target || e.srcElement;
                cur += e.id;
                document.querySelector("#password").value=cur;
            }

            // set map
            const map1 = new Map();
            map1.set(1,"m#");
            map1.set(2,"&s");
            map1.set(3,"l2");
            map1.set(4,"p0");
            map1.set(5,"9c");
            map1.set(6,"a@");
            map1.set(7,"nb");
            map1.set(8,")g");
            map1.set(9,"?y");

function reset() {
    const pass=document.getElementById("password");
    pass.value = "";
    random();
}

//signup function
function signUp() {
    var email = document.getElementById("email");
    const pas=document.getElementById("password").value;
    let pass = /[a-iA-I]{4,}/;
    if(!pass.test(pas)) {
        alert("The password must be formed by selecting at least 4 images.");
        return;
    }
    var setPassword = "";

    for(let i=0; i<pas.length; i++) {
        setPassword += map1.get((array[pas[i].charCodeAt(0)-"a".charCodeAt(0)])%10); 
    }
    const promise = auth.createUserWithEmailAndPassword(email.value, setPassword);
    promise.catch(e => alert(e.message));
    reset();
    alert("sign up successfully");
    window.location.href="login.html";
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    const pas=document.getElementById("password").value;
    var setPassword = "";

    for(let i=0; i<pas.length; i++) {
        setPassword += map1.get((array[pas[i].charCodeAt(0)-"a".charCodeAt(0)])%10); 
    }

    const promise = auth.signInWithEmailAndPassword(email.value, setPassword);
    promise.catch(e => alert(e.message));
    reset();
}

//sing out
function signOut() {
    auth.signOut();
    window.location.href = "home.html";
}

// active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
        // window.location.href="detail.html";
    }
    // else {
    //     alert("No Active user Found");
    // }
})

//call random() while reload page
window.onload = random;

// show detail



// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBSTRG-BXOc9X0ZLMcGe3Lb1HiLm_97XPY",
//     authDomain: "password-9dd66.firebaseapp.com",
//     projectId: "password-9dd66",
//     storageBucket: "password-9dd66.appspot.com",
//     messagingSenderId: "212638729425",
//     appId: "1:212638729425:web:50f8e1838564dd114cb1f0"
//   };

// // initialize firebase
// firebase.initializeApp(firebaseConfig);

// // loginForm
// const auth = firebase.auth();

// var imageArray = [[1,2,3,4,5,6,7,8,9],
//                  [11,12,13,14,15,16,17,18,19],
//                  [21,22,23,24,25,26,27,28,29]];
//             var n=3; // no of varient
//             var array = [];

//             function random() {
//                 array = [];
//                 const size = 9;
                
//                 //select random images
//                 for(let i = 0; i < size; i++) {
//                     var ran = Math.floor((Math.random()*n));
//                     array.push(imageArray[ran][i]);
//                 }
//                 //shuffle images
//                 for(let i=array.length-1; i>0; i--) {
//                     const j = Math.floor(Math.random() * (i+1));
//                     const temp = array[i];
//                     array[i] = array[j];
//                     array[j] = temp;
//                 }


//                 //display shuffled images
//                 document.getElementById('a0').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[0]}.jpg" id="a" style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('a1').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[1]}.jpg" id="b" style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('a2').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[2]}.jpg" id="c" style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('b0').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[3]}.jpg" id="d"  style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('b1').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[4]}.jpg" id="e" style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('b2').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[5]}.jpg" id="f" style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('c0').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[6]}.jpg" id="g"  style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('c1').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[7]}.jpg" id="h" style="height: 100px; width: 100px;"></button>
//                 `;
//                 document.getElementById('c2').innerHTML=`
//                     <button onclick="fill()"><img src="images/${array[8]}.jpg" id="i" style="height: 100px; width: 100px;"></button>
//                 `;
//             }
            
//             function fill(e) {
//                 var cur = document.getElementById('password').value;
//                 e = e || window.event;
//                 e = e.target || e.srcElement;
//                 cur += e.id;
//                 document.querySelector("#password").value=cur;
//             }

//             // set map
//             const map1 = new Map();
//             map1.set(1,"m#");
//             map1.set(2,"&s");
//             map1.set(3,"l2");
//             map1.set(4,"p0");
//             map1.set(5,"9c");
//             map1.set(6,"a@");
//             map1.set(7,"nb");
//             map1.set(8,")g");
//             map1.set(9,"?y");

// function reset() {
//     const pass=document.getElementById("password");
//     pass.value = "";
//     random();
// }
// //signup function
// function signUp() {
//     var email = document.getElementById('email');
//     const pas=document.getElementById("password").value;
//     let pass = /[a-iA-I] {4,}/;
//     if(!pass.test(pas)) {
//         random();
//         alert("The password must be formed by selecting at least 3 images.");
//         return;
//     }
//     var setPassword = "";

//     for(let i=0; i<pas.length; i++) {
//         setPassword += map1.get((array[pas[i].charCodeAt(0)-"a".charCodeAt(0)])%10); 
//     }
//     const promise = auth.createUserWithEmailAndPassword(email.value, setPassword);
//     promise.catch(e => alert(e.message));
//     voidPass();
//     random();
// }

// //signIN function
// function signIn() {
//     var username = document.getElementById("username");
//     const pas=document.getElementById("password").value;
//     var setPassword = "";

//     for(let i=0; i<pas.length; i++) {
//         setPassword += map1.get((array[pas[i].charCodeAt(0)-"a".charCodeAt(0)])%10); 
//     }

//     const promise = auth.signInWithEmailAndPassword(username.value, setPassword);
//     promise.catch(e => alert(e.message));
//     voidPass();
//     random(); // shuffle while every attempt
// }

// //sign out
// function signOut() {
//     auth.signOut();
//     window.location.href = "home.html"
//     random();
// }

// function voidPass() {
//     let pas = document.getElementById("password").value;
//     pas="";
//     document.querySelector("#password").value=pas;
// }
// //active user to homepage
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         var username = user.email;
//         alert("Active user " + username);
//         // window.location.href = "detail.html";
//     }
//     else {
//         alert("No Active user Found");
//     }
// })

// //call random() while reload page
// window.onload = random;