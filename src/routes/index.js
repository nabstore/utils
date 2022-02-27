import checkoutRoutes from "./checkout";
import monolitoRoutes from "./monolito";
import productsRoutes from "./products";
import usersRoutes from "./users";



const routes = {
    /* mfe-users */
    LOGIN: usersRoutes.LOGIN,
    SIGNUP: usersRoutes.SIGNUP,
    ENDERECOS: usersRoutes.ENDERECOS,
    CREATE_COLABORADOR: usersRoutes.CREATE_COLABORADOR,

    /* mfe-products */
    ABOUT: productsRoutes.ABOUT,
    HOME: productsRoutes.PRODUTOS,
    PRODUTO: productsRoutes.PRODUTO,

    /* mfe-checkout */
    CART: monolitoRoutes.CART,
    CHECKOUT: monolitoRoutes.CHECKOUT,
    CARDS: monolitoRoutes.CARDS,
    COMPRAS: monolitoRoutes.COMPRAS,
    COMPRA: monolitoRoutes.COMPRA,
}

export default routes;