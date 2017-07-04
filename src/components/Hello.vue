<template>
  <div class="hello">

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-date-picker
            v-model="happenTime"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input v-model="address"
            placeholder="请输入地址">
          </el-input>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      happenTime:'',
      address:'',
      textarea:''
    }
  }
}
</script>

<style scoped>

</style>
