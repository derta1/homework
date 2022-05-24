<template>
  <div class="search-bar">
    <div class="search-item">
      <span>ID</span>
      <el-input v-model="searchParam.id" placeholder="请输入ID" class="input"></el-input>
    </div>
    <div class="search-item">
      <span>姓名</span>
      <el-input v-model="searchParam.name" placeholder="请输入姓名" class="input"></el-input>
    </div>
    <div class="search-item">
      <span>班级</span>
      <el-input v-model="searchParam.classID" placeholder="请输入班级" class="input"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchParam: {
        id: '',
        name: '',
        classID: ''
      }
    }
  },
  watch: {
    searchParam: {
      deep: true,
      handler() {
        console.log('fsad')
        this.$emit('searchParamChange', this.searchParam);
      }
    }
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
}
.search-bar .search-item {
  display: flex;
  align-items: center;
  width: 250px;
}
.search-bar .search-item span {
  display: inline-block;

  width: 50px;
}
</style>
