<template>
	<div>
		<el-input v-model="year" placeholder='年份' style="width: 200px;" ></el-input>
		<el-button @click="fn">切换</el-button>
		<h1>作业量统计</h1>
		<ve-line :data="chartData" ></ve-line>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-radar :data="chartData3"></ve-radar>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-funnel :data="chartData4"></ve-funnel>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-ring :data="chartData5"></ve-ring>
		<h1>企业作业量对比图(单位：万吨)</h1>
		<ve-bar :data="chartData6"></ve-bar>
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
				chartData4: {
				  columns:[],
				  rows:[]
				},
				chartData5: {
				  columns:[],
				  rows:[]
				},
				chartData6: {
				  columns:[],
				  rows:[]
				},
				year:'2018'
			};
		},
		methods:{
			fn(){
				console.log(this.year);
				this.chartDatas();
				this.chartData2s();
				this.chartData3s();
				this.chartData4s();
				this.chartData5s();
				this.chartData6s();
			},
			chartDatas(){
				var url = this.baseUrl+"/energyConsume/flowConsume"
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
				var url = this.baseUrl+"/energyConsume/devTypeConsume"
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
				var url = this.baseUrl+"/energyConsume/devConsume"
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
			},
			chartData4s(){
				var url = this.baseUrl+"/energyConsume/electricConsume"
				// 传递给后端的数据
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.chartData4 = res.data;
				})
			},
			chartData5s(){
					var url = this.baseUrl+"/energyConsume/waterConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.chartData5 = res.data;
					})
				},
				chartData6s(){
						var url = this.baseUrl+"/energyConsume/oilConsume"
						// 传递给后端的数据
						var data = {year:this.year};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// res是后端的响应
							
							this.chartData6 = res.data;
						})
					},	
		},
		mounted:function () {
			this.chartDatas();
			this.chartData2s();
			this.chartData3s();
			this.chartData4s();
			this.chartData5s();
			this.chartData6s();
		} 
		
	}
	
</script>

<style>
h1{
	text-align: center;
}
</style>
