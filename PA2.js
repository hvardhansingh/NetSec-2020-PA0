var textBox1 = document.querySelector("#textBox1");
var textBox2 = document.querySelector("#textBox2");

var encipherBtn = document.querySelector("#encipher");
var decipherBtn = document.querySelector("#decipher");

var map1 = [];
var map2 = [];

for(var i=0; i<26; i++)
{
    map1.push(String.fromCharCode(97+i));
}

for(var i=25; i>=0; i--)
{
    map2.push(String.fromCharCode(97+i));
}

var plainText;
var cipherText;

function encipher(txt){
    var ans = "";
    txt = txt.toLowerCase();
    for(var i=0; i<txt.length; i++)
    {
        var tmp = txt[i].charCodeAt();
        
        if(tmp>=97 && tmp<=122) {
        var code = txt[i].charCodeAt()-97;
        ans+= (map2[code]);
        }
        else{
            ans+= txt[i];
        }
    }
    return ans;
}

function decipher(txt){
    var ans = "";
    txt = txt.toLowerCase();
    for(var i=0; i<txt.length; i++)
    {
        var tmp = txt[i].charCodeAt();
        
        if(tmp>=97 && tmp<=122){
        var code = 122-tmp;
        ans+= (map1[code]);
        }
        else{
            ans+= txt[i];
        }
    }
    return ans;
}

encipherBtn.addEventListener("click", function(){
    plainText = textBox1.value;
    textBox2.value = encipher(plainText);
});

decipherBtn.addEventListener("click", function(){
    cipherText = textBox2.value;
    textBox1.value = decipher(cipherText);
});