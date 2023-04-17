import language from "./language";

const getData = (lang) => {
  return {
    images: {
      main_img: 'https://www.libertytravel.com/sites/default/files/styles/full_size/public/adventure-hero.jpg?itok=t6iN0gA7',
      middle_section_img: 'https://img.freepik.com/premium-photo/keywords-travel-world-are-world-map-tourism-concept_11304-1630.jpg?w=2000',
      carousel_imgs: [
        'https://img1.wsimg.com/isteam/stock/107465/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/107467/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/90663/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/43601/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/dYJzQJD/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/44963/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/pm9k1Vn/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/stock/KpkE89z/:/rs=w:370,cg:true,m',
        'https://img1.wsimg.com/isteam/ip/d1095403-9c5b-489b-80e7-4fefa20ede33/alisa-anton-197031-unsplash.jpg/:/rs=w:370,cg:true,m'
      ]
    },
    ...(lang === language.ENGLISH ? {
      buttons: {
        destination: 'POPULAR DESTINATIONS',
        home: 'HOME',
        faq: 'FAQ',
        reviews: 'REVIEWS',
        contact: 'CONTACT US'
      },
      destinations: [
        'POPULAR DESTINATIONS',
        'ASPEN',
        'POSITANO',
        'AMSTERDAM',
        'AUSTRALIA',
        'BORA BORA',
        'BANFF'
      ],
      main_page: {
        heading: 'ADVENTURE AWAITS',
        description: "Let's book the vacation of your dreams!",
        button: 'PLAN NOW'
      }
    } : {
      buttons: {
        destination: 'लोकप्रिय गंतव्य',
        home: 'घर',
        faq: 'सामान्य प्रश्न',
        reviews: 'समीक्षा',
        contact: 'संपर्क करें'
      },
      destinations: [
        'लोकप्रिय गंतव्य',
        'ऐस्पन',
        'एम्स्टर्डम',
        'ऑस्ट्रेलिया',
        'बोरा बोरा',
        'फ्रांस',
        'अमेरिका'
      ],
      main_page: {
        heading: 'साहसिक कार्य इंतज़ार कर रहा है',
        description: "आइए अपने सपनों की छुट्टियां बुक करें!",
        button: 'अभी योजना बनाएं'
      }
    }),
  };
};

export default getData