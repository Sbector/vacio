var dropzone;
var info;
var texto;

function fileSelected(file) {
	info.html('nombre : ' + file.name + '<br/>' + 'tipo : ' + file.type);
	console.log(file);
	if(file.type == 'text'){
		texto.html(file.data);
	}else{
		texto.html("selecciona un arvhivo de texto");
	}
}

function setup() {
	noCanvas();
	info = createP(' ');
	info.parent('panel-izquierdo');
	texto = createP(' ');
	texto.parent('panel-derecho');
	texto.id('output');
	//var input = createFileInput(fileSelected);
	//input.parent('panel-izquierdo');
	//var canvas = createCanvas(windowWidth/4 * 3,windowHeight);
	//canvas.parent('panel-derecho');
	background(0);

	dropzone = select('#dropzone');
	dropzone.dragOver(highlight);
	dropzone.dragLeave(unhighlight);
	dropzone.drop(fileSelected, unhighlight);
	

}

function highlight() {
	dropzone.style('background-color', '#ccc');
}

function unhighlight() {
	dropzone.style('background-color', '#fff');
}