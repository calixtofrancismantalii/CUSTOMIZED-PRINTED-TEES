//showCase Personalized
function personalized() {
    var tshirt, personalized, showCaseBoxOne, showCaseBoxTwo, showCaseBoxThree, showCaseBoxFour, type, name, price;
    tshirt = document.getElementById("tshirt");
    personalized = document.getElementById("personalized");
    showCaseBoxOne = document.getElementById("showCaseBoxOne");
    showCaseBoxTwo = document.getElementById("showCaseBoxTwo");
    showCaseBoxThree = document.getElementById("showCaseBoxThree");
    showCaseBoxFour = document.getElementById("showCaseBoxFour");
    type = document.getElementsByClassName("type");
    name = document.getElementsByClassName("name");
    price = document.getElementsByClassName("price")
    

    tshirt.style.fontWeight = "normal";
    personalized.style.fontWeight = "bold";
    showCaseBoxOne.style.backgroundImage = "url(images/sectionFourShowcaseBoxOne.a.png)";
    showCaseBoxTwo.style.backgroundImage = "url(images/sectionFourShowcaseBoxTwo.a.png)";
    showCaseBoxThree.style.backgroundImage = "url(images/sectionFourShowcaseBoxThree.a.png)";
    showCaseBoxFour.style.backgroundImage = "url(images/sectionFourShowcaseBoxFour.a.png)";
    type[0].innerHTML = "Personalized";
    type[1].innerHTML = "Personalized";
    type[2].innerHTML = "Personalized";
    type[3].innerHTML = "Personalized";
    
    name[0].innerHTML = "DESIGN 1 T-SHIRT";
    name[1].innerHTML = "DESIGN 1 T-SHIRT";
    name[2].innerHTML = "DESIGN 3 T-SHIRT";
    name[3].innerHTML = "DESIGN 4 T-SHIRT ";
    
    price[0].innerHTML = "PRICE PHP 500";
    price[1].innerHTML = "PRICE PHP 500";
    price[2].innerHTML = "PRICE PHP 500";
    price[3].innerHTML = "PRICE PHP 500";
    
    
    for( var i = 0; i < name.length; i++){
        name[i].style.padding = "10px";
        name[i].style.fontWeight = "bold";
    }
}



//showCase Custom
function custom() {
    var tshirt, personalized, showCaseBoxOne, showCaseBoxTwo, showCaseBoxThree, showCaseBoxFour, type, name, price;
    tshirt = document.getElementById("tshirt");
    personalized = document.getElementById("personalized");
    showCaseBoxOne = document.getElementById("showCaseBoxOne");
    showCaseBoxTwo = document.getElementById("showCaseBoxTwo");
    showCaseBoxThree = document.getElementById("showCaseBoxThree");
    showCaseBoxFour = document.getElementById("showCaseBoxFour");
    type = document.getElementsByClassName("type");
    name = document.getElementsByClassName("name");
    price = document.getElementsByClassName("price")
    
    
    tshirt.style.fontWeight = "bold";
    personalized.style.fontWeight = "normal";
    showCaseBoxOne.style.backgroundImage = "";
    showCaseBoxTwo.style.backgroundImage = "";
    showCaseBoxThree.style.backgroundImage = "";
    showCaseBoxFour.style.backgroundImage = "";
    type[0].innerHTML = "Customized";
    type[1].innerHTML = "Customized";
    type[2].innerHTML = "Customized";
    type[3].innerHTML = "Customized";
    
    name[0].innerHTML = "CUSTOM T-SHIRT";
    name[1].innerHTML = "CUSTOM T-SHIRT";
    name[2].innerHTML = "CUSTOM T-SHIRT";
    name[3].innerHTML = "CUSTOM T-SHIRT";
    
    price[0].innerHTML = "PRICE PHP 380";
    price[1].innerHTML = "PRICE PHP 380";
    price[2].innerHTML = "PRICE PHP 380";
    price[3].innerHTML = "PRICE PHP 380";
    
    
    for( var i = 0; i < name.length; i++){
        name[i].style.padding = "10px";
        name[i].style.fontWeight = "bold";
    }
}






function openModal() {
    var modal, vid;
    modal = document.getElementById("modal");
    vid = document.getElementById("vid");
    
    modal.style.display = "block";
    vid.src = "/video/sampleVid.mp4";
    vid.play();
}
function closeModal() {
    var modal, vid;
    modal = document.getElementById("modal");
    vid = document.getElementById("vid");
    
    modal.style.display = "none";
    vid.src = "null";
}

