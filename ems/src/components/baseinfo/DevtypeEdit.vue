<template>
	<div style='text-align: center;'>
		<h1>修改设备类别信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='类型ID' v-model='typeid'></el-input> </el-col>
		 <el-select v-model="typeid"  >
		 	<el-option
		 	v-for="item in list"
		 	:label = "item.typename"
		 	:value = "item.typeid"
		 	></el-option>
		 </el-select>
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
				typeid:'',
				list:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/update"
				// 传递给后端的数据
				var data = {userid:this.userid,cname:this.cname,username:this.username,password:this.password,telno:this.telno,email:this.email,
				sex:this.sex,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/baseList'});
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
			this.typeid = row.typeid;
			var url = this.baseUrl+"/baseDevtype/list"
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
