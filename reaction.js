let gb=document.querySelector('.gamebox');
let clock=document.querySelector('.time');
let sg=document.querySelector('.sg');
let rg=document.querySelector('.rg');
let second=document.querySelector('.sec');
let milisecond=document.querySelector('.milisec');
let hscore=document.querySelector('.highscore');
let hscore1=document.querySelector('.highscore1');
let hscore2=document.querySelector('.highscore2');
let pallete=document.querySelector('.pallete');
let settingspanel=document.querySelector('.settings');
let highscore=0;
let highscore1=0;
let highscore2=0;
let flag=0;
let flag1=0;
let flag2=0;
let sec=0;
let milisec=0;
let timeid=null;
let score=0;
let scorehight=0;
let resetflag=0;
let startflag=0;
let startpalleteid=null;
let single=document.querySelector("#user1");
let multi=document.querySelector('#user2');
let noob=document.querySelector('#noob');
let pro=document.querySelector('#pro');
let proplus=document.querySelector('#proplus');
let modeflag=0;
let username=document.querySelector('#username');
let submit=document.querySelector('.submit');
let changename=document.querySelector('.changename');
let janpehchan=document.querySelector('.janpehchan');
let input=document.querySelector('.inputname');
let yesagree=document.querySelector('.yesagree');
let noagree=document.querySelector('.noagree');
let leaderbutton=document.querySelector('.leaderbutton');
let defname='EnterName';
let docid=null;
let docid1=null;
let docid2=null;
let crownflag=[0,0,0];
function renderlist(doc,ulnoob){
    
    let li=document.createElement('tr');
   // let ptag=document.createElement('p');
    li.classList.add('listshain');
    // let name=document.createElement('span');
    // let Time=document.createElement('span');
    li.setAttribute('data-id',doc.id);
    let name=doc.data().Name;
    let time=doc.data().Time;
    if (crownflag[0]==0){
        li.innerHTML =`<td><span class="namespan"><i class=" crownking fa-solid fa-crown"></i>${name}</span></td>&nbsp;&nbsp;&nbsp;&nbsp;<td><span class="Timespan">${time}s</span></td>`;
    }
    else{
        li.innerHTML =`<td><span class="namespan">${name}</span></td>&nbsp;&nbsp;&nbsp;&nbsp;<td><span class="Timespan">${time}s</span></td>`;
    }
    
    //li.innerHTML =`<p><span class="namespan">${name}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="Timespan">${time}s</span></p>`;
   // let space=" ";
    //li.appendChild(name+Time);
   // li.appendChild(' ');
   // li.appendChild(Time);
    //li.appendChild(Time);
    ulnoob.insertAdjacentElement('beforeend',li);
    crownflag[0]=1;
}
function renderlist1(doc,ulnoob){
    
    let li=document.createElement('tr');
   // let ptag=document.createElement('p');
    li.classList.add('listshain');
    // let name=document.createElement('span');
    // let Time=document.createElement('span');
    li.setAttribute('data-id',doc.id);
    let name=doc.data().Name;
    let time=doc.data().Time;
    if (crownflag[1]==0){
        li.innerHTML =`<td><span class="namespan"><i class=" crownking fa-solid fa-crown"></i>${name}</span></td>&nbsp;&nbsp;&nbsp;&nbsp;<td><span class="Timespan">${time}s</span></td>`;
    }
    else{
        li.innerHTML =`<td><span class="namespan">${name}</span></td>&nbsp;&nbsp;&nbsp;&nbsp;<td><span class="Timespan">${time}s</span></td>`;
    }
    
    //li.innerHTML =`<p><span class="namespan">${name}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="Timespan">${time}s</span></p>`;
   // let space=" ";
    //li.appendChild(name+Time);
   // li.appendChild(' ');
   // li.appendChild(Time);
    //li.appendChild(Time);
    ulnoob.insertAdjacentElement('beforeend',li);
    crownflag[1]=1;
}
function renderlist2(doc,ulnoob){
    
    let li=document.createElement('tr');
   // let ptag=document.createElement('p');
    li.classList.add('listshain');
    // let name=document.createElement('span');
    // let Time=document.createElement('span');
    li.setAttribute('data-id',doc.id);
    let name=doc.data().Name;
    let time=doc.data().Time;
    if (crownflag[2]==0){
        li.innerHTML =`<td><span class="namespan"><i class=" crownking fa-solid fa-crown"></i>${name}</span></td>&nbsp;&nbsp;&nbsp;&nbsp;<td><span class="Timespan">${time}s</span></td>`;
    }
    else{
        li.innerHTML =`<td><span class="namespan">${name}</span></td>&nbsp;&nbsp;&nbsp;&nbsp;<td><span class="Timespan">${time}s</span></td>`;
    }
    
    //li.innerHTML =`<p><span class="namespan">${name}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="Timespan">${time}s</span></p>`;
   // let space=" ";
    //li.appendChild(name+Time);
   // li.appendChild(' ');
   // li.appendChild(Time);
    //li.appendChild(Time);
    ulnoob.insertAdjacentElement('beforeend',li);
    crownflag[2]=1;
}
function showingleaders(){
    let ulnoob=document.querySelector(".noob");
    let ulpro=document.querySelector(".pro");
    let ulproplus=document.querySelector(".proplus");
    //let count=0;
    db.collection('Nooblist').orderBy("Time").limit(5).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            renderlist(doc,ulnoob);
            // count++;
            // if(count===5){
            //     break;
            // }
        })
    });
    db.collection('Prolist').orderBy("Time").limit(5).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            renderlist1(doc,ulpro);
            // count++;
            // if(count===5){
            //     break;
            // }
        })
    });
    db.collection('Propluslist').orderBy("Time").limit(5).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            renderlist2(doc,ulproplus);
            // count++;
            // if(count===5){
            //     break;
            // }
        })
    });
}
// function removeleader(){
//     document.querySelector('li').remove();
// }
leaderbutton.addEventListener('click',()=>{
    document.querySelector('.intro').classList.add('hidden');
    document.querySelector('.hi').classList.add('hidden');
    gb.classList.add('hidden');
    settingspanel.classList.add('hidden');
    document.querySelector('.leaderboardline').classList.add('hidden');
    document.querySelector('.leaderboard').classList.remove('hidden');
    leaderbutton.classList.add('hidden');
    showingleaders();

});
document.querySelector('.backbutton').addEventListener('click',()=>{
    document.querySelector('.intro').classList.remove('hidden');
    document.querySelector('.hi').classList.remove('hidden');
    gb.classList.remove('hidden');
    settingspanel.classList.remove('hidden');
    document.querySelector('.leaderboardline').classList.remove('hidden');
    document.querySelector('.leaderboard').classList.add('hidden');
    leaderbutton.classList.remove('hidden');
   // li.classList.add('listshain');let nooboli=document.querySelector('.noob');
    // while( nooboli.firstChild ){
    //     nooboli.removeChild(nooboli.firstChild );
    // }
    let nooboli=document.querySelector('.noob');
    while( nooboli.firstChild ){
        nooboli.removeChild( nooboli.firstChild );
    }
    let prooli=document.querySelector('.pro');
    while( prooli.firstChild ){
        prooli.removeChild( prooli.firstChild );
    }
    let proplusoli=document.querySelector('.proplus');
    while( proplusoli.firstChild ){
        proplusoli.removeChild( proplusoli.firstChild );
    }
    crownflag=[0,0,0];

});
function gamestart(){
   location.reload();
}
//real time listener
// db.collection('Nooblist').onSnapshot(snapshot=>{
//     let changes=snapshot.docChanges();
//     changes.forEach(change=>{
//          db.collection('Nooblist').orderby('Time'); 
//     });
// });
// db.collection('').onSnapshot(snapshot=>{
//     let changes=snapshot.docChanges();
//     changes.forEach(change=>{
//          db.collection('Nooblist').orderby('Time'); 
//     });
// });
// db.collection('Nooblist').onSnapshot(snapshot=>{
//     let changes=snapshot.docChanges();
//     changes.forEach(change=>{
//          db.collection('Nooblist').orderby('Time'); 
//     });
// });
function databaseinserter(){
    switch (modeflag) {
        case 0:
            db.collection('Nooblist').add({
                Name:defname,
                Time:roundToTwo(highscore)
                
            }).then(function(docRef){
                docid=docRef.id;
            }).catch(function(error) {
                console.error("Error adding document: ", error);
            });
            
            break;
            
        case 1:
            db.collection('Prolist').add({
                Name:defname,
                Time:roundToTwo(highscore1)
            }).then(function(docRef){
                docid1=docRef.id;
            }).catch(function(error) {
                console.error("Error adding document: ", error);
            });
            // db.collection('Prolist').orderby('Time');
            break;
        case 2:
            db.collection('Propluslist').add({
                Name:defname,
                Time:roundToTwo(highscore2)
            }).then(function(docRef){
                docid2=docRef.id;
            }).catch(function(error) {
                console.error("Error adding document: ", error);
            });
            // db.collection('ProplusList').orderby('Time');
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        
    }
    
}
function databaseupdater(){
    switch (modeflag) {
        case 0:
            // awaitdb.collection('Nooblist').doc(docid).update({
            //     Time:highscore
            // });
            // db.collection('Nooblist').orderby('Time');
            // var docRef = db.collection("Nooblist").doc(firebase.auth().currentUser.uid);
            // var o = {};
            // docRef.get().then(function(thisDoc) {
            // //user is already there, write only last login
            // o.Time= highscore;
            // docRef.update(o);
            // });
            db.collection("Nooblist").where("Name", "==", defname)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                   // console.log(doc.id, " => ", doc.data());
                    doc.ref.update({Time: roundToTwo(highscore)})//not doc.update({foo: "bar"})
                });
           })
            break;
        case 1:
            // db.collection('Prolist').doc(docid1).update({
            //     Time:highscore1
            // });
            // db.collection('ProList').orderby('Time');
            db.collection("Prolist").where("Name", "==", defname)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                   // console.log(doc.id, " => ", doc.data());
                    doc.ref.update({Time: roundToTwo(highscore1)})//not doc.update({foo: "bar"})
                });
            })
            break;
        case 2:
            db.collection("Propluslist").where("Name", "==", defname)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                   // console.log(doc.id, " => ", doc.data());
                    doc.ref.update({Time: roundToTwo(highscore2)})//not doc.update({foo: "bar"})
                });
            })
            // db.collection('ProplusList').orderby('Time');
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        
    } 
}
submit.addEventListener('click',()=>{
    settingspanel.classList.remove('hidden');
    gb.classList.remove('hidden');
    janpehchan.classList.add('hidden');
    let namekeyboard=document.querySelector('.namekeyboard');
    let nammera=document.querySelector('.nammera');
    if(namekeyboard.value!==''){
        defname=namekeyboard.value;
    }
    //checker();
    nammera.innerHTML=(`Hi! ${defname}`);
    nammera.classList.remove('hidden');
    hi=document.querySelector('.hi').classList.remove('hidden');
    document.querySelector('.leader').classList.remove('hidden');

    // submit.innerHTML=('Change Name');
});
changename.addEventListener('click',()=>{
    document.querySelector('.warning').classList.remove('hidden');
    settingspanel.classList.add('hidden');
    gb.classList.add('hidden');
    janpehchan.classList.add('hidden');
    document.querySelector('.hi').classList.add('hidden');
});
yesagree.addEventListener('click',()=>{
    location.reload();
});
noagree.addEventListener('click',()=>{
    settingspanel.classList.remove('hidden');
    gb.classList.remove('hidden');
    janpehchan.classList.add('hidden');
    let namekeyboard=document.querySelector('.namekeyboard');
    let nammera=document.querySelector('.nammera');
    nammera.innerHTML=(`Hi! ${namekeyboard.value}`);
    nammera.classList.remove('hidden');
    hi=document.querySelector('.hi').classList.remove('hidden'); 
    document.querySelector('.warning').classList.add('hidden');
    document.querySelector('.leader').classList.remove('hidden');

});
changename.addEventListener('click',()=>{
    document.querySelector('.warning').classList.remove('hidden');
    settingspanel.classList.add('hidden');
    gb.classList.add('hidden');
    janpehchan.classList.add('hidden');
    document.querySelector('.hi').classList.add('hidden');
    document.querySelector('.leader').classList.add('hidden');
});

const commonWords = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part",];
function roundToTwo(num) {
    return +(Math.round(num + "e+3")  + "e-3");
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function underdevelopment(){
    document.querySelector('.intro').classList.add('hidden');
    document.querySelector('.hi').classList.add('hidden');
    gb.classList.add('hidden');
    settingspanel.classList.add('hidden');
    document.querySelector('.leader').classList.add('hidden');
    document.querySelector('.underdevelopment').classList.remove('hidden');

}
document.querySelector(".undevback").addEventListener('click',()=>{
    document.querySelector('.intro').classList.remove('hidden');
    document.querySelector('.hi').classList.remove('hidden');
    gb.classList.remove('hidden');
    settingspanel.classList.remove('hidden');
    document.querySelector('.leader').classList.remove('hidden');
    document.querySelector('.underdevelopment').classList.add('hidden');
    document.querySelector('#user2').checked=false;
    document.querySelector('#user1').checked=true;
});

function settings(){
    if(single.checked===true){
        // console.log('anmol is good');
        if (noob.checked===true) {
            modeflag=0;
            
            
        } 
        else if(pro.checked===true){
              modeflag=1;
            //  console.log('pandey');
        }
        else{
             modeflag=2;
            // console.log("maui");
        }
    }
    else{
        underdevelopment();
         //    console.log('anmol is bad');
        if (noob.checked===true) {
            modeflag=3;
            //console.log('anmol pandey');
        } 
        else if(pro.checked===true){
           // console.log('pandey');
            modeflag=4;
        }
        else{
            modeflag=5;
          // console.log("maui");
        }
    }

}
settings();
single.addEventListener('change',()=>{
    settings(); 
});
multi.addEventListener('change',()=>{
    settings(); 
});
noob.addEventListener('change',()=>{
    settings(); 
});
pro.addEventListener('change',()=>{
    settings(); 
});
proplus.addEventListener('change',()=>{
    settings(); 
});
// window.onkeydown = function(event){
//     if(event.keyCode === 32) {
//         event.preventDefault();
//         sg.click(); //This will trigger a click on the first <a> element.
//     }
// };
sg.addEventListener('click',()=>{
    // pallete.classList.remove('hidden');
    // // start.classList.add('hidden');
    // rg.classList.remove('hidden');
    // let timewait=Math.floor(Math.random()*3000)+2000;
    // // console.log(timewait);
    // setTimeout(function (){palletechanger(sg,rg);},timewait);
    // // palletechanger(sg,rg);
    switch (modeflag) {
        case 0:
            clickstart();
            break;
        case 1:
            clickstart1();
            break;
        case 2:
            clickstart2();
            break;
        case 3:
            clickstart3();
            break;
        case 4:
            clickstart4();
            break;
        case 5:
            clickstart5();
            break;
        
    }
 
});
function clickstart(){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    document.querySelector('.hi').classList.add('hidden');
    //hi.classList.add('hidden');
    settingspanel.classList.add('hidden');
    pallete.classList.remove('hidden');
    pallete.classList.add('palletestart');
    document.querySelector('.leader').classList.add('hidden');
    sg.classList.add('hidden');
    rg.classList.remove('hidden');
    let timewait=Math.floor(Math.random()*3000)+2000;
        // console.log(timewait);
    startpalleteid=setTimeout(function (){palletechanger(sg,rg);},timewait);
}  
function clickstart1(){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    document.querySelector('.hi').classList.add('hidden');
    settingspanel.classList.add('hidden');
    pallete.classList.remove('hidden');
    pallete.classList.add('palletestart');
    document.querySelector('.leader').classList.add('hidden');
    sg.classList.add('hidden');
    rg.classList.remove('hidden');
    let timewait=Math.floor(Math.random()*3000)+2000;
        // console.log(timewait);
    startpalleteid=setTimeout(function (){palletechanger1(sg,rg);},timewait);
}
function clickstart2(){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    document.querySelector('.hi').classList.add('hidden');
    settingspanel.classList.add('hidden');
    pallete.classList.remove('hidden');
    pallete.classList.add('palletestart');
    document.querySelector('.leader').classList.add('hidden');
    sg.classList.add('hidden');
    rg.classList.remove('hidden');
    let timewait=Math.floor(Math.random()*3000)+2000;
        // console.log(timewait);
    startpalleteid=setTimeout(function (){palletechanger2(sg,rg);},timewait);
}
function clickstart3(){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    document.querySelector('.hi').classList.add('hidden');
    settingspanel.classList.add('hidden');
    pallete.classList.remove('hidden');
    pallete.classList.add('palletestart');
    document.querySelector('.leader').classList.add('hidden');
    sg.classList.add('hidden');
    rg.classList.remove('hidden');
    let timewait=Math.floor(Math.random()*3000)+2000;
        // console.log(timewait);
    startpalleteid=setTimeout(function (){palletechanger3(sg,rg);},timewait);
}
function clickstart4(){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    document.querySelector('.hi').classList.add('hidden');
    settingspanel.classList.add('hidden');
    pallete.classList.remove('hidden');
    pallete.classList.add('palletestart');
    document.querySelector('.leader').classList.add('hidden');
    sg.classList.add('hidden');
    rg.classList.remove('hidden');
    let timewait=Math.floor(Math.random()*3000)+2000;
        // console.log(timewait);
    startpalleteid=setTimeout(function (){palletechanger4(sg,rg);},timewait);
}  
function clickstart5(){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    document.querySelector('.hi').classList.add('hidden');
    settingspanel.classList.add('hidden');
    pallete.classList.remove('hidden');
    pallete.classList.add('palletestart');
    document.querySelector('.leader').classList.add('hidden');
    sg.classList.add('hidden');
    rg.classList.remove('hidden');
    let timewait=Math.floor(Math.random()*3000)+2000;
        // console.log(timewait);
    startpalleteid=setTimeout(function (){palletechanger5(sg,rg);},timewait);
}
function checker(listdb,high){
     async function asyncFn() {
     try {
        let check=[0,0];
        await db
        .collection(listdb)
        .where('Name', '==', defname)
        .get()
        .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          //console.log('hi');
          check[0]=1;
          check[1]=doc.data().Time;
          //console.log(check);
        });
      });

    return check;
  } catch (error) {
    throw new Error('Error in finding the element in the database');
  }
}

asyncFn()
  .then((check) => {
    //here you will get the check value from the database
    //  here do the operations whichever you want to do with the checks value
    //console.log(`${checkdb} alue`);
    if(check[0]===1){
        if(check[1]>roundToTwo(high)){
            databaseupdater();
        }
    }
    else{
        databaseinserter();
    }
  })
  .catch((err) => {
    console.log(err);
  });


}
function palletechanger(start,rg){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    startflag=1;
    function timer(){

        milisec=1+milisec;
        if(milisec%100===0){
            sec=sec+1; 
            milisec=0;
        }
        if(milisec<10){
            milisecond.innerHTML=(`0${milisec}`);
        }
        else{
            milisecond.innerHTML=(`${milisec}`);
        }
        if(sec<10){
            second.innerHTML=(`0${sec}`);
        }
        else{
            second.innerHTML=`${sec}`;
        }
        score=sec+0.01*milisec;
        //console.log(sec);
        
    }
    let time=function(){
        
        clock.classList.remove('hidden');
        timeid=window.setInterval(timer,10);
    }
    time();
    
   

    // let start=document.querySelector('.sg');
    // start.style.display='none';
    pallete.classList.remove('palletestart');
    pallete.style.backgroundColor='green';
    let p=document.createElement('p');
    p.classList.add('value');
   // h2.textContent = 'Hello world';
    let insertrandomno=Math.floor(Math.random()*1000);
    p.append(insertrandomno);
   // pallete.appendChild(h2);
    pallete.insertAdjacentElement('afterbegin',p);
    // reseter(h2,start,pallete);
    let keyboard=document.createElement('input');
    keyboard.type='number';
    keyboard.classList.add('keyboard');
    pallete.insertAdjacentElement('beforeend',keyboard);
    keyboard.placeholder='Enter Value and press Enter';
    keyboard.focus();
    // keyboard.onkeydown=search(this);
    // function search(ele){
    //     if(keyboa.value==='Enter'){
    //         pallete.style.backgroundColor='aqua';
    //     }
    // }
    function wrongfunction(){
        keyboard=document.querySelector('.keyboard');
        keyboard.style.visibility='visible';
        keyboard.focus();
        p.classList.remove('hidden');
        pallete.classList.remove('palletewrong');
    }
    keyboard.addEventListener('keydown',function(evt){
            
            if(evt.key==='Enter'){
                
                if((keyboard.value)===String(insertrandomno)){
                    // rightfunction();
                    //
                    rightfunction();   
                }
                else{

                    // let img=createElement('img');
                    // img.setAttribute("src","https://www.zambo.in/assets/quize/wrongs.gif");
                    // pallete.insertAdjacentElement('afterbegin',img);
                    keyboard=document.querySelector('.keyboard');
                    keyboard.style.visibility='hidden';
                    p.classList.add('hidden');
                    pallete.classList.add('palletewrong');
                    setTimeout(function (){wrongfunction();},500);
                }
               
            }
    });
    function rightfunction(){
        window.clearInterval(timeid);
        // clock.sec.innerHTML='00';
        // clock.milisec.innerHTML='00';
        sec=0;
        milisec=0;
        clock.classList.add('hidden');
        keyboard.remove();
        p.classList.remove('value');
        p.classList.add('hidden'); 
        pallete.classList.add('palletecorrect');
        resetflag=1;
        setTimeout(function (){hogyafunction();},1500);

      }
    
    function hogyafunction(){
        pallete.classList.remove('palletecorrect');
        p.classList.remove('hidden');
        pallete.style.backgroundColor= 'black';
        p.classList.add('aftergame');
        if(flag===0){
            highscore=score;
            // p.innerHTML=`You are way reflexive${score} !!!<br><span>Least Time=${highscore}<span>`;
            p.innerHTML=`Nice First Try !!!<br><span>Least Time=${roundToTwo(highscore)}<span>`;
            checker('Nooblist',highscore);
            }
        else if(flag===1&& score<highscore){
            // p.innerHTML=`Great Your Time was ${score}!!!<br><span>High Score=${highscore}<span>`;
            highscore=score;
            p.innerHTML=`You are way reflexive${roundToTwo(score)} !!!<br><span>Least Time=${roundToTwo(highscore)}<span>`;
            checker('Nooblist',highscore);
            //databaseupdater();

        }
        else{
            p.innerHTML=`Great Your Time was ${roundToTwo(score)}!!!<br><span>Least Time=${roundToTwo(highscore)}<span>`;
           // databaseupdater();
        }
        flag=1;
        resetflag=1;
        hscore.innerHTML=(`Best Time (noob)= ${roundToTwo(highscore)}`);
    }
    
}
function palletechanger2(start,rg){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    startflag=1;
    function timer2(){

        milisec=1+milisec;
        if(milisec%100===0){
            sec=sec+1; 
            milisec=0;
        }
        if(milisec<10){
            milisecond.innerHTML=(`0${milisec}`);
        }
        else{
            milisecond.innerHTML=(`${milisec}`);
        }
        if(sec<10){
            second.innerHTML=(`0${sec}`);
        }
        else{
            second.innerHTML=`${sec}`;
        }
        score=sec+0.01*milisec;
        //console.log(sec);
        
    }
    let time2=function(){
        
        clock.classList.remove('hidden');
        timeid=window.setInterval(timer2,10);
    }
    time2();
    
   
    
    // let start=document.querySelector('.sg');
    // start.style.display='none';
    pallete.classList.remove('palletestart');
    pallete.style.backgroundColor='green';
    let p=document.createElement('p');
    p.classList.add('value');
   // h2.textContent = 'Hello world';
    
    let insertrandomno=Math.floor(Math.random()*100);
    //p.append(commonWords[insertrandomno]);
    let stringrandom=makeid(5);
    p.append( stringrandom);
   // pallete.appendChild(h2);
    pallete.insertAdjacentElement('afterbegin',p);
    // reseter(h2,start,pallete);
    let keyboard=document.createElement('input');
    keyboard.type='text';
    keyboard.classList.add('keyboard');
    pallete.insertAdjacentElement('beforeend',keyboard);
    keyboard.placeholder='Enter Value and press Enter';
    keyboard.focus();
    // keyboard.onkeydown=search(this);
    // function search(ele){
    //     if(keyboa.value==='Enter'){
    //         pallete.style.backgroundColor='aqua';
    //     }
    // }
    function wrongfunction2(){
        keyboard=document.querySelector('.keyboard');
        keyboard.style.visibility='visible';
        keyboard.focus();
        p.classList.remove('hidden');
        pallete.classList.remove('palletewrong');
    }
    keyboard.addEventListener('keydown',function(evt){
            
            if(evt.key==='Enter'){
                
               // if((keyboard.value)===String(commonWords[insertrandomno])){
                if((keyboard.value)===String(stringrandom)){
                    // rightfunction();
                    //
                    rightfunction2();   
                }
                else{

                    // let img=createElement('img');
                    // img.setAttribute("src","https://www.zambo.in/assets/quize/wrongs.gif");
                    // pallete.insertAdjacentElement('afterbegin',img);
                    keyboard=document.querySelector('.keyboard');
                    keyboard.style.visibility='hidden';
                    p.classList.add('hidden');
                    pallete.classList.add('palletewrong');
                    setTimeout(function (){wrongfunction2();},500);
                }
               
            }
    });
    function rightfunction2(){
        window.clearInterval(timeid);
        // clock.sec.innerHTML='00';
        // clock.milisec.innerHTML='00';
        sec=0;
        milisec=0;
        clock.classList.add('hidden');
        keyboard.remove();
        p.classList.remove('value');
        p.classList.add('hidden'); 
        pallete.classList.add('palletecorrect');
        resetflag=1;
        setTimeout(function (){hogyafunction2();},1500);

      }
    
    function hogyafunction2(){
        pallete.classList.remove('palletecorrect');
        p.classList.remove('hidden');
        pallete.style.backgroundColor= 'black';
        p.classList.add('aftergame');
        document.querySelector('.Highscoresthis').classList.remove('hidden');
        if(flag2===0){
            highscore2=score;
            // p.innerHTML=`You are way reflexive${score} !!!<br><span>Least Time=${highscore}<span>`;
            p.innerHTML=`Nice First Try !!!<br><span>Least Time=${roundToTwo(highscore2)}<span>`;
            checker('Propluslist',highscore2);
        }
        else if(flag2===1&& score<highscore2){
            // p.innerHTML=`Great Your Time was ${score}!!!<br><span>High Score=${highscore}<span>`;
            highscore2=score;
            p.innerHTML=`You are way reflexive${roundToTwo(score)} !!!<br><span>Least Time=${roundToTwo(highscore2)}<span>`;
            checker('Propluslist',highscore2);
            //databaseupdater();

        }
        else{
            p.innerHTML=`Great Your Time was ${roundToTwo(score)}!!!<br><span>Least Time=${roundToTwo(highscore2)}<span>`;  
        }

        flag2=1;
        resetflag=1;
        hscore2.innerHTML=(`Best Time(pro)= ${roundToTwo(highscore2)}`);
    }
    
}
function palletechanger1(start,rg){
    // document.addEventListener("click", handler, true);
    // function handler(e) {
    //     if(e.target.className===".sg") {
    //       e.stopPropagation()
    //     }
    //   }
    startflag=1;
    function timer1(){

        milisec=1+milisec;
        if(milisec%100===0){
            sec=sec+1; 
            milisec=0;
        }
        if(milisec<10){
            milisecond.innerHTML=(`0${milisec}`);
        }
        else{
            milisecond.innerHTML=(`${milisec}`);
        }
        if(sec<10){
            second.innerHTML=(`0${sec}`);
        }
        else{
            second.innerHTML=`${sec}`;
        }
        score=sec+0.01*milisec;
        //console.log(sec);
        
    }
    let time1=function(){
        
        clock.classList.remove('hidden');
        timeid=window.setInterval(timer1,10);
    }
    time1();
    
   
    
    // let start=document.querySelector('.sg');
    // start.style.display='none';
    pallete.classList.remove('palletestart');
    pallete.style.backgroundColor='green';
    let p=document.createElement('p');
    p.classList.add('value');
    // p.classList.add('insidepara');
   // h2.textContent = 'Hello world';
    
    let insertrandomno=Math.floor(Math.random()*99);
    //p.append(commonWords[insertrandomno]);
    let stringrandom=commonWords[insertrandomno]+" "+commonWords[insertrandomno+Math.floor(1+Math.random()*10)]+" "+commonWords[insertrandomno+Math.floor(Math.random()*5)];
    p.append( stringrandom);
   // pallete.appendChild(h2);
    pallete.insertAdjacentElement('afterbegin',p);
    // reseter(h2,start,pallete);
    let keyboard=document.createElement('input');
    keyboard.type='text';
    keyboard.classList.add('keyboard');
    pallete.insertAdjacentElement('beforeend',keyboard);
    keyboard.placeholder='Enter Value and press Enter';
    keyboard.focus();
    // keyboard.onkeydown=search(this);
    // function search(ele){
    //     if(keyboa.value==='Enter'){
    //         pallete.style.backgroundColor='aqua';
    //     }
    // }
    function wrongfunction1(){
        keyboard=document.querySelector('.keyboard');
        keyboard.style.visibility='visible';
        keyboard.focus();
        p.classList.remove('hidden');
        pallete.classList.remove('palletewrong');
    }
    keyboard.addEventListener('keydown',function(evt){
            
            if(evt.key==='Enter'){
                
               // if((keyboard.value)===String(commonWords[insertrandomno])){
                if((keyboard.value)===String(stringrandom)){
                    // rightfunction();
                    //
                    rightfunction1();   
                }
                else{

                    // let img=createElement('img');
                    // img.setAttribute("src","https://www.zambo.in/assets/quize/wrongs.gif");
                    // pallete.insertAdjacentElement('afterbegin',img);
                    keyboard=document.querySelector('.keyboard');
                    keyboard.style.visibility='hidden';
                    p.classList.add('hidden');
                    pallete.classList.add('palletewrong');
                    setTimeout(function (){wrongfunction1();},500);
                }
               
            }
    });
    function rightfunction1(){
        window.clearInterval(timeid);
        // clock.sec.innerHTML='00';
        // clock.milisec.innerHTML='00';
        sec=0;
        milisec=0;
        clock.classList.add('hidden');
        keyboard.remove();
        p.classList.remove('value');
        p.classList.add('hidden'); 
        pallete.classList.add('palletecorrect');
        resetflag=1;
        setTimeout(function (){hogyafunction1();},1500);

      }
    
    function hogyafunction1(){
        pallete.classList.remove('palletecorrect');
        p.classList.remove('hidden');
        pallete.style.backgroundColor= 'black';
        p.classList.add('aftergame');
        if(flag1===0){
            highscore1=score;
            // p.innerHTML=`You are way reflexive${score} !!!<br><span>Least Time=${highscore}<span>`;
            p.innerHTML=`Nice First Try !!!<br><span>Least Time=${roundToTwo(highscore1)}<span>`;
            checker('Prolist',highscore1);
        }
        else if(flag1===1&& score<highscore1){
            // p.innerHTML=`Great Your Time was ${score}!!!<br><span>High Score=${highscore}<span>`;
            highscore1=score;
            p.innerHTML=`You are way reflexive${roundToTwo(score)} !!!<br><span>Least Time=${roundToTwo(highscore1)}<span>`;
            checker('Prolist',highscore1);
            // databaseupdater();

        }
        else{
            p.innerHTML=`Great Your Time was ${roundToTwo(score)}!!!<br><span>Least Time=${roundToTwo(highscore1)}<span>`;
            //databaseupdater();
        }
        flag1=1;
        resetflag=1;
        hscore1.innerHTML=(`Best Time= ${roundToTwo(highscore1)}`);
    }
    
}
resetchanger=(start,rg)=>{
    document.querySelector('.leader').classList.remove('hidden');
    document.querySelector('.hi').classList.remove('hidden');
    window.clearInterval(timeid);
    settingspanel.classList.remove('hidden');
    // clock.sec.innerHTML='00';
    // clock.milisec.innerHTML='00';
    document.querySelector('.Highscoresthis').classList.remove('hidden');
    sec=0;
    milisec=0;
    if(startflag===1){
        clock.classList.add('hidden');
        if (resetflag===1){
            p=document.querySelector('.aftergame');
            p.remove();
            pallete.classList.add("hidden");
            start.classList.remove('hidden');
            rg.classList.add('hidden');
            
        }
        else{
            keyboard=document.querySelector('.keyboard');
            p=document.querySelector('.value');
            keyboard.remove();
            p.remove();
            pallete.classList.add("hidden");
            // resetbtn.stlye.display='none';
            start.classList.remove('hidden');
            rg.classList.add('hidden');
        }
        resetflag=0;
    }
    else{
        clearTimeout(startpalleteid);
        pallete.classList.add("hidden");
        // resetbtn.stlye.display='none';
        start.classList.remove('hidden');
        rg.classList.add('hidden');

    }
    startflag=0;
    // if (resetflag===1){
    //     p.remove();
    //     pallete.classList.add("hidden");
    //     start.classList.remove('hidden');
    //     rg.classList.add('hidden');
    //     resetflag=0;
    // }
    // else{
    // keyboard=document.querySelector('.keyboard');
    // keyboard.remove();
    // p.remove();
    // pallete.classList.add("hidden");
    // // resetbtn.stlye.display='none';
    // start.classList.remove('hidden');
    // rg.classList.add('hidden');
    // }
    
    if(highscore>0 ){
        hscore.innerHTML=(`Best Time (noob) = ${roundToTwo(highscore)}`);
        hscore.classList.remove('hidden');
    }
    else{
        hscore.innerHTML(`Best Time (noob)= ${roundToTwo(highscore)}`);
    } 
    

}
resetchanger1=(start,rg)=>{
    document.querySelector('.leader').classList.remove('hidden');
    document.querySelector('.hi').classList.remove('hidden');
    window.clearInterval(timeid);
    settingspanel.classList.remove('hidden');
    // clock.sec.innerHTML='00';
    // clock.milisec.innerHTML='00';
    document.querySelector('.Highscoresthis').classList.remove('hidden');
    sec=0;
    milisec=0;
    if(startflag===1){
        clock.classList.add('hidden');
        if (resetflag===1){
            p=document.querySelector('.aftergame');
            p.remove();
            pallete.classList.add("hidden");
            start.classList.remove('hidden');
            rg.classList.add('hidden');
            
        }
        else{
            keyboard=document.querySelector('.keyboard');
            p=document.querySelector('.value');
            keyboard.remove();
            p.remove();
            pallete.classList.add("hidden");
            // resetbtn.stlye.display='none';
            start.classList.remove('hidden');
            rg.classList.add('hidden');
        }
        resetflag=0;
    }
    else{
        clearTimeout(startpalleteid);
        pallete.classList.add("hidden");
        // resetbtn.stlye.display='none';
        start.classList.remove('hidden');
        rg.classList.add('hidden');

    }
    startflag=0;
    // if (resetflag===1){
    //     p.remove();
    //     pallete.classList.add("hidden");
    //     start.classList.remove('hidden');
    //     rg.classList.add('hidden');
    //     resetflag=0;
    // }
    // else{
    // keyboard=document.querySelector('.keyboard');
    // keyboard.remove();
    // p.remove();
    // pallete.classList.add("hidden");
    // // resetbtn.stlye.display='none';
    // start.classList.remove('hidden');
    // rg.classList.add('hidden');
    // }
    
    if(highscore1>0 ){
        hscore1.innerHTML=(`Best Time (pro)= ${roundToTwo(highscore1)}`);
        hscore1.classList.remove('hidden');
    }
    else{
        hscore1.innerHTML(`Best Time (pro)= ${roundToTwo(highscore1)}`);
    } 
    

}
resetchanger2=(start,rg)=>{
    document.querySelector('.leader').classList.remove('hidden');
    document.querySelector('.hi').classList.remove('hidden');
    window.clearInterval(timeid);
    settingspanel.classList.remove('hidden');
    document.querySelector('.Highscoresthis').classList.remove('hidden');
    // clock.sec.innerHTML='00';
    // clock.milisec.innerHTML='00';
    sec=0;
    milisec=0;
    if(startflag===1){
        clock.classList.add('hidden');
        if (resetflag===1){
            p=document.querySelector('.aftergame');
            p.remove();
            pallete.classList.add("hidden");
            start.classList.remove('hidden');
            rg.classList.add('hidden');
            
        }
        else{
            keyboard=document.querySelector('.keyboard');
            p=document.querySelector('.value');
            keyboard.remove();
            p.remove();
            pallete.classList.add("hidden");
            // resetbtn.stlye.display='none';
            start.classList.remove('hidden');
            rg.classList.add('hidden');
        }
        resetflag=0;
    }
    else{
        clearTimeout(startpalleteid);
        pallete.classList.add("hidden");
        // resetbtn.stlye.display='none';
        start.classList.remove('hidden');
        rg.classList.add('hidden');

    }
    startflag=0;
    // if (resetflag===1){
    //     p.remove();
    //     pallete.classList.add("hidden");
    //     start.classList.remove('hidden');
    //     rg.classList.add('hidden');
    //     resetflag=0;
    // }
    // else{
    // keyboard=document.querySelector('.keyboard');
    // keyboard.remove();
    // p.remove();
    // pallete.classList.add("hidden");
    // // resetbtn.stlye.display='none';
    // start.classList.remove('hidden');
    // rg.classList.add('hidden');
    // }
    
    if(highscore2>0 ){
        hscore2.innerHTML=(`Best Time (pro+)= ${roundToTwo(highscore2)}`);
        hscore2.classList.remove('hidden');
    }
    else{
        hscore2.innerHTML(`Best Time (pro+)= ${roundToTwo(highscore2)}`);
    } 
    

}
rg.addEventListener('click',()=>{
    // pallete.classList.remove('hidden');
    // // start.classList.add('hidden');
    // rg.classList.remove('hidden');
    // let timewait=Math.floor(Math.random()*3000)+2000;
    // // console.log(timewait);
    // setTimeout(function (){palletechanger(sg,rg);},timewait);
    // // palletechanger(sg,rg);
    switch (modeflag) {
        case 0:
            resetchanger(sg,rg);
            break;
        case 1:
            resetchanger1(sg,rg);
            break;
        case 2:
            resetchanger2(sg,rg);
            break;
        case 3:
            resetchanger3(sg,rg);
            break;
        case 4:
            resetchanger4(sg,rg);
            break;
        case 5:
            resetchanger5(sg,rg);
            break;
        
    }
 
});
// rg.addEventListener('click',()=>{
//     resetchanger(sg,rg); 
// });


// function palletechanger(){
//     let gb=document.querySelector('.gamebox');
//     let pallete=document.querySelector('.pallet');
//     let start=document.querySelector('.sg');
//     start.remove();
//     pallete.style.backgroundColor='green';
//     let h2=document.createElement('h2');
//     h2.classList.add('value');
//    // h2.textContent = 'Hello world';
//     h2.append('Hello world');
//    // pallete.appendChild(h2);
//     pallete.insertAdjacentElement('afterbegin',h2);
//     // pallete.innerHTML='ANm9ol';

// }
// let btn=document.querySelector('.sg');
// btn.addEventListener('click',()=>{
//         palletechanger();
     
// });