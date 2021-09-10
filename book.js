// Load The Search Text 
const loadSearch = () => {
    const searchValue = document.getElementById("search-value");
    const searchText = searchValue.value;
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => loadDisplay(data.docs))

}
// Load Founded Search Number
const loadSearchValue = () => {
    const searchValue = document.getElementById("search-value");
    const searchText = searchValue.value;
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => loadNumberOfSearch(data.numFound));
    searchValue.value = "";
}
// Show Number of Search  
const loadNumberOfSearch = values => {
    const resultFound = document.getElementById('search-number');
    resultFound.textContent = "";
    const h3 = document.createElement("h3");
    h3.innerHTML = `<h3 class="text-warning"><span class="text-black">Result Found :</span> ${values} </h3>`;
    if (values === 0) {
        h3.innerHTML = `<h3 class="text-secondary"> No Result Found </h3 >`;
    }
    resultFound.appendChild(h3);
}
// Show Books of Search
const loadDisplay = books => {
    const searchText = document.getElementById('display-search');
    searchText.textContent = "";
    books.forEach(book => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card border-2 p-2 h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-100 h-75 img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title text-secondary text-center"> ${book.title}</h5>
                <h6 class="card-title text-danger text-center"><span class="text-black">Author :</span> ${book.author_name ? book.author_name[0] : 'Author Name Not Found'}</h6>
                <h6 class="card-title text-danger text-center"><span class="text-black">Publisher :</span> ${book.publisher ? book.publisher[0] : 'Publisher Not Found'} </h6>
                <h6 class="card-text text-center">First Published : ${book.first_publish_year}</h6>
            </div>
        </div>
        `
        searchText.appendChild(div);
    });
}