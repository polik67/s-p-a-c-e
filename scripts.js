// Interacting
 
var p1 = document.querySelector('.p1')


p1.addEventListener('click', rotate)




function rotate() {
	console.log('it works')
	
	if (p1.id != 'rotate') {
		p1.id = 'rotate'
	} else {
		p1.id = ''
	}

}


var p2 = document.querySelector('.p2')


p2.addEventListener('click', zoom)




function zoom() {
	console.log('it works')
	
	if (p2.id != 'zoom') {
		p2.id = 'zoom'
	} else {
		p2.id = ''
	}

}


var p3 = document.querySelector('.p3')


p3.addEventListener('click', move)




function move() {
	console.log('it works')
	
	if (p3.id != 'move') {
		p3.id = 'move'
	} else {
		p3.id = ''
	}

}



var ufo = document.querySelector('.ufo')

p2.addEventListener('click', move2)




function move2() {
	console.log('it works')
	
	if (p2.id != 'move') {
		ufo.id = 'move2'
	} else {
		ufo.id = 'move2'
	}

}






