$('form').click(function() {
	var pages = Number($('#selectPages').val());
	var level = Number($('#selectAcademicLevel').val());
	var deadLine = Number($('#selectDeadline').val());

	var words = pages*275;
	var total = level + deadLine + (pages*3);
	$('#words').html(words + " words");
	$('#total').html(" $" + total);
});

$('input').keyup(function() {
	var pages = Number($('#selectPages').val());
	var level = Number($('#selectAcademicLevel').val());
	var deadLine = Number($('#selectDeadline').val());

	var words = pages*275;
	var total = level + deadLine + (pages*3);
	$('#words').html(words + " words");
	$('#total').html(" $" + total);
});