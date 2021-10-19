// UI
const loadtext = document.querySelector(".loadingtext");
const bg = document.querySelector(".bg");

let load = 0;

let blurinterval = setInterval(blur,30);

function blur(){

	load++;
	// console.log(load);

	if(load > 99){
		clearInterval(blurinterval);
	}

	loadtext.textContent = `${load}%`;
							   // text, start, end ,opacity-start, opacity-end
	loadtext.style.opacity = scale(load,0,100,1,0);
	bg.style.filter = `blur(${scale(load,0,100,70,0)}px)`;
}

const scale = (num,inmin,inmax,outmin,outmax)=>{
	return (num - inmin) * (outmax - outmin) / (inmax - inmin) +outmin;
}

// load from 0% to 100%. when load reach 100, the opacity of loadtext will be 0
 // cause we want to disapear it.If load is still 0, loadtext have to be appear,
 // so the opacity of it will be 1