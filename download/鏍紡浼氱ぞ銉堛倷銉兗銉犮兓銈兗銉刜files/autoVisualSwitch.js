/*
 * requires:jQuery v1.4.2 later
 * name:autoVisualSwitch.js
 * license:GPL(GNU General Public License)
 * author:Manabu Kushimoto(web-park.org)
 */
 
 $(function(){
	$.fn.autoVisualSwitch = function(options){
		var op=$.extend($.fn.autoVisualSwitch.defaults,options),
		$t=$(this),$visual=$("#autoVisual"),$visualChild=$visual.children(),active="active",activeIndex=0;

		$visualChild.hide().css({position:"absolute"}).not($visualChild.eq(0)).fadeTo(0,0);
		$visualChild.eq(0).css({zIndex:50}).show();
		
		// ナビゲーション設定
		$("li",$t).each(function(i){
			// ナビゲーションのインデックス番号を取得
			var thisIndex=$("li",$t).index(this);
			// メインビジュアルとアンカーのhrefを同じにする(JSオフ対策)
			$("a",this).attr("href",$visualChild.children("a").eq(i).attr("href"));
			$(this).hover(function(){
				// 自動切替をクリア
				clearInterval(setSwitch);
				// ナビゲーションの表示・非表示設定
				$("li",$t).not(this).removeClass(active);
				$(this).addClass(active);
				// ナビゲーションと同じインデックス番号をz-indexでレイヤーを上位にし表示させる
				$visualChild.show().not($visualChild.eq(thisIndex)).css({zIndex:10});
				$visualChild.eq(thisIndex).css({zIndex:100}).fadeTo(op.speed,1);
				$visualChild.not($visualChild.eq(thisIndex)).fadeTo(0,0);
			},function(){
				activeIndex=thisIndex-1;
				autoSwitch();
				$visualChild.stop(false,true);
			});
		});

		// 自動切替関数
		function autoSwitch(){
			setSwitch=setInterval(function(){
				// インクリメント演算子で1ループごとに1づつ数値を増やす
				var j=activeIndex++,nextElem=j+1,lastNum=($("li",$t).length)-1;
				// ナビゲーションの最後の要素に到達した場合activeIndexを-1にする
				// nextElemは-1+1=0になり、最初の要素から自動切替が開始される
				if(lastNum<=nextElem){ activeIndex=-1 }
				$("li",$t).not($("li",$t).eq(nextElem)).removeClass(active);
				$("li",$t).eq(nextElem).addClass(active);
				$visualChild.show().not($visualChild.eq(nextElem)).css({zIndex:10});
				$visualChild.eq(nextElem).css({zIndex:100}).fadeTo(op.speed,1);
				$visualChild.not($visualChild.eq(nextElem)).fadeTo(0,0);
			},op.interval);
		};
		autoSwitch();
	};

	$.fn.autoVisualSwitch.defaults = {
		speed:"slow",
		interval:4000
	};

});
