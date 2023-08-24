var arr = [
  {
    name: "Raaj Aryan", profession: "Photographer", statu: "Stranger",
  },
  {
    name: "Deepak Kumar", profession: "Photographer", statu: "Stranger",
  },
  {
    name: "Deepak Gupta", profession: "Photographer", statu: "Stranger",
  }
];
var btn = document.querySelector("button");
var clutter = "";
for (var i = 0; i < arr.length; i++) {
  clutter += `<div id="main">
        <div id="img-div">
          <img
            src="https://i.pinimg.com/280x280_RS/d4/40/56/d4405681559806e7fcc09640ca67e50c.jpg"
            alt=""
          />
        </div>
        <h2>${arr[i].name}</h2>
        <h4>${arr[i].profession}</h4>
        <p>
          Lorem, ipsum dolor sit amet consect adipisicing elit. Necessitatibus,
          quisquam?
        </p>

        <h3>${arr[i].statu}</h3>
        <button>Add Friend</button></div>
      `;
}
document.querySelector("#background").innerHTML = clutter