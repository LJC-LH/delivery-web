<template>
    <div class="loginBody">
        <div class="loginDiv">
            <div class="login-content">
                <h1 class="login-title">快递配送系统</h1>
                <el-form :model="loginForm" label-width="100px"
                         :rules="rules" ref="loginForm">
                    <el-form-item label="账号" prop="no">
                        <el-input style="width: 200px" type="text" v-model="loginForm.userName"
                                  autocomplete="off" size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input style="width: 200px" type="password" v-model="loginForm.password"
                                  show-password autocomplete="off" size="small" @keyup.enter.native="confirm"></el-input>
                    </el-form-item>
                    <el-form-item style="display:flex">
                        <el-button type="primary" @click="confirm" :disabled="confirm_disabled">登 录</el-button>
                        <el-button type="info" @click="reset" :disabled="confirm_disabled">重 置</el-button>      
                    </el-form-item>
                </el-form>
                <p class="register" @click="toRegister">用户注册&nbsp;<i class="el-icon-position"></i></p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Login",
        data(){
            return{
                confirm_disabled:false,
                loginForm:{
                    userName:'admin',
                    password:'111'
                },
                rules:{
                    userName: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输密码', trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
            async confirm(){
                let result = await this.$API.loginAPI.login(this.loginForm)
                console.log(result)
                if(result.data.code == '200'){
                    sessionStorage.setItem('info',JSON.stringify(result.data.data))
                    this.$router.push('/index');
                }else{
                    this.$message({
                        type:'warning',
                        message:'账号或密码错误，请重试！'
                    })
                }
                /*let jsonobj = {
                    userName: this.loginForm.userName,
                    password: this.loginForm.password,
                    realName: '刘建成',
                    sex:1,
                    phone:'1234567890',
                    roleId:0
                }
                sessionStorage.setItem('info',JSON.stringify(jsonobj))
                this.$router.replace('/index');*/
            },
            async reset(){
                this.loginForm={
                    userName:'',
                    password:''
                }
                // let result = await this.$API.loginAPI.test()
                // console.log(result)
            },
            toRegister(){
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped>
    .loginBody {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #B3C0D1;
    }
    .loginDiv {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -250px;
        width: 450px;
        height: 330px;
        background: #fff;
        border-radius: 5%;

    }
    .login-title {
        margin: 20px 0;
        text-align: center;
    }
    .login-content {
        width: 400px;
        height: 250px;
        position: absolute;
        top: 25px;
        left: 25px;
    }
    .register{
        text-align: right;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        color:#409EFF;
    }
</style>