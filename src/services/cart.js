//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
// No seu services/cart.js
async function addItem(userCart, item) {
  // Verifica se o item já existe no carrinho
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound !== -1) {
    userCart[indexFound].quantity += item.quantity;
    console.log(`✅ Aumentada a quantidade de ${item.name}`);
    return;
  }

  userCart.push(item);
  console.log(`✅ Item ${item.name} adicionado com sucesso!`);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\n🛒 Detalhes do seu carrinho Shopee:");
  
  const formatCurrency = (value) => 
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name.toUpperCase()} 
       Preço: ${formatCurrency(item.price)} | Qtd: ${item.quantity} 
       Subtotal: ${formatCurrency(item.subtotal())}`
    );
  });
}
async function moveToWishlist(userCart, wishlist, itemName) {
  const index = userCart.findIndex((item) => item.name === itemName);
  if (index !== -1) {
    const [item] = userCart.splice(index, 1);
    wishlist.push(item);
    console.log(`📌 Item ${itemName} movido para a sua lista de desejos!`);
  }
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart, moveToWishlist };
