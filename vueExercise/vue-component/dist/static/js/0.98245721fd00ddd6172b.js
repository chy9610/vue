webpackJsonp([0],{"6mX7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"myRange",data:function(){return{leftClick:!1,rightClick:!1,rangeWidth:"",leftWidth:0,rightWidth:0}},mounted:function(){this.rangeWidth=.9*document.body.clientWidth},methods:{leftTextTouchStart:function(){this.leftClick=!0},leftTextTouchMove:function(t){var e=t.changedTouches[0].clientX;console.log(t.changedTouches[0]),e>=0&&this.left+this.right<=this.rangeWidth&&(this.leftWidth=e,document.querySelector("#nowRange").style.left=this.left+"px",document.querySelector("#nowRange").style.width=this.width+"px",document.querySelector("#leftText").style.left=this.left+"px",document.querySelector("#leftImg").style.left=this.left+"px",this.$emit("leftChange",this.leftText))},leftTextTouchEnd:function(){this.leftClick=!1},rightTextTouchStart:function(){this.rightClick=!0},rightTextTouchMove:function(t){var e=t.changedTouches[0].clientX;e<=this.rangeWidth&&(this.rightWidth=this.rangeWidth-e,this.left+this.right<=this.rangeWidth&&(document.querySelector("#nowRange").style.right=this.right+"px",document.querySelector("#nowRange").style.width=this.width+"px",document.querySelector("#rightText").style.right=this.right+"px",document.querySelector("#rightImg").style.right=this.right+"px",this.$emit("rightChange",this.rightText)))},rightTextTouchEnd:function(){this.rightClick=!1}},computed:{width:function(){return Math.min(Math.max(0,this.rangeWidth-this.leftWidth-this.rightWidth),this.rangeWidth)},left:function(){return Math.max(this.leftWidth,0)},right:function(){if(this.left+this.rightWidth<=this.rangeWidth)return Math.max(this.rightWidth-.5,0)},leftText:function(){var t=parseInt(this.left/this.rangeWidth*100);return 0===t||isNaN(t)?"不限":t+"k"},rightText:function(){if(0===this.rangeWidth)return"不限";var t=parseInt((this.rangeWidth-this.right)/this.rangeWidth*100);return t>=0?100===t?"不限":t+"k":void 0}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"range-container"},[i("div",{staticClass:"base_range_div"}),t._v(" "),i("div",{staticClass:"now_range_div",attrs:{id:"nowRange"}}),t._v(" "),i("div",{staticClass:"base_text_div left_text_div",class:{check_text_div:t.leftClick},attrs:{id:"leftText"},on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.leftTextTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.leftTextTouchMove(e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.leftTextTouchEnd(e)}}},[t._v("\n     "+t._s(t.leftText)+"\n  ")]),t._v(" "),i("div",{staticClass:"base_text_div right_text_div",class:{check_text_div:t.rightClick},attrs:{id:"rightText"},on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.rightTextTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.rightTextTouchMove(e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.rightTextTouchEnd(e)}}},[t._v("\n     "+t._s(t.rightText)+"\n  ")]),t._v(" "),i("div",{staticClass:"base_text_div left_bottom_div",attrs:{id:"leftImg"}},[i("span",{on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.leftTextTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.leftTextTouchMove(e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.leftTextTouchEnd(e)}}})]),t._v(" "),i("div",{staticClass:"base_text_div right_bottom_div",attrs:{id:"rightImg"}},[i("span",{on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.rightTextTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.rightTextTouchMove(e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.rightTextTouchEnd(e)}}})])])},staticRenderFns:[]};var h={name:"Range",data:function(){return{leftText:"",rightText:""}},methods:{leftChange:function(t){this.leftText=t},rightChange:function(t){this.rightText=t}},components:{range:i("Z0/y")(n,r,!1,function(t){i("KvEO")},"data-v-716a7b47",null).exports},computed:{salary:function(){return"不限"===this.leftText&&"不限"===this.rightText?"不限":this.leftText?this.leftText+"-"+this.rightText:"不限"}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("range",{on:{rightChange:this.rightChange,leftChange:this.leftChange}}),this._v("\n    "+this._s(this.salary)+"\n")],1)},staticRenderFns:[]};var a=i("Z0/y")(h,o,!1,function(t){i("kvBa")},null,null);e.default=a.exports},KvEO:function(t,e){},kvBa:function(t,e){}});
//# sourceMappingURL=0.98245721fd00ddd6172b.js.map