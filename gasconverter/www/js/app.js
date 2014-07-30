$(document).ready(function(){
	$("#gasPrice").bind('input',function(){
		calculateGasPrice();
	});
	
	$("input:radio[name=radio-choice]").change(function(){
		calculateGasPrice();
	});
	
	function calculateGasPrice(){
		var gasPrice = $("#gasPrice").val();
		var unit = $("input:radio[name=radio-choice]:checked").val();
		var otherUnit;
		var convertedGasPrice;
		if(unit=="liter"){
			otherUnit="galon";
			convertedGasPrice = gasPrice * 3.78541;
		}else{
			otherUnit="liter";
			convertedGasPrice = gasPrice * 0.264172;
		}
		$("#answer").text("Gas at  " +gasPrice + " $ a "+ unit + " is equal to " + convertedGasPrice.toFixed(2) +" $ a "+ otherUnit);
		

	}
});

