import language from "./language";

const getSectionContent = (lang) => {
  return [
    ...(lang === language.ENGLISH
      ? [
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
        ]
      : [
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
        ]),
  ];
};

export default getSectionContent;