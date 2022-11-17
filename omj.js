function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify"><b>${kw}</b> adalah hasil yang paling sesuai dengan ${postTitle}. Semua yang ada disini dapat anda lihat sebagai referensi untuk menentukan sesuai dengan kenginan. Oleh karena itu, jangan ragu untuk menyimpan data ${kw}</p> <p align="justify"> Jika suatu saat anda memerlukannya, akan memudahkan anda untuk mencarinya.</p></aside>`;
    }
}