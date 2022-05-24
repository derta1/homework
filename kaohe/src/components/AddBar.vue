<template>
  <div class="add-bar">
    <div class="add-item">
      <span>姓名</span>
      <el-input v-model.trim="info.name" placeholder="请输入姓名"></el-input>
    </div>
    <div class="add-item">
      <span>班级</span>
      <el-input v-model.trim="info.classID" placeholder="请输入班级"></el-input>
    </div>
    <button @click="addStuent">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: "",
        classID: "",
      },
    };
  },
  methods: {
    addStuent() {
      const { name, classID } = this.info;
      if (name === "" || classID === "") {
        this.$message({
          showClose: true,
          message: "姓名和班级不可为空",
          type: "error",
        });
        return;
      }
      this.info.name = "";
      this.info.classID = "";
      this.$store.commit("add", { name, classID });
    },
  },
};
</script>

<style scoped>
.add-bar {
  display: flex;
  width: 750px;
}
.add-bar .add-item {
  display: flex;
  align-items: center;
  width: 33.3%;
}
.add-bar .add-item span {
  display: inline-block;

  width: 50px;
}
</style>
