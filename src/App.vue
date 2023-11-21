<script lang="ts" setup>

import { ref } from 'vue';
import { SmartCell, Cell } from './cell'





</script>




<template>
    <div class="root">
        <SmartCell :avatar="{type: 'svg', source: 'bell'}" />
        <SmartCell :avatar="null" />
        <SmartCell :avatar="{type: 'img', source: 'icon-img'}" />
        <SmartCell :avatar="{type: 'img', source: 'icon-img'}" />
    </div>
</template>


<style lang="scss">
    .root {
        margin: 10px 10px;

        display: grid;
        grid-gap: 10px;

        grid-template: 1fr 1fr / 1fr 1fr
    }

    .some{
        &-style {
            position: relative;
            font-size: 33px;
            color: black;
        }
    }
</style>