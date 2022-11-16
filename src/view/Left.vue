<template>
	<el-scrollbar height="100vh">
		<div class="page">
			<el-input class="search" v-model="search" placeholder="搜索组件" :suffix-icon="Search" />
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
		</div>
	</el-scrollbar>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Search} from '@element-plus/icons-vue';
const activeNames = ref(['1', '2', '3', '4', '5']);
const search = ref('');

</script>

<style scoped lang="less">
.page {
	width: @_width;
	height: 100%;
	background: @_background;
	.search {
		margin: 12px 16px;
	}
	/deep/.el-input {
		width: calc(100% - 32px);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
		grid-auto-flow: row dense;
		border: 1px solid #eaeefb;
		border-bottom: 0;
		> li {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			text-align: center;
			height: 114px;
			cursor: pointer;
			color: #666;
			border-right: 1px solid #eaeaea;
			border-bottom: 1px solid #eaeaea;
			margin-bottom: -1px;
			margin-right: -1px;
			padding: 14px;
			transition: all 0.5s;
			&:hover {
				box-shadow: 0 6px 16px 0 rgb(0 0 0 / 15%);
				border-color: transparent;
			}
		}
	}
	/deep/.el-collapse {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	/deep/.el-collapse-item__header {
		padding-left: 16px;
	}
	/deep/.el-collapse-item__content {
		padding-bottom: 0px;
	}
}
</style>
