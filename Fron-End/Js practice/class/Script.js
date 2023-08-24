var arr = [
    {
        name: "Raaj Aryan", profession: "Photographer", statu: "Stranger",
    },
    {
        name: "Deepak Kumar", profession: "Photographer", statu: "Stranger",
    },
    {
        name: "Deepak Gupta", profession: "Photographer", statu: "Stranger",
    }, {
        name: "Deepak Gupta", profession: "Photographer", statu: "Stranger",
    }, {
        name: "Deepak Gupta", profession: "Photographer", statu: "Stranger",
    }, {
        name: "Deepak Gupta", profession: "Photographer", statu: "Stranger",
    }
];

var clutter = "";
arr.forEach(function (data) {

    clutter += ` <div id="card">
            <div id="photu">
                <img src="https://i.pinimg.com/280x280_RS/d4/40/56/d4405681559806e7fcc09640ca67e50c.jpg" alt="">
            </div>
            <h3>${data.name}</h3>
            <h5>${data.Profession}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at excepturi, iure illum temporibus obcaecati laborum! Officiis facere, repellendus nobis odit dolor reprehenderit.</p>
            <h4>${data.statu}</h4>
            <button>add friend</button>
        </div>`
})


document.querySelector("#main").innerHTML = clutter