
//your JS code here. If required.
let myBtn=document.getElementById("enterBtn");
let status=document.getElementById("status");
let enteredMetaverse=document.getElementById("enteredMetaverse");
function changetext(){
	status.innerHTML="Enter the Metaverse";
	enteredMetaverse.innerHTML="Entered Metaverse";
}
myBtn.addEventListener("click",(e)=>{
	console.log(clicked);
	changetext();
});