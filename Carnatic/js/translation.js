
const MAP_LANG_DICT = {
    'English': 'English',
    'தமிழ்': 'Tamil',
    'తెలుగు': 'Telugu',
    'ಕನ್ನಡ': 'Kannada',
    'മലയാളം': 'Malayalam',
    'हिंदी': 'Hindi',
    'मराठी': 'Marathi',
    'বাংলা': 'Bengali',
    'ગુજરાતી': 'Gujarati',
    'ਪੰਜਾਬੀ': 'Punjabi',
    'ଓଡ଼ିଆ': 'Odia',
    'অসমীয়া': 'Assamese'
}

const MAP_ISO_DICT = {
    'English':   'en-IN',
    'Tamil':     'ta-IN',
    'Telugu':    'te-IN',
    'Kannada':   'kn-IN',
    'Malayalam': 'ml-IN',
    'Hindi':     'hi-IN',
    'Marathi':   'mr-IN',
    'Bengali':   'bn-IN',
    'Gujarati':  'gu-IN',
    'Punjabi':   'pa-IN',
    'Odia':      'or-IN',
    'Assamese':  'as-IN'
}

const MAP_DOT_DICT = {
    'hindi': '\\u094D',
    'marathi': '\\u094D',
    'bengali': '\\u09CD',
    'gujarati': '\\u0ACD',
    'punjabi': '\\u0A4D'
};

const MAP_INFO_DICT = {
    'English': {
        'App Title': 'Youtube Music Collection',
        'Carnatic': 'Carnatic Music',
        'Hindustani': 'Hindustani Music',
        'Raga': 'Raga',
        'Artist': 'Artist',
        'Composer': 'Composer',
        'Type': 'Type',
        'Song': 'Song',
        'About': 'About',
        'Info': 'Info',
        'Stats': 'Stats',
        'Sahitya': 'Sahitya',
        'Search': 'Search',
        'Playlist': 'Playlist',
        'References': 'References',
        'Born': 'Born',
        'Died': 'Died',
        'Melakartha': 'Melakartha',
        'Gharana': 'Gharana',
        'Thaat': 'Thaat',
        'Arohana': 'Arohana',
        'Avarohana': 'Avarohana',
        'Tala': 'Tala',
        'Tala name': 'Tala name',
        'Tala angas': 'Tala angas',
        'Tala count': 'Tala count',
        'Language': 'Language',
        'God': 'God',
        'English': 'English',
        'Tamil': 'Tamil',
        'Telugu': 'Telugu',
        'Kannada': 'Kannada',
        'Malayalam': 'Malayalam',
        'Hindi': 'Hindi',
        'Sanskrit': 'Sanskrit',
        'Videos': 'Videos',
        'Ragas': 'Ragas',
        'Artists': 'Artists',
        'Composers': 'Composers',
        'Types': 'Types',
        'Songs': 'Songs',
        'Duration': 'Duration',
        'Views': 'Views',
        'Categories': 'Categories',
        'Menu': 'Menu',
        'Home': 'Home',
        'Fetch': 'Fetching data, Please wait...',
        'Updated': 'Updated',
        'Search Results': 'Search Results'
    },
    'Tamil': {
        'App Title': 'யூடியூப் இசை தொகுப்பு',
        'Carnatic': 'கர்நாடக இசை',
        'Hindustani': 'இந்துஸ்தானி இசை',
        'Raga': 'ராகம்',
        'Artist': 'கலைஞர்',
        'Composer': 'கவிஞர்',
        'Type': 'வகை',
        'Song': 'பாடல்',
        'About': 'பற்றி',
        'Info': 'தகவல்',
        'Stats': 'புள்ளிவிவரம்',
        'Sahitya': 'சாகித்தியம்',
        'Search': 'தேடு',
        'Playlist': 'பிளேலிஸ்ட்',
        'References': 'குறிப்புகள்',
        'Born': 'பிறப்பு',
        'Died': 'இறப்பு',
        'Melakartha': 'மேளகர்த்தா',
        'Gharana': 'கரானா',
        'Thaat': 'தாட்',
        'Arohana': 'ஆரோகணம்',
        'Avarohana': 'அவரோகணம்',
        'Tala': 'தாளம்',
        'Tala name': 'தாள பெயர்',
        'Tala angas': 'தாள அங்கங்கள்',
        'Tala count': 'தாள எண்ணிக்கை',
        'Language': 'மொழி',
        'God': 'இறைவன்',
        'English': 'ஆங்கிலம்',
        'Tamil': 'தமிழ்',
        'Telugu': 'தெலுங்கு',
        'Kannada': 'கன்னடா',
        'Malayalam': 'மலையாளம்',
        'Hindi': 'இந்தி',
        'Sanskrit': 'சமஸ்கிருதம்',
        'Videos': 'வீடியோக்கள்',
        'Ragas': 'ராகங்கள்',
        'Artists': 'கலைஞர்கள்',
        'Composers': 'கவிஞர்கள்',
        'Types': 'வகைகள்',
        'Songs': 'பாடல்கள்',
        'Duration': 'காலம்',
        'Views': 'பார்வைகள்',
        'Categories': 'பகுப்புகள்',
        'Menu': 'பட்டியல்',
        'Home': 'முகப்பு',
        'Fetch': 'தரவைப் பெறுகிறோம், தயவுசெய்து காத்திருங்கள்',
        'Updated': 'புதுப்பிக்கப்பட்டது',
        'Search Results': 'தேடல் முடிவுகள்'
    },
    'Telugu': {
        'App Title': 'యూట్యూబ్ మ్యూజిక్ కలెక్షన్',
        'Carnatic': 'కర్ణాటక సంగీతం',
        'Hindustani': 'హిందుస్తానీ సంగీతం',
        'Raga': 'రాగం',
        'Artist': 'కళాకారుడు',
        'Composer': 'కవి',
        'Type': 'రకము',
        'Song': 'పాట',
        'About': 'గురించి',
        'Info': 'సమాచారం',
        'Stats': 'గణాంకాలు',
        'Sahitya': 'సాహిత్యం',
        'Search': 'వెతకండి',
        'Playlist': 'ప్లేలిస్ట్',
        'References': 'ప్రస్తావనలు',
        'Born': 'జననం',
        'Died': 'మరణం',
        'Melakartha': 'మేళకర్త',
        'Gharana': 'ఘరానా',
        'Thaat': 'థాట్',
        'Arohana': 'ఆరోహణ',
        'Avarohana': 'అవరోహణ',
        'Tala': 'తాలా',
        'Tala name': 'తాలా పేరు',
        'Tala angas': 'తాలా అంగస్',
        'Tala count': 'తాలా లెక్కింపు ',
        'Language': 'భాష',
        'God': 'దేవుడు',
        'English': 'ఆంగ్లం',
        'Tamil': 'తమిళం',
        'Telugu': 'తెలుగు',
        'Kannada': 'కన్నడ',
        'Malayalam': 'మలయాళం',
        'Sanskrit': 'సంస్కృతo',
        'Hindi': 'సంస్కృతo',
        'Videos': 'వీడియోలు',
        'Ragas': 'రాగాలు',
        'Artists': 'కళాకారులు',
        'Composers': 'కవులు',
        'Types': 'రకాలు',
        'Songs': 'పాటలు',
        'Duration': 'వ్యవధి',
        'Views': 'వీక్షణలు',
        'Categories': 'కేటగిరీలు',
        'Menu': 'మెను',
        'Home': 'హోమ్',
        'Fetch': 'మేము డేటాను పొందుతున్నాము, దయచేసి వేచి ఉండండి',
        'Updated': 'నవీకరించబడింది',
        'Search Results': 'శోధన ఫలితాలు'
    },
    'Kannada': {
        'App Title': 'ಯುಟ್ಯೂಬ್ ಸಂಗೀತ ಸಂಗ್ರಹ',
        'Carnatic': 'ಕರ್ನಾಟಕ ಸಂಗೀತ',
        'Hindustani': 'ಹಿಂದುಸ್ಥಾನಿ ಸಂಗೀತ',
        'Raga': 'ರಾಗ',
        'Artist': 'ಕಲಾವಿದ',
        'Composer': 'ಕವಿ',
        'Type': 'ವಿಧ',
        'Song': 'ಹಾಡು',
        'About': 'ಬಗ್ಗೆ',
        'Info': 'ಮಾಹಿತಿ',
        'Stats': 'ಅಂಕಿಅಂಶಗಳು',
        'Sahitya': 'ಸಾಹಿತ್ಯ',
        'Search': 'ಹುಡುಕಿ',
        'Playlist': 'ಪ್ಲೇಲಿಸ್ಟ್',
        'References': 'ಉಲ್ಲೇಖಗಳು',
        'Born': 'ಜನನ',
        'Died': 'ಮರಣ',
        'Melakartha': 'ಮೇಳಕರ್ತ',
        'Gharana': 'ಘರಾನಾ',
        'Thaat': 'ಥಾಟ್',
        'Arohana': 'ಆರೋಹಣ',
        'Avarohana': 'ಅವರೋಹಣ',
        'Tala': 'ತಾಳಾ',
        'Tala name': 'ತಾಳಾ ಹೆಸರು',
        'Tala angas': 'ತಾಳಾ ಅಂಗಗಳು',
        'Tala count': 'ತಾಳಾ ಎಣಿಕೆ',
        'Language': 'ಭಾಷೆ',
        'God': 'ದೇವರು',
        'English': 'ಆಂಗ್ಲ',
        'Tamil': 'ತಮಿಳು',
        'Telugu': 'ತೆಲುಗು',
        'Kannada': 'ಕನ್ನಡ',
        'Malayalam': 'ಮಲಯಾಳಂ',
        'Sanskrit': 'ಸಂಸ್ಕೃತ',
        'Hindi': 'ಹಿಂದಿ',
        'Videos': 'ವೀಡಿಯೊಗಳು',
        'Ragas': 'ರಾಗಗಳು',
        'Artists': 'ಕಲಾವಿದರು',
        'Composers': 'ಕವಿಗಳು',
        'Types': 'ವಿಧಗಳು',
        'Songs': 'ಹಾಡುಗಳು',
        'Duration': 'ಅವಧಿ',
        'Views': 'ವೀಕ್ಷಣೆಗಳು',
        'Categories': 'ವರ್ಗಗಳು',
        'Menu': 'ಮೆನು',
        'Home': 'ಮುಖಪುಟ',
        'Fetch': 'ನಾವು ಡೇಟಾವನ್ನು ಪಡೆಯುತ್ತಿದ್ದೇವೆ, ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ',
        'Updated': 'ನವೀಕರಿಸಲಾಗಿದೆ',
        'Search Results': 'ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು'
    },
    'Malayalam': {
        'App Title': 'യൂട്യൂബ് സംഗീത ശേഖരം',
        'Carnatic': 'കർണാടക സംഗീതം',
        'Hindustani': 'ഹിന്ദുസ്ഥാനി സംഗീതം',
        'Raga': 'രാഗം',
        'Artist': 'കലാകാരി',
        'Composer': 'കവി',
        'Type': 'തരം',
        'Song': 'ഗാനം',
        'About': 'കുറിച്ച്',
        'Info': 'വിവരങ്ങൾ',
        'Stats': 'സ്ഥിതിവിവരക്കണക്കുകൾ',
        'Sahitya': 'സാഹിത്യം',
        'Search': 'തിരയൽ',
        'Playlist': 'പ്പ്ളേലിസ്ട്',
        'References': 'കുറിപ്പുകൾ',
        'Born': 'ജനനം ',
        'Died': 'മരണം',
        'Melakartha': 'മേളകർത്താ',
        'Gharana': 'ഘരാന',
        'Thaat': 'ഥാട്',
        'Arohana': 'ആരോഹണം',
        'Avarohana': 'അവരോഹണം',
        'Tala': 'താളം',
        'Tala name': 'താളം പേര്',
        'Tala angas': 'താളം അംഗങ്ങൾ',
        'Tala count': 'താളം എണ്ണം',
        'Language': 'ഭാഷ',
        'God': 'ദൈവം',
        'English': 'ഇംഗ്ലീഷ്',
        'Tamil': 'തമിഴ്',
        'Telugu': 'തെലുങ്ക്',
        'Kannada': 'കന്നഡ',
        'Malayalam': 'മലയാളം',
        'Sanskrit': 'സംസ്കൃതം',
        'Hindi': 'ഹിന്ദി',
        'Videos': 'വീഡിയോകൾ',
        'Ragas': 'രാഗങ്ങൾ',
        'Artists': 'കലാകാരന്മാർ',
        'Composers': 'കവികൾ ',
        'Types': 'തരങ്ങൾ',
        'Songs': 'ഗാനങ്ങൾ',
        'Duration': 'കാലാവധി',
        'Views': 'കാഴ്ചകൾ',
        'Categories': 'വർഗ്ഗങ്ങൾ',
        'Menu': 'മെനു',
        'Home': 'ഹോം',
        'Fetch': 'ഞങ്ങൾക്ക് ഡാറ്റ ലഭിക്കുന്നു, ദയവായി കാത്തിരിക്കുക',
        'Updated': 'നവീകരിക്കുക',
        'Search Results': 'തിരയൽ ഫലങ്ങൾ'
    },
    'Hindi': {
        'App Title': 'यूट्यूब संगीत संग्रह',
        'Carnatic': 'कर्नाटक संगीत',
        'Hindustani': 'हिन्दुस्तानी संगीत',
        'Raga': 'राग',
        'Artist': 'कलाकार',
        'Composer': 'गीतकार',
        'Type': 'प्रकार',
        'Song': 'गीत',
        'About': 'बारे',
        'Info': 'जानकारी',
        'Stats': 'आंकड़े',
        'Sahitya': 'साहित्य',
        'Search': 'खोज',
        'Playlist': 'प्लेलिस्ट',
        'References': 'संदर्भ',
        'Born': 'जन्म',
        'Died': 'मरण',
        'Melakartha': 'मेलकर्ता',
        'Gharana': 'घराना',
        'Thaat': 'ठाट',
        'Arohana': 'आरोही',
        'Avarohana': 'अवरोही',
        'Tala': 'ताल',
        'Tala name': 'ताल नाम',
        'Tala angas': 'ताल आगा',
        'Tala count': 'ताल गिनती',
        'Language': 'भाषा',
        'God': 'भगवान',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'वीडियो',
        'Ragas': 'राग',
        'Artists': 'कलाकार',
        'Composers': 'गीतकार',
        'Types': 'प्रकार',
        'Songs': 'गाने',
        'Duration': 'अवधि',
        'Views': 'विचारों',
        'Categories': 'श्रेणियाँ',
        'Menu': 'मेन्यू',
        'Home': 'होम',
        'Fetch': 'हमें डेटा मिल रहा है, कृपया प्रतीक्षा करें',
        'Updated': 'अपडेट',
        'Search Results': 'खोज परिणाम'
    },
    'Marathi': {
        'App Title': 'यूट्यूब संगीत संग्रह',
        'Carnatic': 'कर्नाटक संगीत',
        'Hindustani': 'हिंदुस्थानी संगीत',
        'Raga': 'राग',
        'Artist': 'कलाकार',
        'Composer': 'गीतकार',
        'Type': 'प्रकार',
        'Song': 'गीत',
        'About': 'बद्दल',
        'Info': 'माहिती',
        'Stats': 'आकडेवारी',
        'Sahitya': 'साहित्य',
        'Search': 'शोधा',
        'Playlist': 'प्लेलिस्ट',
        'References': 'संदर्भ',
        'Born': 'जन्म',
        'Died': 'मरण',
        'Melakartha': 'मेळकर्ता',
        'Gharana': 'घराना',
        'Thaat': 'ठाट',
        'Arohana': 'आरोही',
        'Avarohana': 'अवरोही',
        'Tala': 'ताल',
        'Tala name': 'ताल नाम',
        'Tala angas': 'ताल आगा',
        'Tala count': 'ताल गिनती',
        'Language': 'भाषा',
        'God': 'भगवान',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'व्हिडिओ',
        'Ragas': 'राग',
        'Artists': 'कलाकार',
        'Composers': 'गीतकार',
        'Types': 'प्रकार',
        'Songs': 'गाणी',
        'Duration': 'कालावधी',
        'Views': 'दृश्ये',
        'Categories': 'श्रेणी',
        'Menu': 'मेन्यू',
        'Home': 'होम',
        'Fetch': 'आम्हाला डेटा मिळत आहे, कृपया प्रतीक्षा करा',
        'Updated': 'अपडेट',
        'Search Results': 'शोध परिणाम'
    },
    'Bengali': {
        'App Title': 'ইউটিউব সংগীত সংগ্রহ',
        'Carnatic': 'কার্নেটিক সঙ্গীত',
        'Hindustani': 'হিন্দুস্তানি সঙ্গীত',
        'Raga': 'রাগ',
        'Artist': 'কলাভৃৎ',
        'Composer': 'গীতিকার',
        'Type': 'প্রকার',
        'Song': 'গীত',
        'About': 'সম্পর্কিত',
        'Info': 'তথ্য',
        'Stats': 'পরিসংখ্যান',
        'Sahitya': 'সাহিত্য',
        'Search': 'অনুসন্ধান',
        'Playlist': 'প্লেলিস্ট',
        'References': 'তথ্যসূত্র',
        'Born': 'জন্ম',
        'Died': 'মৃত্যু',
        'Melakartha': 'মেলকর্তা',
        'Gharana': 'ঘরানা',
        'Thaat': 'ঠাট',
        'Arohana': 'আরোহী',
        'Avarohana': 'অবরোহী',
        'Tala': 'তাল',
        'Tala name': 'তাল নাম',
        'Tala angas': 'তাল অ্যাঙ্গাস',
        'Tala count': 'তাল গণনা',
        'Language': 'ভাষা',
        'God': 'সৃষ্টিকর্তা',
        'English': 'ইংরেজি',
        'Tamil': 'তামিল',
        'Telugu': 'তেলেগু',
        'Kannada': 'কান্নাডা',
        'Malayalam': 'মালায়ালাম',
        'Hindi': 'হিন্দি',
        'Videos': 'ভিডিও',
        'Ragas': 'রাগ',
        'Artists': 'কলাভৃৎ',
        'Composers': 'গীতিকার',
        'Types': 'প্রকার',
        'Songs': 'গীত',
        'Duration': 'সময়কাল',
        'Views': 'দেখুন',
        'Categories': 'বিষয়শ্রেণী',
        'Menu': 'মেনু',
        'Home': 'হোম',
        'Fetch': 'আমরা ডেটা পাচ্ছি, দয়া করে অপেক্ষা করুন',
        'Updated': 'আপডেট',
        'Search Results': 'অনুসন্ধান ফলাফল'
    },
    'Gujarati': {
        'App Title': 'યુટ્યુબ સંગીત સંગ્રહ',
        'Carnatic': 'કાર્નેટિક સંગીત',
        'Hindustani': 'હિન્દુસ્તાની સંગીત',
        'Raga': 'રાગ',
        'Artist': 'કલાકાર',
        'Composer': 'ગીતકાર',
        'Type': 'પ્રકાર',
        'Song': 'ગીત',
        'About': 'વિશે',
        'Info': 'માહિતી',
        'Stats': 'આંકડા',
        'Sahitya': 'સાહિત્ય',
        'Search': 'શોધો',
        'Playlist': 'પ્લેલિસ્ટ',
        'References': 'સંદર્ભ',
        'Born': 'જન્મ',
        'Died': 'મૃત્યુ',
        'Melakartha': 'મેલકર્તા',
        'Gharana': 'ઘરના',
        'Thaat': 'થાટ',
        'Arohana': 'આરોહી',
        'Avarohana': 'અવરોહી',
        'Tala': 'તાલા',
        'Tala name': 'તાલા નામ',
        'Tala angas': 'તાલા અંગસ',
        'Tala count': 'તાલા ગણતરી',
        'Language': 'ભાષા',
        'God': 'भगवान',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'વિડિઓઝ',
        'Ragas': 'રાગ',
        'Artists': 'કલાકાર',
        'Composers': 'ગીતકાર',
        'Types': 'પ્રકાર',
        'Songs': 'ગીત',
        'Duration': 'અવધિ',
        'Views': 'વિચારો',
        'Categories': 'શ્રેણી',
        'Menu': 'મેનુ',
        'Home': 'હોમ',
        'Fetch': 'અમને ડેટા મળી રહ્યો છે, કૃપા કરીને રાહ જુઓ',
        'Updated': 'અપડેટ',
        'Search Results': 'શોધ પરિણામો'
    },
    'Punjabi': {
        'App Title': 'ਯੂਟਿਬ ਸੰਗੀਤ ਸੰਗ੍ਰਹਿ',
        'Carnatic': 'ਕਾਰਨਾਟਿਕ ਸੰਗੀਤ',
        'Hindustani': 'ਹਿੰਦੁਸਤਾਨੀ ਸੰਗੀਤ',
        'Raga': 'ਰਾਗ',
        'Artist': 'ਕਲਾਕਾਰ',
        'Composer': 'ਗੀਤਕਾਰ',
        'Type': 'ਕਿਸਮ',
        'Song': 'ਗਾਣਾ',
        'About': 'ਬਾਰੇ',
        'Info': 'ਜਾਣਕਾਰੀ',
        'Stats': 'ਅੰਕੜੇ',
        'Sahitya': 'ਸਾਹਿਤ',
        'Search': 'ਖੋਜ',
        'Playlist': 'ਪਲੇਲਿਸਟ',
        'References': 'ਹਵਾਲੇ',
        'Born': 'ਜਨਮ',
        'Died': 'ਮੌਤ',
        'Melakartha': 'ਮੇਲ਼ਕਰ੍ਤਾ',
        'Gharana': 'ਘਰਾਨਾ',
        'Thaat': 'ਕਿ',
        'Arohana': 'ਆਰੋਹੀ',
        'Avarohana': 'ਅਵਰੋਹੀ',
        'Tala': 'ਤਾਲਾ',
        'Tala name': 'ਤਾਲਾ ਨਾਮ',
        'Tala angas': 'ਤਾਲਾ ਅੰਗਸ',
        'Tala count': 'ਤਾਲਾ ਗਿਣਤੀ',
        'Language': 'ਭਾਸ਼ਾ',
        'God': 'ਰੱਬ',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'ਵੀਡੀਓ',
        'Ragas': 'ਰਾਗ',
        'Artists': 'ਕਲਾਕਾਰ',
        'Composers': 'ਗੀਤਕਾਰ',
        'Types': 'ਕਿਸਮ',
        'Songs': 'ਗਾਣਾ',
        'Duration': 'ਅਵਧੀ',
        'Views': 'ਵਿਚਾਰ',
        'Categories': 'ਸ਼੍ਰੇਣੀ',
        'Menu': 'ਮੀਨੂ',
        'Home': 'ਮੁੱਖ',
        'Fetch': 'ਸਾਨੂੰ ਡਾਟਾ ਮਿਲ ਰਿਹਾ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ',
        'Updated': 'ਅੱਪਡੇਟ',
        'Search Results': 'ਖੋਜ ਨਤੀਜੇ'
    },
    'Odia': {
        'App Title': 'ୟୁଟ୍ୟୁବ୍ ସଂଗୀତ ସଂଗ୍ରହ',
        'Carnatic': 'କାର୍ନାଟିକ୍ ସଙ୍ଗୀତ',
        'Hindustani': 'ହିନ୍ଦୁସ୍ତାନୀ ସଂଗୀତ',
        'Raga': 'ରାଗା',
        'Artist': 'କଳାକାର',
        'Composer': 'ଗୀତିକାର',
        'Type': 'ଟାଇପ୍ କରନ୍ତୁ',
        'Song': 'ଗୀତ',
        'About': 'ବିଷୟରେ',
        'Info': 'ସୂଚନା',
        'Stats': 'ପରିସଂଖ୍ୟାନ',
        'Sahitya': 'ସାହିତ୍ୟ',
        'Search': 'ସନ୍ଧାନ କର',
        'Playlist': 'ପ୍ଲେଲିଷ୍ଟ',
        'References': 'ସନ୍ଦର୍ଭ',
        'Born': 'ଜନ୍ମ',
        'Died': 'ମୃତ୍ୟୁ',
        'Melakartha': 'मेलकर्ता',
        'Gharana': 'ଘାରାନା',
        'Thaat': 'ଟାଟ୍',
        'Arohana': 'ଆରୋହୀ',
        'Avarohana': 'अवरोही',
        'Tala': 'ଲୀଳା',
        'Tala name': 'ଲୀଳା नाम',
        'Tala angas': 'ଲୀଳା आगा',
        'Tala count': 'ଲୀଳା गिनती',
        'Language': 'ଭାଷା',
        'God': 'ଭଗବାନ',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'ଭିଡିଓଗୁଡିକ',
        'Ragas': 'ରାଗା',
        'Artists': 'କଳାକାର',
        'Composers': 'ଗୀତିକାର',
        'Types': 'ପ୍ରକାରଗୁଡିକ',
        'Songs': 'ଗୀତ',
        'Duration': 'ସମୟ',
        'Views': 'ଦୃଶ୍ୟ',
        'Categories': 'ବର୍ଗଗୁଡିକ',
        'Menu': 'ମେନୁ',
        'Home': 'ମୂଳ',
        'Fetch': 'ଆମେ ତଥ୍ୟ ପାଇଛୁ, ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ',
        'Updated': 'ଅଦ୍ୟତନ କରନ୍ତୁ',
        'Search Results': 'ସନ୍ଧାନ ଫଳାଫଳ'
    },
    'Assamese': {
        'App Title': 'ইউটিউব সংগীত সংগ্ৰহ',
        'Carnatic': 'কৰ্ণাটিক সংগীত',
        'Hindustani': 'হিন্দুস্তানী সংগীত',
        'Raga': 'ৰাগ',
        'Artist': 'শিল্পী',
        'Composer': 'সুৰকাৰ',
        'Type': 'টাইপ',
        'Song': 'গান',
        'About': 'এবাউট',
        'Info': 'তথ্য',
        'Stats': 'পৰিসংখ্যা',
        'Sahitya': 'সাহিত্য',
        'Search': 'অনুসন্ধান',
        'Playlist': 'প্লেলিস্ট',
        'References': 'প্ৰসংগসমূহ',
        'Born': 'জন্ম',
        'Died': 'মৰিল',
        'Melakartha': 'মেলাকাৰ্থ',
        'Gharana': 'ঘৰানা',
        'Thaat': 'থাত',
        'Arohana': 'আৰোহনা',
        'Avarohana': 'আভাৰোহানা',
        'Tala': 'তাল',
        'Tala name': 'তাল name',
        'Tala angas': 'তাল angas',
        'Tala count': 'তাল count',
        'Language': 'ভাষা',
        'God': 'ভগৱান',
        'English': 'ইংৰাজী',
        'Tamil': 'তামিল',
        'Telugu': 'তেলেগু',
        'Kannada': 'কানাড়া',
        'Malayalam': 'মালয়ালম',
        'Hindi': 'হিন্দী',
        'Sanskrit': 'সংস্কৃত',
        'Videos': 'ভিডিঅসমূহ',
        'Ragas': 'ৰাগ',
        'Artists': 'শিল্পী',
        'Composers': 'সুৰকাৰ',
        'Types': 'টাইপ',
        'Songs': 'গানসমূহ',
        'Duration': 'সময়কাল',
        'Views': 'দৰ্শন',
        'Categories': 'শ্ৰেণীসমূহ',
        'Menu': 'মেনু',
        'Home': 'হোম',
        'Fetch': 'তথ্য প্ৰাপ্ত কৰা হৈছে, অনুগ্ৰহ কৰি অপেক্ষা কৰক...',
        'Updated': 'আপডেট কৰা হৈছে',
        'Search Results': 'সন্ধান ফলাফল'
    }
};

const MAP_MONTH_DICT = {
    'Tamil': {
        'Jan': 'ஜனவரி',
        'Feb': 'பிப்ரவரி',
        'Mar': 'மார்ச்',
        'Apr': 'ஏப்ரல்',
        'May': 'மே',
        'Jun': 'ஜூன்',
        'Jul': 'ஜூலை',
        'Aug': 'ஆகஸ்ட்',
        'Sep': 'செப்டம்பர்',
        'Oct': 'அக்டோபர்',
        'Nov': 'நவம்பர்',
        'Dec': 'டிசம்பர்'
    },
    'Telugu': {
        'Jan': 'జనవరి',
        'Feb': 'ఫిబ్రవరి',
        'Mar': 'మార్చి',
        'Apr': 'ఏప్రిల్',
        'May': 'మే',
        'Jun': 'జూన్',
        'Jul': 'జూలై',
        'Aug': 'ఆగస్టు',
        'Sep': 'సెప్టెంబర్',
        'Oct': 'అక్టోబర్',
        'Nov': 'నవంబర్',
        'Dec': 'డిసెంబర్'
    },
    'Kannada': {
        'Jan': 'ಜನವರಿ',
        'Feb': 'ಫೆಬ್ರವರಿ',
        'Mar': 'ಮಾರ್ಚ್',
        'Apr': 'ಏಪ್ರಿಲ್',
        'May': 'ಮೇ',
        'Jun': 'ಜೂನ್',
        'Jul': 'ಜುಲೈ',
        'Aug': 'ಆಗಸ್ಟ್',
        'Sep': 'ಸೆಪ್ಟೆಂಬರ್',
        'Oct': 'ಅಕ್ಟೋಬರ್',
        'Nov': 'ನವೆಂಬರ್',
        'Dec': 'ಡಿಸೆಂಬರ್'
    },
    'Malayalam': {
        'Jan': 'ജനുവരി',
        'Feb': 'ഫെബ്രുവരി',
        'Mar': 'മാർച്ച്',
        'Apr': 'ഏപ്രിൽ',
        'May': 'മേയ്',
        'Jun': 'ജൂൺ',
        'Jul': 'ജൂലൈ',
        'Aug': 'ആഗസ്റ്റ്',
        'Sep': 'സെപ്തംബർ',
        'Oct': 'ഒക്ടോബർ',
        'Nov': 'നവംബർ',
        'Dec': 'ഡിസംബർ'
    },
    'Hindi': {
        'Jan': 'जनवरी',
        'Feb': 'फ़रवरी',
        'Mar': 'मार्च',
        'Apr': 'अप्रैल',
        'May': 'मई',
        'Jun': 'जून',
        'Jul': 'जुलाई',
        'Aug': 'अगस्त',
        'Sep': 'सितंबर',
        'Oct': 'अक्टूबर',
        'Nov': 'नवंबर',
        'Dec': 'दिसंबर'
    },
    'Marathi': {
        'Jan': 'जनवरी',
        'Feb': 'फ़रवरी',
        'Mar': 'मार्च',
        'Apr': 'अप्रैल',
        'May': 'मई',
        'Jun': 'जून',
        'Jul': 'जुलाई',
        'Aug': 'अगस्त',
        'Sep': 'सितंबर',
        'Oct': 'अक्टूबर',
        'Nov': 'नवंबर',
        'Dec': 'दिसंबर'
    },
    'Bengali': {
        'Jan': 'জানুয়ারী',
        'Feb': 'ফেব্রুয়ারী',
        'Mar': 'মার্চ',
        'Apr': 'এপ্রিল',
        'May': 'মে',
        'Jun': 'জুন',
        'Jul': 'জুলাই',
        'Aug': 'আগস্ট',
        'Sep': 'সেপ্টেম্বর',
        'Oct': 'অক্টোবর',
        'Nov': 'নভেম্বর',
        'Dec': 'ডিসেম্বর'
    },
    'Gujarati': {
        'Jan': 'જાન્યુઆરી',
        'Feb': 'ફેબ્રુઆરી',
        'Mar': 'মার্চ',
        'Apr': 'એપ્રિલ',
        'May': 'મે',
        'Jun': 'જૂન',
        'Jul': 'જુલાઈ',
        'Aug': 'ઓગસ્ટ',
        'Sep': 'સપ્ટેમ્બર',
        'Oct': 'ઓક્ટોબર',
        'Nov': 'નવેમ્બર',
        'Dec': 'ડિસેમ્બર'
    },
    'Punjabi': {
        'Jan': 'ਜਨਵਰੀ',
        'Feb': 'ਫਰਵਰੀ',
        'Mar': 'ਮਾਰਚ',
        'Apr': 'ਅਪ੍ਰੈਲ',
        'May': 'ਮਈ',
        'Jun': 'ਜੂਨ',
        'Jul': 'ਜੁਲਾਈ',
        'Aug': 'ਅਗਸਤ',
        'Sep': 'ਸਤੰਬਰ',
        'Oct': 'ਅਕਤੂਬਰ',
        'Nov': 'ਨਵੰਬਰ',
        'Dec': 'ਦਸੰਬਰ'
    },
    'Odia': {
        'Jan': 'ଜାନୁଆରୀ',
        'Feb': 'ଫେବୃଆରୀ',
        'Mar': 'ମାର୍ଚ୍ଚ',
        'Apr': 'ଏପ୍ରିଲ୍',
        'May': 'ମାସ',
        'Jun': 'ଜୁନ୍',
        'Jul': 'ଜୁଲାଇ',
        'Aug': 'ଅଗଷ୍ଟ',
        'Sep': 'ସେପ୍ଟେମ୍ବର',
        'Oct': 'ଅକ୍ଟୋବର',
        'Nov': 'ନଭେମ୍ବର',
        'Dec': 'ଡିସେମ୍ବର'
    },
    'Assamese': {
        'Jan': 'জানুৱাৰী',
        'Feb': 'ফেব্ৰুৱাৰী',
        'Mar': 'মাৰ্চ',
        'Apr': 'এপ্ৰিল',
        'May': 'মে',
        'Jun': 'জুন',
        'Jul': 'জুলাই',
        'Aug': 'আগষ্ট',
        'Sep': 'ছেপ্টেম্বৰ',
        'Oct': 'অক্টোবৰ',
        'Nov': 'নৱেম্বৰ',
        'Dec': 'ডিচেম্বৰ'
    }
};

let MAP_KEYBOARD_DICT = {"devanagari": {"base": "0x900", "vowel": ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ऍ", "ऎ", "ए", "ऐ", "ऑ", "ऒ", "ओ", "औ", "ॠ", "ॡ"], "glyph": ["्", "ा", "ि", "ी", "ु", "ू", "ृ", "ॢ", "ॅ", "ॆ", "े", "ै", "ॉ", "ॊ", "ो", "ौ", "ॄ", "ॣ", "ँ", "ं", "ः"], "consonant": ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "ऩ", "प", "फ", "ब", "भ", "म", "य", "र", "ऱ", "ल", "ळ", "ऴ", "व", "श", "ष", "स", "ह", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़"], "special": ["ऽ", "ॐ"], "middle": ["ँ", "ं", "ः"]}, "tamil": {"base": "0xb80", "vowel": ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"], "glyph": ["்", "ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ"], "consonant": ["க", "ங", "ச", "ஞ", "ட", "த", "ந", "ன", "ண", "ப", "ம", "ய", "ர", "ற", "ல", "ள", "ழ", "வ"], "special": ["ஃ", "ௐ", "ஸ்ரீ"], "middle": ["ஜ", "ஶ", "ஷ", "ஸ", "ஹ", "க்ஷ"]}, "telugu": {"base": "0xc00", "vowel": ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ఌ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ", "ౠ", "ౡ"], "glyph": ["్", "ా", "ి", "ీ", "ు", "ూ", "ృ", "ౢ", "ె", "ే", "ై", "ొ", "ో", "ౌ", "ౄ", "ౣ", "ఁ", "ం", "ః"], "consonant": ["క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ", "ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న", "ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ఱ", "ల", "ళ", "ఴ", "వ", "శ", "ష", "స", "హ"], "special": ["ఽ"], "middle": ["ఁ", "ం", "ః"]}, "kannada": {"base": "0xc80", "vowel": ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ", "ಌ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ", "ೠ", "ೡ"], "glyph": ["್", "ಾ", "ಿ", "ೀ", "ು", "ೂ", "ೃ", "ೢ", "ೆ", "ೇ", "ೈ", "ೊ", "ೋ", "ೌ", "ೄ", "ೣ", "ಁ", "ಂ", "ಃ"], "consonant": ["ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಚ", "ಛ", "ಜ", "ಝ", "ಞ", "ಟ", "ಠ", "ಡ", "ಢ", "ಣ", "ತ", "ಥ", "ದ", "ಧ", "ನ", "ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ವ", "ಶ", "ಷ", "ಸ", "ಹ"], "special": ["ಽ"], "middle": ["ಁ", "ಂ", "ಃ"]}, "malayalam": {"base": "0xd00", "vowel": ["അ", "ആ", "ഇ", "ഈ", "ഉ", "ഊ", "ഋ", "ഌ", "എ", "ഏ", "ഐ", "ഒ", "ഓ", "ഔ", "ൠ", "ൡ"], "glyph": ["്", "ാ", "ി", "ീ", "ു", "ൂ", "ൃ", "ൢ", "െ", "േ", "ൈ", "ൊ", "ോ", "ൌ", "ൄ", "ൣ", "ം", "ഃ"], "consonant": ["ക", "ഖ", "ഗ", "ഘ", "ങ", "ച", "ഛ", "ജ", "ഝ", "ഞ", "ട", "ഠ", "ഡ", "ഢ", "ണ", "ത", "ഥ", "ദ", "ധ", "ന", "ഩ", "പ", "ഫ", "ബ", "ഭ", "മ", "യ", "ര", "റ", "ല", "ള", "ഴ", "വ", "ശ", "ഷ", "സ", "ഹ"], "special": ["ഽ"], "middle": ["ം", "ഃ"]}, "sanskrit": {"base": "0x900", "vowel": ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ऍ", "ए", "ऐ", "ऑ", "ओ", "औ", "ॠ", "ॡ"], "glyph": ["्", "ा", "ि", "ी", "ु", "ू", "ृ", "ॢ", "ॅ", "े", "ै", "ॉ", "ो", "ौ", "ॄ", "ॣ", "ँ", "ं", "ः"], "consonant": ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़"], "special": ["ऽ", "ॐ"], "middle": ["ँ", "ं", "ः"]}, "hindi": {"base": "0x900", "vowel": ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ऍ", "ए", "ऐ", "ऑ", "ओ", "औ", "ॠ", "ॡ"], "glyph": ["्", "ा", "ि", "ी", "ु", "ू", "ृ", "ॢ", "ॅ", "े", "ै", "ॉ", "ो", "ौ", "ॄ", "ॣ", "ँ", "ं", "ः"], "consonant": ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़"], "special": ["ऽ", "ॐ"], "middle": ["ँ", "ं", "ः"]}, "marathi": {"base": "0x900", "vowel": ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ऍ", "ए", "ऐ", "ऑ", "ओ", "औ", "ॠ", "ॡ"], "glyph": ["्", "ा", "ि", "ी", "ु", "ू", "ृ", "ॢ", "ॅ", "े", "ै", "ॉ", "ो", "ौ", "ॄ", "ॣ", "ँ", "ं", "ः"], "consonant": ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "ळ", "व", "श", "ष", "स", "ह", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़"], "special": ["ऽ"], "middle": ["ँ", "ं", "ः"]}, "bengali": {"base": "0x980", "vowel": ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "ঌ", "এ", "ঐ", "ও", "ঔ", "ৠ", "ৡ"], "glyph": ["্", "া", "ি", "ী", "ু", "ূ", "ৃ", "ৢ", "ে", "ৈ", "ো", "ৌ", "ৄ", "ৣ", "ঁ", "ং", "ঃ"], "consonant": ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ", "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ"], "special": ["ঽ"], "middle": ["ঁ", "ং", "ঃ"]}, "punjabi": {"base": "0xa00", "vowel": ["ਅ", "ਆ", "ਇ", "ਈ", "ਉ", "ਊ", "ਏ", "ਐ", "ਓ", "ਔ"], "glyph": ["੍", "ਾ", "ਿ", "ੀ", "ੁ", "ੂ", "ੇ", "ੈ", "ੋ", "ੌ", "ਁ", "ਂ", "ਃ"], "consonant": ["ਕ", "ਖ", "ਗ", "ਘ", "ਙ", "ਚ", "ਛ", "ਜ", "ਝ", "ਞ", "ਟ", "ਠ", "ਡ", "ਢ", "ਣ", "ਤ", "ਥ", "ਦ", "ਧ", "ਨ", "ਪ", "ਫ", "ਬ", "ਭ", "ਮ", "ਯ", "ਰ", "ਲ", "ਲ਼", "ਵ", "ਸ਼", "ਸ", "ਹ"], "special": [], "middle": ["ਁ", "ਂ", "ਃ"]}, "gujarati": {"base": "0xa80", "vowel": ["અ", "આ", "ઇ", "ઈ", "ઉ", "ઊ", "ઋ", "ઌ", "એ", "ઐ", "ઓ", "ઔ", "ૠ", "ૡ"], "glyph": ["્", "ા", "િ", "ી", "ુ", "ૂ", "ૃ", "ૢ", "ે", "ૈ", "ો", "ૌ", "ૄ", "ૣ", "ઁ", "ં", "ઃ"], "consonant": ["ક", "ખ", "ગ", "ઘ", "ઙ", "ચ", "છ", "જ", "ઝ", "ઞ", "ટ", "ઠ", "ડ", "ઢ", "ણ", "ત", "થ", "દ", "ધ", "ન", "પ", "ફ", "બ", "ભ", "મ", "ય", "ર", "લ", "વ", "શ", "ષ", "સ", "હ"], "special": ["ઽ"], "middle": ["ઁ", "ં", "ઃ"]}, "odia": {"base": "0xb00", "vowel": ["ଅ", "ଆ", "ଇ", "ଈ", "ଉ", "ଊ", "ଋ", "ଌ", "ଏ", "ଐ", "ଓ", "ଔ", "ୠ", "ୡ"], "glyph": ["୍", "ା", "ି", "ୀ", "ୁ", "ୂ", "ୃ", "ୢ", "େ", "ୈ", "ୋ", "ୌ", "ୄ", "ୣ", "ଁ", "ଂ", "ଃ"], "consonant": ["କ", "ଖ", "ଗ", "ଘ", "ଙ", "ଚ", "ଛ", "ଜ", "ଝ", "ଞ", "ଟ", "ଠ", "ଡ", "ଢ", "ଣ", "ତ", "ଥ", "ଦ", "ଧ", "ନ", "ପ", "ଫ", "ବ", "ଭ", "ମ", "ଯ", "ର", "ଲ", "ଵ", "ଶ", "ଷ", "ସ", "ହ"], "special": ["ଽ"], "middle": ["ଁ", "ଂ", "ଃ"]}, "assamese": {"base": "0x980", "vowel": ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "ঌ", "এ", "ঐ", "ও", "ঔ", "ৠ", "ৡ"], "glyph": ["্", "া", "ি", "ী", "ু", "ূ", "ৃ", "ৢ", "ে", "ৈ", "ো", "ৌ", "ৄ", "ৣ", "ঁ", "ং", "ঃ"], "consonant": ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ", "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ"], "special": ["ঽ"], "middle": ["ঁ", "ং", "ঃ"]}, "english": {"base": "0", "vowel": ["a", "A", "i", "I", "u", "U", ".R", "l.R", "aE", "e", "E", "ai", "aO", "o", "O", "au", ".R.R", "l.R.R"], "glyph": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], "consonant": ["k", "kh", "g", "gh", "G", "c", "ch", "j", "jh", "J", "T", "Th", "D", "Dh", "N", "t", "th", "d", "dh", "n", ".n", "p", "ph", "b", "bh", "m", "y", "r", "R", "l", "L", "zh", "v", "S", "sh", "s", "h", "q", "qh", "g2", "z", "d3", "d3h", "f", "Y"], "special": [], "middle": []}};

const SUPERSCRIPT_CODES = [ 0x00B2, 0x00B3, 0x2074 ];

const CATEGORY_DICT = { 'categories' : [ { 'C' : 'raga',     'I' : 'music-note-list',   'N' : 'Raga'     },
                                         { 'C' : 'artist',   'I' : 'person-fill',       'N' : 'Artist'   },
                                         { 'C' : 'composer', 'I' : 'person-lines-fill', 'N' : 'Composer' },
                                         { 'C' : 'type',     'I' : 'tag',               'N' : 'Type'     },
                                         { 'C' : 'song',     'I' : 'music-note-beamed', 'N' : 'Song'     },
                                         { 'C' : 'about',    'I' : 'info-circle',       'N' : 'About'    },
                                       ]
                      };

var KEYBOARD_LIST = [ { 'I' : 'c4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'sa1' ] },
                      { 'I' : 'c-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'ri1' ] },
                      { 'I' : 'd4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ri2', 'ga1' ] },
                      { 'I' : 'd-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'ri3', 'ga2' ] },
                      { 'I' : 'e4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ga3' ] },
                      { 'I' : 'f4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ma1' ] },
                      { 'I' : 'f-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'ma2' ] },
                      { 'I' : 'g4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'pa' ] },
                      { 'I' : 'g-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'da1' ] },
                      { 'I' : 'a4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'da2', 'ni1' ] },
                      { 'I' : 'a-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'da3', 'ni2' ] },
                      { 'I' : 'b4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ni3' ] },
                      { 'I' : 'c5',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'sa2' ] },
                    ];

const NOTE_MAP    = { 'S' : 'c4', 'S1' : 'c4', 'R1' : 'c-4', 'R2' : 'd4', 'G1' : 'd4', 'R3' : 'd-4', 'G2' : 'd-4',
                      'G3' : 'e4', 'M1' : 'f4', 'M2' : 'f-4', 'P' : 'g4', 'D1' : 'g-4', 'D2' : 'a4', 'N1' : 'a4',
                      'D3' : 'a-4', 'N2' : 'a-4', 'N3' : 'b4', 'S2' : 'c5'
                    };
