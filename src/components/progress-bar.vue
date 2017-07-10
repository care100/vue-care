<template>
	<div class="progress-bar" :style="{width: width+'px', height: width+'px'}">
		<div :style="{borderLeft: width/2+'px solid #2b2b2b',background: 'transparent',zIndex: progress>50?0:1}"></div>
		<div :style="{borderRight: width/2+'px solid '+(progress>50?'rgb('+(130+parseInt(progress))+',85,91)':'#2b2b2b'),background: 'transparent'}"></div>
		<div :style="{borderLeft: width/2+'px solid '+('rgb('+(130+parseInt(progress))+',85,91)'),background: 'transparent',transform: 'rotate('+progress*3.6+'deg)'}"></div>
		<div class="similar-in-circle" :style="{width: width/2>strokeWidth?width-2*strokeWidth+'px':0,height: width/2>strokeWidth?width-2*strokeWidth+'px':0, top: strokeWidth+'px', left: strokeWidth+'px', background: '#404040'}"></div>
		<div class="similar-num" :style="{lineHeight: width+'px'}">{{progress}}%</div>
	</div>
</template>
<script>
	export default {
		name: 'progress-bar',
		data () {
			return {

			}
		},
		props: {
			progress: {
				type: Number,
				default: 0,
				required: true,
				validator: function (value) {
					return value <= 100 && value >= 0
				}
			},
			width: {
				type: Number,
				default: 120,
				required: false,
				validator: function (value) {
					return value > 0
				}
			},
			strokeWidth: {
				type: Number,
				default: 8,
				required: false,
				validator: function (value) {
					return value > 0
				}
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.progress-bar
		display inline-block
		position relative
		border-radius 50%
		overflow hidden
		>div
			position absolute
			width 100%
			height 100%
			top 0
			left 0
			box-sizing border-box
		>.similar-in-circle
			border-radius 50%
			overflow hidden
			z-index 2
		>.similar-num
			color #fff
			font-size 14px
			text-align center
			z-index 3
</style>