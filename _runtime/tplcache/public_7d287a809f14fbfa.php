<?php if (!defined('THINK_PATH')) exit();?><div class="right-box clearfix" model-node="related_list">
	<fieldset class="inter-line mb20"><a href="javascript:;" event-node="change_related_user" rel="0" event-args="uid=<?php echo ($uid); ?>&limit=<?php echo ($limit); ?>" id="changerelated_user" class="right"><i class="ico-refresh"></i></a><legend class="inter-txt"><?php echo ($title); ?></legend></fieldset>
    <ul model-node="related_ul_user" class="related_ul_user">
      
    </ul>

</div>

<script type="text/javascript">
$(function (){
	setTimeout(function (){
		$('#changerelated_user').click();
		$('#changerelated_user').attr('rel', 1);
	},100)
});
// 事件绑定
M.addEventFns({
    // 换一换操作
    change_related_user: {
        click: function() {
            var args = M.getEventArgs(this);
            var _model = M.getModels('related_ul_user');
			var rel = $('#changerelated_user').attr('rel');
            $.post(U('widget/RelatedUser/changeRelate'), {uid:args.uid, limit:args.limit, rel:rel}, function(data) {
                $(_model[0]).html(data);
                M($(_model)[0]);
            }, 'json');
            return false ;
        }
    }
});
</script>