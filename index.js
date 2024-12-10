// Создать html - страницу со списком ссылок.
// Ссылки на внешние источники(которые начинаются с http://)
//     необходимо подчеркнуть пунктиром.
// Искать такие ссылки в списке и устанавливать им дополнительные стили необходимо с помощью JS.


const links = document.querySelectorAll("a");

links.forEach(link => {

    const el = link.getAttribute("href");

    if (el.startsWith("http://") || el.startsWith("https://")) 
        {
        link.style.textDecoration = "underline";
        link.style.textDecorationStyle = "dotted";
    }
});



const collapses = document.querySelectorAll('.collapse');


collapses.forEach(collapse => {
    collapse.addEventListener('click', () =>
         {

        const li = collapse.parentElement;
        const ul = li.querySelector('ul');

        if (ul) {
            const isHidden = ul.style.display === "none";
            ul.style.display = isHidden ? "block" : "none";
        }
    });
});


const books = document.querySelectorAll(".book");

let lastIndex = -1; 

books.forEach((book, index) => {
    book.addEventListener("click", (event) => {
        if (event.ctrlKey) {
            
            const isSel = book.style.backgroundColor === "orange";
            book.style.backgroundColor = isSel ? "" : "orange";
        }

        if (event.shiftKey) {
            
            const start = Math.min(lastIndex, index);
            const end = Math.max(lastIndex, index);

            books.forEach((b, i) => {
                if (i >= start && i <= end) 
                {
                    b.style.backgroundColor = "orange";
                }
            });
        } 
        
        if(!event.ctrlKey || !event.shiftKey) {
            
            books.forEach(b => {
                b.style.backgroundColor = "";
            });

            book.style.backgroundColor = "orange";
        }


        lastIndex = index;
    });
});






const textContainer = document.getElementById("edit-container");

document.addEventListener("keydown", (event) => 
{
    if (event.ctrlKey && event.key === "e") 
    {
        event.preventDefault();
        textContainer.setAttribute("contenteditable", "true");
        textContainer.focus();
    }

    if (event.ctrlKey && event.key === "s") 
    {
        event.preventDefault();
        textContainer.setAttribute("contenteditable", "false");
    }
});