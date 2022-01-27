<script lang="ts">
export default {
  name: "reEditor"
};
</script>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, unref } from "vue";
import WangEditor from "wangeditor";

// eslint-disable-next-line no-undef
const editor = ref(null);
const html:any = ref(null);
let instance: WangEditor;

onMounted(() => {
  instance = new WangEditor(unref(editor));
  instance.config.zIndex = 500
  console.log(instance.config,'editor.config')
  instance.config.focus = false
//   Object.assign(instance.config, {
//     onchange() {
//         console.log(instance.txt.text(),'文本');
//         console.log( instance.txt.html(),'html');
        
//       html.value = instance.txt.html();
//     }
//   });
  instance.create();
});

onBeforeUnmount(() => {
  instance.destroy();
});
</script>

<template>
<div>
    <div class="main-content">
    <div ref="editor"></div>
    <div :innerHTML="html"></div>
  </div>
</div>
  
</template>

<style  scoped>
.main-content {
  margin: 40px;
  text-align:left;
  /* width: 200px; */
}
/* 
:deep(.w-e-text-container) {
  z-index: 99 !important;
}

:deep(.w-e-toolbar) {
  z-index: 999 !important;
  position: static;
} */
</style>
