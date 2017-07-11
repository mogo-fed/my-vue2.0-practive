<template>
  <div class="record">

    <el-row :gutter="24" class="animated bounceInUp">
      <el-col :span="4">
        <el-date-picker
          v-model="happenTime"
          type="date"
          format="yyyy-MM-dd"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>

      <el-col :span="4">
        <el-autocomplete
          class="inline-input"
          v-model="chooseConfig"
          :fetch-suggestions="querySearch"
          @select="handleSelect"
          placeholder="请选择项目"
        ></el-autocomplete>
      </el-col>


      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input v-model="address"
            placeholder="请输入地址">
          </el-input>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入进度" v-model="todayProgress">
            <template slot="append">%</template>
          </el-input>
        </div>
      </el-col>
      <el-button type="primary" @click="getscheduleList">I made it today</el-button>
    </el-row>

    <el-row :gutter="24" class="con-bottom">
      <el-col :span="11" class="animated bounceInLeft">
        <ConfigNote @changeConfig="addConfig"></ConfigNote>
      </el-col>
      <el-col :span="12" class="animated bounceInRight">
        <List v-bind:configList="scheduleList"></List>
      </el-col>
    </el-row>

    <router-link to="/test" class="test">Go to Test</router-link>
  </div>

</template>

<script>

import ConfigNote from './ConfigNote'
import List from './List'

export default {
  name: 'record',
  components:{
    ConfigNote,
    List
  },
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
      happenTime:new Date(),
      chooseConfig:'',
      address:'',
      textarea:'',
      todayProgress:'100',
      myconfig:'',
      myconfigs:[],
      scheduleList:[]
    }
  },
  methods:{
    addConfig(addconfig){
      this.myconfigs.push(addconfig);
      // console.log(this.myconfigs);
    },
    querySearch(queryString, cb) {
        var myconfigs = this.myconfigs;
        var results = queryString ? myconfigs.filter(this.createFilter(queryString)) : myconfigs;
        // 调用 callback 返回建议列表的数据
        cb(results);
    },
    createFilter(queryString) {
      return (myconfig) => {
        return (myconfig.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item){
      this.myconfig = item.value
      // console.log(item.value)
    },
    getscheduleList(){
      this.scheduleList.push({
        "time":this.happenTime,
        "config":this.myconfig,
        "address":this.address,
        "content":this.textarea,
        "progress":this.todayProgress
      });
      // localStorage.setItem("scheduleList",this.scheduleList);
      // console.log(this.scheduleList)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.record{
  margin:5% 10% ;
}
.con-bottom{
  margin:4% 0 5%; 
}

</style>
