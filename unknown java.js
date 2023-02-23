function preview(){
    let x;
    x=document.getElementById("fname").value;
    console.log(x);

    let y;
    y=document.getElementById("mname").value;
    console.log(y);

    let z;
    z=document.getElementById("lname").value;
    console.log(z);
     
    document.getElementById("name").innerHTML=x+y+z;

    let d;
    d=document.getElementById("dofb").value;
    console.log(d);
    document.getElementById("dob").innerHTML=d;

    let f;
    f=document.getElementById("faname").value;
    console.log(f);
    document.getElementById("fname").innerHTML=f;

    let p; 
    p=document.getElementById("pno").value;
    console.log(p);
    document.getElementById("phno").innerHTML=p;

    let e;
    e=document.getElementById('emid').value;
    console.log(e);
    document.getElementById('mai').innerHTML=e;

    let hn;
    hn=document.getElementById('hno').value;
    console.log(hn);
    document.getElementById('p1').innerHTML=hn;
    
    let sn;
    sn=document.getElementById('stname').value;
    console.log(sn);
    document.getElementById('p2').innerHTML=sn;

    let cn;
    cn=document.getElementById('town').value;
    console.log(cn);
    document.getElementById('p3').innerHTML=cn;

    let dn;
    dn=document.getElementById('dis').value;
    console.log(dn);
    document.getElementById('p4').innerHTML=dn;

    let stn;
    stn=document.getElementById('st').value;
    console.log(stn);

    let pi
    pi=document.getElementById('st').value;
    console.log(pi);

    document.getElementById('p5').innerHTML=stn+pi;

  
}