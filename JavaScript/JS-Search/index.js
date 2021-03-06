let cards = document.querySelectorAll('.box')
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    
    //innerText для поиска видимого контента
    //textContent для поиска и среди скрытых элементов
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

//Задаем задержку поиска
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});