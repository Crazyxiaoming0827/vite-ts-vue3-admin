<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="界面" name="first">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="组件名" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="编码" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="描述" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>

        <!-- 来源 -->
        <div>
          <el-form-item label="数据源" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>

          <el-form-item label="数据库" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>

          <el-form-item label="数据表" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
          <!-- 高级设置 -->
          <div>
            <el-form-item label="时间类型" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>

            <el-form-item label="时间字段" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>

            <el-form-item label="时间格式" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
          </div>
        </div>

        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm(ruleFormRef)" -->
          <el-button type="primary">Submit</el-button>
          <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
          <el-button>Reset</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref, reactive,toRefs } from "vue";
// More info see https://github.com/element-plus/element-plus/blob/dev/docs/examples/form/utils.ts
// import { resetForm, submitForm } from 'element-plus/docs/examples/form/utils.ts'
import type { ElForm } from "element-plus";

const ruleFormRef = ref<InstanceType<typeof ElForm>>();

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the age"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"));
    } else {
      if (value < 18) {
        callback(new Error("Age must be greater than 18"));
      } else {
        callback();
      }
    }
  }, 1000);
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: checkAge, trigger: "blur" }],
});

const activeName = ref("first");

const handleClick = (tab: string, event: Event): any => {
  console.log(tab, event);
};

const formObj = reactive({
  module: "develop",
  name: "task.doris.ImportFromExternal",
  comment: "外表导入",
  type: "component",
  schemas: [
    {
      name: "main",
      comment: "外表导入",
      type: "object",
      attrs: [
        {
          name: "func",
          comment: "组件名称",
          type: "string",
          value: "task.doris.ImportFromExternal",
        },
        {
          name: "mode",
          comment: "模式",
          type: "enum",
          params: {
            data: ["normal"],
          },
          value: "normal",
        },
        {
          name: "comment",
          comment: "描述",
          type: "text",
        },
        {
          name: "src",
          comment: "来源",
          type: "datasource",
        },
        {
          name: "src.timeStrategy",
          comment: "来源表时间策略",
          type: "TimeStrategy",
        }
      ],
    },
  ],
}) ; 
 const {schemas} =   toRefs(formObj)
 


</script>