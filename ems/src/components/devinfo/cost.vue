<template>
	<div>
		<h1 style="text-align: center">成本核算信息</h1>
		<el-input v-model="year" placeholder='年份' style="width: 200px;" ></el-input>
		<el-button @click="fn">切换</el-button>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="用户ID" width="80"></el-table-column>
				<el-table-column prop="amount" label="姓名" width="120"></el-table-column>
				<el-table-column prop="consume" label="用户名" width="120"></el-table-column>
				<el-table-column prop="cost" label="密码" width="120"></el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				
				list:[],
				year:'2018'
			};
		},
		methods:{
			fn(){
				this.mounted();
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/devInfo/cost"
			// 传递给后端的数据
			var data = {year:this.year};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.list = res.data;
			})
		}
		
	}
</script>

<style>

</style>
