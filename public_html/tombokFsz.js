$(function () {


    tablazatbaKiir();


    $("article").on("click", "th", rendez);
     $("#Hozzaad").click(ment);

    
}
);

var tomb = [
    {
        Sorszám:1,
        Név: "Frankie",
        Fajta: "Golden Retriever",
        Kor: 5
    },
    {
        Sorszám:2,
        Név: "Bobby",
        Fajta: "Pireneusi hegyikutya",
        Kor: 0.25
    },
    {
        Sorszám:3,
        Név: "Csipke",
        Fajta: "Vizsla",
        Kor: 3
    },
    {
        Sorszám:4,
        Név: "Bodza",
        Fajta: "Tacskó",
        Kor: 2
    }
];
var irany = true;
function kiemel(){
    $(this).toggleClass("kiemel");
}
function tablazatbaKiir() {
  

    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr></tr>");
    for (var item in tomb[0]) {
        $("article table tr").append("<th id='" + item + "'>" + item + " </th>");

    }
   
    for (var i = 0; i < tomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in tomb[i]) {
          
            $("article table tr").eq(i + 1).append("<td>" + tomb[i][item] + " </td>");

        }
        ;
    }
     
   

$("article th").hover( kiemel);
}

function rendez() {
    var mezo = $(this).attr("id");

    if (mezo === "Kor") {
        // rendezzük a tömb kor szerint!
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return a[mezo] - b[mezo];
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return b[mezo] - a[mezo];
                    }
            );

        }

    } else {
       //rendezzük név szerint
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] > b[mezo]) - 0.5;
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] < b[mezo]) - 0.5;
                    }
            );
        }

    }
    irany = !irany;
    console.log("aktuális objektum " + JSON.stringify(tomb));
    tablazatbaKiir();
}

function ment(){
    var ujKutya={};
    ujKutya.Sorszám=$("#sorsz").val();
    ujKutya.Név=$("#nev").val();
    
    ujKutya.Fajta=$("#fajta").val();
    ujKutya.Kor=$("#kor").val();
    tomb.push(ujKutya);
    
    tablazatbaKiir();
}

