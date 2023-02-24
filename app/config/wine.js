const data = () => {
  return {
    products: [
      {
        id: 'gemma-di-luna-moscato-sparkling',
        name: '蒂芬妮月亮寶石麝香氣泡葡萄酒',
        items: 'Gemma di Luna Moscato Sparkling',
        url: 'https://www.win-sense.com.tw/product-page/%E8%92%82%E8%8A%AC%E5%A6%AE%E6%9C%88%E4%BA%AE%E5%AF%B6%E7%9F%B3moscato-sparkling](https://www.win-sense.com.tw/product-page/%E8%92%82%E8%8A%AC%E5%A6%AE%E6%9C%88%E4%BA%AE%E5%AF%B6%E7%9F%B3moscato-sparkling',
        img: './images/gemma-di-luna-moscato-sparkling.webp',
        star: '4.1'
      },
      {
        id: 'tenjaku-whisky',
        name: '天雀日式調和威士忌',
        items: 'Tenjaku Whisky',
        url: 'https://www.win-sense.com.tw/product-page/天雀日式調和威士忌-tenjaku-whisky',
        img: './images/tenjaku-whisky.png',
        star: ''
      },
      {
        id: 'shes-always-rose-pinot-nero',
        name: '玫瑰少女粉紅酒',
        items: 'She’s Always Rosé Pinot Nero',
        url: 'https://www.win-sense.com.tw/product-page/玫瑰少女粉紅酒-she-s-always-rosé-pinot-nero',
        img: './images/shes-always-rose-pinot-nero.webp',
        star: '3.8'
      },
      {
        id: 'william-peel-double-maturation',
        name: '威廉皮爾雙桶熟成蘇格蘭調和威士忌',
        items: 'William Peel Double Maturation',
        url: 'https://www.win-sense.com.tw/product-page/威廉皮爾雙桶熟成蘇格蘭調和威士忌william-peel-double-maturation',
        img: './images/william-peel-double-maturation.png',
        star: ''
      },
      {
        id: 'tenjaku-pure-malt-whisky',
        name: '天雀純麥威士忌',
        items: 'Tenjaku Pure Malt Whisky',
        url: 'https://www.win-sense.com.tw/product-page/天雀純麥威士忌-tenjaku-pure-malt-whisky',
        img: './images/tenjaku-pure-malt-whisky.webp',
        star: ''
      },
      {
        id: 'voga-pinot-grigio-dell-venezie',
        name: '沃加灰皮諾白葡萄酒(威尼茲產區)',
        items: 'VOGA PINOT GRIGIO DELLE VENEZIE',
        url: 'https://www.win-sense.com.tw/product-page/沃加灰皮諾白葡萄酒-威尼茲產區-voga-pinot-grigio-delle-venezie',
        img: './images/voga-pinot-grigio-dell-venezie.webp',
        star: '3.6'
      },
      {
        id: 'voga-moscato-provincia-di-pavia',
        name: '沃加麝香白葡萄酒(帕維亞省)',
        items: 'VOGA MOSCATO PROVINCIA DI PAVIA',
        url: 'https://www.win-sense.com.tw/product-page/沃加麝香白葡萄酒-帕維亞省-voga-moscato-provincia-di-pavia](https://www.win-sense.com.tw/product-page/%E6%B2%83%E5%8A%A0%E9%BA%9D%E9%A6%99%E7%99%BD%E8%91%A1%E8%90%84%E9%85%92-%E5%B8%95%E7%B6%AD%E4%BA%9E%E7%9C%81-voga-moscato-provincia-di-pavia',
        img: './images/voga-moscato-provincia-di-pavia.webp',
        star: '4.0'
      },
      {
        id: 'voga-rosato-trevenezie-i.g.t',
        name: '沃加粉紅酒(特里威尼托產區)',
        items: 'VOGA ROSATO TREVENEZIE I.G.T',
        url: 'https://www.win-sense.com.tw/product-page/沃加粉紅酒-特里威尼托產區-voga-rosato-trevenezie-i-g-t',
        img: './images/voga-rosato-trevenezie-i.g.t.webp',
        star: '3.6'
      },
      {
        id: 'voga-sparkling-rose-pinot-grigio',
        name: '沃加灰皮諾粉紅氣泡酒',
        items: 'VOGA SPARKLING ROSÉ PINOT GRIGIO',
        url: 'https://www.win-sense.com.tw/product-page/沃加灰皮諾粉紅氣泡酒-voga-sparkling-rosé-pinot-grigio',
        img: './images/voga-sparkling-rose-pinot-grigio.webp',
        star: '3.8'
      },
      {
        id: 'voga-merlot-terre-siciliane-i.g.t',
        name: '沃加梅洛紅葡萄酒(西西里)',
        items: 'VOGA MERLOT TERRE SICILIANE I.G.T',
        url: 'https://www.win-sense.com.tw/product-page/沃加梅洛紅葡萄酒-西西里-voga-merlot-terre-siciliane-i-g-t',
        img: './images/voga-merlot-terre-siciliane-i.g.t.webp',
        star: '3.4'
      },
      {
        id: 'prosecco-spumante-extra-dry-gemma-di-luna',
        name: '蒂芬妮月亮寶石微甜氣泡葡萄酒',
        items: 'Prosecco Spumante Extra Dry Gemma di Luna',
        url: 'https://www.win-sense.com.tw/product-page/prosecco-spumante-extra-dry-gemma-di-luna-蒂芬妮月亮寶石微甜氣泡葡萄酒](https://www.win-sense.com.tw/product-page/prosecco-spumante-extra-dry-gemma-di-luna-%E8%92%82%E8%8A%AC%E5%A6%AE%E6%9C%88%E4%BA%AE%E5%AF%B6%E7%9F%B3%E5%BE%AE%E7%94%9C%E6%B0%A3%E6%B3%A1%E8%91%A1%E8%90%84%E9%85%92',
        img: './images/prosecco-spumante-extra-dry-gemma-di-luna.png',
        star: '4.0'
      },
      {
        id: 'rosso-passito-salento-passopendium',
        name: '阿帕西門多紅葡萄酒',
        items: 'Rosso Passito Salento Passopendium',
        url: 'https://www.win-sense.com.tw/product-page/阿帕西門多紅葡萄酒',
        img: './images/rosso-passito-salento-passopendium.webp',
        star: '3.8'
      },
      {
        id: 'emporium-primitivo-di-manduria',
        name: '安波利(曼都利亞產區)紅葡萄酒',
        items: 'Emporium Primitivo di Manduria',
        url: 'https://www.win-sense.com.tw/product-page/安波利-曼都利亞產區-紅葡萄酒-emporium-primitivo-di-manduria',
        img: './images/emporium-primitivo-di-manduria.webp',
        star: '4.1'
      },
      {
        id: 'aristocratico-lugana-doc',
        name: '貴族盧嘉納白葡萄酒',
        items: 'ARISTOCRATICO Lugana DOC',
        url: 'https://www.win-sense.com.tw/product-page/貴族盧嘉納白葡萄酒aristocratico-lugana-doc',
        img: './images/aristocratico-lugana-doc.webp',
        star: '3.9'
      },
      {
        id: 'appassimento-salento',
        name: '薩倫托紅葡萄酒',
        items: 'APPASSIMENTO SALENTO',
        url: 'https://www.win-sense.com.tw/product-page/薩倫托紅葡萄酒appassimento-salento',
        img: './images/appassimento-salento.webp',
        star: '3.9'
      },
      {
        id: 'lignum-vitis',
        name: '木藤西西里葡萄酒',
        items: 'LIGNUM VITIS',
        url: 'https://www.win-sense.com.tw/product-page/lignum-vitis-木藤西西里葡萄酒',
        img: './images/lignum-vitis.png',
        star: '4.0'
      },
      {
        id: 'vite-mia',
        name: '維特米亞紅葡萄酒',
        items: 'VITE MIA',
        url: 'https://www.win-sense.com.tw/product-page/vite-mia維特米亞紅葡萄酒',
        img: './images/vite-mia.png',
        star: '3.7'
      }
    ]
  };
};

export default data();
