//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const submitBtn=document.getElementbyId("submit")
	const bookList=documrnt.getElementbyId("book-list")
	submitBtn.addEventListner("click" ,(e)=>{
		e.preventDefault();

		const titleInput=document.getElementbyId("title");
		const  authorInput=document.getElementbyId("author")
		const isbninput=document.getElementbyId("isbn")

		const title=titleInput.value.trim()
		const author=titleInput.value.trim()
		const isbn=isbninput.value.trim()

		if(value===""||author===""||isbn==="")
		{
			return;
		}

		const row=document.createElement("tr");
		row.innerHTML='
			<td>${title}</td>
			<td>${author}</td>
			<td>${isbn}</td>
			<td><button class="delete">Clear</button></td>';

			bookList.appendChild(row);

			titleInput.value="";
			authorInput.value="";
			isbnInput.value="";
	});
bookList.addEventListener("click",(e)=>{
if(e.target.classList.contains("delete")){
	e.target.parentElement.parentElement.remove();
}
});
});