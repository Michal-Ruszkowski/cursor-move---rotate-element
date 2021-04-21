function findPos(obj){
	let curleft = curtop = 0;
    if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
    }
    return [curleft,curtop];
}

document.addEventListener("mousemove",  function(){
	const x = event.pageX;
	const y = event.pageY;
	const diplomas = document.getElementById("diplomas");
	const positionDiplomas = findPos(diplomas);
	const distanceX = (x-positionDiplomas[0]-window.innerWidth*0.36);
	const distanceY = (y-positionDiplomas[1]-window.innerWidth*0.08);
	const degX = distanceX * -15 / window.innerWidth;
	const degY = distanceY * -30 / window.innerHeight;
	diplomas.style.transform = `perspective(20vw) rotateX(${degY}deg) rotateY(${degX}deg)`;
})
