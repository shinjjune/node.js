$.get("https://blocklocation.mybluemix.net/dop/readDB", (data, status) => {
    var labels = [
        "Sjh",
        "ksw",
        "woori",
        "LJH",
    ];
    
    var Sjh = 0;
    var ksw = 0;
    var woori = 0;
    var LJH = 0;

// console.log(data[0].userid);
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].userid)
        if (data[i].userid == "Sjh                 ") {
            // console.log("Sjh                 ");
            Sjh += 1;
            // console.log("sjh개수: ", Sjh);
        } else if (data[i].userid == "ksw                 ") {
            ksw += 1;
            // console.log("ksw개수: ", ksw);

        } else if (data[i].userid == "woori               ") {
            woori += 1;
            // console.log("woori개수: ", woori);
        } else {
            LJH += 1;
            // console.log("LJH개수 ", LJH);
        }
    }
    console.log("-------------")
    console.log("woori개수: ", woori);
    console.log("ksw개수: ", ksw);
    console.log("sjh개수: ", Sjh);
    console.log("LJH개수 ", LJH);

    var dop = [
        Sjh,
        ksw,
        woori,
        LJH
    ];
    
    console.log(dop[0]);
    
    var mix = document.getElementById("mixChart").getContext('2d');
    var mixChart = new Chart(mix, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    label: "hello",
                    data: dop,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: '#FF0000',
                    yAxisID: 'data',
                },
            ]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        id: "data",
                        ticks: {
                            beginAtZero: true,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'step'
                        }
                    },
                ]
            },
        }
    });

})
