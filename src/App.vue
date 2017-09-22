<template>
    <div id="app">
        <layout></layout>
    </div>
</template>
<script>
    import layout from '@/shared/components/layout/layout'
    export default {
        name: 'app',
        components: {
           layout
        }
    }
</script>
<style lang="scss">
    @import 'shared/styles/index';
</style>
