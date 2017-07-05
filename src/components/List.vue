<template>
	<el-card class="box-card">
	  <div slot="header" class="clearfix">
	    <span style="line-height: 36px;">Did that today</span>

	    <i class="el-icon-delete2"></i>

	  </div>
	  <div v-for="o in 4" :key="o" class="text item">
	    
	  </div>
	</el-card>
</template>

<script>
	export default{
		name:'list',
		data(){
			return{

			}
		}
	}
</script>

<style>
	.el-icon-delete2{
		display: inline-block;
		float: right;

	}
</style>