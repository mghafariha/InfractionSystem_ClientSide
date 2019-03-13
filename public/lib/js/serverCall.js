function serverCall(url,type,data){
    return $.ajax({
        url: "http://31.47.33.146:8386/"+url,
        type: type?type:"GET",
        data:data
      });
}

