<template>
  <el-config-provider :locale="locale">
    <div id="nav">
      <!-- 你好 -->
      <menuListList></menuListList>
      <div style="flex: 1;">
        <router-view />
      </div>
    </div>
    <!-- <router-view /> -->
    <!-- <div hidden>我知道你肯定会修改这里的^.^</div> -->
  </el-config-provider>
</template>

<script setup lang="ts">
import menuListList from "@/components/menuList.vue";
import { computed } from "vue";
import { i18n } from "./i18n";
import { version, buildTime } from "../build/info.json";

console.log(
  `%c Release Build Info 
%cVersion			v${version}
BuildTime		${buildTime}`,
  "background:#000;color:#FFF;font-weight:bold;",
  "background:#FFF;color:#000;"
);

let locale = computed(() => (i18n.global.messages as any)![i18n.global.locale]);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  /* padding: 30px; */
  display: flex;
  height: 100%;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
