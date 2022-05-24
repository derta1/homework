<template>
  <div class="table-wrap">
    <el-table :data="listData" border style="width: 750px">
      <el-table-column prop="id" label="ID" width="187.5">
        <el-input v-if="isEditting"></el-input>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="187.5">
      </el-table-column>
      <el-table-column prop="classID" label="班级" width="187.5">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="187.5">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native="deleteStudent(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-button
            type="text"
            size="small"
            @click.native="editStudent(scope.$index, scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditting: false,
    };
  },
  props: ["listData"],
  methods: {
    deleteStudent(_, info) {
      this.$store.commit("delete", info.id);
    },
    editStudent(_, info) {
      this.$prompt("请输入修改后的姓名", "修改姓名", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        inputPattern: /^.+$/,
        inputErrorMessage: "输入不能为空",
      }).then(({ value }) => {
        this.$store.commit("editName",  {
          id: info.id,
          name: value,
        });
        this.$prompt("请输入修改后的班级", "修改班级", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          inputPattern: /^.+$/,
          inputErrorMessage: "输入不能为空",
        })
          .then(({value}) => {
            this.$store.commit("editClassID", {
              id: info.id,
              classID: value,
            });
            this.$message({
              type: "success",
              message: `修改完成`,
            }).catch(() => {
              this.$message({
                type: "info",
                message: "取消输入",
              });
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消输入",
            });
          });
      });
    },
  },
};
</script>
<style scoped>
.table-wrap {
  width: 750px;
}
</style>
