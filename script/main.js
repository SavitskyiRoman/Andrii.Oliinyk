var open = document.getElementsByClassName('open-filters')[0],
	menu = document.getElementsByClassName('left-side')[0];

open.addEventListener("click", function(event) {
	if(!menu.classList.contains("active")) {
		menu.classList.add('active');
	console.log("111");
		
	} else {
		menu.classList.remove('active');
		console.log('000')
	}
	
})

var create = document.getElementsByClassName('add-item')[0],
	menuCreate = document.getElementsByClassName('right-side')[0];

create.addEventListener("click", function(event) {
	if(!menuCreate.classList.contains("active")) {
		menuCreate.classList.add('active');
	console.log("yes");
		
	} else {
		menuCreate.classList.remove('active');
		console.log('no')
	}
})


var rm = document.getElementsByClassName('remove-item')[0];
	rm.addEventListener("click", function(event)
	{
		confirm("are you shure?");
	})