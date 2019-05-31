<template>
	<div>
		<h1 style="text-align: center">设备类别</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='类别ID' v-model='search_typeid'></el-input>
			<el-input style='width:160px' placeholder='设备名' v-model='search_devname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add()'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devid" label="设备ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备姓名" width="120"></el-table-column>
				<el-table-column prop="typeid" label="类型ID" width="120"></el-table-column>
				<el-table-column prop="devdate" label="日期" width="120"></el-table-column>
				<el-table-column prop="devuser" label="用户" width="180"></el-table-column>
				<el-table-column prop="compid" label="所属公司" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_typeid:'',
				search_devname:'',
				list:[]
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'devEdit',params:{row:row}})
			},
			del(devid){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/delete"
				// 传递给后端的数据
				var data = {devid:devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/devAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/search"
				// 传递给后端的数据
				var data = {typeid:this.search_typeid,devname:this.search_devname};
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
