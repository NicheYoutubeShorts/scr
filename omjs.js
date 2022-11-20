function autoRelated(data) {
    var out = data[1];		    
	
	var SPINTAX_PATTERN = /\{[^"\r\n\}]*\}/;
	var spin = function (spun) {
	var match;
		while (match = spun.match(SPINTAX_PATTERN)) {
		match = match[0];
   var candidates = match.substring(1, match.length - 1).split("|");
		spun = spun.replace(match, candidates[Math.floor(Math.random() * candidates.length)])
  }
  return spun;
 }
 var sample_str="{adalah|merupakan|pencarian} {yang paling sesuai|yang anda butuhkan}";
 var sample_str1="{Semua yang|Apa yang|Pencarian yang} {Ente|Anda|Saudara|Teman}";
 
  
		
    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
		var kata = document.write(spin(sample_str));
		var kata1 = document.write(spin(sample_str1));
        dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify"><b>${kw}</b> ${kata} dengan ${postTitle}. ${kata2} lihat sebagai referensi untuk menentukan sesuai dengan kenginan. Oleh karena itu, jangan ragu untuk menyimpan data ${kw}</p> <p align="justify"> Jika suatu saat anda memerlukannya, akan memudahkan anda untuk mencarinya.</p></aside>`;
		
		
    }
}
