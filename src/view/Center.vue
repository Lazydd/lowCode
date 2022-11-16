<template>
    <div class="container">
        <main>
            <el-scrollbar height="100%"> </el-scrollbar>
        </main>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.container {
    position: relative;
    display: flex;
    flex: 1;
    height: 100vh;
    background: #f0f2f5;
    main {
        position: absolute;
        width: auto;
        top: 16px;
        right: 16px;
        left: 16px;
        bottom: 16px;
        border: 2px solid #197aff;
        overflow: hidden;
    }
}
</style>
