<template>
		<div>
		<el-input v-model="year" placeholder='年份' style="width: 200px;" ></el-input>
		<el-button @click="fn">切换</el-button>
		<h1>港口间设备利用率对比</h1>
		<ve-line :data="chartData" ></ve-line>
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
				year:'2018'
			};
		},
		methods:{
			fn(){
				this.chartDatas();
			},
			chartDatas(){
				var url = this.baseUrl+"/devInfo/intactRatio"
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
			}	
			
			
		},
		mounted:function(){
			this.chartDatas();
		}
		
	}
</script>

<style>

</style>
