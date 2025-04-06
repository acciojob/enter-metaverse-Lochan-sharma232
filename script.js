
//your JS code here. If required.
let myBtn=document.getElementById("enterBtn");
let mouse=document.getElementBYId("status");

myBtn.addEventListener("click",(e)=>{
	mouse.innerText="Entered Metaverse";
	mouse.outerHTML="<h1 id='status'>"+statusParagraph.innerHTML+"</h1">;
});

function cha