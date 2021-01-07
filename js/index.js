var vm = new Vue({
    el: '#app',
    data: {
        abouts: [
            {
                title: '關於疫情',
                content: '冠狀病毒會引起人類和脊椎動物的疾病，屬於人畜共通傳染疾病。人類感染冠狀病毒以呼吸道症狀為主，包括鼻塞、流鼻水、咳嗽、發燒等一般上呼吸道感染症狀，但嚴重急性呼吸道症候群冠狀病毒、新型冠狀病毒感染後比一般人類冠狀病毒症狀嚴重，部分個案可能出現嚴重的肺炎與呼吸衰竭等。',
                img: 'img/about1.jpg'
            },
            {
                title: '疫情起源',
                content: '2019年12月起中國湖北武漢市發現不明原因肺炎群聚，疫情初期個案多與武漢華南海鮮城活動史有關，中國官方於2020年1月9日公布其病原體為新型冠狀病毒。此疫情隨後迅速在中國其他省市與世界各地擴散，並證實可有效人傳人。',
                img: 'img/about2.jpg'
            },
            {
                title: '新冠狀病毒',
                content: '新型冠狀病毒SARS-CoV-2屬冠狀病毒科（Coronavirinae）之beta亞科（betacoronavirus），其病毒特性仍在研究中。冠狀病毒科（Coronavirinae, CoV）是造成人類與動物疾病的重要病原體，為一群有外套膜之單股正鏈RNA病毒，外表為圓形，在電子顯微鏡下可看到類似皇冠的突起因此得名。',
                img: 'img/about3.jpg'
            },
            {
                title: '疫情現況',
                content: '變種新冠病毒持續擴散，日本厚生勞動省27 日表示，又從一名有英國旅遊史、住東京的女性身上檢測出新變種病毒株。這是日本第8例確診感染新變種病毒株。挪威公共衛生研究所也表示，發現兩例源自英國的新變種病毒株確診病例。COVID-19/變種病毒擴散，日本再+1！佛奇：未來幾週可能更糟。',
                img: 'img/about4.jpg'
            }
        ],
        // items: [],
        aboutIndex: 0,
        // itemIndex: 0
    },
    computed: {
        about(){
            return this.abouts[this.aboutIndex]
        },
        // item(){
        //     return this.items[this.itemIndex]
        // }
    },
    // mounted(){
    //     fetch('../js/resultNews.json')
    //     .then(res => res.json())
    //     .then(items => this.items = items)
    // }
})