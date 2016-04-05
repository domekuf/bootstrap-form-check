/* DOCUMENT READY */
$(document).ready(function() {
		initForm();
		$('.datepicker').datepicker();
		$('#date-div').datepicker({
			format: "mmddyyyy",
			language: "it"
		}).on('changeDate', function(e){
			$('#iDataNascita').val(e.format('ddmmyyyy'))
		});
});
var currentTab=0;
var totalTab=0;
var currentTitoloStudio='noone';
var okCampiModulo=1;
var utenteRegistrato=0;

function initForm(){
	$('#diploma').hide();
	$('#laurea').hide();
	$('.CandidaTab').hide();
	$('.CandidaTab#tab-0').show();
	totalTab=$('.CandidaTab').length;
	currentTab=0;
	utenteRegistrato=0;
	$('#candNavIndietro').hide();
	
	$('#candNavIndietro').on('click', function (){
		if(currentTab>0){
			updateForm(-1);
		}
	});
	$('#candNavAvanti').on('click', function (){
		if(currentTab<totalTab-1){
			updateForm(1);
		}
	});
	$('#utente_registrato_checkbox').on('click', function (){
		updatePasswordRow($(this).is(':checked'));
	});
	$('#titolo_studio').on('change', function (){
		updateTitoloStudio($(this).val())
	});
}
function updatePasswordRow(_currVal){
	utenteRegistrato=_currVal;
	if(_currVal){
		$('#iPasswordRow').fadeIn(300);
		$('#iPassword').addClass('nonEmptyField');
	}else{
		$('#iPasswordRow').fadeOut(300);
		$('#iPassword').removeClass('nonEmptyField');
	}
	//console.log(_currVal);
}
function updateForm(op){
	$('.CandidaTab#tab-'+currentTab).fadeOut(300,function(){
		currentTab+=op;
		$('.CandidaTab#tab-'+currentTab).fadeIn(300);
		$('#candNavIndietro').hide();
		$('#candNavAvanti').hide();
		if(currentTab<totalTab-1){
			$('#candNavAvanti').show();
		}
		if(currentTab>0){
			$('#candNavIndietro').show();
		}
	});
}

function updateTitoloStudio(which){
	//console.log('updateTitoloStudio: '+which);
	//console.log($('#'+currentTitoloStudio).css('display'));
	$('#'+currentTitoloStudio).fadeOut(300,function(){
		//console.log('fadeOut: '+currentTitoloStudio);
		currentTitoloStudio=which;
		$('#'+currentTitoloStudio).fadeIn(300);
		
		//console.log('fadeIn: '+currentTitoloStudio);
	});
}

function isNonEmpty(_this){
	//console.log($(this));
	//console.log(_this);
	if(_this.val().trim()==""){
		_this.parent().parent().removeClass("has-success");
		_this.parent().parent().addClass("has-error");
		okCampiModulo = okCampiModulo * 0;
	}else{
		_this.parent().parent().removeClass("has-error");
		_this.parent().parent().addClass("has-success");
		okCampiModulo = okCampiModulo * 1;
	}
}
function printError(msg){
	$('#campo_errore').text(msg);
}

function checkFileAllegato(){
	var filename = $('#fileCurriculum')[0].value;
	var extension = filename.split('.').pop();

	if($('#fileCurriculum')[0].files.length>0){
		if(extension != "doc" || extension != "docx" || extension != "pdf" ){
			return 1;
		}else{
			return 0;
		}
	}else{
		return 0;
	}
}

function check_Candidatura(input, output, callback){
	//console.log($('form').serialize());
	
	okCampiModulo=1;
	var nonEmptyFields = $('.nonEmptyField');
	
	nonEmptyFields.each(function(){
		isNonEmpty($(this));
	});
	
	if(okCampiModulo==1){
		if(checkFileAllegato()==1){
			Candidatura(input, output, callback);
		}else{
			printError($('#errore_file_allegato').val()); //prende la lbl dall'html
		}
	}else{
		printError($('#campi_obbligatori_vuoti').val()); //prende la lbl dall'html
	}
}

function get_risultato(id_output,msg){
	$('#'+id_output).text(msg);
	$('.CandidaTab#tab-'+(totalTab-1)).fadeOut(300,function(){
		$('#tab-risultato').fadeIn(300);
	});
	$('#candNavIndietro').hide();
	$('#candNavAvanti').hide();
}

















