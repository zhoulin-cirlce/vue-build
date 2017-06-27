<template>
    <div :class="['c-loading', classa]">
        <div :class="['c-loading-' + theme]" :style="{
          'border-top-color': loadingColor,
          'border-left-color': loadingColor,
          'border-bottom-color': loadingColor,
          'height': loadingSize,
          'width': loadingSize
        }"></div>
        <span><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: 'c-loading',
        props: {
            classa: {
                type: String,
                    default: ''
            },
            theme: {
                type: String,
                default: 'snake'
            },
            color: {
                type: String,
                default: '#ccc9c9'
            },
            size: {
                type: Number,
                default: 2
            }
        },
        computed: {
            loadingColor() {
                return this.color || this.$parent.color;
            },
    
            loadingSize() {
                return (this.size || this.$parent.size) + 'rem';
            }
        }
    }
</script>

<style>
    .c-loading {
        text-align: center;
        & span {
            vertical-align: middle;
        }
    }
    
    .c-loading-snake {
        vertical-align: middle;
        animation: c-loading-snake-rotate .8s infinite linear;
        border: 4px solid transparent;
        border-radius: 50%;
        display: inline-block;
    }
    
    @-webkit-keyframes c-loading-snake-rotate {
        0% {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(1turn);
        }
    }
    
    @keyframes c-loading-snake-rotate {
        0% {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(1turn);
        }
    }
</style>