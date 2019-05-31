<template>
	<div style='text-align: center;'>
		<h1>修改设备信息</h1>
		<el-row>
		  <el-select :span="18" v-model="typeid" >
		  			  <el-option 
		  			  :label = "item.typename"
		  			  :value = "item.typeid"
		  			   v-for="item in lists"
						></el-option>
		  </el-select>		 
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='日期' v-model='devdate'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='用户' v-model='devuser'></el-input> </el-col>
		</el-row>
		<el-row>
		 <el-select :span="18" v-model="compid" >
		 		<el-option 
		 			 :label = "item.compname"
		 			 :value = "item.compid"
		 			v-for="item in list"
		 			></el-option>
		 </el-select>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='' :disabled="true"  v-model='devid'></el-input> </el-col>
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
				devname:'',
				typeid:'',
				devdate:'',
				devuser:'',
				compid:'',
				devid:'',
				list:[],
				lists:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,compid:this.compid,devid:this.devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/devList'});
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
			this.devname = row.devname;
			this.typeid = row.typeid;
			this.devdate = row.devdate;
			this.devuser = row.devuser;
			this.compid = row.compid;
			this.devid = row.devid;
		
		
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
			
			var url = this.baseUrl+"/baseDevtype/list"
			// 传递给后端的数	var data={userid:userid}
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 接收路由传递的数据
			
				this.lists=res.data;
			})
		}
		
	}
</script>

<style>

</style>
