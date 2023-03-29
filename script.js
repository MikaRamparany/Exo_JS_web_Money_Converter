
		var euro = document.getElementById("euro");
        
		euro.addEventListener('input', function () {
			document.getElementById("francs").innerHTML = Number((euro.value * 6.55957).toFixed(2)) + " Francs"
		})