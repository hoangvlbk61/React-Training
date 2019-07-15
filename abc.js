this.state = {
    titles: [
        { 'title': 'Bài này chill phết', isCompleted: true },
        { 'title': 'Lầu 20', isCompleted: false },
        { 'title': 'Đi Đi Đi', isCompleted: true },
    ],
    todolist: 'lorem'
};
const { titles: todolist, todolist: temp } = this.state;
console.log(this.state.titles);
console.log(todolist.length);
console.log(temp);