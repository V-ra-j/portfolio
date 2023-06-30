function checkblank(cnt,lbl)
{
	var data=cnt.value;
	if (data=="")
	{
		lbl.innerHTML="Please fill all the appropriate details";
	}
	else
	{
		lbl.innerHTML="";
	}
}

$(document).ready(function(){
			  $(".btnjs").click(function(){
				$(".content1").animate({zIndex:'0'}).$("#transition").animate({width: '100%'},3000);
				$("#transition").animate({width: '0%'},3000);
				
			  });
			});
			
			
function animate()
		{
			$(document).ready(function(){
			 
				$("#transition1").animate({width: '100%',right:'0px'},450);
				$("#transition2").animate({width: '100%',right:'0px'},650);
				$("#transition3").animate({width: '100%',right:'0px'},950);
				$("#transition1").animate({width: '0%'},350);
				$("#transition2").animate({width: '0%'},450);
				$("#transition3").animate({width: '0%'},700);
				
			  
			});
		}