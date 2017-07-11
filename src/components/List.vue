<template>
	<el-card class="box-card">
	  <div slot="header" class="clearfix">
	    <span style="line-height: 36px;">Did that today</span>
	    <i class="el-icon-delete2" @click="delAll"></i>
	  </div>
	  <ul class="config-list">
	  	<li v-for="(item, index) in configList" :key="item" class="text item">
	  		时间：{{item.time}}
	  		地点：{{item.address}}
	  		做了啥：{{item.config}}{{item.content}}
	  		进度：{{item.progress}}
	  		<span ><i class="el-icon-circle-cross" @click="delThis(index)"></i></span>
	  	</li>
	  </ul>
	  
	</el-card>
</template>

<script>
	export default{
		name:'list',
		data(){
			return{
				
			}
		},
		props:["configList"],
		watch:{
			configList(curVal,oldVal){
				localStorage.setItem("scheduleList",JSON.stringify(curVal))
			}
		},
		methods:{
			delAll(){
				this.configList.splice(0,this.configList.length)
				// localStorage.removeItem("scheduleList")
			},
			delThis(index){
				this.configList.splice(index,1)
			}
		},
		mounted(){
			// console.log(this.configList)
			// this.configList = localStorage.getItem("scheduleList")
		}
	}
</script>

<style scoped lang="scss">
	.el-icon-delete2{
		display: inline-block;
		float: right;
	}
	.config-list{
		li{
			list-style-type: decimal;
			line-height: 30px;
			span{
				float: right;
			}
		}
	}
</style>