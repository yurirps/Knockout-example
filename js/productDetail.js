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
  
    // Controle do Popup
    self.showPopup = function () {
      document.getElementById("popup").style.display = "flex";
    };
  
    self.closePopup = function () {
      document.getElementById("popup").style.display = "none";
    };
  
    // Função para redirecionar para a página de confirmação
    self.confirmPurchase = function () {
      if (self.product()) {
        const productId = self.product().id; // Recupera o ID do produto
        window.location.href = `/purchase-confirm.html?id=${productId}`;
      } else {
        console.error("Produto não está disponível para confirmação.");
      }
    };
  }
  
  // Eventos para fechar o popup
  document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
      });
    }
  });
  
  ko.applyBindings(new ProductDetailViewModel());
  