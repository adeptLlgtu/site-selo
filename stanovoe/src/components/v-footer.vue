<template>
    <footer class="footer">
        <div class="const">
            <div class="footer-top">
                <router-link to="">
                    <img :src="flag" alt="">
                    <div class="footer-top__link-text">
                        <p class="footer-top__link-text__top">Становлянский район</p>
                        <p class="footer-top__link-text__sub">Липецкая область</p>
                    </div>
                </router-link>
                <div class="footer-top__links">
                    <a class="footer-top__links-item" href="">
                        <img :src="odn" alt="">
                    </a>
                    <a class="footer-top__links-item" href="">
                        <img :src="vk" alt="">
                    </a>
                </div>
            </div>
            <div class="footer-nav">
                <div class="footer-nav__item">
                    <router-link class="footer-nav__item-title" to="/">Главная</router-link>
                </div>
                <div class="footer-nav__item">
                    <router-link class="footer-nav__item-title" to="/about-region">О районе</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/symbol">Символика</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/history">История района</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/places">Исторические места</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/respect-desk">Доска почета</router-link>
                </div>
                <div class="footer-nav__item">
                    <p class="footer-nav__item-title">Социальная сфера</p>
                    <router-link class="footer-nav__item-subtitle" to="/res">Становлянский РЭС</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/health">Здравоохранение</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/education">Образование</router-link>
                    <router-link class="footer-nav__item-subtitle" to="/culture">Культура</router-link>
                </div>
                <div class="footer-nav__item">
                    <router-link class="footer-nav__item-title" to="/corruption">Противоздействие коррупции</router-link>
                </div>
                <div class="footer-nav__item">
                    <router-link class="footer-nav__item-title" to="/sels">Сельские поселения</router-link>
                </div>

            </div>
        </div>


    </footer>
</template>


<script>

    import '../assets/styles/footer.scss'
    import flag from '../assets/flag.svg'
    import odn from '../assets/odn.svg'
    import vk from '../assets/vk.svg'
    export default {
        name: 'vFooter',
        components: {

        },
        data(){
            return{
                flag, odn,
                vk

            }
        },
        methods:{

        },
        created() {

        },
        computed:{

        },
        mounted() {

        }
    }

</script>