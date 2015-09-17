$(function() {
	$.ajax({
		url: '/@api/deki/users?dream.out.format=json',
		data: {},
		success: function(data, status, xhr) {
			console.log(data);
			$('#CompanyUsers').html(data);
		},
		error: function(xhr, status, message) {
			alert(status + ': ' + message);
		}
	});
});