    let addBtn = document.getElementById('add_btn');
    addBtn.addEventListener('click', addChapter);
    function addChapter(e){
      let currentBtn = e.currentTarget;
      let currentInput = currentBtn.previousElementSibling
      

        let newLi = document.createElement('li')
        newLi.classList.add('list-group-item')
        newLi.textContent = currentInput.value

        let parentList = document.getElementById('parentList');
        parentList.appendChild(newLi)
    }

    