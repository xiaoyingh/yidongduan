//预约就诊页面
render();

function render(){
	$("#con").css("display","none");
	$("#count").css("display","block");
	$("form").submit(function(e){
		
		$("#count div input[type='text']").val() == ''||$("#count div textarea").val() == ''||$("#count div select").val() == ''?alert('请填写完成预约信息'):console.log('预约申请中');
		$("#count div input[type='text']").val() == ''||$("#count div textarea").val() == ''||$("#count div select").val() == ''?e.preventDefault():console.log('预约申请中');
		
		console.log($("#count div input[type='text']").val());
	    
	});	
//		$("#count div input[type='text']").val();
//		$("#count div textarea").val();
//		$("#count div select").val();s
}

//医生团队页面
function doc(){
	$("#con").css("display","block");
	$("#count").css("display","none")
}
//点击切换就诊页面
$("#appointment").on("touchstart",function(){
	render();
});

//点击切换医生团队
$("#doctor").on("touchstart",function(){
	alert("医生团队页面正在开发中");
	doc();
});

//调用时间控件
$(".date_picker").date_input();