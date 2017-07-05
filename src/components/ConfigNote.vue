<template>
	<div id="ConfigNote">
		<el-collapse accordion>
		  <el-collapse-item>
		    <template slot="title">
		      项目配置  <i class="header-icon el-icon-information"></i>
		    </template>
		    <el-input
			  type="textarea"
			  :autosize="{ minRows: 2, maxRows: 3}"
			  placeholder="请输入配置名称，enter键保存"
			  @keyup.enter.native="saveConfig"
			  v-model="textarea">
			</el-input>
		  </el-collapse-item>

		  <el-collapse-item>
		    <template slot="title">
		      使用说明 Instructions  <i class="el-icon-edit"></i>
		    </template>
		    <div>
		    	使用说明 Instructions
		    </div>
		  </el-collapse-item>

		  <el-collapse-item title="Efficiency">
		    Efficiency
		  </el-collapse-item>

		  <el-collapse-item title="Controllability">
		    Controllability
		  </el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default{
		name:'ConfigNote',
		data(){
			return{
				textarea:''
			}
		},
		methods:{
			saveConfig(){
				console.log(this.textarea);
			}
		}
	}
</script>

<style lang="sass">
	
</style>