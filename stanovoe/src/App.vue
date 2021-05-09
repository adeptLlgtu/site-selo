<template>
  <div id="app">
    <vHeader></vHeader>
    <vNav></vNav>
    <router-view/>
    <vFooter></vFooter>
  </div>
</template>
a

<script>

  import './assets/styles/style.scss'



  import vHeader from './components/v-header'
  import vFooter from './components/v-footer'
  import vNav from './components/v-nav'

  export default {
    name: 'App',
    components: {
      vHeader, vFooter, vNav
    },
    data(){
      return{


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