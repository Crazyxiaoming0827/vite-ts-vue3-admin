<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    active-text-color="#fff"
    text-color="#979797"
    background-color="#363a3e"
    :collapse="isCollapse"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="logo-nav" style="padding: 10px;color:#fff;display:flex;align-items:center;justify-content:center;">
      <img :src="logo" alt="logo" style="width:43px" />
    </div>

    <el-menu-item index="/datasource">
      <el-icon><setting /></el-icon>
      <template #title>表格</template>
    </el-menu-item>

    <el-menu-item index="/dataTable">
      <el-icon><setting /></el-icon>
      <template #title>文本编辑器</template>
    </el-menu-item>

    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>数据开发</span>
      </template>
      <!-- <el-menu-item-group> -->
      <el-menu-item index="/data/modulemange">组件管理</el-menu-item>
      <el-menu-item index="/data/pmmange">项目管理</el-menu-item>
      <el-menu-item index="/data/flowmange">项目流程</el-menu-item>
      <!-- </el-menu-item-group> -->
    </el-sub-menu>
    <!-- <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item> -->
    <div
      class="collapse-nav"
      @click="isCollapse = !isCollapse"
      style="font-size: 20px"
    >
      <el-icon v-if="!isCollapse" size="30px" color="#fff"
        ><arrow-left-bold
      /></el-icon>
      <el-icon v-if="isCollapse" size="30px" color="#fff"
        ><arrow-right-bold
      /></el-icon>
    </div>
  </el-menu>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  ArrowLeftBold,
  ArrowRightBold,
} from "@element-plus/icons-vue";
import logo from "assets/logo.png";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.collapse-nav {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --antd-wave-shadow-color: #1890ff;
  font-size: 12px !important;
  font-weight: 100;
  font-family: "microsoft yahei", sans-serif !important;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  user-select: none;
  box-sizing: border-box;
  position: absolute;
  height: 40px;
  line-height: 40px;
  width: 180px;
  bottom: 0;
  left: 0;
  cursor: pointer;
  padding: 0 10px;
  z-index: 11;
  transition: width 0.2s linear;
  background: #303437;
  color: #fff;
  width: 100%;
}
</style>