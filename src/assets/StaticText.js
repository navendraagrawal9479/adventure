import language from "./language";

const getData = (lang) => {
  return {
    images: {
      main_img:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMHRyaXB8ZW58MHx8MHx8&w=1000&q=80",
      middle_section_img:
        "https://img.freepik.com/premium-photo/keywords-travel-world-are-world-map-tourism-concept_11304-1630.jpg?w=2000",
      carousel_imgs: [
        "https://img1.wsimg.com/isteam/stock/107465/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/107467/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/90663/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/43601/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/dYJzQJD/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/44963/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/pm9k1Vn/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/stock/KpkE89z/:/rs=w:370,cg:true,m",
        "https://img1.wsimg.com/isteam/ip/d1095403-9c5b-489b-80e7-4fefa20ede33/alisa-anton-197031-unsplash.jpg/:/rs=w:370,cg:true,m",
      ],
    },
    ...(lang === language.ENGLISH
      ? {
          buttons: {
            destination: "POPULAR DESTINATIONS",
            home: "-HOME",
            faq: "FAQ",
            reviews: "REVIEWS",
            contact: "CONTACT US",
          },
          destinations: [
            "POPULAR DESTINATIONS",
            "ASPEN",
            "POSITANO",
            "AMSTERDAM",
            "AUSTRALIA",
            "BORA BORA",
            "BANFF",
          ],
          main_page: {
            heading: "ADVENTURE AWAITS",
            description: "Let's book the vacation of your dreams!",
            button: "PLAN NOW",
          },
          middle_section: {
            heading: "HOW IT WORKS",
            content: [
              {
                title: "Get to know you",
                content:
                  "We are a group of people who are well-versed in the fun and rigors of traveling. Our travel agency came together to help other people plan and book their dream vacations. We have over 40 years of travel planning between us!",
              },
              {
                title: "Create your Ideal itinerary",
                content:
                  "Whether you're looking for a cruise, plane tickets, accommodations, or the whole package, we have you covered! Simple tell one of our specialists where you want to go and we'll help you figure out the rest. We work directly with other companies to get the best deals.",
              },
              {
                title: "Book your dream vacation",
                content:
                  "While working with us, we want you to be completely happy with the experience. If you have questions about us, our services, or even travel tips, get in touch! We hope you continue to book with us for many years to come.",
              },
            ],
          },
        }
      : {
          buttons: {
            destination: "लोकप्रिय गंतव्य",
            home: "-घर",
            faq: "सामान्य प्रश्न",
            reviews: "समीक्षा",
            contact: "संपर्क करें",
          },
          destinations: [
            "लोकप्रिय गंतव्य",
            "ऐस्पन",
            "एम्स्टर्डम",
            "ऑस्ट्रेलिया",
            "बोरा बोरा",
            "फ्रांस",
            "अमेरिका",
          ],
          main_page: {
            heading: "साहसिक कार्य इंतज़ार कर रहा है",
            description: "आइए अपने सपनों की छुट्टियां बुक करें!",
            button: "अभी योजना बनाएं",
          },
          middle_section: {
            heading: "यह काम किस प्रकार करता है",
            content: [
              {
                title: "हम आपको जान रहे हैं",
                content:
                  "हम ऐसे लोगों का समूह हैं जो यात्रा के मजे और कठोरता से अच्छी तरह वाकिफ हैं। हमारी ट्रैवल एजेंसी अन्य लोगों की योजना बनाने और उनके सपनों की छुट्टियों को बुक करने में मदद करने के लिए एक साथ आई। हमारे बीच 40 से अधिक वर्षों की यात्रा योजना है!",
              },
              {
                title: "अपना आदर्श यात्रा कार्यक्रम बनाएं",
                content:
                  "चाहे आप एक क्रूज, हवाई जहाज का टिकट, आवास, या पूरे पैकेज की तलाश कर रहे हों, हमने आपको कवर किया है! हमारे विशेषज्ञों में से किसी एक को बस यह बताएं कि आप कहां जाना चाहते हैं और बाकी का पता लगाने में हम आपकी मदद करेंगे। सर्वोत्तम सौदे प्राप्त करने के लिए हम सीधे अन्य कंपनियों के साथ काम करते हैं।",
              },
              {
                title: "अपने सपनों की छुट्टी बुक करें",
                content:
                  "हमारे साथ काम करते हुए, हम चाहते हैं कि आप अनुभव से पूरी तरह खुश हों। यदि आपके पास हमारे बारे में, हमारी सेवाओं के बारे में या यहां तक ​​कि यात्रा युक्तियों के बारे में प्रश्न हैं, तो संपर्क करें! हम आशा करते हैं कि आप आने वाले कई वर्षों तक हमारे साथ बुकिंग करते रहेंगे।",
              },
            ],
          },
        }),
  };
};

export default getData;
