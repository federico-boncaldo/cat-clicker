
function loadCats(event) {
	$(".images").css("display", "none");
	$(".cat-name").css("display", "none");
	$(".click").css("display", "none");;

	let catName = $("select option:checked").text();
	let catId = $("select option:checked").attr("value");

	$("#" + catId).css("display", "block");
	$("#" + catId).nextUntil("img").css("display", "block");

	event.preventDefault();
};

let cat_class = "images";

let cats = [{
	src	 : "img/cat.jpg",
	id 	 : "cat-img",
	class: cat_class,
	name : "Cat"
},{
	src	 : "img/cat-2.jpg",
	id 	 : "cat-img-2",
	class: cat_class,
	name : "Cat1"
},{
	src	 : "img/cat-3.jpg",
	id 	 : "cat-img-3",
	class: cat_class,
	name : "Cat2"
},{
	src	 : "img/cat-4.jpg",
	id 	 : "cat-img-4",
	class: cat_class,
	name : "Cat3"
},{
	src	 : "img/cat-5.jpg",
	id 	 : "cat-img-5",
	class: cat_class,
	name : "Cat4"
}];

for( let cat of cats){
	let div = document.createElement('div');
	let img = document.createElement('img');

	img.src = cat.src;
	img.setAttribute("id", cat.id);
	img.setAttribute("class", cat.class);

	let click = 0;

	img.addEventListener('click', (function(clickCopy) {
		return function() {
			++clickCopy;
			$("#" + cat.id).siblings(".click").text("Click: " + clickCopy );
		}
	})(click));

	div.appendChild(img);
	document.body.appendChild(div);

	$("#" + cat.id).after("<p class='click'> Click: " + click +" </p>");
	$("#" + cat.id).after("<p class='cat-name'> Name: " + cat.name + "</p>");

}

$("#cat-form").submit(function(event) {
	loadCats(event);
});