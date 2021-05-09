<template>
    <header class="header">
        <div class="const">
            <router-link to="/">
                <img :src="flag" alt="">
                <div id="site-title">
                    <p id="site-title__top">Становлянский район</p>
                    <p id="site-title__sub">Липецкая область</p>
                </div>
            </router-link>
            <div class="soc-links">
                <a target="_blank" href="/">
                    <img :src="odn" alt="">
                </a>
                <a target="_blank" href="/">
                    <img :src="vk" alt="">
                </a>
            </div>
        </div>
    </header>
</template>

<script>
    import flag from '../assets/flag.svg'
    import odn from '../assets/odn.svg'
    import vk from '../assets/vk.svg'
    import '../assets/styles/header.scss'

    export default {
        name: 'vHeader',
        data(){
            return{
                flag, odn, vk

            }
        },
    }
</script>