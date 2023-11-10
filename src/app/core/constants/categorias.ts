import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://www.lanacion.com.ar/resizer/v2/hamburguesa-blt-de-john-john-burger-bacon-lettuce-RHVGX3MHVRB7VGEXBEVCCZHW5I.jpg?auth=53776ee5a203ae1fbe457df3473f7c2d9470016ad51a458c73c5b950966a4f57&width=880&height=586&quality=70&smart=true',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguesa Clásica',
        precio: 2850,
        ingredientes: [
          'carne de res',
          'pan de hamburguesa',
          'lechuga',
          'tomate',
          'Cebolla',
          'queso cheddar',
          'Salsa de mayonesa y ketchup',
        ],
        imagen:
          'https://assets.unileversolutions.com/recipes-v2/218401.jpg?im=Resize,height=530;Crop,size=(540,530),gravity=Center',
      },
      {
        id: 2,
        nombre: 'Hamburguesa Vegetariana',
        precio: 3000,
        ingredientes: [
          'hamburguesa de garbanzos',
          'Pan integral',
          'espinacas',
          'tomate',
          'cebolla morada',
          'queso suizo',
          'Salsa de yogurt y hierbas',
        ],
        imagen:
          'https://mandolina.co/wp-content/uploads/2023/06/Hamburguesa-vegetariana-1024x521.png',
      },
      {
        id: 3,
        nombre: 'Hamburguesa BBQ',
        precio: 3250,
        ingredientes: [
          'Carne de cerdo desmenuzada',
          'Pan de hamburguesa de cebolla',
          'Ensalada de col',
          'Cebolla caramelizada',
          'queso ahumado]',
        ],
        imagen:
          'https://images.hola.com/imagenes/cocina/recetas/20200527168848/hamburguesa-ternera-bacon-salsa-barbacoa/0-828-666/burger-barbacoa-t.jpg?tx=w_1200',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Pizza Margarita',
        precio: 5000,
        ingredientes: [
          'Masa de pizza',
          'salsa de tomate',
          'mozzarella fresca',
          'Albahaca fresca',
          'aceite de oliva',

        ],
        imagen:
          'https://imag.bonviveur.com/pizza-margarita_1000.webp',
      },
      {
        id: 5,
        nombre: 'Pizza de peperoni',
        precio: 5200,
        ingredientes: [
          'Masa de pizza',
          'salsa de tomate',
          'Queso mozzarella',
          'Pepperoni',
          'Orégano',
        ],
        imagen:
          'https://www.lavanguardia.com/uploads/2017/11/21/5e9977a58c570.jpeg',
      },
      {
        id: 6,
        nombre: 'Pizza Vegetariana',
        precio: 5300,
        ingredientes: [
          'Masa de pizza integral',
          'salsa de tomate',
          'champiñones',
          'Pimientos rojos y verdes',
          'Cebolla',
          'Queso mozzarella',
          'Aceitunas negras',
        ],
        imagen:
          'https://i.blogs.es/14976c/pizza_vegetariana/1024_2000.jpeg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://cocina-familiar.com/wp-content/uploads/2022/06/recetas-de-postre-para-el-verano.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Tarta de Chocolate',
        precio: 1800,
        ingredientes: [
          'bizcocho de chocolate',
          'crema de chocolate',
          'virutas de chocolate',
          'nata montada',
          'Frambuesas frescas',
        ],
        imagen: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ruj2gf670d_img-3724-1024x683.jpg.webp',
      },
      {
        id: 8,
        nombre: 'Helado de Vainilla con Brownie',
        precio: 1900,
        ingredientes: [
          'helado de vainilla',
          'Trozos de brownie',
          'salsa de caramelo',
          'Nueces picadas',
        ],
        imagen:
          'https://unareceta.com/wp-content/uploads/2015/07/brownie-con-helado-818x543.jpg',
      },
      {
        id: 9,
        nombre: 'Tiramisu',
        precio: 2000,
        ingredientes: [
          'Vainillas',
          'Café expreso',
          'queso mascarpone',
          'cacao en polvo',
          'Licor de café',
        ],
        imagen:
          'https://vinomanos.com/wp-content/uploads/2022/11/Tiramisu.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Soft_drink_shelf_2.jpg/375px-Soft_drink_shelf_2.jpg',
    productos: [
      {
        id: 10,
        nombre: 'Agua',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://www.vendival.com/wp-content/uploads/2019/02/Co%CC%81mo-saber-si-la-marca-de-agua-embotellada-que-bebes-es-de-mala-calidad.jpg',
      },
      {
        id: 11,
        nombre: 'Limonada Casera',
        precio: 1200,
        ingredientes: [
          'limones',
          'agua',
          'Azúcar',
          'Hielo',
          'Rodajas de limón para decorar',
        ],
        imagen:
          'https://www.cocinatis.com/archivos/202207/CTIS0042-receta-limonada_desktop_horizontal_full_width.jpg',
      },
      {
        id: 12,
        nombre: 'Coca cola',
        precio: 1000,
        ingredientes: [],
        imagen:
          'https://laopinion.com/wp-content/uploads/sites/3/2019/10/coca-cola-sabor-botella-vidrio.jpg?resize=1316,740&quality=80',
      },
    ],
  },
];
