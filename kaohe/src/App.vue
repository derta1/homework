<template>
  <div id="app">
    <AddBar />
    <SearchBar @searchParamChange="handleSearch" />
    <MyTable :listData="resultStudents" />
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue"
import SearchBar from "@/components/SearchBar"
import AddBar from "@/components/AddBar"
export default {
  name: "App",
  data() {
    return {
      searchParams: {
        name: "",
        id: "",
        classID: "",
      },
    };
  },
  components: {
    MyTable,
    SearchBar,
    AddBar
  },
  computed: {
    resultStudents() {
      //依赖查询参数决定需要展示的学生列表
      return this.$store.state.studentList.filter((student) => {
        let isSearchRes = true;
        const { name, id, classID } = this.searchParams;
        if (name !== "") {
          isSearchRes &&= name === student.name;
        }
        if (id !== "") {
          isSearchRes &&= id === student.id;
        }
        if (classID !== "") {
          isSearchRes &&= classID === student.classID;
        }
        return isSearchRes;
      });
    },
  },
  methods: {
    handleSearch(params) {
      const { id, name, classID } = params
      this.searchParams.id = id
      this.searchParams.name = name
      this.searchParams.classID = classID
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
