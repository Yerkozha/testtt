
<script lang="ts" setup>

import { onMounted, ref, Ref } from 'vue';

import { Cell } from '../index';
import SvgIcon from 'components/SvgIcon.vue'

import type { ComponentPropsType } from '@c/interface';
import { STATES } from '@c/interface';


const { avatar, subtitle } = withDefaults(defineProps<ComponentPropsType>(), {
    avatar: null,   // from base64 && local
    subtitle: ''
});

const cellNode: Ref<HTMLDivElement> = ref();
const controllerCell = ref();
const togglerFlag = ref(false)

onMounted(() => {
    console.log(avatar, 'av')
    controllerCell.value = new Cell( avatar , cellNode.value, subtitle);
    
    // instantiate in setup && call init()
})
// text length

function fireError() {
    togglerFlag.value = !togglerFlag.value;

    if(togglerFlag.value) {
        controllerCell.value.state = STATES.ERROR
    } else {
        controllerCell.value.state = STATES.NORMAL
    }

    
} 

</script>

<template>
    
    <div class="cell" ref="cellNode" @click="fireError">

        <div class="cell__left">
            <SvgIcon class="cell__icon" :nameId="avatar.source" :format="avatar.type" v-if="avatar" />
            <div class="cell__title">
                <h1>Title</h1>
                <p v-if="controllerCell?.subtitle?.length">{{ controllerCell.subtitle }}</p>
            </div>
        </div>

        <div class="cell__right" v-if="controllerCell?.state === STATES.ERROR">
            <h2>Error</h2>
            <SvgIcon nameId="danger" format="svg" />
        </div>

    </div>

</template>


<style lang="scss">

    .cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        height: 56px;
        background: #F4F5F6;
        border-radius: 10px;
        padding: 6px 8px;

        &__title {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            text-align: left;

            & p {
                font-size: 13px;
                color: #6E757C;
            }
        }

        &__icon {
            width: 48px;
            height: 44px;
            border-radius: 12px;
            object-fit: contain;
        }

        &__left {
            display: inherit;
            gap: 10px;
            align-items: center;
        }
        &__right {
            display: flex;
            align-items: center;
            color: #F2590D;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
        }

    }

    .icon {
        &__danger{
            width: 28px;
            height: 28px;
        }
    }

</style>