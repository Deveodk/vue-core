<template>
    <div id="app">
       <!-- <layout></layout> -->
        <router-view></router-view>
    </div>
</template>
<script>
    // import layout from 'shared/layout/layout'
    export default {
        name: 'app',
        components: {
           // layout
        }
    }
</script>
<style lang="scss">
    @import 'shared/styles/index';
</style>
