<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_POST['username'];
$sex = $_POST['sex'];
$csrq = $_POST['csrq'];
$call = $_POST['call'];
$yyks = $_POST['yyks'];
$yyzj = $_POST['yyzj'];
$yysj = $_POST['yysj'];
$bq = $_POST['bq'];

echo "患者的名字：{$username}，患者的年龄：{$sex}，患者的出生日期：{$csrq}，患者的手机号码：{$call}，预约科室：{$yyks}，预约专家：{$yyzj}，预约时间：{$yysj}，病情：{$bq}";