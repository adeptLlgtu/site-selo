<template>
    <section class="about-region">
        <div class="const">
            <h2>О районе</h2>
            <router-link class="page-title" to="/symbol">Символика</router-link>
            <router-link class="page-title" to="/history">История района</router-link>
            <router-link class="page-title" to="/zemlyaki">Выдающиеся земляки</router-link>
            <router-link class="page-title" to="/respect-desk">Доска почета</router-link>
        </div>

    </section>
</template>



<script>

    import '../../assets/styles/about-region.scss'



    export default {
        name: 'About-region',
        components: {

        },
        data(){
            return{

            }
        },
        methods: {
            footer: function(){
                let footer = document.querySelector('footer')
                if (footer){
                    footer.className = 'footer bottom-footer'
                }
            }
        },
        mounted() {
            this.footer()
        }
    }
</script>
