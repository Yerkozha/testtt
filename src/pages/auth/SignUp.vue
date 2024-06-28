<template>
    <div class="auth">
        <div class="auth__top">

            <Header title="Sign Up">
                <template #left>
                    <SvgIcon nameId="close"/>
                </template>
                <template #right>
                    <router-link class="auth__link" :to="{name: 'login'}">Login</router-link>
                </template>
            </Header>
            
            <Input type="text" placeholder="Name"  />
            <Input type="text" placeholder="Email"  />
            <Input type="password" placeholder="Password" :secret="true" />

        </div>
        
        <div class="auth__bottom">
            <div class="auth__confirm">
                <input type="checkbox" />
                <p>I would like to receive your newsletter and other promotional information.</p>
            </div>
            <button class="auth__bottom-btn">Sign Up</button>
            <router-link :to="{name: 'main'}">Forgot your password?</router-link>
        </div>
    </div>
</template>

<style lang="scss">

@include b(auth) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    gap: 12px;
    height: 100%;

    @include e(confirm) {
        display: flex;
        justify-items: flex-start;
        gap: 5px;
        align-items: flex-start;
        margin-bottom: 15px;
        & p {
            font-size: 14px;
            color: $bold-grey;
            height: 20px;
        }
        & input[type=checkbox] {
            transform: scale(1.2);
            padding: 5px;
        }
    }
    @include e(link) {
        color: $green-bg;
    }
    @include e(top) {
        display: flex;
        flex-direction: column;
        gap: 20px; 
    }
    @include e(bottom) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin: 25px 0 auto 0;
        & a {
            color: $green-bg;
        }
    }
    @include e(bottom-btn) {
        width: 100%;
        padding: 12px 15px;
        background: $green-bg;
        color: #fff;
        border: none;
        border-radius: 100px;
    }
}
    
</style>


<script lang="ts">

import {component, prop, field } from '@/dsl'
import {Input} from '@/shared'
import { useAuth } from '@/app/providers/store'
import { mapWritableState } from 'pinia'
import SvgIcon from '@/components/SvgIcon.vue'
import { Header } from '@/widgets'

@component
class SignUp {
    component;
    components = {
        Header,
        Input,
        SvgIcon
    }
  
    computed = {
        ...mapWritableState(useAuth, ['token'])
    }
    
    foo() {
        console.log('dsadsa')
    }
}


export default SignUp.component

</script>

