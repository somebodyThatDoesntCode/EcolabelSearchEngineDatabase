async function update(e) {
  var input = document.getElementById("input");
  var suggestions = document.getElementById("suggestions");
  var idxs = [];
  
  var response = await fetch("https://raw.githubusercontent.com/somebodyThatDoesntCode/EcolabelSearchEngineDatabase/main/search.txt");
  var txt = await response.text();
  var directory = txt.split(" ");
  
  let found = input.value;
  idxs = [];
  suggestions.style.display = "none"
  suggestions.innerHTML = "";
  for (i = 0; i < directory.length; i++) {
    if (found.trim() == "") {
      continue;
    }
    if (directory[i].includes(found.toLowerCase())) {
      idxs.push(i);
      let el = document.createElement("button");
      el.secretValue = directory[i];
      el.style.border = "none";
      el.style.backgroundColor = "none";
      el.onclick = (E) => {
        E.preventDefault();
        let found = input.value;
        input.value = "";
        if (idxs.length < 1) return;
        let a = document.createElement("a");
        a.setAttribute("target", "_self");
        a.href = "https://sites.google.com/pausd.us/ecolabel-search-engine/" + E.target.secretValue;
        a.click();
      };
      el.innerHTML = directory[i];
      suggestions.appendChild(el);
      suggestions.style.display = "initial";
    }
  }
}
