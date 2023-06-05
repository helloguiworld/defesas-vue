<template>
    <header>
        <nav class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/defesas">Defesas</router-link>
        </nav>

        <img :src="require('@/assets/logo.png')" alt="Logo ICMC" class="logo">
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header {
    height: 60px;
    background-color: #647B98;
    padding: 10px;
    box-shadow: 0 2px 20px #1e1e1e10;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav.links {
        display: flex;
        gap: 10px;

        a {
            text-decoration: none;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            transition: .3s;
            
            &:hover {
                color: #26303C;
                background-color: #B8C3D4;
            }
        }
    }

    img.logo {
        height: 90%;
    }
}
</style>