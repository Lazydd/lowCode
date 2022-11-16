<template>
    <el-scrollbar height="100vh">
        <div class="page">
            <el-tabs
                v-model="activeName"
                class="demo-tabs"
                @tab-click="handleClick"
            >
                <el-tab-pane label="属性" name="first">
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="Consistency" name="1">
                            <div class="grid">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Consistency" name="2">
                            <div class="grid">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Consistency" name="3">
                            <div class="grid">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Consistency" name="4">
                            <div class="grid">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Consistency" name="5">
                            <div class="grid">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="样式" name="second">样式</el-tab-pane>
                <el-tab-pane label="事件" name="third">事件</el-tab-pane>
                <el-tab-pane label="高级" name="fourth">高级</el-tab-pane>
            </el-tabs>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
const activeNames = ref(["1", "2", "3", "4", "5"]);
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
};
</script>

<style scoped lang="less">
.page {
    width: @_width;
    /deep/.el-tabs__item {
        width: 75px;
        text-align: center;
        padding: 0;
    }
    /deep/.el-collapse-item__header {
        padding: 0 12px;
        background-color: #f0f2f5;
    }
    /deep/.el-collapse-item__content {
        padding-bottom: 0px;
    }
}
</style>
