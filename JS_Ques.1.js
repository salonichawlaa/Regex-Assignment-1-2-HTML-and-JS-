function replaceword(){
    var a=document.getElementById("I_text").value;
    if (a==""){
        alert("Please fill all the fields");
        document.Myform.text.focus();
        return false;
    }
    var b=document.getElementById("I_wordtoreplace").value;
    if (b==""){
        alert("Please fill all the fields");
        document.Myform.wordtoreplace.focus();
        return false;
    }
    var c=document.getElementById("I_wordtoreplacewith").value;
    if (c==""){
        alert("Please fill all the fields");
        document.Myform.wordtoreplacewith.focus();
        return false;
    }
    if((a.includes(b)==false)){
        alert("The Word isn't in the text!! \n Write the word which is in the text");
        return false;
    }
    let result=a.replaceAll(b,c);
    alert(result);
    return true;
}