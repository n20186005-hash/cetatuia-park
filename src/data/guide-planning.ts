type PlanningCopy = {
  stops: [string, string, string];
  photoTip: string;
  hours?: string;
  admission?: string;
};

export type GuidePlan = {
  en: PlanningCopy;
  zh: PlanningCopy;
  hoursSource?: string;
  admissionSource?: string;
};

export const guidePlanning: Record<string, GuidePlan> = {
  "central-park-casino": {
    "en": {
      "stops": [
        "Emil Isac Street entrance",
        "Central Park main path",
        "Chios Lake and Casino"
      ],
      "photoTip": "From the fountain side, frame the Casino with the open path in the foreground.",
      "hours": "Public park. Casino interior access follows its event programme.",
      "admission": "No ticket for ordinary park walks. Check individual Casino events."
    },
    "zh": {
      "stops": [
        "埃米尔·伊萨克街入口",
        "中央公园主步道",
        "基奥斯湖与卡西诺展馆"
      ],
      "photoTip": "从喷泉一侧取景，把开阔步道和卡西诺展馆一起拍入画面。",
      "hours": "公园对公众开放；卡西诺展馆室内参观按活动安排。",
      "admission": "日常逛公园无需购票；展馆活动收费以主办方公告为准。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/simion-barnutiu-central-park/"
  },
  "union-square-saint-michael": {
    "en": {
      "stops": [
        "Union Square south edge",
        "Matthias Corvinus monument",
        "St Michael’s Church entrance"
      ],
      "photoTip": "From the southern edge of the square, use the statue as foreground and keep the Gothic tower in frame.",
      "hours": "Church: Monday–Friday 09:00–13:00 and 15:00–18:00, per VisitCluj.",
      "admission": "The square can be visited without a ticket. Check with the parish for organised visits."
    },
    "zh": {
      "stops": [
        "联合广场南侧",
        "马加什一世纪念像",
        "圣弥额尔教堂入口"
      ],
      "photoTip": "从广场南侧以雕像作前景，把哥特式塔楼留在画面里。",
      "hours": "VisitCluj 公布教堂周一至周五 09:00–13:00、15:00–18:00 开放。",
      "admission": "广场无需门票；有组织的教堂参观请向堂区查询。"
    },
    "hoursSource": "https://visitcluj.ro/tourist_spot/biserica-romano-catolica-sfantul-mihail-2/"
  },
  "museum-square-carolina-obelisk": {
    "en": {
      "stops": [
        "Constantin Daicoviciu Street",
        "Museum Square paving",
        "Carolina Obelisk"
      ],
      "photoTip": "From the edge of Museum Square, frame the obelisk against the Franciscan frontage.",
      "hours": "Outdoor square and monument. Check local event notices for temporary restrictions.",
      "admission": "No admission ticket for the public square or exterior monument."
    },
    "zh": {
      "stops": [
        "康斯坦丁·达伊科维丘街",
        "博物馆广场铺石区",
        "卡罗琳方尖碑"
      ],
      "photoTip": "从博物馆广场边缘以方济各会教堂立面衬托方尖碑。",
      "hours": "露天广场与纪念碑。遇活动请查看临时通行公告。",
      "admission": "公共广场及纪念碑外观无需门票。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/carolina-obelisk-piata-muzeului-museum-square/"
  },
  "alexandru-borza-botanical-garden": {
    "en": {
      "stops": [
        "Republicii Street entrance",
        "Japanese garden bridge",
        "large greenhouse complex"
      ],
      "photoTip": "Photograph the Japanese garden bridge from the path across the water.",
      "hours": "2026 November–December: garden daily 09:00–17:00, large greenhouses 09:00–16:00. Check seasonal and holiday exceptions.",
      "admission": "Adult admission 21 lei when greenhouses are open, 14 lei when closed, per the 2026–27 university tariff."
    },
    "zh": {
      "stops": [
        "共和国街入口",
        "日本庭园小桥",
        "大温室区"
      ],
      "photoTip": "在日本庭园水对岸的步道上拍小桥。",
      "hours": "2026 年 11–12 月园区每日 09:00–17:00，大温室 09:00–16:00；季节调整及假日例外请查园方。",
      "admission": "按大学 2026–27 年价目，温室开放时成人票 21 列伊，关闭时 14 列伊。"
    },
    "hoursSource": "https://gradinabotanica.ubbcluj.ro/gradina-botanica-cluj-program/",
    "admissionSource": "https://www.ubbcluj.ro/ro/taxe/tarife_acces_intrare.php"
  },
  "iuliu-hatieganu-university-sports-park": {
    "en": {
      "stops": [
        "Strada Pandurilor entrance",
        "open tree-lined paths",
        "riverside approach"
      ],
      "photoTip": "Use the canopy to frame an open path from its edge.",
      "hours": "Check university access notices for the paths and sports facilities separately.",
      "admission": "Check applicable booking and fees before planning to use courts or training facilities."
    },
    "zh": {
      "stops": [
        "潘杜里洛尔街入口",
        "开放林荫步道",
        "滨河方向"
      ],
      "photoTip": "站在开放步道边缘，用树冠为道路构图。",
      "hours": "向校方分别核对步道和运动设施的开放条件。",
      "admission": "如计划使用球场或训练设施，请先核对预约和费用。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/iuliu-hatieganu-university-sports-park/"
  },
  "gheorgheni-park-iulius-mall": {
    "en": {
      "stops": [
        "Iulius Parc lakeside access",
        "curved shoreline path",
        "open lake view"
      ],
      "photoTip": "At a lakeside bend, frame the curve of the shore and open water.",
      "hours": "Outdoor lakeside paths. Consult Iulius Parc for event-related access changes.",
      "admission": "VisitCluj lists free park admission."
    },
    "zh": {
      "stops": [
        "Iulius Parc 湖畔入口",
        "弯曲岸边步道",
        "开阔湖景"
      ],
      "photoTip": "在湖边转弯处拍岸线弧度和开阔水面。",
      "hours": "露天湖畔步道。如有活动，通行变更请查 Iulius Parc 公告。",
      "admission": "VisitCluj 列为免费入园。"
    },
    "hoursSource": "https://visitcluj.ro/tourist_spot/iulius-parc/"
  },
  "the-rose-park": {
    "en": {
      "stops": [
        "Aleea Rozelor",
        "garden paths",
        "Someșul Mic embankment"
      ],
      "photoTip": "Find a gap in the riverside trees to frame the water.",
      "hours": "Outdoor park. Follow site notices for riverside path works.",
      "admission": "A regular walk in the public park does not require a ticket."
    },
    "zh": {
      "stops": [
        "玫瑰小径",
        "园内步道",
        "小索梅什河堤"
      ],
      "photoTip": "从滨河树木之间的空隙取景，把河水纳入画面。",
      "hours": "露天公园。沿河步道如施工，请按现场公告通行。",
      "admission": "日常步行游园无需门票。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/the-rose-park/"
  },
  "the-ethnographic-museum-of-transylvania": {
    "en": {
      "stops": [
        "Memorandumului Street",
        "Reduta entrance",
        "indoor folk-object galleries"
      ],
      "photoTip": "Photograph the Reduta frontage from the opposite public pavement.",
      "hours": "VisitCluj lists Wednesday–Sunday, 10:00–18:00.",
      "admission": "Check current indoor museum rates with the venue. Tickets and photography conditions for the open-air site are separate."
    },
    "zh": {
      "stops": [
        "纪念书街",
        "雷杜塔入口",
        "民俗器物展厅"
      ],
      "photoTip": "从对面公共人行道拍雷杜塔临街立面。",
      "hours": "VisitCluj 公布周三至周日 10:00–18:00。",
      "admission": "室内馆票价请以馆方公告为准。露天馆区的门票与拍照条件另行核对。"
    },
    "hoursSource": "https://visitcluj.ro/tourist_spot/muzeul-etnografic-al-transilvaniei/",
    "admissionSource": "https://www.muzeul-etnografic.ro/"
  },
  "the-mineralogy-museum": {
    "en": {
      "stops": [
        "Kogălniceanu Street",
        "UBB main building ground floor",
        "crystal and locality cases"
      ],
      "photoTip": "If permitted, work at an angle to the glass and include one specimen label.",
      "hours": "Tuesday–Friday, 10:00–15:00. Groups may arrange other times.",
      "admission": "Adult 12 lei; eligible reduced ticket 6 lei."
    },
    "zh": {
      "stops": [
        "科格尔尼恰努街",
        "大学主楼地面层",
        "晶体及产地展柜"
      ],
      "photoTip": "如允许拍摄，斜对玻璃取景，并保留一块标本标签。",
      "hours": "周二至周五 10:00–15:00，团体可另行预约。",
      "admission": "成人 12 列伊，符合条件的优惠票 6 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/mineralogy-museum/"
  },
  "david-prodan-museum": {
    "en": {
      "stops": [
        "Academician David Prodan Street 1",
        "apartment 7 entrance",
        "historian’s study"
      ],
      "photoTip": "If allowed, use the doorway to frame a wider view of the study.",
      "hours": "Monday–Friday, 10:00–14:00.",
      "admission": "Adult 12 lei; eligible reduced ticket 6 lei."
    },
    "zh": {
      "stops": [
        "大卫·普罗丹院士街1号",
        "7号公寓入口",
        "历史学家书房"
      ],
      "photoTip": "如允许拍照，可借助门框拍书房的全景。",
      "hours": "周一至周五 10:00–14:00。",
      "admission": "成人 12 列伊，符合条件的优惠票 6 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/david-prodan-memorial-museum/"
  },
  "ubb-holocaust-museum": {
    "en": {
      "stops": [
        "Croitorilor 13",
        "introductory timeline",
        "documents and testimonies"
      ],
      "photoTip": "Ask staff which displays can be photographed and respect restrictions on personal testimony.",
      "hours": "Monday–Friday, 12:00–15:00.",
      "admission": "Adult 12 lei; eligible reduced ticket 6 lei."
    },
    "zh": {
      "stops": [
        "裁缝街13号",
        "导览时间线",
        "档案与证词展区"
      ],
      "photoTip": "先询问馆方哪些展区允许拍摄，并遵守个人证词相关的拍摄限制。",
      "hours": "周一至周五 12:00–15:00。",
      "admission": "成人 12 列伊，符合条件的优惠票 6 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/the-museum-of-the-holocaust-in-northern-transylvania/"
  },
  "the-paleontology-and-stratigraphy-museum": {
    "en": {
      "stops": [
        "Kogălniceanu 1",
        "UBB inner courtyard entrance",
        "fossil displays by geological period"
      ],
      "photoTip": "Where permitted, include the fossil and geological-period label in one picture.",
      "hours": "Monday–Friday, 10:00–14:00.",
      "admission": "Adult 12 lei; eligible reduced ticket 6 lei."
    },
    "zh": {
      "stops": [
        "科格尔尼恰努街1号",
        "大学内庭院入口",
        "按年代比较化石展柜"
      ],
      "photoTip": "允许拍照时，把化石和标注年代的说明牌一起拍进画面。",
      "hours": "周一至周五 10:00–14:00。",
      "admission": "成人 12 列伊，符合条件的优惠票 6 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/paleontology-and-stratigraphy-museum/"
  },
  "alexandru-duma-museum": {
    "en": {
      "stops": [
        "Calea Moților 11",
        "fifth-floor entrance",
        "drawings and wartime objects"
      ],
      "photoTip": "Ask before photographing drawings. Include the surrounding display if allowed.",
      "hours": "Monday 13:00–18:00; Tuesday–Friday 10:00–15:00.",
      "admission": "Adult 12 lei; eligible reduced ticket 6 lei."
    },
    "zh": {
      "stops": [
        "莫齐洛尔大道11号",
        "五楼展馆入口",
        "战时绘图与物件"
      ],
      "photoTip": "拍纸本前先询问。若可拍摄，可把作品与临近展品一同入镜。",
      "hours": "周一 13:00–18:00；周二至周五 10:00–15:00。",
      "admission": "成人 12 列伊，符合条件的优惠票 6 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/alexandru-duma-museum/"
  },
  "pharmacy-museum": {
    "en": {
      "stops": [
        "Union Square 28",
        "former pharmacy shop",
        "preparation and storage rooms"
      ],
      "photoTip": "From Union Square, compose the Hintz House façade alongside its neighbours.",
      "hours": "Cluj Tourism lists Tuesday–Sunday, 10:00–18:00. Confirm any special closures.",
      "admission": "The operating museum lists 44 lei for a standard adult ticket and 70 lei for the combined history and pharmacy museum ticket."
    },
    "zh": {
      "stops": [
        "联合广场28号",
        "昔日药房对客区",
        "配药与储藏展室"
      ],
      "photoTip": "从联合广场把欣茨故居立面与两侧建筑一同构图。",
      "hours": "Cluj Tourism 公布周二至周日 10:00–18:00，特殊闭馆日请另行核对。",
      "admission": "管理馆方公布成人普通票 44 列伊，历史馆与药房馆联票 70 列伊。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/pharmacy-museum/",
    "admissionSource": "https://mnit.ro/-/program-si-tarife/"
  },
  "cluj-napoca-art-museum": {
    "en": {
      "stops": [
        "Union Square 30",
        "Bánffy Palace courtyard",
        "chosen galleries"
      ],
      "photoTip": "Use the open square for the full palace façade and the courtyard for a smaller architectural frame.",
      "hours": "Wednesday–Sunday, 10:00–17:00. Last exhibition entry at 16:30.",
      "admission": "Standard admission 16 lei for the permanent exhibition or 12 lei for a temporary exhibition, per the museum tariff."
    },
    "zh": {
      "stops": [
        "联合广场30号",
        "班菲宫庭院",
        "选定展厅"
      ],
      "photoTip": "在广场开阔处拍宫殿整面立面，再到庭院拍建筑局部。",
      "hours": "周三至周日 10:00–17:00，展厅最晚入场 16:30。",
      "admission": "按馆方价目，常设展普通票 16 列伊，临时展普通票 12 列伊。"
    },
    "hoursSource": "https://www.macluj.ro/program-de-vizitare",
    "admissionSource": "https://www.macluj.ro/acces?locale=ro"
  },
  "botanical-museum": {
    "en": {
      "stops": [
        "Republicii 42",
        "Botanical Garden reception",
        "indoor plant collection"
      ],
      "photoTip": "If permitted, pair a specimen with its label in the same frame.",
      "hours": "Monday–Friday, 09:00–15:00, excluding public holidays.",
      "admission": "Ask the garden reception whether museum access is included in your ticket."
    },
    "zh": {
      "stops": [
        "共和国街42号",
        "植物园接待处",
        "室内植物标本展厅"
      ],
      "photoTip": "如允许拍摄，把标本与说明标签放进同一画面。",
      "hours": "周一至周五 09:00–15:00，法定假日除外。",
      "admission": "请向植物园接待处核对所购门票是否包括室内植物博物馆。"
    },
    "hoursSource": "https://gradinabotanica.ubbcluj.ro/gradina-botanica-cluj-program/"
  },
  "romulus-vuia-national-ethnographic-park-2": {
    "en": {
      "stops": [
        "Tăietura Turcului entrance",
        "outdoor paths",
        "selected timber houses and yards"
      ],
      "photoTip": "Step back on the trail to include the timber house and its adjoining yard.",
      "hours": "Cluj Tourism lists Wednesday–Sunday, 10:00–18:00 in summer and 09:00–16:00 in winter. Check the seasonal changeover.",
      "admission": "Ask the open-air branch for current tickets and photography rates."
    },
    "zh": {
      "stops": [
        "泰耶图拉图尔库卢伊街入口",
        "露天步道",
        "木构民居与院落"
      ],
      "photoTip": "在步道上适当后退，把木屋和相邻院落一起拍入画面。",
      "hours": "Cluj Tourism 公布周三至周日开放，夏季 10:00–18:00，冬季 09:00–16:00。切换日期请出发前核对。",
      "admission": "票价和拍照收费请向露天馆区核对。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/romulus-vuia-national-ethnographic-park-2/",
    "admissionSource": "https://www.muzeul-etnografic.ro/"
  },
  "vivariu-museum": {
    "en": {
      "stops": [
        "Clinicilor 5–7",
        "Zoology Building basement",
        "reptile enclosures"
      ],
      "photoTip": "Where permitted, turn off the flash and frame the animal with part of its enclosure.",
      "hours": "Tuesday–Friday 10:00–16:00; Saturday–Sunday 10:00–14:00. Closed Monday.",
      "admission": "Adult 15 lei; eligible reduced ticket 7 lei."
    },
    "zh": {
      "stops": [
        "克利尼奇洛尔街5–7号",
        "动物学楼地下层",
        "爬行动物展箱"
      ],
      "photoTip": "允许拍照时关掉闪光灯，把动物和部分展箱环境一同入镜。",
      "hours": "周二至周五 10:00–16:00，周末 10:00–14:00，周一闭馆。",
      "admission": "成人 15 列伊，符合条件的优惠票 7 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/vivarium/"
  },
  "the-zoological-museum": {
    "en": {
      "stops": [
        "Clinicilor 5–7",
        "Zoological Museum entrance",
        "habitat and specimen displays"
      ],
      "photoTip": "When permitted, shoot obliquely to avoid glass reflections across the specimens.",
      "hours": "Tuesday–Friday 10:00–16:00; Saturday–Sunday 10:00–14:00. Closed Monday.",
      "admission": "Adult 20 lei; eligible reduced ticket 10 lei."
    },
    "zh": {
      "stops": [
        "克利尼奇洛尔街5–7号",
        "动物学博物馆入口",
        "栖息地与动物标本展区"
      ],
      "photoTip": "允许拍摄时斜对展柜取景，避免反光挡住标本。",
      "hours": "周二至周五 10:00–16:00，周末 10:00–14:00，周一闭馆。",
      "admission": "成人 20 列伊，符合条件的优惠票 10 列伊。"
    },
    "hoursSource": "https://muzee.ubbcluj.ro/muzeeubb/zoological-museum/"
  },
  "national-history-museum-of-transylvania": {
    "en": {
      "stops": [
        "Museum Square",
        "Constantin Daicoviciu Street 2",
        "current exhibition"
      ],
      "photoTip": "Use the opposite side of the street for a full view of the entrance façade.",
      "hours": "Check the museum's current exhibition programme before travelling."
    },
    "zh": {
      "stops": [
        "博物馆广场",
        "康斯坦丁·达伊科维丘街2号",
        "当期展厅"
      ],
      "photoTip": "从街对面拍完整的入口立面。",
      "hours": "出发前请查博物馆当期展览及开放安排。"
    },
    "hoursSource": "https://mnit.ro/",
    "admissionSource": "https://mnit.ro/-/program-si-tarife/"
  },
  "museum-of-cluj-metropolitan-church": {
    "en": {
      "stops": [
        "Avram Iancu Square",
        "Orthodox cathedral entrance",
        "lower-level museum galleries"
      ],
      "photoTip": "In permitted areas, use a doorway to frame the transition between galleries.",
      "hours": "VisitCluj lists Tuesday–Saturday 10:00–17:00 and Sunday 12:00–17:00. Closed Monday.",
      "admission": "VisitCluj lists adult 5 lei and student 2 lei. Confirm with the museum before travelling."
    },
    "zh": {
      "stops": [
        "阿夫拉姆·扬库广场",
        "东正教主教座堂入口",
        "下层博物馆展室"
      ],
      "photoTip": "在允许拍照的区域，用门框呈现展室间的过渡。",
      "hours": "VisitCluj 公布周二至周六 10:00–17:00，周日 12:00–17:00，周一闭馆。",
      "admission": "VisitCluj 列出成人 5 列伊、学生 2 列伊，出发前请向馆方核对。"
    },
    "hoursSource": "https://visitcluj.ro/tourist_spot/muzeul-mitropoliei-clujului/"
  },
  "calvaria-roman-catholic-church": {
    "en": {
      "stops": [
        "Strada Primăverii",
        "signed uphill approach",
        "churchyard"
      ],
      "photoTip": "Use a lower public vantage point to show the raised churchyard."
    },
    "zh": {
      "stops": [
        "普里默韦里街",
        "有标识的上坡入口",
        "教堂院落"
      ],
      "photoTip": "在较低的公共位置拍院落高出街道的地势。"
    }
  },
  "church-of-franciscan-monastery": {
    "en": {
      "stops": [
        "Carolina Obelisk",
        "Museum Square",
        "Franciscan Church frontage"
      ],
      "photoTip": "Stand by the obelisk for a view that includes the frontage and the square."
    },
    "zh": {
      "stops": [
        "卡罗琳方尖碑",
        "博物馆广场",
        "方济各会教堂立面"
      ],
      "photoTip": "在方尖碑旁取景，将教堂立面和广场同框。"
    }
  },
  "adormirea-maicii-domnului-assumption-of-virgin-mary-orthodox-metropolitan-cathedral": {
    "en": {
      "stops": [
        "Avram Iancu Square",
        "open square view",
        "carved cathedral portal"
      ],
      "photoTip": "Step back across the square to fit the central dome and towers into one view."
    },
    "zh": {
      "stops": [
        "阿夫拉姆·扬库广场",
        "广场开阔处",
        "主教座堂雕刻门廊"
      ],
      "photoTip": "在广场往后退，将中央穹顶和塔楼放进同一画面。"
    }
  },
  "bob-greek-catholic-church": {
    "en": {
      "stops": [
        "Episcop Ioan Bob Street",
        "church frontage",
        "walk toward Union Square"
      ],
      "photoTip": "Use a public point in the lane to frame the compact entrance and adjacent façades."
    },
    "zh": {
      "stops": [
        "约安·鲍勃主教街",
        "教堂门面",
        "步行往联合广场"
      ],
      "photoTip": "从公共街巷取景，把紧凑入口和相邻立面放在一起。"
    }
  },
  "calvinist-episcopal-cathedral": {
    "en": {
      "stops": [
        "Boulevard 21 Decembrie 1989",
        "public crossing",
        "view of both towers"
      ],
      "photoTip": "From the opposite pavement, centre the symmetrical frontage between the towers."
    },
    "zh": {
      "stops": [
        "十二月二十一日大道",
        "人行横道",
        "双塔正面视角"
      ],
      "photoTip": "站在对面人行道，把对称立面放在双塔之间居中构图。"
    }
  },
  "cu-cocos-with-rooster-reformed-church": {
    "en": {
      "stops": [
        "Calea Moților",
        "public pavement view",
        "church entrance"
      ],
      "photoTip": "Start wide with the roofline, then frame the rooster finial using a closer crop."
    },
    "zh": {
      "stops": [
        "莫齐洛尔大道",
        "公共人行道观景处",
        "教堂入口"
      ],
      "photoTip": "先广角拍屋顶轮廓，再取公鸡顶饰的近景。"
    }
  },
  "evangelical-church": {
    "en": {
      "stops": [
        "Union Square east side",
        "Boulevard 21 Decembrie 1989",
        "Lutheran Church frontage"
      ],
      "photoTip": "Use the opposite pavement where accessible to photograph the whole front."
    },
    "zh": {
      "stops": [
        "联合广场东侧",
        "十二月二十一日大道",
        "路德会教堂立面"
      ],
      "photoTip": "在可以安全过街的地点，从对面人行道拍立面全貌。"
    }
  },
  "piarists-church": {
    "en": {
      "stops": [
        "University quarter",
        "Strada Universității",
        "Piarist Church portal"
      ],
      "photoTip": "Step back enough to include the two Baroque towers together."
    },
    "zh": {
      "stops": [
        "大学区",
        "大学街",
        "皮亚里斯特教堂门廊"
      ],
      "photoTip": "适当后退，让两座巴洛克塔楼同框。"
    }
  },
  "schimbarea-la-fata-the-transfiguration-greek-catholic-cathedral": {
    "en": {
      "stops": [
        "Eroilor Boulevard pedestrian space",
        "tower view",
        "cathedral entrance"
      ],
      "photoTip": "Frame the tower with a portion of the continuous boulevard frontage."
    },
    "zh": {
      "stops": [
        "英雄大道步行空间",
        "塔楼视角",
        "主教座堂入口"
      ],
      "photoTip": "把塔楼与英雄大道上一段连续沿街立面同框。"
    }
  },
  "the-neologist-synagogue": {
    "en": {
      "stops": [
        "Strada Horea",
        "synagogue street frontage",
        "memorial details"
      ],
      "photoTip": "From the public pavement, focus on decorative brickwork and towers.",
      "hours": "VisitCluj lists a temporary closure. Plan an exterior stop and check for updates.",
      "admission": "The public street view does not require admission. Check with the community about any future interior visit."
    },
    "zh": {
      "stops": [
        "霍雷亚街",
        "犹太会堂临街一侧",
        "纪念细节"
      ],
      "photoTip": "在公共人行道上取景，突出装饰砖砌和塔楼。",
      "hours": "VisitCluj 列为暂时关闭。建议按外观参观安排，并查询恢复开放公告。",
      "admission": "从公共街道看外观无需门票，日后如需入内，请向当地社群咨询。"
    },
    "hoursSource": "https://visitcluj.ro/tourist_spot/sinagoga-neologa-2/"
  },
  "the-reformed-church": {
    "en": {
      "stops": [
        "Kogălniceanu Street",
        "St George statue",
        "Gothic church doorway"
      ],
      "photoTip": "Use the statue as foreground for a public-space view of the church."
    },
    "zh": {
      "stops": [
        "科格尔尼恰努街",
        "圣乔治雕像",
        "哥特式教堂入口"
      ],
      "photoTip": "从公共区域以雕像为前景拍教堂。"
    }
  },
  "unitarian-cathedral": {
    "en": {
      "stops": [
        "Boulevard 21 Decembrie 1989",
        "street-facing tower",
        "cathedral doorway"
      ],
      "photoTip": "Where the crossing permits, use the opposite pavement for the tower and neighbouring buildings."
    },
    "zh": {
      "stops": [
        "十二月二十一日大道",
        "临街塔楼",
        "主教座堂入口"
      ],
      "photoTip": "可安全过街时，从对面人行道拍塔楼及相邻建筑。"
    }
  },
  "the-bogdanffy-house": {
    "en": {
      "stops": [
        "Strada Avram Iancu 1",
        "signed Plan B entrance",
        "exhibition and surviving wall fabric"
      ],
      "photoTip": "Photograph the house from the public pavement before entering the gallery.",
      "hours": "Check the Plan B Foundation programme for the current exhibition and visiting dates.",
      "admission": "Check admission terms for the exhibition or event you plan to attend."
    },
    "zh": {
      "stops": [
        "阿夫拉姆·扬库街1号",
        "Plan B 挂牌入口",
        "展览和留存城防遗迹"
      ],
      "photoTip": "进展厅前，可从公共人行道拍故居外观。",
      "hours": "请查 Plan B 基金会的当期展览和开放日期。",
      "admission": "参观费用以具体展览或活动的入场公告为准。"
    },
    "hoursSource": "https://fundatiaplanb.ro/en"
  },
  "the-railway-station-palace": {
    "en": {
      "stops": [
        "Piața Gării",
        "public forecourt",
        "central station frontage"
      ],
      "photoTip": "Use a wide frame from the forecourt and stand outside passenger flows.",
      "hours": "Use the public forecourt for the exterior. Check CFR for station services and train times.",
      "admission": "No train ticket is needed for the forecourt. Passenger areas and services follow railway rules."
    },
    "zh": {
      "stops": [
        "车站广场",
        "公共站前区",
        "站房中央立面"
      ],
      "photoTip": "在站前区用宽幅取景，避开旅客通行路线。",
      "hours": "外观从公共站前区观看。站内服务和列车时刻请查 CFR。",
      "admission": "到公共站前区无需火车票；客运区域和服务按铁路规定。"
    },
    "hoursSource": "https://www.cfrcalatori.ro/servicii-in-statiile-mari/"
  },
  "babos-palace": {
    "en": {
      "stops": [
        "Regele Ferdinand Street",
        "riverside corner",
        "bridge viewpoint"
      ],
      "photoTip": "Use a public bridge viewpoint to include both the building and the river corner.",
      "hours": "Plan an exterior stop from public streets. Check for a public event before planning to enter.",
      "admission": "The public street view does not require a ticket."
    },
    "zh": {
      "stops": [
        "费迪南德国王街",
        "滨河转角",
        "桥上视角"
      ],
      "photoTip": "从公共桥面取景，把建筑与河边转角一起纳入画面。",
      "hours": "建议从公共街道观赏外观。想入内时，先查是否有对外活动。",
      "admission": "从公共街道观赏外观无需门票。"
    },
    "hoursSource": "https://clujtourism.ro/en/portfolio/babos-palace/"
  }
};
