function abbrevName(name){
  
    for (p of name){
      if(p == " "){
        str1 = name[0].toUpperCase()
        str2 = name[name.lastIndexOf(' ')+1].toUpperCase()
        return `${str1}.${str2}`
      }
  
  }
      // code away
  
  }