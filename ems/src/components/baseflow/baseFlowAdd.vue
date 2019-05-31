<template>
	<div style='text-align: center;'>
		<h1>添加流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='流程名' v-model='flowname'></el-input> </el-col>
		   <el-select placeholder="斗轮机" v-model="devid"  >
		   	<el-option
		   	v-for="item in list"
		   	:label = "item.devname"
		   	:value = "item.devid"
		   	></el-option>
		   </el-select>
		</el-row>
		<el-row>
		    <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='装船机ID' v-model='zcjid'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='皮带机ID' v-model='pdjid'></el-input> </el-col>	  
		</el-row>
		<el-row>
		  <el-select  v-model="compid"  >
		  	<el-option
		  	v-for="item in list"
		  	:label = "item.compname"
		  	:value = "item.compid"
		  	></el-option>
		  </el-select>
		  <el-col :span="12"> <span></span> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				flowname:'',
				compid:'',
				zcjid:'',
				dljid:'',
				pdjid:'',
				list:[],
				lists:[],
				devid:''

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/insert"
				// 传递给后端的数据
				var data = {flowname:this.flowname,dljid:this.dljid,compid:this.compid,pdjid:this.pdjid,zcjid:this.zcjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseFlowList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数	var data={userid:userid}
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 接收路由传递的数据
			
				this.list=res.data;
			})
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数	var data={userid:userid}
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 接收路由传递的数据
			
				this.list=res.data;
			})
		}
		
	}
</script>

<style>

</style>
