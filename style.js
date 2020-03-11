var table_list = [
    ['BMW Brussels','-centrauto.html'],
    ['Depotter','.html#/dlo?dealer=05617_01'], 
    ['Ginion','-ginion.html'],
    ['Gregoir','.html#/dlo?dealer=05670_01'],
    ['Jean-Michel Martin','-centrauto.html'],
    ['Jorssens','.html#/dlo?dealer=05670_01'],
    ['Motorrad','-centrauto.html'],
    ['Tanghe','.html#/dlo?dealer=05670_01'],
    ['van den Broeck','-ginion.html'],
    ]

    
    var list = document.getElementById("list");
    var html = "";

    for (var i = 0; i< table_list.length; i++)  {
    html += '<a href="https://www.bmw.be/' + 'nl_BE' + '/ssl/campaigns/roadshow-1-series/contest' +  table_list[i][1] + '"class="link"  onclick="link(this);">' +  table_list[i][0] + '</a>';
    list.innerHTML =  html;
    }

    function link(link) {
        localStorage.setItem('link', link.getAttribute("href"));
    }
     

    
    function filterFunction() {
      var input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          div = document.getElementById("myDropdown");
          a = div.getElementsByTagName("a");
      for (j = 0; j < a.length; j++) {
          
        txtValue = a[j].textContent || a[j].innerText;
        var str = txtValue.toUpperCase();
        var n = str.indexOf(filter, 0);
        if (!n) {
          a[j].style.display = "";
        } else {
          a[j].style.display = "none";
        }
      }
    }
