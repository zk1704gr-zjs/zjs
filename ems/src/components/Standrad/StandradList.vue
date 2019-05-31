<template>
	<div>
		<h1 style="text-align: center">流程信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='能源类型' v-model='search_energetype'></el-input>
			<el-button @click='search'>查询</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="sid" label="SID" width="80"></el-table-column>
				<el-table-column prop="energetype" label="能源类型" width="120"></el-table-column>
				<el-table-column prop="ratio" label="吨" width="120"></el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_energetype:'',
				list:[]
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyStandradcoal/search"
				// 传递给后端的数据
				var data = {energetype:this.search_energetype};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
		}
		
	}
</script>

<style>

</style>
