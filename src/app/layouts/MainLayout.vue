<template>
    <div class="layout">
       
        <router-view></router-view>
        
    </div>
</template>


<style lang="scss">

        

    @include media-lg() {
        

    }
    @include media-md() {

    }
    @include media-sm() {

    }
    @include media-xs() {

    }

    
    
</style>

<script lang="ts">

import { component, field, prop } from "@/dsl";
import SvgIcon from '@/components/SvgIcon.vue'
import {mapActions} from 'pinia'
import { useAuth } from "@/app/providers/store";
import { useRouter } from "vue-router";
import { Header } from "@/widgets";

@component
class MainLayout  {

    components = {
        SvgIcon,
        Header
    }
    

    

}

export default MainLayout.component


</script>
