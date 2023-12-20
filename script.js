function getBday() {
    let bday = document.getElementById("birthday").value;
    let bdates = new Date(bday);
    if (bday == "") {
        document.getElementById("p1").innerHTML = "Ô chọn ngày đi tôi đùa b à"
    } else if (bday == "2007-05-21") {
        window.open("hayden.html", "_self");
    } else {
        document.getElementById("p1").innerHTML = "Either ur not someone i know or u put in the wrong dates"
    }
}