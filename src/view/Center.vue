<template>
    <div class="container">
        <main>
            {{ list }}
            <el-scrollbar height="100%">
                <draggable
                    animation="300"
                    v-model="list"
                    group="home"
                    @start="drag = true"
                    @end="drag = false"
                    type="transition"
                    :name="!drag ? 'flip-list' : null"
                    item-key="id"
                >
                    <template #item="{ element }">
                        <li>{{ element.name }}</li>
                    </template>
                </draggable>
            </el-scrollbar>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import draggable from "vuedraggable";

interface ListItem {
    id: number;
    name: string;
}
const drag = ref(false);
const list = ref<ListItem[]>([
    { id: 7, name: 7 },
    { id: 8, name: 8 },
]);
</script>

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
        li {
            padding: 15px;
            background: #197aff;
            margin-bottom: 10px;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    }
}
</style>
