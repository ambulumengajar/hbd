function play() {
    var audio = new Audio("/assets/lagu/hbd.mp3");
    audio.play();
}

function display(){
    document.getElementById("photo").style.display = "block";
    document.getElementById("content").style.display = "block";
}

function ketiknamamu(){
    if (d < textNamamu.length){
        document.getElementById("namamu").innerHTML += textNamamu.charAt(d);
        d++;
        setTimeout(ketiknamamu, 70);
    }
    if (d == textNamamu.length){
        ketik();
    }
}

function ketik(){
    if(i < text.length){
        document.getElementById("text-isi").innerHTML += text.charAt(i);
        i++;
        setTimeout(ketik, 190);
    }
    if(i == text.length){
        ketikt();
    }
}

function ketikt(){
    if(x < textAuthor.length){
        document.getElementById("text-author").innerHTML += textAuthor.charAt(x);
        x++;
        setTimeout(ketikt, 190);
    }
    if (x == textAuthor.length){ 
        document.getElementById("button").style.display = "block";
    }
}
