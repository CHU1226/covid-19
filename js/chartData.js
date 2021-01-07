      new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
        labels: ["美國", "印度", "巴西", "俄羅斯", "法國"],
        datasets: [
            {
            label: "Population (millions)",
            backgroundColor: ["#7178ff","#b791f2","#63e0c8", "#ff8380","#ffe4a1"],
            data: [19300000,10200000,7480000,3020000,2560000]
            }
        ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'COVID-19 累計確診數TOP5',
        }
        }
    });

        new Chart(document.getElementById("bar-chart2"), {
        type: 'bar',
        data: {
        labels: ["美國", "印度", "巴西", "俄羅斯", "法國"],
        datasets: [
            {
            label: "Population (millions)",
            backgroundColor: ["#7178ff","#b791f2","#63e0c8", "#ff8380","#ffe4a1"],
            data: [341138,147940,191146,55256,62746]
            }
        ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'COVID-19 累計確診數TOP5'
        }
        }
    });

        new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
        labels: ["境外移入", "本土感染", "敦陸戰隊"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#ff8380","#63e0c8","#b791f2"],
            data: [364,55,36]
        }]
        },
        options: {
        title: {
            display: true,
            text: '台灣確診案例'
        }
        }
    });

       new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
        labels: ["發燒", "咳嗽", "疲倦", "有痰", "呼吸急促"],
        datasets: [
            {
            label: "Population (millions)",
            backgroundColor: ["#7178ff","#b791f2","#63e0c8", "#ff8380","#ffe4a1"],
            data: [87.9,67.7,38.1,33.4,18.6]
            }
        ]
        },
        options: {
        title: {
            display: true,
            text: 'WHO公布常見症狀'
        }
        }
    });

        new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'horizontalBar',
        data: {
        labels: ["歐洲", "美洲", "中東", "亞洲(不含中港澳)", "大洋洲"],
        datasets: [
            {
            label: "Population (millions)",
            backgroundColor: ["#7178ff","#b791f2","#63e0c8", "#ff8380","#ffe4a1"],
            data: [170,108,37,36,13]
            }
        ]
        },
        options: {
        legend: { display: false },
        title: {
            display: true,
            text: '境外移入案例旅遊史'
        }
        }
    });
 