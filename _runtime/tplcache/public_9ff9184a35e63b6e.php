<?php if (!defined('THINK_PATH')) exit();?><!-- 发布分享/分享 -->
<?php if($send_type =='send_weibo'): ?>
<?php if(CheckPermission('core_normal','feed_post')): ?>

<div class="send_weibo diy-send-weibo" model-node="send_weibo" id="send_weibo">
  <div id="send_box"> 
    <!--分享-->
    <div type-node="weibo">
      <div class="input">
        <div class="input_before" model-node="mini_editor" model-args="prompt=<?php echo ($prompt); ?>">
          <textarea id="inputor<?php echo ($time); ?>" name="at" class="input_tips" event-node="mini_editor_textarea" model-args='t=feed'><?php if(trim($topicHtml) != ''): ?><?php echo ($topicHtml); ?><?php endif; ?>
</textarea>
          <div model-node="numsLeft" class="num"><?php echo ($initNums); ?></div>
          <div model-node="post_ok" style="display:none;text-align:center;position:absolute;left:0;top:22px;width:100%"> <i class="ico-ok"></i> <?php echo L('PUBLIC_SHARE_SUCCESS');?> </div>
        </div>
      </div>
      <div class="action clearfix" model-node="send_action">
        <div class="kind">
          <div class="right release"> <?php echo Addons::hook('weibo_syn_middle_publish');?> <a class="btn-green-big" event-node='<?php echo ($post_event); ?>' event-args='type=<?php echo ($type); ?>&app_name=<?php echo ($app_name); ?>&topicHtml=<?php echo ($initHtml); ?>&channel=<?php echo ($channel); ?>&isrefresh=<?php echo ($isrefresh); ?>' href="javascript:;"> <span>发布</span> </a> </div>
          <div class="acts">
            <?php if(($actions["face"])  ==  "true"): ?><?php if(in_array('face',$weibo_type)): ?>
              <a event-node="insert_face" class="face-block" href="javascript:;" title="表情"> <i class="face"></i>表情 </a>
              <?php endif; ?><?php endif; ?>
            <?php if(($actions["image"])  ==  "true"): ?><?php if(in_array('image',$weibo_type)): ?>
              <a image-type="flash" event-node="insert_image" class="image-block" href="javascript:;" rel="<?php echo ($post_event); ?>" title="图片"> <i class="image"></i>图片</a>
              <div class="tips-img" style="display:none">
                <dl>
                  <dd> <i class="arrow-open"></i> jpg,png,gif,bmp,tif </dd>
                </dl>
              </div>
              <a image-type="noflash" style="display:none;" href="javascript:void(0);" class="image-block" title="图片"> <i class="image" ></i>
              <form style='display:inline;padding:0;margin:0;border:0;outline:none;' >
                <input type="file" name="attach" inputname='attach' onchange="core.plugInit('uploadFile',this,'','image')" urlquery="attach_type=feed_image&upload_type=image&thumb=1&width=100&height=100&cut=1" hidefocus="true">
              </form>
              </a>
              <?php endif; ?><?php endif; ?>
            <?php if(($actions["video"])  ==  "true"): ?><?php if(in_array('video',$weibo_type)): ?>
              <input type="hidden" id="postvideourl" value="" />
              <a event-node="insert_video" rel="<?php echo ($post_event); ?>" class="video-block" href="javascript:;" title="视频"> <i class="video"></i>视频</a>
              <?php endif; ?><?php endif; ?>
            <?php if(($actions["topic"])  ==  "true"): ?><?php if(in_array('topic',$weibo_type)): ?>
              <a event-node="insert_topic" class="topic-block" href="javascript:;" title="话题"> <i class="topic"></i>话题 </a>
              <?php endif; ?><?php endif; ?>
            <?php if(($actions["file"])  ==  "true"): ?><?php if(in_array('file',$weibo_type)): ?>
              <a class="file-block" href="javascript:;" title="附件"> <i class="file"></i>附件
              <form style='display:inline;padding:0;margin:0;border:0' >
                <input event-node="insert_file" type="file" name="attach" inputname='attach' onchange="core.plugInit('uploadFile',this,'','all')" urlquery="attach_type=feed_file&upload_type=file" hidefocus="true">
              </form>
              </a>
              <?php endif; ?><?php endif; ?>
            <?php if(($actions["at"])  ==  "true"): ?><?php if(in_array('at',$weibo_type)): ?>
              <a event-node="insert_at" class="at-block" href="javascript:;" title="@某人"> <i class="at"></i>@某人</a>
              <?php endif; ?><?php endif; ?>
            <?php echo Addons::hook('home_index_middle_publish_type',array('position'=>'index'));?> </div>
          <div class="clear"></div>
          <div model-node ='faceDiv'></div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php elseif($GLOBALS['ts']['mid']):?>
<div class="send_weibo">
  <div class="box-purview"><div class="nologin"><i class="ico-error"></i>您没有权限发布分享</div></div>
</div>
<?php else: ?>
<div class="send_weibo">
  <div class="box-purview"><div class="nologin"><i class="ico-error"></i>您还未登录，请<a class="nologin-a" href="javascript:ui.quicklogin();">&nbsp;登录</a>&nbsp;or&nbsp;<a class="nologin-a" href="<?php echo U('public/Register/index');?>">注册</a></div></div>
</div>
<?php endif; ?>
<!-- 分享分享/分享发布框 -->
<?php elseif($send_type =='repost_weibo'): ?>
<div model-node="weibo_post_box" class="clearfix">
  <div class="input_before" model-node="mini_editor" style='margin:0 0 5px 0'>
    <textarea id="message_inputor" class="input_tips" event-node="mini_editor_textarea" event-args='parentHeight=60' model-args="t=repostweibo" style="height:52px;width:98.5%;"><?php echo ($initHtml); ?></textarea>
    <div model-node="numsLeft" class="num"><?php echo ($initNums); ?></div>
  </div>
  <div class="action clearfix"> <a href="javascript:;" class="btn-green-big right" event-node='post_share' event-args='sid=<?php echo ($sid); ?>&type=<?php echo ($stype); ?>&app_name=<?php echo ($app_name); ?>&curid=<?php echo ($curid); ?>&curtable=<?php echo ($curtable); ?>'><span><?php echo L('PUBLIC_SHARE_STREAM');?></span></a>
    <div class="acts"> <a class="face-block" href="javascript:;" event-node="comment_insert_face" title="表情"><i class="face"></i></a> </div>
    <?php if(in_array('comment',$weibo_premission) && $cancomment == 1): ?>
     <!--[if !IE]><!--><label>
      <input type="checkbox" class="checkbox regular-checkbox" name="comment" value='1' id="comment"><span for="comment"></span>
      <?php echo L('PUBLIC_SENTWEIBO_TO',array('link'=>$space_link));?></label>
     <!--<![endif]-->
     <!--[if IE]>
     <label>
      <input type="checkbox" class="checkbox" name="comment" value='1'>
      <?php echo L('PUBLIC_SENTWEIBO_TO',array('link'=>$space_link));?></label>
     <![endif]-->
    <?php endif; ?>
    <div class="clear"></div>
    <div model-node="faceDiv"></div>
  </div>
</div>
<script type="text/javascript">
$(function() {
	setTimeout(function() {
		core.weibo.checkNums($('#message_inputor').get(0));
		$('#message_inputor').focus();
	}, 500);
});
</script>
<?php endif; ?>
<script type="text/javascript">
var initNums = '<?php echo ($initNums); ?>';
var initHtml = '<?php echo ($initHtml); ?>';

core.loadFile(THEME_URL+'/js/plugins/core.at.js');

$(function (){
	$('#change_weibo_tab').click(function() {
		$('div[type="weibotab"]').hide();
	});
	if ($('#inputor<?php echo ($time); ?>').get(0) != undefined) {
		setTimeout(function() {
			if ( initHtml ){
				$('#inputor<?php echo ($time); ?>').focus();
				$('#inputor<?php echo ($time); ?>').html(initHtml);
			}
		} , 300)
	}
});

setTimeout(function() {
	atWho($('#inputor<?php echo ($time); ?>'));
	atWho($('#message_inputor'));
}, 1000);

$(function () {
	var whether_to_install_flash = function() {
		var i_flash = true;
		if ($.browser.msie) {
			try {
				var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			} catch(e) {
				i_flash = false;
			}
		} else {
			try {
				var swf = navigator.plugins['Shockwave Flash'];
				if (typeof swf === 'undefined') {
					i_flash = false;
				}
			} catch(e) {
				i_flash = false;
			}
		}

		return i_flash;
	}

	var i_flash = whether_to_install_flash();
	if (i_flash) {
		$('a[image-type="noflash"]').remove();
	} else {
		$('a[image-type="flash"]').remove();
		$('a[image-type="noflash"]').show();
	}
});
</script>