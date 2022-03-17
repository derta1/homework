function getNeverTodoList() {
    return  JSON.parse(localStorage.getItem('neverTodoList')) === null ? [] : JSON.parse(localStorage.getItem('neverTodoList'));
}


function getDoneTodoList() {
    return JSON.parse(localStorage.getItem('doneTodoList')) === null ? [] : JSON.parse(localStorage.getItem('doneTodoList'));
}

export {
    getNeverTodoList,
    getDoneTodoList
}