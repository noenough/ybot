let k=0;
var tx=document.getElementById("tekst");
var textbar=document.getElementById("txbar")
    var bt=document.getElementById("dugme");
    var lg=document.getElementById("logojs");
    var lastsecid=document.getElementById("lastsecid");
    var msgbrjs=document.getElementById("messagesbarjs");    
    bt.addEventListener('click', getdata);
    function getdata(){
        setTimeout(()=>{bt.remove();},700);
       
        if (k==0)
            lg.style.filter="blur(10px)";
        msgbrjs.style.filter="blur(5px)";
        var valuetext=tx.value;
        tx.value="";
 fetch('http://127.0.0.1:8080/que',{
  method: "POST",
    headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({que:valuetext}),
 }).then((value) => {

  if (!value.ok)
  alert("ERROR!"+" "+value.statusText);
 else
 return value.json();
 }).then((data)=>{
    msgbrjs.style.filter="blur(0px)";
    window.location.href="#lastsecid";
    lg.remove();
    textbar.append(bt);
    var answer=data.ans;
    var msgcontent=document.createElement('p');
    var msgtext=document.createElement('p');
    var msgbar=document.createElement('div');
    var cizik=document.createElement('div');
    
    msgcontent.className="msg-content";
    msgtext.className="msg-text";
    cizik.className="cizikchik";
    msgcontent.textContent=valuetext;
    msgtext.textContent=answer;
    msgbar.className="msg-bar";
    msgbar.append(msgcontent);
    msgbar.append(cizik);
    msgbar.append(msgtext);
    msgbrjs.append(msgbar);
 });
 }
