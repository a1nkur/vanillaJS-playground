const productList = {
  products: [{}, {}, {}],

  render() {
    const renderHook = document.getElementById("app");
    const unorderedList = document.createElement("ul");
    unorderedList.className = "list-collection";

    for (const product of this.products) {
      const list = document.createElement("li");
      list.className = "list-item";
      list.innerHTML = `<div>  ... </div>`;

      unorderedList.append(list);
    }

    renderHook.append(unorderedList);
  },
};

productList.render();
