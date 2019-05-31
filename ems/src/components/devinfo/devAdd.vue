<template>
	<div style='text-align: center;'>
		<h1>添加设备信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='设备名' v-model='devname'></el-input> </el-col>
		  <el-col :span="12">  
		  			<el-input style='width:300px;margin-top: 20px;' placeholder='yyyy-mm-dd' v-model='devdate'></el-input>
		  			</el-col>
		</el-row>
		<el-row>
			<el-select :span="18" v-model="compid" >
						  <el-option 
						  :label = "item.compname"
						  :value = "item.compid"
								   v-for="item in list"
								   ></el-option>
			</el-select>
			 <el-select :span="18" v-model="typeid" >
						  <el-option 
						  :label = "item.typename"
						  :value = "item.typeid"
						   v-for="item in lists"
							></el-option>
			</el-select>		 
		</el-row>
		<el-row>		   
		 <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='用户' v-model='devuser'></el-input> </el-col>			
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
				devname:'',
				devdate:'',
				devuser:'',
				typeid:'',
				compid:'',
				list:[],
				lists:[]
				
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/insert"
				// 传递给后端的数据
				var data = {devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/devList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var userid= this.$route.params.row;
			var url = this.baseUrl+"/baseUser/list"
			// 传递给后端的数据
			var data={userid:userid}
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// 接收路由传递的数据
				var obj=res.data; 
				
				// 回显
				this.cname = obj.cname;
				this.username = obj.username;
				this.password = obj.password;
				this.telno = obj.telno;
				this.email = obj.email;
				this.sex = obj.sex;
				this.compid = obj.compid;
				this.userid = obj.userid;
				
			})
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
		
		},
		
		}
		
		
	
</script>

<style>

</style>
