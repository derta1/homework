import Vue from 'vue'
import Vuex from 'vuex'

import studentList from '../mock/students.js'
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('ABCDEF1234567890', 8);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    studentList
  },
  mutations: {
    add(state, student) {
      state.studentList = [...state.studentList, { ...student, id: nanoid() }]
    },
    delete(state, id) {
      const index = state.studentList.findIndex(student => student.id === id);
      if (index === -1) return;
      state.studentList.splice(index, 1);
    },
    editName(state, info) {
      const index = state.studentList.findIndex(student => student.id === info.id);
      if(index === -1) return;
      state.studentList[index].name = info.name;
    },
    editClassID(state, info) {
      const index = state.studentList.findIndex(student => student.id === info.id);
      if(index === -1) return;
      state.studentList[index].classID = info.classID;
    }
  }
})

export default store;
