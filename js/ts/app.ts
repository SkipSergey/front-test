import {TestDrawer} from "./testDrawer";

var drawer = new TestDrawer();
drawer.draw();
drawer.loadData();

	
$(document).on("click",".activField",function(e){
	$("#modal").fadeIn(800);
	drawer.loadModalForm(e.target.id);
});

$("#modal").on("click",".closeBtn",function(){
	$("#modal").fadeOut(200,function(){
		drawer.removeModalForm();
	});
});

$("#modal").on("click",".saveBtn",function(){
	$("#modal").fadeOut(200,function(){
		drawer.removeModalForm();
	});
});