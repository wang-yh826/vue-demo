<template>
    <div>
        <Button @click="logout">退出登录</Button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        //退出登录
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>

</style>