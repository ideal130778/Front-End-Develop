<template>
    <footer>
        <ul>
            <li class="one">联系我们</li>
            <li>版权所有</li>
            <li>隐私政策</li>
            <li>服务条款</li>
            <li>权益申诉</li>
        </ul>
    </footer>
</template>
<script>
</script>
<style scoped>
/*footer部分*/
        a {
            color: #fff;
            text-decoration: none;
        }

        footer {
            width: 100%;
            height: 120px;
            background-color: black;
        }

        footer ul {
            width: 800px;
            height: 120px;
            margin: 0 auto;
        }

        footer ul li {
            float: left;
            list-style: none;
            text-align: center;
            height: 30px;
            line-height: 30px;
            width: 158px;
            color: white;
            margin: 45px auto;
            border-left: 2px solid white;
        }

        footer ul li:hover {
            color: skyblue;
        }

        footer ul li.one {
            width: 160px;
            border: none;
        }
</style>