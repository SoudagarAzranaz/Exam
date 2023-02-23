function resume(){
    let firstname;
    firstname=document.getElementById('firstname').value;
    console.log(firstname);
    let middlename;
    middlename=document.getElementById('middlename').value;
   console.log(middlename);
    let lastname;
    lastname=document.getElementById('lastname').value;
     console.log(lastname);
    document.getElementById("name").innerHTML=firstname+middlename+lastname;
    let email;
    mail=document.getElementById("mail").value;
    console.log(mail);
    document.getElementById("email").innerHTML=mail;
    let number;
    numb=document.getElementById("numb").value;
    console.log(numb);
    document.getElementById("number").innerHTML=numb;
  
}

  
    




