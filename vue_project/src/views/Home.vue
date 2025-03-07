<template>

  <div class="card" style="margin-bottom: 5px">
    <el-input style="width: 240px" v-model="data.name" placeholder="请输入名称查询" :prefix-icon="Search"></el-input>
    <el-button type="primary" style="margin-left: 5px">查 询</el-button>
  </div>

  <div class="card" style="margin-bottom: 5px">
    <el-button type="danger">删除</el-button>
    <el-button type="primary">新增</el-button>
    <el-button type="info">导出</el-button>
  </div>
  
  <div class="card" style="margin-bottom: 5px">
    <el-table :data="data.tableData" style="width: 100%" :header-cell-style="{color: '#333',fontSize: '17px', backgroundColor: '#eaf4ff'}">
      <el-table-column prop="name" label="名字" width="180" />
      <el-table-column prop="phone" label="电话"  />
      <el-table-column prop="address" label="地址" width="180"/>
  </el-table>
  </div>

  <div class="card" style="margin-bottom: 5px">
    <el-pagination v-model:current-page="data.pageNum" :page-size="data.pageSize" :total="data.pageTotal"/>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue';
import {reactive} from 'vue'

const data = reactive({
  name: null,
  pageNum: 1,
  pageSize: 5,
  pageTotal: 6,
  tableData: [
    {name: '曾嘉伟', phone: '15159110378', address: '算盘嵊'},
    {name: '郑思杰', phone: '18250692004', address: '海湾'},
    {name: '刘贤庆', phone: '15728285860', address: '悠溪背'},
    {name: '俞华文', phone: '13899198592', address: '东桥'},
    {name: '杜晓飞', phone: '19906988606', address: '城脑上'},
    {name: '付建明', phone: '18960526389', address: '悠溪背'},
    {name: '杜俊豪', phone: '187502845558', address: '城脑上'},
  ]
})
</script>
