function AppViewModel() {
    let self = this;
    self.products = ko.observableArray([]);

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                product.formattedPrice = "R$ " + product.price.toFixed(2).replace(".", ",");
            });

            self.products(data);

            
            initializeCarousel();
        })
        .catch(error => console.error("Erro ao buscar produtos:", error));
}

ko.applyBindings(new AppViewModel());