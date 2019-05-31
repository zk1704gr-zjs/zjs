<template>
	<div style='text-align: center;'>
		<h1>修改流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='流程名' v-model='flowname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='装船机ID' v-model='zcjid'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='斗轮机ID' v-model='dljid'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='皮带机ID' v-model='pdjid'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入地址'  :disabled="true" v-model='compid'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='ID'  :disabled="true" v-model='flowid'></el-input> </el-col>
		 
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				flowname:'',
				zcjid:'',
				dljid:'',
				pdjid:'',
				compid:'',
				flowid:''
				
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/update"
				// 传递给后端的数据
				var data = {compid:this.compid,flowname:this.flowname,zcjid:this.zcjid,dljid:this.dljid,
				pdjid:this.pdjid,flowid:this.flowid};
				debugger
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/baseFlowList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.compid = row.compid;
			this.flowname = row.flowname;
			this.zcjid = row.zcjid;
			this.dljid = row.dljid;
			this.pdjid = row.pdjid;
			this.flowid = row.flowid;
		}
		
	}
</script>

<style>

</style>
