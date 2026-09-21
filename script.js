//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const submitBtn=document.getElementById("submit")
	const bookList=documrnt.getElementById("book-list")
	submitBtn.addEventListner("click" ,(e)=>{
		e.preventDefault();

		const titleInput=document.getElementById("title");
		const  authorInput=document.getElementById("author")
		const isbninput=document.getElementById("isbn")

		const title=titleInput.value.trim()
		const author=authorInput.value.trim()
		const isbn=isbninput.value.trim()

		if(title===""||author===""||isbn==="")
		{
			return;
		}

		const row=document.createElement("tr");
		row.innerHTML=`
			<td>${title}</td>
			<td>${author}</td>
			<td>${isbn}</td>
			<td><button class="delete">Clear</button></td>`;

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