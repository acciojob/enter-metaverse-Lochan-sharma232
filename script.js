
//your JS code here. If required.
let myBtn=document.getElementById("enterBtn");
let parent=document.getElementById("parent");

function changetext(){
	parent.innerHTML="";
	parent.innerHTML="<H1>Entered Metaverse</H1>";
}
myBtn.addEventListener("click",(e)=>{
changetext();
});