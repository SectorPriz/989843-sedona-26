var button=document.querySelector(".hotels-search-button"),popup=document.querySelector(".search-form-box-show"),form=document.querySelector(".search-form"),arrival=popup.querySelector("[name=date-arrival]"),departure=popup.querySelector("[name=date-departure]"),grown=popup.querySelector("[name=grown]"),children=popup.querySelector("[name=children]");button.addEventListener("click",function(e){arrival.focus(),popup.classList.contains("search-form-box-show")&&(e.preventDefault(),popup.classList.toggle("search-form-box-hidden"))}),form.addEventListener("submit",function(e){arrival.value&&departure.value&&grown.value&&children.value||(e.preventDefault(),popup.classList.remove("search-form-box-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-form-box-error"))});
