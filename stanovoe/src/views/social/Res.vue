<template>
    <section class="symbol-page res">
        <div class="const">
            <img src="http://adminstanovoe.ru/images/stories/file/res/res.jpg" alt="">
            <div class="symbol-page__text">
                <p class="part-title">Филиал ОАО "МРСК Центра"-"Липецкэнерго"</p>
                <p class="part-subtitle last-sub">Начальник РЭС - Кашин Дмитрий Владимирович</p>
                <p class="part-text">Адрес: 399710, Липецкая область, Становлянский район, село Становое, улица Советская д.2</p>

                <p class="part-text main-text">Телефоны :</p>
                <p class="part-text">8(47476) 2-13-03 - Начальник РЭС</p>
                <p class="part-text">8(47476) 2-28-45 - Гл.инженер РЭС  </p>
                <p class="part-text">8(47476) 2-26-18  - Отдел маркетинга </p>
                <p class="part-text">8(47476) 2-14-97 - Диспетчер</p>

            </div>
        </div>
    </section>
</template>

<script>

    import '../../assets/styles/social.scss'



    export default {
        name: 'Res',
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
