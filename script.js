let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	let li = document.createElement("li"); // creates an element "li"
    li.innerText = input.value.trim()
	// li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function markdone() {
        // toggle убирает или добавляет класс done 
		li.classList.toggle("done");
	}
	li.addEventListener("click",markdone);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	let dBtn = document.createElement("button");
    dBtn.innerText="X"
	// dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	// function deleteListItem(){
	// 	li.classList.add("delete")
	// }

    function deleteListItem(event){
        let li = event.target.parentElement
		ul.removeChild(li)
	}
	//END ADD CLASS DELETE
}

// доработка/фиксы
// 1. Пустая строка создана с помощью пробела и надо убрать его
// trim убирает начальные и конечные пробельные символы
function addListAfterClick(){
	if (input.value.trim().length > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.trim().length > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

