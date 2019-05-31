import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Welcome from '@/components/home/Welcome'
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import DevtypeList from '@/components/baseInfo/DevtypeList'
import DevtypeAdd from '@/components/baseInfo/DevtypeAdd'
import DevtypeEdit from '@/components/baseInfo/DevtypeEdit'
import baseList from '@/components/baseUser/baseList'
import baseAdd from '@/components/baseUser/baseAdd'
import baseEdit from '@/components/baseUser/baseEdit'
import devList from '@/components/devinfo/devList'
import devAdd from '@/components/devinfo/devAdd'
import devEdit from '@/components/devinfo/devEdit'
import usage from '@/components/devinfo/usage'
import intactRatio from '@/components/devinfo/intactRatio'
import amount from '@/components/devinfo/amount'
import consume from '@/components/devinfo/consume'
import cost from '@/components/devinfo/cost'
import baseFlowList from '@/components/baseflow/baseFlowList'
import baseFlowAdd from '@/components/baseflow/baseFlowAdd'
import baseFlowEdit from '@/components/baseflow/baseFlowEdit'
import faultList from '@/components/produceFlaut/faultList'
import faultAdd from '@/components/produceFlaut/faultAdd'
import faultEdit from '@/components/produceFlaut/faultEdit'
import repairList from '@/components/producerepair/repairList'
import repairAdd from '@/components/producerepair/repairAdd'
import repairEdit from '@/components/producerepair/repairEdit'
import reportList from '@/components/produceReport/reportList'
import reportAdd from '@/components/produceReport/reportAdd'
import reportEdit from '@/components/produceReport/reportEdit'
import StandradList from '@/components/Standrad/StandradList'
import Control from '@/components/zk/Control'
import zyltj from '@/components/zyltj'
import energyModel from '@/components/energyModel'
import qyynmx from '@/components/qyynmx/qyynmx'
import Login from '@/components/home/Login'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {path: '/Login',name: 'Login',component: Login},
    {
      path: '/',name: 'Index',component: Index,
			children:[
					{path:'/',component:Welcome},
					{path:'CompList',component:CompList,name:'CompList'},
					{path:'CompAdd',component:CompAdd},
					{path:'CompEdit',component:CompEdit,name:'CompEdit'},
					{path:'baseList',component:baseList,name:'baseList'},
					{path:'baseAdd',component:baseAdd},
					{path:'baseEdit',component:baseEdit,name:'baseEdit'},
					{path:'devList',component:devList,name:'devList'},
					{path:'devAdd',component:devAdd},
					{path:'devEdit',component:devEdit,name:'devEdit'},
					{path:'usage',component:usage,name:'usage'},
					{path:'intactRatio',component:intactRatio,name:'intactRatio'},
					{path:'amount',component:amount,name:'amount'},
					{path:'consume',component:consume,name:'consume'},
					{path:'cost',component:cost,name:'cost'},
					{path:'baseFlowList',component:baseFlowList,name:'baseFlowList'},
					{path:'baseFlowAdd',component:baseFlowAdd},
					{path:'baseFlowEdit',component:baseFlowEdit,name:'baseFlowEdit'},
					{path:'faultList',component:faultList,name:'faultList'},
					{path:'faultAdd',component:faultAdd},
					{path:'faultEdit',component:faultEdit,name:'faultEdit'},
					{path:'repairList',component:repairList,name:'repairList'},
					{path:'repairAdd',component:repairAdd},
					{path:'repairEdit',component:repairEdit,name:'repairEdit'},
					{path:'reportList',component:reportList,name:'reportList'},
					{path:'reportAdd',component:reportAdd},
					{path:'reportEdit',component:reportEdit,name:'reportEdit'},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
					{path:'StandradList',component:StandradList,name:'StandradList'},
					{path:'Control',component:Control,name:'Control'},
					{path:'zyltj',component:zyltj,name:'zyltj'},
					{path:'energyModel',component:energyModel,name:'energyModel'},
					{path:'qyynmx',component:qyynmx,name:'qyynmx'}
			]
    }
		
		
  ]
})
