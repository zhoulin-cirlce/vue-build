<template>
	<section>
	<!--工具条-->
	    <flex-bar>
        <flex-bar-item title="+" @click.native="handleAdd" mycls="el-icon-plus"></flex-bar-item>
        <flex-bar-item title="X" click="click" mycls="el-icon-delete"></flex-bar-item>
        <flex-bar-item title="c" click="click" mycls="el-icon-close"></flex-bar-item>
        </flex-bar>
    <!--工具条/-->    
       <main-content> 
        <h-nav :title="title"></h-nav>
		<div class="message-form">
		<!-- 搜索 -->
		<div class="message-input" :inline="true" :model="filters">
		<input type="search" autocomplete="off" placeholder="多个搜索条件用空格隔开" 
		v-model="filters.name" @keyup.enter="getUsers" class="input-search"><i class="icon-search"></i>
		</div>
		</div>

     <div class="messages-box">
     <div class="wrapper">
     <!--列表-->
    <el-table :data="archiveList" stripe highlight-current-row v-loading="listLoading">
			<el-table-column prop="name" label="姓名" sortable>
			</el-table-column>
			<el-table-column prop="staffId" label="工号" sortable>
			</el-table-column>
			<el-table-column prop="department" label="部门" sortable>
			</el-table-column>
			<el-table-column prop="position" label="职位"  sortable>
			</el-table-column>
			<el-table-column prop="education" label="学历"  sortable>
			</el-table-column>
			<el-table-column prop="sex" label="性别"  sortable>
			</el-table-column>
			<el-table-column prop="mobile" label="电话"  sortable>
			</el-table-column>
			<el-table-column prop="state" label="状态"  sortable>
			</el-table-column>
			<el-table-column prop="entryTime" label="入职时间"  sortable>
			</el-table-column>
			<el-table-column prop="positiveTime" label="转正时间"  sortable>
			</el-table-column>
    </el-table>

		<!--工具条-->
		<!-- <el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col> -->

		<!--编辑界面-->
		<!-- <el-dialog title="编辑" v-model="editFormVisible" :modal-append-to-body="false":close-on-click-modal="false" :modal="false" size="full">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog> -->

		<!--新增界面-->
		<!-- <el-dialog title="新增" v-model="addFormVisible" :modal-append-to-body="false":close-on-click-modal="false" :modal="false" size="full">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="addForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="addForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog> -->
    </div></div>
	</main-content>	
	</section>
</template>

<script>
	import FlexBar from '../../common/FlexBar'
	import FlexBarItem from '../../common/FlexBarItem'
	import MainContent from '../../common/MainContent'
	import HNav from '../../common/HNav'
	import NProgress from 'nprogress'

	export default {
		 ready () {
		    let me = this;
		    me.initData();
  		},
		data() {
			return {
				filters: {
					name: ''
				},
				burgerLeft:true,
				title:"档案管理",
				users:[],
		        archiveList: [{
		        "archiveId": 1,
		        "name": "于琳琳",
		        "staffId": "SE10200",
		        "department": "UI",
		        "position": "设计师",
		        "education": "本科",
		        "sex": "2",
		        "mobile": "18665212585",
		        "email": "yulinlin@163.com",
		        "state": "在职",
		        "entryTime": "2014-07-15",
		        "positiveTime": "2014-10-15",
		        "address": "深圳南山",
		        "identification": "411521111112236984",
		        "providentFun": "945111745",
		        "household": "深户",
		        "emergencyCaller": "于爸",
		        "emergencyMobile": "18666666666",
		        "creatorId": 10200,
		        "creatorName": "HR-coco",
		        "createTime": "2017-03-07",
		        "lastModifierId": null,
		        "lastModifyTime": null,
		        "jobExperienceList": null,
		        "educationList": null
		      }
		],
      
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}

			}
		},
		methods: {
			initData : function(){
		      let me = this;
		      //me.getPageArchiveList(); 
		    },
		    getPageArchiveList:function(){
		      console.log("一：");
		      let me = this;
		      let searchCondition={
		      	   "searchCondition":"",
				    "pageSize":20,
				    "currentPage":1
				};
		      me.$http.post(HB.base+'/archive/getPageArchiveList',searchCondition).then(({data: {status, message, data }}) => {
		       if(HB.SUCCESS == status){
		          me.archiveList = data.list;
		       }else{
		         this.$message(message);
		       }
		     });
		    },
		},
		mounted() {
			this.getPageArchiveList();
		},
	  components: {
	    FlexBar,
	    FlexBarItem,
	    MainContent,
	    HNav
	  }
	}

</script>

<style scoped>
.usetable{}
.el-table{ border-right: 0 }
.toolbar {
    margin: 10px 0px 0 0;
}
.messages-box {
	position: relative;
	overflow: hidden;
	margin: 60px 20px 0 0;
	width: 100%;
	height: calc(100% - 115px);
	-lh-property: 0;
}
.messages-box .wrapper {
	position: absolute;
	top: 0;
	left: 0;
	overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
	height: 100%;
	word-wrap: break-word;
	-webkit-overflow-scrolling: touch;
}
.message-form{

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 8px 20px 0 20px;
    width: 100%;
    min-height: 55px;
    border-top: 1px solid;
    background: #fcfcfc;
    border-top-color: #e7e7e7;
}
.message-input {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    border-radius: 5px;

}
.input-search{
    font-size: 14px;
    display: block;
    margin: 0;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 40px;
    line-height: 16px;
    resize: none;
    border: 0;
    width:98%;
}

.icon-search {
	position: absolute;
    top: 5px;
    left: 10px;
    /*background-image: url('./../../../../staic/images/search.png');
    background-repeat: no-repeat;*/
    background-position: 0px 0px;
    width: 26px;
    height: 26px;
}
</style>