<template>
	<div>
		<el-input v-model="year" placeholder='年份' style="width: 200px;" ></el-input>
		<el-button @click="fn">切换</el-button>
		<h1>作业量统计</h1>
		<ve-line :data="chartData" ></ve-line>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-histogram :data="chartData3"></ve-histogram>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				chartData: {
				  columns:[],
				  rows:[]
				},
				chartData2: {
				  columns:[],
				  rows:[]
				},
				chartData3: {
				  columns:[],
				  rows:[]
				},
				year:'2018'
			};
		},
		methods:{
			fn(){
				this.chartDatas();
				this.chartData2s();
				this.chartData3s();
			},
			chartDatas(){
				var url = this.baseUrl+"/jobAmount/flowAmount"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					
					this.chartData = res.data;
				})
			},
			chartData2s(){
				var url = this.baseUrl+"/jobAmount/devTypeAmount"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					
					this.chartData2 = res.data;
				})
			},
			chartData3s(){
				var url = this.baseUrl+"/jobAmount/devAmount"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					
					this.chartData3 = res.data;
				})
			}	
		},
		mounted:function () {
			this.chartDatas();
			this.chartData2s();
			this.chartData3s();
		} 
		
	}
</script>

<style>
h1{
	text-align: center;
}
</style>
