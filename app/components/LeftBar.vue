<template>
    <div>
        <el-menu router :default-openeds="openeds" theme="dark" class="left-bar-menu" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-document"></i>导航一</template>
                <el-menu-item index="/home">实例介绍</el-menu-item>
                <el-menu-item index="/test">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-setting"></i>导航二</template>
                <el-menu-item index="/home">选项1</el-menu-item>
                <el-menu-item index="/test">选项2</el-menu-item>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    export default{
        name:'left-bar',

        data(){
            return {
                openeds:["1","2"]
            }
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>