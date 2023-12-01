import apple from '../Images/brands/apple.svg'
import xiaomi from '../Images/brands/xiaomi.png'
import samsung from '../Images/brands/Samsung.svg'
import huawei from '../Images/brands/huawei.svg'
import lg from '../Images/brands/lg.jpg'

const errorImage = 'https://placeholder.com/200'

export const brands = [
    {
        id:1,
        label: 'Apple',
        img:apple,
    },
    {
        id:2,
        label: 'xiaomi',
        img:xiaomi,
    },
    {
        id:3,
        label: 'samsung',
        img:samsung,
    },
    {
        id:4,
        label: 'huawei',
        img:huawei,
    },
    {
        id:5,
        label: 'lg',
        img:lg,
    },
    {
        id:6,
        label: 'error',
        img:errorImage,
    },
    {
        id:7,
        label: 'error',
        img:errorImage,
    },
    {
        id:8,
        label: 'error',
        img:errorImage,
    },
    {
        id:9,
        label: 'error',
        img:errorImage,
    },
]

export const footerFirstBlockLinks = [
    {link:'О Компании'},
    {link:'Новости'},
    {link:'Партнерам'},
    {link:'Вакансии'},
    {link:'Политика конфиденциальности'},
    {link:'Персональные данные'},
    {link:'Правила продаж'},
    {link:'Правила пользования сайта'},
    {link:(
        <>
          На информационном ресурсе
          <br />
          применяются рекомендательные технологии
        </>
      )},
    {link:'Сервисные центры'},
    {link:'О Компании'},

]
export const footerSecondBlockLinks = [
    {link:'Как оформить заказ'},
    {link:'Способы оплаты'},
    {link:'Кредиты'},
    {link:'Доставка'},
    {link:'Статус заказа'},
    {link:'Обмен, возврат, гарантия'},
    {link:'Проверка статуса ремонта'},

]
export const footerThirdBlockLinks = [
    {link:'Юридическим лицам'},
    {link:'Проверка счета'},
    {link:'Корпоративные отделы'},
    {link:'Подарочные карты'},
    {link:'Бонусная программа'},
    {link:'Помощь'},
    {link:'Обратная связь'},

]


  // api.js

export const fetchProducts = async () => {
    const url = `https://dummyjson.com/products?limit=${100}&skip=${10}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error.message || "Что-то пошло не так...";
    }
  };
  