<template>
    <!-- <header>低代码引擎</header> -->
    <div class="home">
        <Left />
        <Center />
        <Right />
    </div>
</template>

<script setup lang="ts">
import Left from "./Left.vue";
import Center from "./Center.vue";
import Right from "./Right.vue";
</script>

<style scoped lang="less">
header {
    height: 48px;
    font-size: 30px;
    margin-bottom: 2px;
}
.home {
    display: flex;
    align-items: center;
}
</style>
