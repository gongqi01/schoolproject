QuerySchool = function () {
	return Schools.find();
}


InsertSchool = function (name, code, address, emailDomain) {
	var doc = {
		name : name,
		code : code,
		address : address,
		emailDomain : emailDomain
	};
	return Schools.insert(doc);
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

DeleteSchool = function (id) {
	Schools.remove({_id:id});
}

GetMsg = function (msg,type) {
	var out = "<div id='message' class='alert alert-";
	switch (type) {
		case 1 : out = out + "success'>" + msg + "</div>";break;
		case 2 : out = out + "danger'>" + msg + "</div>"; break;
		default: out = "<div id='message'></div>";
	}
	return out;
}
