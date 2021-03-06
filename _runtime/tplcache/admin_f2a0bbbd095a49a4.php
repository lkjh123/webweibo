<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo l('ADMIN_PUBLIC_LOGIN');?></title>
<style type="text/css">

body {font-family:arial;font-size: 12px;background:#fff;margin: 0px;color:#000;font-family: "微软雅黑"}
li{list-style-type: none;}
ul, form, input{font-size:12px; padding:0; margin:0;}
a:link{color:#999;text-decoration:none}
a:visited{color:#999;text-decoration:none}
a:hover{color: #cc3300;text-decoration:none}
a img{border: none;}
img{border: 0px;}

.login-wrap{width:350px;margin:0 auto;margin-top:10%;border: 1px #cccccc solid;border-top: 4px #2E4C8C solid;text-align: center;}
.login{padding:30px;}
.login .hd{margin-bottom:20px;margin-top:50px;}
.login .login-inner{width:100%;}
.login .login-inner ul{margin:0 auto}
.login .login-inner li{width:100%;margin-bottom:30px;height:42px;line-height:42px;color:#333;vertical-align:middle;font-size:20px;text-align: left;}
.login .login-inner li:first-child{text-align:center;}
.login .login-inner li:first-child img{border-radius: 50%;width:40px;height:40px;}
.login .login-inner span{cursor:pointer;}
.login .login-inner ul li input{font-family: "Microsoft Yahei", "微软雅黑";width:268px;padding:10px;height:20px;line-height:20px;font-size:12px;background:#fff;border:1px solid #D2D2D2}
.login .login-inner span{width:100%;background-color:#2E4C8C;display:block;text-align:center;color:#fff;}
.login .fd{margin-top: 100px;color:#cccccc;}
</style>

</head>
<body>
<div class="login-wrap">
    <div class="boarder"></div>
    <div class="login">
        <div class="hd"><img src="__APP__/image/login-hd-logo.png" /></div>
        <div class="login-inner">
            <!--<div class="title"><?php echo L('PUBLIC_ADMINISTRATOR_LOGIN');?></div>-->
            <form action="<?php echo U('admin/Public/doLogin');?>" id="reg" name="reg" method="post" class="form-login" >
            <ul>
                <?php if($uid){ ?>
                <li>
                    <img src="<?php echo ($user["avatar_small"]); ?>"/><input id="login_name" type="hidden" name='uid' value='<?php echo ($uid); ?>'/>
                </li>
                <?php }else{ ?>
                <li>
                    <input id="login_name" placeholder="管理账号" type="text" name="email" value=""/>
                </li>
                <?php } ?>
                <li>
                    <input id="login_pwd" placeholder="管理密码" type="password" name="password" value="">
                </li>
                <li>
                    <input id="login_verify" placeholder="验证码" name="verify" value="" style="width:150px;float:left" >
                    <img src="__ROOT__/public/captcha.php" id="verifyimg" alt="<?php echo L('PUBLIC_CHANGE_ONE');?>"  style="float:right;vertical-align:middle;border:none" onclick="changeverify()"/><!--<a href="javascript:void(0);" onclick="changeverify()">看不清，换一张</a>-->
                </li>
                <li>
                <span onclick="$('#reg').submit();">进入</span>
                </li>
            </ul>
            </form>
        </div>
        <div class="fd"><?php echo ($site["site_footer"]); ?></div>
    </div>
</div>


<script type="text/javascript" src="<?php echo THEME_PUBLIC_URL;?>/js/jquery.js"></script>
<script type="text/javascript" src="<?php echo THEME_PUBLIC_URL;?>/js/jquery.form.js"></script>

<script type="text/javascript">
function changeverify(){
    var date = new Date();
    var ttime = date.getTime();
    var url = "__ROOT__/public/captcha.php";
    $('#verifyimg').attr('src',url+'?'+ttime);
};
// 绑定回车事件
$(function() {
    $(this).bind('keydown', function(e) {
        var key = e.which;
        if(key == 13) {
            var name = $.trim($('#login_name').val());
            var pwd = $.trim($('#login_pwd').val());
            var verify = $.trim($('#login_verify').val());
            if(name != '' && pwd != '' && verify != '') {
                // document.reg.submit();   
                $('#reg').submit();
            }
        }
    });
});

$(function() {
    $('#reg').submit(function() {
        $(this).ajaxSubmit({
            beforeSubmit: checkLoginForm, 
            success: loginCallback,
            dataType: 'json'
        });
        return false;
    });

    var checkLoginForm = function() {
        return true;
    };

    var loginCallback = function(res) {
        if (res.status == 1) {
            location.reload();
        } else {
            changeverify();
            alert(res.info);
        }
    };
});



var PlaceHolder = {
    _support: (function() {
        return 'placeholder' in document.createElement('input');
    })(),

    //提示文字的样式，需要在页面中其他位置定义
    className: 'abc',

    init: function() {
        if (!PlaceHolder._support) {
            //未对textarea处理，需要的自己加上
            var inputs = document.getElementsByTagName('input');
            PlaceHolder.create(inputs);
        }
    },

    create: function(inputs) {
        var input;
        if (!inputs.length) {
            inputs = [inputs];
        }
        for (var i = 0, length = inputs.length; i <length; i++) {
            input = inputs[i];
            if (!PlaceHolder._support && input.attributes && input.attributes.placeholder) {
                PlaceHolder._setValue(input);
                input.addEventListener('focus', function(e) {
                    if (this.value === this.attributes.placeholder.nodeValue) {
                        this.value = '';
                        this.className = '';
                    }
                }, false);
                input.addEventListener('blur', function(e) {
                    if (this.value === '') {
                        PlaceHolder._setValue(this);
                    }
                }, false);
            }
        }
    },

    _setValue: function(input) {
        input.value = input.attributes.placeholder.nodeValue;
        input.className = PlaceHolder.className;
    }
};


//页面初始化时对所有input做初始化
PlaceHolder.init();
</script>



</body>
</html>