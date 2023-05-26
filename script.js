var contry = document.getElementById("countries");
const btn = document.querySelector(".btn");

fetch("https://restcountries.com/v3.1/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    // Mengisi pilihan negara
        for (var i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.text = data[i].name.common;
            contry.add(option);
        }
    });
btn.addEventListener("click", getData);

function getData() {

    let country = contry.value;
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '96a17a8396msh164e55615781d1fp1c4e8cjsne1f704a4c16f',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        },
    }).then((response) => response.json())
        .then((json) => {
            let data = json.response[0];
            document.querySelector(".activeCases").innerHTML = data.cases.active;
            document.querySelector(".newCases").innerHTML = data.cases.new;
            document.querySelector(".recoveredCases").innerHTML = data.cases.recovered;
            document.querySelector(".totalCases").innerHTML = data.cases.total;
            document.querySelector(".totalDeaths").innerHTML = data.deaths.total;
            document.querySelector(".totalTests").innerHTML = data.tests.total;

        })

}
