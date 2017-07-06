<template>
	<div class="progress-bar">
		<div :style="{borderLeft: '55px solid #2b2b2b',background: 'transparent',zIndex: progress>50?0:1}"></div>
		<div :style="{borderRight: '55px solid '+(progress>50?'rgb('+(130+parseInt(progress))+',85,91)':'#2b2b2b'),background: 'transparent'}"></div>
		<div :style="{borderLeft: '55px solid '+('rgb('+(130+parseInt(progress))+',85,91)'),background: 'transparent',transform: 'rotate('+progress*3.6+'deg)'}"></div>
		<div class="similar-num" :style="{background: '#404040'}">{{progress}}%</div>
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
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.progress-bar{
		display: inline-block;
		width: 110px;
		height: 110px;
		position: relative;
		border-radius: 50%;
		overflow: hidden;
	}
	.progress-bar>div{
	    position absolute
	    width 100%
	    height 100%
	    top 0
	    left 0
	    box-sizing border-box
	  }
  .progress-bar>.similar-num{
    width 90px
    height 90px
    line-height 90px
    color #fff
    font-size 14px
    text-align center
    border-radius 50%
    overflow hidden
    top 10px
    left 10px
    z-index 2
  }
</style>