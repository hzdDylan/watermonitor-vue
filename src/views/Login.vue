<template>
    <div class=main-container>
        <div class="container" id="container">
            <!--右侧注册界面-->
            <div class="form-container sign-up-container">
                <form action='#'>
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-qq fa-lg"></i></a>
                        <a href="#" class="social"><i class="fab fa-github fa-lg"></i></a>
                        <a href="#" class="social"><i class="fab fa-battle-net fa-lg"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" value="admin" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="button">Sign Up</button>
                </form>
            </div>
            <!--左侧登录界面-->
            <div class="form-container sign-in-container">
                <form action='#'>
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-qq fa-lg"></i></a>
                        <a href="#" class="social"><i class="fab fa-github fa-lg"></i></a>
                        <a href="#" class="social"><i class="fab fa-battle-net fa-lg"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type='email' placeholder="Email" />
                    <input type='password' placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button type='button'>Sign In</button>
                </form>
            </div>
            <!--左右两侧的介绍和遮蔽界面-->
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Hello,Friend!</h1>
                        <p>Let's start the journey from entering infomation to creating account</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        <p>Sign in the journey with us</p>
                        <p id="overlay-right-register">or sign up for an account</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    mounted() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
            console.warn("right-panel-active")
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
            console.warn("right-panel-remove")
        });
    }
}
</script>

<style scoped>
@import url("https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.15.2/css/all.min.css");
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
    box-sizing:border-box;
}

.main-container {
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin: -8px -8px;
}

.main-container h1 {
    font-weight: bold;
    margin: 0;
}

.main-container p {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

.main-container span {
    font-size: 15px;
}

.main-container a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

.main-container button {
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1.2px;
    /* 控制大小写 */
    text-transform: uppercase;
    /* 为所有transform转换指定过渡 */
    transition: transform 80ms ease-in;
}

.main-container  button:active {
    /* 元素缩放为缩小0.95倍 */
    transform: scale(0.95);
    -webkit-transform: scale(0.95);
}

/* .main-container button:focus {
    outline: none;
} */

.main-container button.ghost {
    background-color: transparent;
    border-color: #FFF;
}

.main-container form {
    background-color: #FFF;
    display: flex;
    /* 垂直布局 */
    flex-direction: column;
    /* 双center保持中心位置 */
    align-items: center;
    justify-content: center; 
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

.main-container input {
    background-color: #EEE;
    /* 清除输入默认边框 */
    border: none;
    /* 输入框内部样式 */
    padding: 12px 15px;
    /* 两框间距离设定 */
    margin: 8px 0;
    /* 长度拉伸 */
    width: 100%;
}

.container {
    background-color: #FFF;
    border-radius: 10px;
    /* 两个下拉阴影 制造浮空效果*/
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0,0,0, .22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    /* 自添加 */
    min-width: 560px;   
    min-height: 480px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    z-index: 1;
}

.sign-up-container {
    /* 右侧注册界面，初始化为隐藏 */
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    opacity: 1;
    z-index: 2;
    animation: show 0.6s;
}

@keyframes show {
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%, 100% {
        opacity: 1;
        z-index: 2;
    }
}

.overlay-container {
    position: absolute;
    /* top: 0; */
    /* 中轴右侧 */
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 3;
}

.container.right-panel-active .overlay-container {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}

.overlay {
    background: #FF416C;
    /* 定义从左到右颜色渐变 */
    background: -webkit-linear-gradient(to right, rgba(255,75,43, 1), rgba(255,65,108, 1));
    background: linear-gradient(90deg, rgba(255,75,43, 1), rgba(255,65,108, 1));
    /* background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0; */
    color: #FFF;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
    -webkit-transform: translateX(-20%);
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    -webkit-transform: translateX(20%);
    transform: translateX(20%);
}

#overlay-right-register {
    font-size: 2px;
    font-weight: 50;
    line-height: 5px;
    letter-spacing: 0.5px;
    margin: 30px 0 10px;
    font-style: italic;
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #DDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    height: 40px;
    width: 40px;
}
</style>