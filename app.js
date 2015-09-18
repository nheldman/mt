$(function() {
	$.ajax({
		url: '/@api/deki/users?dream.out.format=json',
		data: {
			username: 'companyuser1',
			email: 'noah.heldman+1@gmail.com',
			fullname: 'Noah Heldman',
			status: 'active'
		},
		method: 'POST'
		success: function(data, status, xhr) {
			console.log(data);
		},
		error: function(xhr, status, message) {
			alert(status + ': ' + message);
		}
	});

	$.ajax({
		url: 'https://salty-dusk-6852.herokuapp.com/api/users',
		success: function(data, status, xhr) {
			console.log(data);
		},
		error: function(xhr, status, message) {
			alert(status + ': ' + message);
		}
	});
});