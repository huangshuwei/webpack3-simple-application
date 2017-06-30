<template>
    <div>
        <!--左侧菜单-->
        <left-bar class="left-bar"></left-bar>

        <!-- 内容部分 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import LeftBar from './LeftBar.vue'

    export default{
        components: {LeftBar},
        data(){
            return {
                msg:"app test"
            }
        },

    }
</script>