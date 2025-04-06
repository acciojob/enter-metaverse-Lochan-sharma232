let myBtn=document.getElementById("enterBtn");
let parent=document.getElementById("parent");

function changetext(){
	parent.innerHTML="";
	parent.innerHTML=`<h1 id="status">Entered Metaverse</h1>`;
}
myBtn.addEventListener("click",(e)=>{
	changetext();
});