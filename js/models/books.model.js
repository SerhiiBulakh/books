function get(key) {
    return JSON.parse(localStorage.getItem(key))
}

 function update(key, books) {
    var serialObj = JSON.stringify(books);
    localStorage.setItem(key, serialObj);
}
function deleteItem(key) {
    localStorage.removeItem(key)
}
export { get, update, deleteItem }