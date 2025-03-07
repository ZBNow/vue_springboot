<template>
    <div style="height: 100vh; display: flex; flex-direction: column;">
        <!-- 头部区域 -->
        <div style="height: 60px; display: flex;">
            <div style="display: flex; padding: 20px; width: 240px; align-items: center; background-color:#3c3c3c ;">
                <img src="@/assets/img/logo.png" style="width: 40px; height: 40px; border-radius: 50%;" />
                <span style="font-size: 20px;color:#fff; font-weight: bold; margin-left: 5px">后台管理系统</span>
            </div>

            <div style="display: flex; align-items:center; font-size:20px; font-weight:500; border-bottom:1px solid #b1adad;">
                <span style="padding-left: 10px">首页/数据分析</span>
            </div>

            <div style="flex: 1; border-bottom: 1px solid #b1adad;"></div>
            <div style="width: fit-content; display: flex; align-items: center; border-bottom: 1px solid #b1adad; padding-right: 20px">
                <el-dropdown>
                    <div style="display: flex; align-items: center;">
                        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="width: 40px; border-radius: 50%;"/>
                        <span style="margin-left: 5px;">管理员</span>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人信息</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>退出登入</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>

                </el-dropdown>
                
            </div>
        </div>
        <!-- 主体内容区域 -->
        <div style="display: flex;">
            <!-- 侧边菜单 -->
            <div style="width: 240px; background-color: #3c3c3c;">
                <el-menu router :default-openeds="['1']" style="min-height: calc(100vh - 60px);">
                    
                    <el-menu-item index="/manager/home">
                        <el-icon><House /></el-icon>
                        <span>首页</span>
                    </el-menu-item>

                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><Location /></el-icon>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item index="/manager/about">关于页面</el-menu-item>
                        <el-menu-item index="/manager/404">数据报表</el-menu-item>
                    </el-sub-menu>

                </el-menu>
            </div>

            <!-- 数据渲染区域 -->
            <div style="flex: 1; width: 0; padding:10px; background-color: #f2f4ff;">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { House, Location } from '@element-plus/icons-vue'
</script>
<style>
.el-menu{
    background-color: #3c3c3c;
    border: none;
}

.el-sub-menu__title {
     color: #ddd;
     height: 50px;

}
.el-sub-menu__title:hover {
    background-color:  #3c3c3c; /* 透明背景 */
    color: #ddd !important; /* 保持原色 */
}
.el-menu-item {
    height: 50px;
    color: #ddd;
 }
.el-menu .is-active{
    background-color: #537bee;
    color: #fff;
}

.el-menu-item:not(.is-active):hover {
    background-color: #7a9fff;
    color: #333;
}
.el-tooltip__trigger {
    outline: none; 
}
.el-dropdown {
    cursor: pointer;
}
.el-menu--inline .el-menu-item {
    padding-left: 48px !important;
}
</style>
