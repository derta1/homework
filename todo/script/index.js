Vue.config.productionTip = false;
import { getNeverTodoList, getDoneTodoList } from './util.js';
const app = new Vue({
    el: '#app',
    data() {
        const neverTodoList = getNeverTodoList();
        const neverTodoTingsLength = neverTodoList.length;

        const doneTodoList = getDoneTodoList();
        const doneTodoTingsLength = doneTodoList.length;
        return {
            awaitToAdd: '',
            neverTodoList,
            neverTodoTingsLength,
            doneTodoList,
            doneTodoTingsLength,
            neverThingModify: '',
            doneThingModify: ''
        }
    },
    methods: {
        updateNeverTodo(that, neverTodoList) {
            //更新data信息
            that.neverTodoList = neverTodoList;
            that.neverTodoTingsLength = neverTodoList.length;
            localStorage.setItem("neverTodoList", JSON.stringify(neverTodoList));
        },
        addToNeverTodoList() {
            //没有完成的代办事项
            const awaitToAdd = this.awaitToAdd.trim();
            if (awaitToAdd.length === 0) {
                alert('输入内容不能为空');
                return;
            }
            const neverTodoList = getNeverTodoList();
            neverTodoList.push(awaitToAdd);
            this.updateNeverTodo(this, neverTodoList);
            this.awaitToAdd = '';
        },
        removerNeverTodoThing(index) {
            //删除没有做的list
            const neverTodoList = getNeverTodoList();
            neverTodoList.splice(index, 1);
            this.updateNeverTodo(this, neverTodoList);
        },
        updateDoneTodo(that, doneTodoList) {
            that.doneTodoList = doneTodoList;
            that.doneTodoTingsLength = doneTodoList.length;
            localStorage.setItem("doneTodoList", JSON.stringify(doneTodoList));
        },
        addToDoneTodoList(thing, index, event) {
            //已经完成
            const neverTodoList = getNeverTodoList();
            neverTodoList.splice(index, 1);
            localStorage.setItem("neverTodoList", JSON.stringify(neverTodoList));
            event.target.checked = !event.target.checked;
            const doneTodoList = getDoneTodoList();
            doneTodoList.push(thing);
            localStorage.setItem("doneTodoList", JSON.stringify(doneTodoList));


            this.updateDoneTodo(this, doneTodoList);
            this.updateNeverTodo(this, neverTodoList);
        },
        displayNeverInput(index, event) {
            event.target.children[0].style.display = 'block';
            this.neverThingModify = this.neverTodoList[index];
        },
        displayDoneInput(index, event) {
            event.target.children[0].style.display = 'block';
            this.doneThingModify = this.doneTodoList[index];
        },
        modifyDoneThing(index, event) {
            const doneTodoList = getDoneTodoList();
            doneTodoList[index] = this.doneThingModify;
            this.updateDoneTodo(this, doneTodoList);
            localStorage.setItem("doneTodoList", JSON.stringify(doneTodoList));
            event.target.style.display = 'none';
        },
        modifyNeverThing(index, event) {
            const neverTodoList = getNeverTodoList();
            neverTodoList[index] = this.neverThingModify;
            this.updateNeverTodo(this, neverTodoList);
            event.target.style.display = 'none';
        },
        removeDoneTodoThing(index) {
            const doneTodoList = getDoneTodoList();
            doneTodoList.splice(index, 1);
            this.updateDoneTodo(this, doneTodoList);
        },
        fromDoneToNeverList(thing, index, event) {
            const doneTodoList = getDoneTodoList();
            doneTodoList.splice(index, 1);
            this.updateDoneTodo(this, doneTodoList);
            event.target.checked = !event.target.checked;
            const neverTodoList = getNeverTodoList();
            neverTodoList.push(thing);
            this.updateNeverTodo(this, neverTodoList)
            
        },
        clearData() {
            const neverTodoList = [];
            this.updateNeverTodo(this, neverTodoList);
            const doneTodoList = [];
            this.updateDoneTodo(this, doneTodoList);
        }
    }
});

