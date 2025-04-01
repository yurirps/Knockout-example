function ProductDetailViewModel() {
    let self = this;
    self.product = ko.observable();
  
    // Função para obter o ID da URL
    function getProductIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }
  
    // Buscar os detalhes do produto
    const productId = getProductIdFromUrl();
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => {
          data.formattedPrice = "R$ " + data.price.toFixed(2).replace(".", ",");
          self.product(data);
        })
        .catch(error => console.error("Erro ao buscar detalhes do produto:", error));
    } else {
      console.error("ID do produto não encontrado na URL.");
    }
  }
  
  ko.applyBindings(new ProductDetailViewModel());
  