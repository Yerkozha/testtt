

<template>
    <div class="root">
        
        <router-view></router-view>

    </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss">
    @include b(root) {
        height: 100%;
        width: 100%;
        background: #fff;
    }
</style>