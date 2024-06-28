

<template>
    <div class="input">
        <input :type="isHidden ? type : 'text'" :placeholder="placeholder" />
        <span v-if="secret" class="input__secret" @click="triggerPassword">Show</span>
    </div>
</template>

<script lang="ts" src="./input.ts"></script>

<style lang="scss">

    @include b(input){
        position: relative;

        & input {
            background: $grey-bg;
            border: none;
            outline: 0;
            padding: 7px 12px;
            border-radius: 5px;
            width: 100%;

            font-weight: 500;
            font-size: 16px;
            
        }

        @include e( secret ) {
            font-weight: 500;
            color: $green-bg;
            font-size: 16px;
            position: absolute;
            top: 7px;
            right: 7px;
            position: cursor;
            z-index: 1;
        }
    }
</style>