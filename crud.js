    let addBtn = document.getElementById('add_btn');
    addBtn.addEventListener('click', addChapter);

    

    function addChapter(e){
      if(parentList.children[0].className = "emptyMsg"){
        parentList.children[0].remove()

      }
      let currentBtn = e.currentTarget;
      let currentInput = currentBtn.previousElementSibling
      let currenChapterName = currentInput.value
      

        let newLi = document.createElement('li')
        //newLi.classList.add('list-group-item')
        newLi.className = "list-group-item d-flex justify-content-between"
        newLi.innerHTML = `<h3 class="flex-grow-1">${currenChapterName}</h3>
        <button class="btn btn-warning mx-2">Edit</button>
        <button class="btn btn-danger"  onclick="removeChapter(this)">Remove</button>`

        
        parentList.appendChild(newLi)
    }

    function removeChapter(currentElement){
      currentElement.parentElement.remove()
      let parentList = document.getElementById('parentList');
      if(parentList.children.length <= 0){
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Nothing is here. Please Add a Chapter!!"
        parentList.appendChild(newEmptyMsg);
      }

    }

    function editChapter(currentElement){

      if(currentElement.textContent == "Done"){
        currentElement.textContent = "Edit"
        let currenChapterName = currentElement.previousElementSibling.value
        let currHeading = document.createElement('h3');
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currenChapterName
        currentElement.parentElement.replaceChild(currHeading, currentElement.previousElementSibling)


      } else {
        currentElement.textContent = "Done"
        let currenChapterName =  currentElement.previousElementSibling.textContent
        let currInput = document.createElement('input');
        currInput.type = "text"
        currInput.placeholder = "Chapter Name"
        currInput.className = "form-control"
        currInput.value = currenChapterName

        currentElement.parentElement.replaceChild(currInput, currentElement.previousElementSibling)

      }
       
    }

    
    

    