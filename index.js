let newBook
let myLibrary = []

let submitButton = document.querySelector('.submit')
let bookLine = document.getElementById('storage')

function Book (title, author, pages, read){
    this.title = title.value
    this.author = author.value
    this.pages = pages.value
    this.read = read.checked
}

function clearForm() {
    document.getElementById('title').value=''; 
    document.getElementById('author').value=''; 
    document.getElementById('pages').value=''; 
    }

function addBookToLibrary() {

  event.preventDefault()
    newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook) 
    console.table(myLibrary)  
    closeForm()
    addData()
    clearForm()
    
}

function openForm() {
    //clearWhenSubmit()
    document.getElementById("myForm").style.display = "block";
  }
  
 //close form with Submit button 
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  submitButton.addEventListener('click', addBookToLibrary)

  function addData() {
    //deleteAll()
    //const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('#newLine');
    books.forEach(book => table.removeChild(book));
    for(var i = 0; i < myLibrary.length; i++) {
      createData(myLibrary[i])
    }
  }

  let table = document.createElement('table')
  table.setAttribute('id', 'theTable')
  table.setAttribute('style', 'background-color: #deffe7; margin: auto; color: purple; width: auto')
  bookLine.appendChild(table)

   let tr = document.createElement('tr')
   tr.setAttribute('id', 'theTr')
   let tableDiv = document.getElementById('theTable')
   tableDiv.appendChild(tr)

   let th = document.createElement('th')
   th.setAttribute('id', 'theTh')
   th.textContent = 'Title'
   let thDiv = document.getElementById('theTr')
   thDiv.appendChild(th)

   td1 = document.createElement('td')
   td1.setAttribute('id', 'theTd')
   td1.textContent = 'Author'
   let trDiv1 = document.getElementById('theTr')
   trDiv1.appendChild(td1)

   let td2 = document.createElement('td')
   td2.setAttribute('id', 'theTd')
   td2.textContent = 'Pages'
   let trDiv2 = document.getElementById('theTr')
   trDiv2.appendChild(td2)

   let td3 = document.createElement('td')
   td3.setAttribute('id', 'theTd')
   td3.textContent = 'Read'
   let trDiv3 = document.getElementById('theTr')
   trDiv3.appendChild(td3)

   let td4 = document.createElement('td')
   td4.setAttribute('id', 'theTd')
   td4.textContent = 'Delete Book'
   let trDiv4 = document.getElementById('theTr')
   trDiv4.appendChild(td4)


  function createData(item){

    let newLine = document.createElement('tr')
    newLine.setAttribute('id', 'newLine')
    table.appendChild(newLine)

    let bookTitle = document.createElement('td')
    bookTitle.setAttribute('id', 'bookTitle')
    bookTitle.textContent = item.title
    newLine.appendChild(bookTitle)

    let bookAuthor = document.createElement('td')
    bookAuthor.setAttribute('id', 'bookAuthor')
    bookAuthor.textContent = item.author
    newLine.appendChild(bookAuthor)

    let bookPages = document.createElement('td')
    bookPages.setAttribute('id', 'bookPages')
    bookPages.textContent = item.pages
    newLine.appendChild(bookPages)

        let readStatus
    if (item.read === true) {
      readStatus = 'Read'
    } else {readStatus = "Not Read"}

    let bookRead = document.createElement('td')
    bookRead.setAttribute('id', 'bookRead')
    //bookRead.textContent = item.read
    newLine.appendChild(bookRead) 
    let readButton = document.createElement('button')
    readButton.setAttribute('id', 'readBook')
    readButton.textContent = readStatus
    bookRead.appendChild(readButton)

    //STOP!!!
    const changeStatus = () => {
      if (readStatus === 'Read') {
        readStatus = "Not Read"
      } else {readStatus = 'Read'}
      readButton.textContent = readStatus
    }

    let cS = document.querySelectorAll('#readBook')
    cS.forEach(button => {
      button.addEventListener('click', changeStatus)
    })

    let deleteBook = document.createElement('td')
    deleteBook.setAttribute('id', 'deleteBook')
    //deleteBook.textContent = 'Delete Book'
    newLine.appendChild(deleteBook)
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'deleteButton')
    deleteButton.textContent = 'Delete Book'
    deleteBook.appendChild(deleteButton)
    
    let dB = document.querySelectorAll('#deleteButton')
    dB.forEach(button => {
button.addEventListener('click', removeFromLibrary)
    })  
  }

function clearWhenSubmit() {
    bookLine.style.display = "none"
}


const removeFromLibrary = (index) => {
  myLibrary.splice(index, 1)
  console.table(myLibrary)
  const book = document.querySelector('#newLine')
  table.removeChild(book)
}

