let myBtn=document.getElementById("enterBtn");
let parent=document.getElementById("parent");
let status=document.getElementById("status");
function changetext(){
	status.innerHTML=`<h1 id="status">Entered Metaverse</h1>`;
}
myBtn.addEventListener("click",(e)=>{
	changetext();
});