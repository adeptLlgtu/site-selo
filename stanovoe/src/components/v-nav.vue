<template>
    <nav class="nav">
        <div class="const">
            <router-link id="main-link" class="" to="/">Главная</router-link>
            <div class="ul-container">
                <ul>
                    <li class="ul-title">
                        <router-link to="/about-region">
                            <p>О районе</p>
                            <img :src="arrow" alt="">
                        </router-link>
                    </li>
                    <div class="sub-block">
                        <li class="li-sub">
                            <router-link to="/symbol">Символика</router-link>
                        </li>
                        <li class="li-sub">
                            <router-link to="/history">История района</router-link>
                        </li>
                        <li class="li-sub">
                            <router-link to="/places">Исторические места</router-link>
                        </li>
                        <li class="li-sub">
                            <router-link to="/respect-desk">Доска почета</router-link>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="ul-container">
                <ul>
                    <li class="ul-title">
                        <div>
                            <p>Социальная сфера</p>
                            <img :src="arrow" alt="">
                        </div>
                    </li>
                    <div class="sub-block">
                        <li class="li-sub">
                            <router-link to="/res">Становлянский РЭС</router-link>
                        </li>
                        <li class="li-sub">
                            <router-link to="/health">Здравоохранение</router-link>
                        </li>
                        <li class="li-sub">
                            <router-link to="/education">Образование</router-link>
                        </li>
                        <li class="li-sub">
                            <router-link to="/culture">Культура</router-link>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="ul-container">
                <ul>
                    <li class="ul-title">
                        <router-link to="/corruption">
                            <p>Противоздействие коррупции</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="ul-container">
                <ul>
                    <li class="ul-title">
                        <router-link to="/sels">
                            <p>Сельские поселения</p>
                        </router-link>
                    </li>
                </ul>
            </div>


        </div>
    </nav>
</template>


<script>

    import arrow from '../assets/li-arrow.svg'
    import '../assets/styles/nav.scss'

    export default {
        name: 'vNav',
        components: {

        },
        data(){
            return{
                arrow

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