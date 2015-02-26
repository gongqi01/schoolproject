InsertSchool = function (name, code, address, emailDomain) {
	var doc = {
		name : name,
		code : code,
		address : address,
		emailDomain : emailDomain
	};
	Schools.insert(doc);
}

UpdateSchool = function (id, name, code, address, emailDomain) {
	var doc = {
		name : name,
		code : code,
		address : address,
		emailDomain : emailDomain
	};
	Schools.update({
		_id:id
	}, doc);
}

