
const navbar = document.getElementsByClassName('navbar')[0]


function handleParams () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page')

    const title = document.getElementById("title");
    title.innerHTML = "Kitaptan " +  page;

    const myh1 = document.getElementsByClassName("hero-title")[0];
    myh1.innerHTML = "Kitaptan " +  page;
}

function handleUnderLine () {
    const href = window.location.href;

    const ul = document.getElementById("outer");

    if (href.includes("index")) 
        console.log(ul.children[0].classList.add("underlined"));

    if (href.includes("proje")) 
        console.log(ul.children[1].classList.add("underlined"));
    
    if (href.includes("note")) 
        console.log(ul.children[2].classList.add("underlined"));

    if (href.includes("pub")) 
        console.log(ul.children[3].classList.add("underlined"));
    
    if (href.includes("about")) 
        console.log(ul.children[4].classList.add("underlined"));

    if (href.includes("contact")) 
        console.log(ul.children[5].classList.add("underlined"));

}


