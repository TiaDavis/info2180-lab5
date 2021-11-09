window.onload = function() {

    const  search = document.getElementById('country');
    const  lookUp = document.getElementById('lookup');
    const  cities = document.getElementById('cities');
    const  result = document.getElementById('result');
    const  httpReq= new XMLHttpRequest();
     
    const REG=(url)=>{
      httpReq.onreadystatechange = callback;
      httpReq.open('GET', url);
      httpReq.send();
    }
  
      lookUp.addEventListener('click', function(event) {
      event.preventDefault();
      const searchText = search.value;
      let stored = searchText.trim();
      const  url = `world.php?country=${stored}`;
      REG(url);
    });
  
      cities.addEventListener('click', function(event) {
      event.preventDefault();
      const searchText = search.value;
      let save = searchText.trim();
      const  url = `world.php?country=${save}&context=${save}`;
      REG(url);
    });
  
    
    
    const callback=()=> {
      search.value = '';
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) {
          const res = httpReq.responseText;
          result.innerHTML=res;
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  
  }