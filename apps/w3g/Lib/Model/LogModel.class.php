<?php
class LogModel extends Model
{
	var $tableName = 'group_log';
	
	//写话题知识
	function writeLog($gid, $uid, $content, $type='topic') {
		$map['gid'] = $gid;
		$map['uid'] = $uid;
		$map['type'] = $type;
		$map['content'] =  getUserSpace($uid, 'fn', '_blank', '@' . getUserName($uid)) . ' ' . $content;
		$map['ctime'] = time();
		$this->add($map);
	}
	
	//写成员知识
	function writeMemberLog() {
		
	}
	
	//写设置知识
	function writeSettingLog() {
		
	}
	
	
	
	
}

?>