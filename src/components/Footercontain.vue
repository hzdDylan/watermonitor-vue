<template>
    <section class="footer">
        <span class="copyright">
            <p>Designed and test for graduation design.</p>
            <p>© 2021 Daron. All Rights Reserved.</p>
        </span>
        <span>
            <ul class="footer-column">
            <li>备案号: <a href="https://beian.miit.gov.cn/" ref="noreferrer" target="_blank">粤ICP备2021011187号-1</a></li>
            </ul>
        </span>
        <span class="about">
            <el-link>about us</el-link>
            <br>
            <el-link>more</el-link>
        </span>
        
    </section>
</template>

<script>
export default {
    name: "footercontain"
}
</script>

<style scoped>
.footer {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.copyright {
    /* position: relative;
    left: -70%; */
}

.about {
    overflow: hidden;
    margin-right: 22px;
}

.footer-column {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}

.footer-column li {
  color: #9a9a9a;
}

.footer-column a {
  text-decoration: none;
  color: inherit;
}
</style>