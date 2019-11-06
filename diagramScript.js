/* Comment goes here */

if(document.getElementById){
    window.onload = setup;
}

MathJax.Hub.Config({
    jax: ["input/TeX", "output/HTML-CSS"],
    extensions: ["tex2jax.js"],
    "HTML-CSS": { preferredFont: "TeX", availableFonts: ["TeX"] },
    tex2jax: { inlineMath: [ ["$", "$"], ["\\(","\\)"] ], displayMath: [ ["$$","$$"], ["\\[", "\\]"] ], processEscapes: true, ignoreClass: "tex2jax_ignore|dno" },
    TeX: { noUndefined: { attributes: { mathcolor: "red", mathbackground: "#FFEEEE", mathsize: "90%" } } },
    messageStyle: "none"
});

function newButtons(){
    var hdr = document.createElement("HEADER");
    hdr.id = "multiHeader";
    hdr.innerHTML = "<h2>Initial conditions:</h2>";
    hdr.style.position = "absolute";
    hdr.style.left = "550px";
    hdr.style.top = "160px";
    document.body.appendChild(hdr);
    var normalBtn = makeNewButton();
    var sprradBtn = makeNewButton();
    normalBtn.id = "NormalButton";
    normalBtn.innerHTML = "Normal";
    normalBtn.style.left = "550px";
    normalBtn.style.fontSize = "15px";
    sprradBtn.style.left = "680px";
    sprradBtn.id = "SprRadButton";
    sprradBtn.innerHTML = "Superradiant";
    sprradBtn.style.fontSize = "15px";
    document.body.appendChild(normalBtn);
    document.body.appendChild(sprradBtn);
    normalBtn.addEventListener(
        "click", function() {
            document.getElementById("TextBoxHeader").innerHTML = "Multistability - The Normal Phase";
            document.getElementById("TopPanel").src = "HTML_BlochSphereMultiNormal.png";
            document.getElementById("BottomPanel").src = "HTML_PhotonNumberMultiNormal.png";
        }
    )
    sprradBtn.addEventListener(
        "click", function() {
            document.getElementById("TextBoxHeader").innerHTML = "Multistability - The Superradiant Phase";
            document.getElementById("TopPanel").src = "HTML_BlochSphereMultiSprRad.png";
            document.getElementById("BottomPanel").src = "HTML_PhotonNumberMultiSprRadPNG.png";
        }
    )
}

function newButtons2() {
  var hdr = document.createElement("HEADER");
  hdr.id = "chaosHeader";
  hdr.innerHTML = "<h2>Chaos Type:</h2>";
  hdr.style.position = "absolute";
  hdr.style.left = "550px";
  hdr.style.top = "160px";
  document.body.appendChild(hdr);
  var chaos1Btn = makeNewButton();
  var chaos2Btn = makeNewButton();
  chaos1Btn.id = "Chaos1Button";
  chaos1Btn.innerHTML = "Isolated chaotic attractors";
  chaos1Btn.style.left = "550px";
  chaos1Btn.style.fontSize = "15px";
  chaos2Btn.style.left = "750px";
  chaos2Btn.id = "Chaos2Button";
  chaos2Btn.innerHTML = "Merged chaotic attractor";
  chaos2Btn.style.fontSize = "15px";
  document.body.appendChild(chaos1Btn);
  document.body.appendChild(chaos2Btn);
  chaos1Btn.addEventListener(
    "click", function() {
      document.getElementById("TextBoxHeader").innerHTML = "Chaos - Isolated Chaotic Attractors";
      document.getElementById("TopPanel").src = "HTML_BlochSphereChaos1PNG.png";
      document.getElementById("BottomPanel").src = "HTML_PhotonNumberChaos1PNG.png";
    }
  )
  chaos2Btn.addEventListener(
    "click", function() {
      document.getElementById("TextBoxHeader").innerHTML = "Chaos - Merged Chaotic Attractor";
      document.getElementById("TopPanel").src = "HTML_BlochSphereChaos2.png";
      document.getElementById("BottomPanel").src = "HTML_PhotonNumberChaos2.png";
    }
  )
}

function newButtons3() {
  var hdr = document.createElement("HEADER");
  hdr.id = "multi2Header";
  hdr.innerHTML = "<h2>Initial conditions:</h2>";
  hdr.style.position = "absolute";
  hdr.style.left = "550px";
  hdr.style.top = "160px";
  document.body.appendChild(hdr);
  var normal2Btn = makeNewButton();
  var sprrad2Btn = makeNewButton();
  normal2Btn.id = "Normal2Button";
  normal2Btn.innerHTML = "Normal";
  normal2Btn.style.left = "550px";
  normal2Btn.style.fontSize = "15px";
  sprrad2Btn.style.left = "680px";
  sprrad2Btn.id = "SprRad2Button";
  sprrad2Btn.innerHTML = "Superradiant";
  sprrad2Btn.style.fontSize = "15px";
  document.body.appendChild(normal2Btn);
  document.body.appendChild(sprrad2Btn);
  normal2Btn.addEventListener(
    "click", function() {
      document.getElementById("TextBoxHeader").innerHTML = "Multistability - The Normal Phase";
      document.getElementById("TopPanel").src = "HTML_BlochSphereMulti2Normal.png";
      document.getElementById("BottomPanel").src = "HTML_PhotonNumberMulti2Normal.png";
    }
  )
  sprrad2Btn.addEventListener(
    "click", function() {
      document.getElementById("TextBoxHeader").innerHTML = "Multistability - The Superradiant Phase";
      document.getElementById("TopPanel").src = "HTML_BlochSphereMulti2SprRad.png";
      document.getElementById("BottomPanel").src = "HTML_PhotonNumberMulti2SprRad.png";
    }
  )
}

function makeNewButton() {
    var btn = document.createElement("BUTTON");
    btn.style.fontFamily = "Computer Modern Serif";
    btn.style.fontSize = "15";
    btn.style.backgroundColor = "rgb(161,224,255)";
    btn.style.borderRadius = "10%";
    btn.style.color = "black";
    btn.style.padding = "4px";
    btn.style.borderColor = "rgb(8,171,252)";
    btn.style.position = "absolute";
    btn.style.top = "220px";
    return btn;
}

function changeRegion(topImg, bottomImg, textboxHeader, textboxText){
    if(document.getElementById('SprRadButton')){
        document.getElementById('SprRadButton').outerHTML = "";
    }
    if(document.getElementById('multiHeader')){
        document.getElementById('multiHeader').outerHTML = "";
    }
    if(document.getElementById('NormalButton')){
        document.getElementById('NormalButton').outerHTML = "";
    }
    if(document.getElementById('Chaos1Button')){
      document.getElementById('Chaos1Button').outerHTML = "";
    }
    if(document.getElementById('Chaos2Button')){
      document.getElementById('Chaos2Button').outerHTML = "";
    }
    if(document.getElementById('chaosHeader')){
      document.getElementById('chaosHeader').outerHTML = "";
    }
    if(document.getElementById('SprRad2Button')) {
      document.getElementById('SprRad2Button').outerHTML = "";
    }
    if(document.getElementById('Normal2Button')){
      document.getElementById('Normal2Button').outerHTML = "";
    }
    if(document.getElementById('multi2Header')){
      document.getElementById('multi2Header').outerHTML = "";
    }
    document.getElementById('TopPanel').src=topImg;
    document.getElementById('BottomPanel').src=bottomImg;
    document.getElementById('TextBoxHeader').innerHTML = textboxHeader;
    document.getElementById('TextBox').innerHTML = textboxText;
}
