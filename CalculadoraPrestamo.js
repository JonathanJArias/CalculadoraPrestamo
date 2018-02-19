
function CalculoPrestamo(){
	var rImporte = document.forms[0].txtImporte.value;
	var rTazaInteres = document.forms[0].txtTazaInteres.value;
	
	if(rImporte!="" && rTazaInteres!=""){
		document.getElementById("txtTotal").value = (((parseFloat(rTazaInteres)*parseFloat(rImporte))/100) + parseFloat(rImporte)).toFixed(2);
		document.getElementById("txtCuotaMensual").value = (document.getElementById("txtTotal").value/12).toFixed(2);
	}else{
		document.getElementById("txtCuotaMensual").value = "";
		document.getElementById("txtTotal").value = "";
	}
}

window.onload = function(){
	var request;
	var requestURL = "https://raw.githubusercontent.com/dariosus/jsonProvincias/master/provincias.json"
	request=new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var cboProvincias = document.getElementById('cboProvincias');
			var sProvincias = request.response;
			
			var sOption;
			for (var i=0; i < sProvincias.length; i++){
				var option = document.createElement("option");
			    option.text = sProvincias[i].state;
				cboProvincias.add(option);
			}
			
		}
	};
	request.open("GET", requestURL, true);
	request.responseType = 'json';
	request.send();
};

