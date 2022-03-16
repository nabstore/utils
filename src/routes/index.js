import checkoutRoutes from "./checkout";
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
    CART: checkoutRoutes.CART,
    CHECKOUT: checkoutRoutes.CHECKOUT,
    CARDS: checkoutRoutes.CARDS,
    COMPRAS: checkoutRoutes.COMPRAS,
    COMPRA: checkoutRoutes.COMPRA,
}

export default routes;