<template>
    <div class="header">
        <div v-if="$slots.left" class="header__left">
            <slot name="left"></slot>
            
        </div>
        <h1 class="header__title">
            {{title}}
        </h1>
        <div v-if="$slots.right" class="header__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style lang="scss">

@include b(header) {

    display: flex;
    justify-content: space-between;
    align-items: center;
    

    @include e(title){
        font-weight: 600;
        font-size: 22px;
        align-content: center;
        margin: 0 auto;
    }
    @include e(left){

    }
    @include e(right){
        color: $green-bg;
        font-size:14px; 
    }
}

@include b(icon) {
    @include e(close) {
        width: 25px;
        height: 25px;
    }
}
    
    
</style>

<script lang="ts">

import { component, field, prop } from "@/dsl";
import SvgIcon from '@/components/SvgIcon.vue'


@component
class Header  {

    components = {
        SvgIcon
    }

    @prop
    title: string;


}

export default Header.component

</script>
