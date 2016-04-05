function Candidatura(id_form, id_output, callback){

var form=$('form#'+id_form)[0];
//var form_toserialize=$('form#'+id_form);
var formData = new FormData(form);
//console.log(form_toserialize.serialize())
cfUrl='/Candidatura/WithArray';
$.ajax({
		type: "POST",
		url: cfUrl,
		//data: form.serialize(),
		data: formData,
		//dataType: "html",
		success: function(msg)
		{
			//var xml = msg,
			//xmlDoc = $.parseXML( xml ),
			//$xml = $( xmlDoc ),
			//$string = $xml.find( "string" );
			//$('#'+id_output).val(msg);
			//$('#'+id_output).text(msg);
			callback(id_output,msg);
		},
		error: function()
		{
			alert("Chiamata fallita, si prega di riprovare...");
		},
		cache: false,
		contentType: false,
		processData: false
    });
}