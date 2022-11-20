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
 var sample_str1="{Semua yang|Apa yang|Pencarian yang} {ente|anda|saudara|teman}";
 
    
    	var kw = out[0];
		var kata = spin(sample_str);
		var kata1 = spin(sample_str1);
        dom += `<b>${kw}</b> ${kata} dengan ${postTitle}. ${kata1} lihat sebagai referensi untuk menentukan sesuai dengan kenginan. Oleh karena itu, jangan ragu untuk menyimpan data ${kw}. Jika suatu saat anda memerlukannya, akan memudahkan anda untuk mencarinya.`;
		
	
    
}
