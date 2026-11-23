export type VisitDetails = {
  kind: 'garden' | 'museum' | 'church' | 'landmark';
  query: string;
  address: string;
  operator?: string;
  contact?: {en: string; zh: string};
  photo?: string;
  photoCredit?: string;
};

export const nearbyAttractions = [
  {
    "slug": "alexandru-borza-botanical-garden",
    "source": "alexandru-borza-botanical-garden",
    "en": {
      "title": "Alexandru Borza Botanical Garden",
      "description": "Follow the paths around the Japanese garden and compare the planted landscapes outdoors with the greenhouse collection when it is open.",
      "intro": "Follow the paths around the Japanese garden and compare the planted landscapes outdoors with the greenhouse collection when it is open.",
      "sections": [
        [
          "Planning your visit",
          "Enter on Republicii Street and give this hillside garden its own slot. The greenhouse and Japanese garden sit on different parts of the grounds, so pick one first if time is short."
        ],
        [
          "Walking route and photo viewpoints",
          "From the Republicii gate, visit the Japanese garden and then the greenhouse area. Photograph the bridge from the path across the water."
        ]
      ],
      "faq": [
        [
          "Is the botanical museum included in the walk?",
          "It shares the garden address. Check museum access separately before setting out."
        ]
      ],
      "history": "The university garden took shape under botanist Alexandru Borza in the early twentieth century. The Japanese garden uses water and a bridge to frame a sequence of views."
    },
    "zh": {
      "title": "亚历山德鲁·博尔扎植物园",
      "description": "沿日本庭园周边的步道散步，温室开放时再对比室内收藏与室外植物景观。",
      "intro": "沿日本庭园周边的步道散步，温室开放时再对比室内收藏与室外植物景观。",
      "sections": [
        [
          "游览安排",
          "从共和国街入园，为这座山坡植物园安排独立时段。如果时间有限，可先选温室或日本庭园，因为两处位于园内不同区域。"
        ],
        [
          "步行路线与拍摄位置",
          "从共和国街入口先去日本庭园，再前往温室区。拍桥时可站在水对岸的步道上。"
        ]
      ],
      "faq": [
        [
          "植物博物馆可以顺道参观吗？",
          "两者地址相同，出发前仍应单独核对展馆开放安排。"
        ]
      ],
      "history": "大学植物园由植物学家亚历山德鲁·博尔扎于20世纪初主持建设。日本庭园以水面与桥梁组织连续的观景视角。"
    }
  },
  {
    "slug": "iuliu-hatieganu-university-sports-park",
    "source": "iuliu-hatieganu-university-sports-park",
    "en": {
      "title": "Iuliu Hațieganu University Sports Park",
      "description": "Plan this stop around the tree-lined grounds and university sports setting. Ask about access before including a court or track in your plans.",
      "intro": "Plan this stop around the tree-lined grounds and university sports setting. Ask about access before including a court or track in your plans.",
      "sections": [
        [
          "Planning your visit",
          "The sports park is west of the old town. Start by checking which paths and facilities are open to visitors, then combine the outing with a riverside walk if access allows."
        ],
        [
          "Walking route and photo viewpoints",
          "Approach from Strada Pandurilor. Stay on open paths, then return toward the river. Frame a lane or path with its tree canopy from the edge."
        ]
      ],
      "faq": [
        [
          "Can I use the courts?",
          "Ask the university about current access and bookings before relying on a particular facility."
        ]
      ],
      "history": "The university sports park brings playing fields and training facilities into a landscaped setting. Look at the transition from public paths to marked sports areas."
    },
    "zh": {
      "title": "尤利乌·哈采加努大学体育公园",
      "description": "在林荫环境中感受大学体育公园的氛围；想使用球场或跑道，先询问场地开放安排。",
      "intro": "在林荫环境中感受大学体育公园的氛围；想使用球场或跑道，先询问场地开放安排。",
      "sections": [
        [
          "游览安排",
          "体育公园位于老城西侧。先核对开放的步道和设施，条件合适时可把这一站与河岸散步串起来。"
        ],
        [
          "步行路线与拍摄位置",
          "从潘杜里洛尔街抵达，沿开放步道走，再往河岸方向返回。可在步道边用树冠框住道路或跑道取景。"
        ]
      ],
      "faq": [
        [
          "游客可以使用球场吗？",
          "如计划使用某项设施，先向校方核对开放安排和预约要求。"
        ]
      ],
      "history": "大学体育公园将球场和训练设施布置在绿地中，可观察步行空间如何过渡到有边界的运动区域。"
    }
  },
  {
    "slug": "gheorgheni-park-iulius-mall",
    "source": "gheorgheni-park-iulius-mall",
    "en": {
      "title": "Gheorgheni Lakeside Park",
      "description": "Walk beside the Gheorgheni lake and pause for a view across the water. The path is a useful break in an itinerary on the east side of the city.",
      "intro": "Walk beside the Gheorgheni lake and pause for a view across the water. The path is a useful break in an itinerary on the east side of the city.",
      "sections": [
        [
          "Planning your visit",
          "Group this stop with an outing in Gheorgheni. Orient yourself at the lake rather than navigating to an arbitrary entrance of the shopping centre."
        ],
        [
          "Walking route and photo viewpoints",
          "Arrive on the Iulius Parc side and follow the path along the lake. Photograph the shore from a bend where the path opens onto the water."
        ]
      ],
      "faq": [
        [
          "Where should I set the destination?",
          "Select Iulius Parc Cluj for the lakeside paths; mall entrances serve a different purpose."
        ]
      ],
      "history": "This landscaped space connects a modern retail complex to the Gheorgheni lake. Its lakeside path uses the water as the main element of the park’s layout."
    },
    "zh": {
      "title": "格奥尔盖尼湖滨公园",
      "description": "沿格奥尔盖尼湖步行，在岸边驻足看对岸。这里适合安排在市区东侧行程中，作为一段轻松的休息时间。",
      "intro": "沿格奥尔盖尼湖步行，在岸边驻足看对岸。这里适合安排在市区东侧行程中，作为一段轻松的休息时间。",
      "sections": [
        [
          "游览安排",
          "把这里放进格奥尔盖尼片区的行程，以湖岸为目的地，避免从商场另一侧绕行。"
        ],
        [
          "步行路线与拍摄位置",
          "从 Iulius Parc 一侧抵达并沿湖走。在步道转弯、视野向湖面打开的位置拍岸线。"
        ]
      ],
      "faq": [
        [
          "导航目的地应选哪里？",
          "要走湖边步道，选 Iulius Parc Cluj。商场入口适合前往商业区。"
        ]
      ],
      "history": "这处绿地将现代商业建筑与格奥尔盖尼湖连接起来，沿湖步道以水面为布局核心。"
    }
  },
  {
    "slug": "the-rose-park",
    "source": "the-rose-park",
    "en": {
      "title": "Rose Park",
      "description": "Pair the park paths with a stretch of the Someșul Mic riverbank. Allow extra time for the riverside walk if you are coming from the centre.",
      "intro": "Pair the park paths with a stretch of the Someșul Mic riverbank. Allow extra time for the riverside walk if you are coming from the centre.",
      "sections": [
        [
          "Planning your visit",
          "Treat the riverbank and the park as one west-side walk. Use the paths through the garden for a short stop or extend the route along the river."
        ],
        [
          "Walking route and photo viewpoints",
          "Enter by Aleea Rozelor and follow the garden paths toward the embankment. For photos, look for an opening where trees frame the river."
        ]
      ],
      "faq": [
        [
          "Can I continue along the river?",
          "Use the open riverside paths and follow local diversions if works affect the route."
        ]
      ],
      "history": "Rose Park belongs to the city’s riverside green network. Notice how the garden paths and the Someșul Mic embankment offer different views of the same stretch of river."
    },
    "zh": {
      "title": "玫瑰公园",
      "description": "把园内步道与小索梅什河岸串起来走。从市中心步行过来时，给河边路段多留一点时间。",
      "intro": "把园内步道与小索梅什河岸串起来走。从市中心步行过来时，给河边路段多留一点时间。",
      "sections": [
        [
          "游览安排",
          "把公园和河岸当成市区西侧的一段步行，可在园内短暂停留，也可沿河延长路线。"
        ],
        [
          "步行路线与拍摄位置",
          "从玫瑰小径进入，沿园路往河堤走。选一处树木让开视线的地方，用树枝与河道一起构图。"
        ]
      ],
      "faq": [
        [
          "可以接着沿河走吗？",
          "可沿开放的滨河步道继续。遇到施工时按现场绕行标识走。"
        ]
      ],
      "history": "玫瑰公园是城市滨河绿地的一部分。园内步道和小索梅什河堤能从不同角度观察同一段河道。"
    }
  },
  {
    "slug": "the-ethnographic-museum-of-transylvania",
    "source": "the-ethnographic-museum-of-transylvania",
    "en": {
      "title": "Ethnographic Museum of Transylvania",
      "description": "Look for the uses of garments and household tools before comparing the designs across communities. This is the indoor museum in the centre.",
      "intro": "Look for the uses of garments and household tools before comparing the designs across communities. This is the indoor museum in the centre.",
      "sections": [
        [
          "Planning your visit",
          "Set aside a separate trip for Romulus Vuia’s outdoor collection. The central indoor museum is the better stop for a close look at objects in display cases."
        ],
        [
          "Walking route and photo viewpoints",
          "Start on Memorandumului Street, view the entrance façade, then tour the indoor displays. For an exterior photo, frame the street frontage from the opposite pavement."
        ]
      ],
      "faq": [
        [
          "Where are the historic farm buildings?",
          "They are displayed at the separate Romulus Vuia open-air site."
        ]
      ],
      "history": "The museum’s city galleries occupy the historic Reduta building. Inside, clothing and tools show how fabric, wood and metal were adapted to everyday work."
    },
    "zh": {
      "title": "特兰西瓦尼亚民族志博物馆",
      "description": "先观察服饰和生活器具各自的用途，再比较不同社区的工艺。这一站是市中心的室内展馆。",
      "intro": "先观察服饰和生活器具各自的用途，再比较不同社区的工艺。这一站是市中心的室内展馆。",
      "sections": [
        [
          "游览安排",
          "罗穆卢斯·武亚露天展区适合另行安排。市中心的室内馆更便于细看展柜里的器物。"
        ],
        [
          "步行路线与拍摄位置",
          "从纪念书街出发，先看入口立面，再进馆参观。拍摄外观可站在街对面人行道，把临街一侧收进画面。"
        ]
      ],
      "faq": [
        [
          "历史农舍在哪里？",
          "农舍在另一个地点，即罗穆卢斯·武亚露天展区。"
        ]
      ],
      "history": "市区展馆设在历史建筑雷杜塔内。馆内的服饰和工具展示了织物、木材与金属在日常劳动中的用法。"
    }
  },
  {
    "slug": "the-mineralogy-museum",
    "source": "the-mineralogy-museum",
    "en": {
      "title": "Mineralogy Museum",
      "description": "Compare crystal shapes, lustre and colour across specimens. Read the locality labels to see how the collection links geology to mining regions.",
      "intro": "Compare crystal shapes, lustre and colour across specimens. Read the locality labels to see how the collection links geology to mining regions.",
      "sections": [
        [
          "Planning your visit",
          "The visit can be paired with the fossil collection at the university. Start here if you are interested in how minerals form and how specimens are classified."
        ],
        [
          "Walking route and photo viewpoints",
          "Enter the UBB main building on Kogălniceanu Street and ask for the ground-floor mineralogy rooms. If photography is permitted, shoot at an angle to reduce reflections."
        ]
      ],
      "faq": [
        [
          "What can I focus on during a short stop?",
          "Pick one group of crystals and compare labels for shape, mineral name and locality."
        ]
      ],
      "history": "The university’s mineral collections grew out of teaching and scientific classification. The exhibition cases allow side-by-side comparison of crystal forms and specimen origins."
    },
    "zh": {
      "title": "矿物学博物馆",
      "description": "对着标本比较晶体形状、光泽和颜色，再看产地标签，了解馆藏如何把地质与矿区联系起来。",
      "intro": "对着标本比较晶体形状、光泽和颜色，再看产地标签，了解馆藏如何把地质与矿区联系起来。",
      "sections": [
        [
          "游览安排",
          "这站可与大学的化石馆搭配。对矿物形成与标本分类感兴趣的话，可以先看这里。"
        ],
        [
          "步行路线与拍摄位置",
          "从科格尔尼恰努街进入大学主楼，询问一楼矿物学展室。若允许拍照，可从斜侧取景以减少玻璃反光。"
        ]
      ],
      "faq": [
        [
          "停留时间短，可以重点看什么？",
          "选一组晶体，对照观察形状、矿物名称和产地标签。"
        ]
      ],
      "history": "大学矿物馆藏源于教学和科学分类。展柜便于同时比较晶体形态与标本产地。"
    }
  },
  {
    "slug": "david-prodan-museum",
    "source": "david-prodan-museum",
    "en": {
      "title": "David Prodan Museum",
      "description": "Use this small museum to learn about the historian’s work on Transylvania. The personal setting gives documents and books a biographical context.",
      "intro": "Use this small museum to learn about the historian’s work on Transylvania. The personal setting gives documents and books a biographical context.",
      "sections": [
        [
          "Planning your visit",
          "Put this visit after an introduction to local history. Ask the museum about admission before going, particularly when building a schedule around other appointments."
        ],
        [
          "Walking route and photo viewpoints",
          "Navigate to Academician David Prodan Street 1 and check the apartment entrance instructions. In the study, use the doorway for a wider composition if photography is allowed."
        ]
      ],
      "faq": [
        [
          "Is this inside a residential building?",
          "Yes. Use the museum’s apartment number and visitor instructions for the final approach."
        ]
      ],
      "history": "The memorial museum opened in 2018 in the historian’s former home. Furniture, books and correspondence show how a domestic space served as a place for research and writing."
    },
    "zh": {
      "title": "大卫·普罗丹纪念馆",
      "description": "从这座小型纪念馆认识历史学家对特兰西瓦尼亚的研究；私人生活空间也为书籍与文献提供了传记背景。",
      "intro": "从这座小型纪念馆认识历史学家对特兰西瓦尼亚的研究；私人生活空间也为书籍与文献提供了传记背景。",
      "sections": [
        [
          "游览安排",
          "先对当地历史有个基本了解，再安排这一站。如果同日另有预约，请先向馆方确认能否参观。"
        ],
        [
          "步行路线与拍摄位置",
          "前往大卫·普罗丹院士街1号，事先核对公寓入口说明。若允许拍照，可从书房门口取较宽的室内画面。"
        ]
      ],
      "faq": [
        [
          "纪念馆在住宅楼里吗？",
          "是的。最后一段请按馆方公布的公寓号和到访指引前往。"
        ]
      ],
      "history": "纪念馆于2018年在历史学家故居开放。家具、书籍与往来信件展示了这处居住空间如何兼作研究和写作场所。"
    }
  },
  {
    "slug": "ubb-holocaust-museum",
    "source": "ubb-holocaust-museum",
    "en": {
      "title": "UBB Holocaust Museum",
      "description": "Set aside time to read the historical records and follow the chronology of persecution and deportation in Northern Transylvania.",
      "intro": "Set aside time to read the historical records and follow the chronology of persecution and deportation in Northern Transylvania.",
      "sections": [
        [
          "Planning your visit",
          "Allow time for a quiet visit without having to rush to another venue. Ask staff which parts of the collection suit younger visitors before planning a family visit."
        ],
        [
          "Walking route and photo viewpoints",
          "Approach from Croitorilor Street. Work through the timeline before reading individual testimonies. Keep photography to areas where staff permit it."
        ]
      ],
      "faq": [
        [
          "How should I prepare for a family visit?",
          "Ask staff for age-appropriate material and allow time for questions after the exhibition."
        ]
      ],
      "history": "Created as a documentary and educational museum, it examines Jewish life and the Holocaust in Northern Transylvania. Timelines, records and testimony carry the story through its interior galleries."
    },
    "zh": {
      "title": "克鲁日大学大屠杀纪念博物馆",
      "description": "留出时间阅读史料，沿时间顺序理解北特兰西瓦尼亚的迫害与驱逐历史。",
      "intro": "留出时间阅读史料，沿时间顺序理解北特兰西瓦尼亚的迫害与驱逐历史。",
      "sections": [
        [
          "游览安排",
          "为这座纪念馆留出安静阅读的时间，不必赶着前往下一站。亲子到访前，可向馆方询问适龄展区。"
        ],
        [
          "步行路线与拍摄位置",
          "从裁缝街前往。先读时间线，再看个人证词。拍摄请限于馆方允许的区域。"
        ]
      ],
      "faq": [
        [
          "亲子参观前可以做什么准备？",
          "可请馆方推荐适龄内容，并在参观后留时间讨论问题。"
        ]
      ],
      "history": "这座文献与教育博物馆介绍北特兰西瓦尼亚的犹太人生活及大屠杀历史，室内展览以时间线、档案与证词串联叙事。"
    }
  },
  {
    "slug": "the-paleontology-and-stratigraphy-museum",
    "source": "the-paleontology-and-stratigraphy-museum",
    "en": {
      "title": "Paleontology and Stratigraphy Museum",
      "description": "Read the geological period alongside the fossil name. Comparing specimens by age makes the stratigraphy section easier to follow.",
      "intro": "Read the geological period alongside the fossil name. Comparing specimens by age makes the stratigraphy section easier to follow.",
      "sections": [
        [
          "Planning your visit",
          "Pair the fossil displays with the mineralogy museum if both are accepting visitors. Allow separate time for the labels because the two collections answer different questions."
        ],
        [
          "Walking route and photo viewpoints",
          "Use the Kogălniceanu Street address and check the room before visiting. Look for a display where several ages can be compared; frame the labels as well as the specimens if allowed."
        ]
      ],
      "faq": [
        [
          "Is this the same as the mineralogy museum?",
          "They are separate university collections at the same street address. Check entry to each collection separately."
        ]
      ],
      "history": "The museum preserves university teaching collections documenting life through geological time. Transylvanian dinosaur fossils give the regional collection a distinct focus."
    },
    "zh": {
      "title": "古生物与地层学博物馆",
      "description": "看化石名称时也留意所属地质年代；按年代比较标本，更容易理解地层学展陈。",
      "intro": "看化石名称时也留意所属地质年代；按年代比较标本，更容易理解地层学展陈。",
      "sections": [
        [
          "游览安排",
          "若两馆都对外开放，可和矿物学博物馆搭配。两处关注的问题不同，建议分别留时间阅读说明。"
        ],
        [
          "步行路线与拍摄位置",
          "按科格尔尼恰努街地址前往，出发前确认展室。找一处可对照不同年代的展柜；允许拍照时，把标本和说明牌一并入镜。"
        ]
      ],
      "faq": [
        [
          "这和矿物学博物馆是同一处吗？",
          "两馆同址，但馆藏分设。请分别核对入口与接待安排。"
        ]
      ],
      "history": "博物馆保存用于讲授地质年代与生命演化的大学馆藏。特兰西瓦尼亚恐龙化石是其中具有地域特色的一部分。"
    }
  },
  {
    "slug": "alexandru-duma-museum",
    "source": "alexandru-duma-museum",
    "en": {
      "title": "Alexandru Duma Museum",
      "description": "Build the visit around the university collection’s own interpretation. Ask ahead about access to this specialist collection.",
      "intro": "Build the visit around the university collection’s own interpretation. Ask ahead about access to this specialist collection.",
      "sections": [
        [
          "Planning your visit",
          "Use the Calea Moților address to find the collection and consult its own visitor information before setting out, especially for a short trip with a tight schedule."
        ],
        [
          "Walking route and photo viewpoints",
          "Go to Calea Moților 11 and follow the university’s fifth-floor directions. View the drawings in sequence; ask before photographing paper works."
        ]
      ],
      "faq": [
        [
          "Is the collection at street level?",
          "The university lists the museum on the fifth floor. Confirm the entrance and accessibility ahead of your visit."
        ]
      ],
      "history": "The university established the museum around Alexandru Duma’s work. His First World War drawings and related objects document what an artist recorded during wartime."
    },
    "zh": {
      "title": "亚历山德鲁·杜马博物馆",
      "description": "以校方对这批专门馆藏的介绍来安排参观，出发前先询问是否需要预约。",
      "intro": "以校方对这批专门馆藏的介绍来安排参观，出发前先询问是否需要预约。",
      "sections": [
        [
          "游览安排",
          "按莫齐洛尔大道地址找展馆，出发前查看其参观信息，尤其是短途行程或时间较紧时。"
        ],
        [
          "步行路线与拍摄位置",
          "到莫齐洛尔大道11号后按大学指引上五楼。可按顺序看绘图，拍摄纸本作品前先询问。"
        ]
      ],
      "faq": [
        [
          "展馆在街面一层吗？",
          "校方公布的展馆位于五楼。到访前可先核对入口和无障碍安排。"
        ]
      ],
      "history": "大学围绕亚历山德鲁·杜马的作品设立了这座博物馆。他的一战绘图及相关物件记录了艺术家在战时的所见。"
    }
  },
  {
    "slug": "pharmacy-museum",
    "source": "pharmacy-museum",
    "en": {
      "title": "Pharmacy Museum",
      "description": "In the Hintz House, compare the pharmacy’s retail space with the equipment and vessels used to prepare and store remedies.",
      "intro": "In the Hintz House, compare the pharmacy’s retail space with the equipment and vessels used to prepare and store remedies.",
      "sections": [
        [
          "Planning your visit",
          "Use the entrance on Union Square and allow enough time for the rooms farther inside. Compare the preserved interiors with the exterior of the historic building on your way out."
        ],
        [
          "Walking route and photo viewpoints",
          "Use the Union Square entrance, then read the displays from the shop area through the preparation rooms. From outdoors, frame the house with its square-facing neighbours."
        ]
      ],
      "faq": [
        [
          "Is this a working pharmacy?",
          "It is a museum collection. Check the museum’s posted hours for admission."
        ]
      ],
      "history": "The collection is set in Hintz House, a historic Cluj pharmacy. The former shop and preparation areas show why the building itself matters to the display."
    },
    "zh": {
      "title": "药房博物馆",
      "description": "在欣茨故居内，对照药房的对客空间和配制、储存药品所用的器具。",
      "intro": "在欣茨故居内，对照药房的对客空间和配制、储存药品所用的器具。",
      "sections": [
        [
          "游览安排",
          "从联合广场入口进入，为里面的展室多留一点时间。离馆时可以把保存的室内陈设与历史建筑外观对照着看。"
        ],
        [
          "步行路线与拍摄位置",
          "从联合广场入口进入，依次看陈列销售与配药的房间。从室外拍摄时，可把故居和广场沿线相邻建筑一起纳入画面。"
        ]
      ],
      "faq": [
        [
          "这里还在经营药房吗？",
          "这里是博物馆展馆，入内请查看馆方公布的开放时间。"
        ]
      ],
      "history": "馆藏设在克鲁日的历史药房欣茨故居，昔日的对客空间和配药区域使建筑本身也成为展陈的一部分。"
    }
  },
  {
    "slug": "cluj-napoca-art-museum",
    "source": "cluj-napoca-art-museum",
    "en": {
      "title": "Cluj-Napoca Art Museum",
      "description": "Look up at the Bánffy Palace façade before entering, then leave time for both the art and the rooms that house it.",
      "intro": "Look up at the Bánffy Palace façade before entering, then leave time for both the art and the rooms that house it.",
      "sections": [
        [
          "Planning your visit",
          "Start from Union Square and check which galleries or temporary exhibitions are open. If the itinerary is short, choose one exhibition and reserve a few minutes for the palace exterior."
        ],
        [
          "Walking route and photo viewpoints",
          "Cross Union Square for a wide view of the front, then enter to see the courtyard and chosen galleries. Use the open square for a façade photo."
        ]
      ],
      "faq": [
        [
          "Should I check the temporary shows first?",
          "Yes, particularly if a specific exhibition is the reason for going. Plan time for the building as well as the galleries."
        ]
      ],
      "history": "The art museum is housed in the Baroque Bánffy Palace. The formal façade and courtyard provide useful context for understanding the layout of the former residence."
    },
    "zh": {
      "title": "克鲁日-纳波卡艺术博物馆",
      "description": "进馆前先看班菲宫立面，入内后留意作品与展厅建筑本身。",
      "intro": "进馆前先看班菲宫立面，入内后留意作品与展厅建筑本身。",
      "sections": [
        [
          "游览安排",
          "从联合广场前往，先核对开放展厅与临时展览。行程较短时可选一个展览，并给宫殿外观留几分钟。"
        ],
        [
          "步行路线与拍摄位置",
          "先到联合广场对面看立面全貌，再进庭院和选定的展厅。拍立面时可利用广场的开阔空间。"
        ]
      ],
      "faq": [
        [
          "需要先查临时展览吗？",
          "如果是专程看某个展览，建议先查。除展厅外，也可以为建筑本身留时间。"
        ]
      ],
      "history": "艺术博物馆设在巴洛克风格的班菲宫。正立面和庭院有助于理解昔日宅邸的空间安排。"
    }
  },
  {
    "slug": "botanical-museum",
    "source": "botanical-museum",
    "en": {
      "title": "Botanical Museum",
      "description": "Look for specimens and teaching displays that explain plant structures. Its indoor collection complements the living plants in the garden.",
      "intro": "Look for specimens and teaching displays that explain plant structures. Its indoor collection complements the living plants in the garden.",
      "sections": [
        [
          "Planning your visit",
          "Plan the museum and botanical garden as two stops at the same address. Confirm the museum’s access separately if the indoor collection is the purpose of your visit."
        ],
        [
          "Walking route and photo viewpoints",
          "Enter from the Republicii Street side and ask where the indoor collection admits visitors. If permitted, photograph a specimen with the label in the same frame."
        ]
      ],
      "faq": [
        [
          "Can I see living plants here?",
          "The museum focuses on preserved specimens. The adjacent botanical garden is the stop for living collections."
        ]
      ],
      "history": "The university’s indoor collection presents preserved plant material for comparison and study. Look at how specimens and their labels communicate structure and classification."
    },
    "zh": {
      "title": "植物博物馆",
      "description": "观察标本和教学展品如何呈现植物结构；室内馆藏可以和园里的活植物对照着看。",
      "intro": "观察标本和教学展品如何呈现植物结构；室内馆藏可以和园里的活植物对照着看。",
      "sections": [
        [
          "游览安排",
          "植物博物馆和植物园共用同一地址，可以分成两站安排。如果主要想看室内馆藏，请另行确认展馆开放情况。"
        ],
        [
          "步行路线与拍摄位置",
          "从共和国街一侧进入，询问室内展馆的接待入口。若允许拍摄，可将标本与标签放进同一个画面。"
        ]
      ],
      "faq": [
        [
          "这里能看活植物吗？",
          "室内馆以保存标本为主。要看活植物，可另逛同址植物园。"
        ]
      ],
      "history": "大学的室内馆藏以保存的植物材料供比较与研究。可观察标本及标签如何说明植物结构和分类。"
    }
  },
  {
    "slug": "romulus-vuia-national-ethnographic-park-2",
    "source": "romulus-vuia-national-ethnographic-park-2",
    "en": {
      "title": "Romulus Vuia Ethnographic Park",
      "description": "Compare rooflines and building materials across the outdoor collection of rural architecture. Leave time for the paths between buildings.",
      "intro": "Compare rooflines and building materials across the outdoor collection of rural architecture. Leave time for the paths between buildings.",
      "sections": [
        [
          "Planning your visit",
          "Wear shoes suitable for an outdoor visit and plan extra travel time from the historic centre. Rain and seasonal schedules can affect how much of the site you see."
        ],
        [
          "Walking route and photo viewpoints",
          "Take the signed entrance on Tăietura Turcului and follow the paths between exhibits. For a photo, step back far enough to include one building and its adjacent yard."
        ]
      ],
      "faq": [
        [
          "Is the whole visit indoors if it rains?",
          "Most movement between buildings is outdoors. Check the forecast and the park’s seasonal schedule."
        ]
      ],
      "history": "Named for ethnographer Romulus Vuia, this open-air collection presents rural buildings in a landscaped setting. Compare heavy timber construction with the lighter roofs and outbuildings around it."
    },
    "zh": {
      "title": "罗穆卢斯·武亚民族志公园",
      "description": "比较露天陈列中各地乡村建筑的屋顶形制与材料，并给展屋之间的步行预留时间。",
      "intro": "比较露天陈列中各地乡村建筑的屋顶形制与材料，并给展屋之间的步行预留时间。",
      "sections": [
        [
          "游览安排",
          "这里是露天馆区，从老城出发宜多留交通时间，穿适合户外步行的鞋。雨天及季节性开放安排会影响参观范围。"
        ],
        [
          "步行路线与拍摄位置",
          "从泰耶图拉图尔库卢伊街的挂牌入口进入，沿步道串联展屋。拍摄时可适当退远，让一栋建筑及相邻庭院同框。"
        ]
      ],
      "faq": [
        [
          "下雨可以全程室内参观吗？",
          "各建筑之间大多要走露天步道。出发前查看天气和园区时令开放时间。"
        ]
      ],
      "history": "露天展区以民族志学者罗穆卢斯·武亚命名，在绿地中陈列乡村建筑，可对比厚重木构、较轻的屋顶和附属建筑。"
    }
  },
  {
    "slug": "vivariu-museum",
    "source": "vivariu-museum",
    "en": {
      "title": "Vivarium",
      "description": "Look at how enclosures reflect the needs of different animals, and use the labels to distinguish the species on display.",
      "intro": "Look at how enclosures reflect the needs of different animals, and use the labels to distinguish the species on display.",
      "sections": [
        [
          "Planning your visit",
          "At the Clinicilor address, ask for the living collection. Let children read the enclosure signs and allow time for animals that may be less visible at first."
        ],
        [
          "Walking route and photo viewpoints",
          "At Clinicilor 5–7, ask for the Vivarium entrance. Visit the enclosures slowly; keep flash off and photograph only if the venue allows it."
        ]
      ],
      "faq": [
        [
          "How is this different from the Zoological Museum?",
          "The Vivarium displays living animals. The neighbouring museum’s collections centre on preserved specimens."
        ]
      ],
      "history": "The university Vivarium uses living collections for observation and education. Compare how each enclosure arranges shelter, light and climbing surfaces for its animals."
    },
    "zh": {
      "title": "克鲁日大学动物活体馆",
      "description": "观察展箱如何适应不同动物的需要，并通过说明牌辨识展出的物种。",
      "intro": "观察展箱如何适应不同动物的需要，并通过说明牌辨识展出的物种。",
      "sections": [
        [
          "游览安排",
          "到克利尼奇洛尔街后询问活体馆入口。可以让孩子先读展箱说明，再多等一会观察不易立刻看到的动物。"
        ],
        [
          "步行路线与拍摄位置",
          "到克利尼奇洛尔街5–7号后询问活体馆入口。缓步观察展箱，经馆方允许再拍照，并关闭闪光灯。"
        ]
      ],
      "faq": [
        [
          "和动物学博物馆有什么区别？",
          "活体馆展示活体，邻近的动物学博物馆则以保存标本为主。"
        ]
      ],
      "history": "大学活体馆通过活体收藏开展观察与教学。可比较不同展箱如何布置藏身处、光照和攀爬表面。"
    }
  },
  {
    "slug": "the-zoological-museum",
    "source": "the-zoological-museum",
    "en": {
      "title": "Zoological Museum",
      "description": "Compare specimens by habitat and body structure. The preserved collections make this a different visit from the university vivarium.",
      "intro": "Compare specimens by habitat and body structure. The preserved collections make this a different visit from the university vivarium.",
      "sections": [
        [
          "Planning your visit",
          "This collection shares the Clinicilor address with the vivarium. Ask which entrance to use and decide in advance whether to visit one or both."
        ],
        [
          "Walking route and photo viewpoints",
          "Use the Clinicilor address and ask for the zoological collection. Move through the cases by group; if allowed, take an oblique photo to avoid glare off the glass."
        ]
      ],
      "faq": [
        [
          "Can I visit the Vivarium on the same trip?",
          "The two are at the same street address. Verify both sets of opening hours before planning a combined visit."
        ]
      ],
      "history": "The university zoological collection connects local fauna with specimens from farther afield. Its cases allow visitors to compare body forms across habitats."
    },
    "zh": {
      "title": "动物学博物馆",
      "description": "可按栖息地和体态比较标本；保存标本是这里的重点，可与大学动物活体馆搭配参观。",
      "intro": "可按栖息地和体态比较标本；保存标本是这里的重点，可与大学动物活体馆搭配参观。",
      "sections": [
        [
          "游览安排",
          "这里和活体馆同在克利尼奇洛尔街地址内。可先询问从哪个入口进入，再决定看其中一处还是两处都看。"
        ],
        [
          "步行路线与拍摄位置",
          "按克利尼奇洛尔街地址询问动物学展馆。可按动物类群逛展柜，允许拍照时从斜侧避开玻璃反光。"
        ]
      ],
      "faq": [
        [
          "可以同一天参观活体馆吗？",
          "两馆位于同一街道地址，合并行程前请分别核对开放时间。"
        ]
      ],
      "history": "大学动物学馆藏既有本地动物，也有来自其他地区的标本，可通过相邻展柜对照不同栖息地动物的体态。"
    }
  },
  {
    "slug": "national-history-museum-of-transylvania",
    "source": "national-history-museum-of-transylvania",
    "en": {
      "title": "National History Museum of Transylvania",
      "description": "Check the current exhibitions first, then choose the archaeological or historical material you want to spend time with.",
      "intro": "Check the current exhibitions first, then choose the archaeological or historical material you want to spend time with.",
      "sections": [
        [
          "Planning your visit",
          "The museum fits a Museum Square walk. Plan the indoor visit from the current exhibition listing, and leave the surrounding historic streets for afterward."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk from Museum Square to Constantin Daicoviciu Street. See the façade from across the street, then give one exhibit the time it needs."
        ]
      ],
      "faq": [
        [
          "Will every collection be on display?",
          "Check the museum’s current exhibitions for the material you want to see."
        ]
      ],
      "history": "The collections reflect the region’s archaeological and historical research. The city-centre museum is best explored through the exhibitions currently on display."
    },
    "zh": {
      "title": "特兰西瓦尼亚国家历史博物馆",
      "description": "先查看当前展览，再决定重点参观考古材料还是历史主题。",
      "intro": "先查看当前展览，再决定重点参观考古材料还是历史主题。",
      "sections": [
        [
          "游览安排",
          "可将博物馆排入博物馆广场一带的步行路线。先按当前展览规划馆内参观，再走访周围的历史街巷。"
        ],
        [
          "步行路线与拍摄位置",
          "从博物馆广场步行到康斯坦丁·达伊科维丘街。先在街对面看外立面，再选一项展览仔细参观。"
        ]
      ],
      "faq": [
        [
          "所有馆藏都会展出吗？",
          "请查当期展览，确认感兴趣的馆藏是否可见。"
        ]
      ],
      "history": "馆藏反映了本地区的考古与历史研究。市中心展馆适合按当期开设的展览选择参观内容。"
    }
  },
  {
    "slug": "museum-of-cluj-metropolitan-church",
    "source": "museum-of-cluj-metropolitan-church",
    "en": {
      "title": "Metropolitan Church Museum",
      "description": "Allow a separate stop for the religious collection instead of assuming a visit to the cathedral includes admission to the museum.",
      "intro": "Allow a separate stop for the religious collection instead of assuming a visit to the cathedral includes admission to the museum.",
      "sections": [
        [
          "Planning your visit",
          "Use the cathedral square to orient yourself, then confirm the museum entrance separately. Give the museum and the active place of worship separate time."
        ],
        [
          "Walking route and photo viewpoints",
          "Use Avram Iancu Square to find the cathedral and ask for museum access. In permitted areas, use a doorway to frame the transition between galleries."
        ]
      ],
      "faq": [
        [
          "Does visiting the cathedral include the museum?",
          "The museum is a separate stop. Check its entrance, schedule and admission conditions."
        ]
      ],
      "history": "The Metropolitan Museum occupies rooms below the Orthodox cathedral. Its exhibition gives icons, manuscripts and church objects a setting distinct from the worship space above."
    },
    "zh": {
      "title": "克鲁日都主教区博物馆",
      "description": "把宗教馆藏另排一站，进主教座堂前可先问清博物馆的入口和参观安排。",
      "intro": "把宗教馆藏另排一站，进主教座堂前可先问清博物馆的入口和参观安排。",
      "sections": [
        [
          "游览安排",
          "到主教座堂所在广场后，再确认博物馆入口。建议分别为博物馆和仍用于礼拜的座堂留出时间。"
        ],
        [
          "步行路线与拍摄位置",
          "到阿夫拉姆·扬库广场找到座堂后询问博物馆入口。在允许拍照的区域，可用门框表现展厅之间的过渡。"
        ]
      ],
      "faq": [
        [
          "参观座堂会自动经过博物馆吗？",
          "博物馆要另外安排，需单独核对入口、开放时间及入场条件。"
        ]
      ],
      "history": "都主教区博物馆位于东正教主教座堂下方，圣像、手稿和宗教器物有独立于上方礼拜空间的展室。"
    }
  },
  {
    "slug": "calvaria-roman-catholic-church",
    "source": "calvaria-roman-catholic-church",
    "en": {
      "title": "Calvaria Church",
      "description": "Approach the raised church site from the lower streets in Mănăștur and look at the position that once gave the complex a commanding setting.",
      "intro": "Approach the raised church site from the lower streets in Mănăștur and look at the position that once gave the complex a commanding setting.",
      "sections": [
        [
          "Planning your visit",
          "This is a separate outing in Mănăștur. Choose the church as the destination and check the approach if steep paths are a concern."
        ],
        [
          "Walking route and photo viewpoints",
          "Approach from Strada Primăverii and follow the signed uphill entrance. A lower vantage point shows the rise of the churchyard above the road."
        ]
      ],
      "faq": [
        [
          "Is there a level approach?",
          "Check the final approach before visiting. The church stands on raised ground."
        ]
      ],
      "history": "The elevated site has roots in the medieval Benedictine abbey of Cluj-Mănăștur. Its position above the street helps explain the separation between the historic precinct and the later neighbourhood."
    },
    "zh": {
      "title": "卡尔瓦里亚教堂",
      "description": "从默讷什图尔较低的街道走向高处教堂，观察这处建筑群的地势。",
      "intro": "从默讷什图尔较低的街道走向高处教堂，观察这处建筑群的地势。",
      "sections": [
        [
          "游览安排",
          "这是默讷什图尔片区的一站。导航目的地选教堂，若不便走陡坡，可提前查看入口一带的地势。"
        ],
        [
          "步行路线与拍摄位置",
          "从普里默韦里街沿入口标识上坡。站在较低的公共位置，可以拍到教堂院落与道路之间的高差。"
        ]
      ],
      "faq": [
        [
          "入口一路平坦吗？",
          "教堂位于高地，到访前可先查看最后一段的坡度与入口条件。"
        ]
      ],
      "history": "这处高地可追溯至克鲁日-默讷什图尔的中世纪本笃会修道院。高出街道的地势，使历史院落与后来形成的街区明显分开。"
    }
  },
  {
    "slug": "church-of-franciscan-monastery",
    "source": "church-of-franciscan-monastery",
    "en": {
      "title": "Franciscan Church",
      "description": "Start in Museum Square and study how the church frontage and the adjoining monastery define the edge of the square.",
      "intro": "Start in Museum Square and study how the church frontage and the adjoining monastery define the edge of the square.",
      "sections": [
        [
          "Planning your visit",
          "The Carolina Obelisk is a useful orientation point. Pass through Museum Square and stop at the church separately if the interior is open to visitors."
        ],
        [
          "Walking route and photo viewpoints",
          "Start at the Carolina Obelisk and cross Museum Square toward the church door. From beside the obelisk, include both the church frontage and the square in one view."
        ]
      ],
      "faq": [
        [
          "Can I visit the monastery rooms too?",
          "Follow the church’s visitor notices. Access to the sanctuary and adjoining buildings may differ."
        ]
      ],
      "history": "The church and its adjoining monastery reflect successive uses of a medieval religious site. Compare the church’s Baroque frontage with the scale of the former monastery beside it."
    },
    "zh": {
      "title": "方济各会教堂",
      "description": "从博物馆广场看起，观察教堂立面和相连修道院如何界定广场的边缘。",
      "intro": "从博物馆广场看起，观察教堂立面和相连修道院如何界定广场的边缘。",
      "sections": [
        [
          "游览安排",
          "可用卡罗琳方尖碑定位，穿过博物馆广场；若教堂对游客开放，再把入内参观单独安排。"
        ],
        [
          "步行路线与拍摄位置",
          "从卡罗琳方尖碑穿过博物馆广场走向教堂门口。站在碑旁，可把教堂立面与广场空间一起拍入画面。"
        ]
      ],
      "faq": [
        [
          "修道院房间也能参观吗？",
          "请按教堂公布的参观指引行动。礼拜空间与邻接建筑的开放条件可能不同。"
        ]
      ],
      "history": "教堂和相连修院见证了这处中世纪宗教地点历次使用的变化。可对比教堂的巴洛克立面与一旁旧修院的体量。"
    }
  },
  {
    "slug": "adormirea-maicii-domnului-assumption-of-virgin-mary-orthodox-metropolitan-cathedral",
    "source": "adormirea-maicii-domnului-assumption-of-virgin-mary-orthodox-metropolitan-cathedral",
    "en": {
      "title": "Orthodox Metropolitan Cathedral",
      "description": "Step back across Avram Iancu Square for the silhouette, then approach for the stonework and portal details.",
      "intro": "Step back across Avram Iancu Square for the silhouette, then approach for the stonework and portal details.",
      "sections": [
        [
          "Planning your visit",
          "Allow time for the open square as well as the church. Check the cathedral’s notices before photographing or walking inside during worship."
        ],
        [
          "Walking route and photo viewpoints",
          "Enter Avram Iancu Square on foot and use the open space for the full silhouette. Step closer to view the carving around the portal."
        ]
      ],
      "faq": [
        [
          "Where is the metropolitan museum?",
          "Its galleries are below the cathedral. Check the museum’s separate admission arrangements."
        ]
      ],
      "history": "Built between 1923 and 1933, the cathedral combines Byzantine forms with Romanian architectural details. Look for the composition of the central dome and four smaller towers."
    },
    "zh": {
      "title": "圣母安息东正教主教座堂",
      "description": "先退到阿夫拉姆·扬库广场对侧看整体轮廓，再走近看石雕和门廊。",
      "intro": "先退到阿夫拉姆·扬库广场对侧看整体轮廓，再走近看石雕和门廊。",
      "sections": [
        [
          "游览安排",
          "广场和教堂都可留一点时间。遇到礼拜时，入内或拍照前请先看座堂公告。"
        ],
        [
          "步行路线与拍摄位置",
          "步行进入阿夫拉姆·扬库广场，先在开阔处拍建筑轮廓，再走近观察门廊周围的雕刻。"
        ]
      ],
      "faq": [
        [
          "都主教区博物馆在哪里？",
          "展室位于座堂下方，入场安排需单独核对。"
        ]
      ],
      "history": "座堂建于1923至1933年，融合拜占庭形制和罗马尼亚建筑细部。可留意中央穹顶与四座较小塔楼如何组合。"
    }
  },
  {
    "slug": "bob-greek-catholic-church",
    "source": "bob-greek-catholic-church",
    "en": {
      "title": "Bob Greek Catholic Church",
      "description": "Find the frontage on the quieter streets behind the main square. A short stop here adds the Greek Catholic tradition to an old-town walk.",
      "intro": "Find the frontage on the quieter streets behind the main square. A short stop here adds the Greek Catholic tradition to an old-town walk.",
      "sections": [
        [
          "Planning your visit",
          "Use Episcop Ioan Bob Street for the approach. Keep this stop short if the door is closed and continue on foot to a nearby square."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk in from Episcop Ioan Bob Street and use the public side of the lane to frame the entrance. Continue toward Union Square after the stop."
        ]
      ],
      "faq": [
        [
          "Can I rely on finding the door open?",
          "Confirm access in advance if the interior is important to your visit."
        ]
      ],
      "history": "The church bears the name of Greek Catholic bishop Ioan Bob. Its modest street setting and compact frontage contrast with the larger church fronts around Union Square."
    },
    "zh": {
      "title": "鲍勃希腊礼天主教堂",
      "description": "从主广场走入较安静的街巷寻找教堂门面，在老城步行中加入一站希腊礼天主教历史。",
      "intro": "从主广场走入较安静的街巷寻找教堂门面，在老城步行中加入一站希腊礼天主教历史。",
      "sections": [
        [
          "游览安排",
          "从约安·鲍勃主教街步行前往。如果教堂关门，可以短暂停留看外观，再走去附近广场。"
        ],
        [
          "步行路线与拍摄位置",
          "从约安·鲍勃主教街走近，在公共街巷一侧拍入口。停留后可往联合广场继续步行。"
        ]
      ],
      "faq": [
        [
          "到访时一定可以入内吗？",
          "如果专程来看内部，建议提前核对开放安排。"
        ]
      ],
      "history": "教堂以希腊礼天主教主教约安·鲍勃命名。它的街巷尺度和紧凑门面，可与联合广场周边大型教堂对照。"
    }
  },
  {
    "slug": "calvinist-episcopal-cathedral",
    "source": "calvinist-episcopal-cathedral",
    "en": {
      "title": "Calvinist Episcopal Cathedral",
      "description": "View the church from both sides of Boulevard 21 Decembrie 1989 to see how the frontage fits the street.",
      "intro": "View the church from both sides of Boulevard 21 Decembrie 1989 to see how the frontage fits the street.",
      "sections": [
        [
          "Planning your visit",
          "Search for the two-towered Reformed church on the boulevard. This pin takes you to a separate site from the Gothic Reformed church on Kogălniceanu Street."
        ],
        [
          "Walking route and photo viewpoints",
          "Approach along the boulevard and use a legal pedestrian crossing for a wider look from the opposite pavement."
        ]
      ],
      "faq": [
        [
          "Is this the church on Kogălniceanu Street?",
          "The two churches have separate locations. Use the Two-Towered Church name for this boulevard stop."
        ]
      ],
      "history": "The Two-Towered Reformed Church is an example of Cluj’s classical church architecture. Its paired towers and broad, symmetrical elevation give it a distinct profile on the boulevard."
    },
    "zh": {
      "title": "加尔文宗主教堂",
      "description": "在十二月二十一日大道的两侧观察教堂正面和街道的关系。",
      "intro": "在十二月二十一日大道的两侧观察教堂正面和街道的关系。",
      "sections": [
        [
          "游览安排",
          "在大道上找双塔归正教堂。它与科格尔尼恰努街上的哥特式归正教堂位于不同地点。"
        ],
        [
          "步行路线与拍摄位置",
          "沿大道步行接近，走人行横道到街对面，从人行道拍更完整的立面。"
        ]
      ],
      "faq": [
        [
          "这就是科格尔尼恰努街的归正教堂吗？",
          "两处地址不同。这一站应使用大道上的双塔归正教堂作为导航目标。"
        ]
      ],
      "history": "双塔归正教堂体现了克鲁日的古典主义教堂建筑。成对的塔楼和宽阔对称的正立面，使它在大道上易于辨认。"
    }
  },
  {
    "slug": "cu-cocos-with-rooster-reformed-church",
    "source": "cu-cocos-with-rooster-reformed-church",
    "en": {
      "title": "Rooster Church",
      "description": "Look for the rooster and the Transylvanian motifs associated with architect Károly Kós. Start by viewing the roofline from across the street.",
      "intro": "Look for the rooster and the Transylvanian motifs associated with architect Károly Kós. Start by viewing the roofline from across the street.",
      "sections": [
        [
          "Planning your visit",
          "Make a separate westbound stop on Calea Moților. Use the public pavement and look upward before moving closer to the entrance."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk along Calea Moților to the church. From a public pavement with a clear view, show the roofline first and then frame the rooster detail."
        ]
      ],
      "faq": [
        [
          "Where should I look for the rooster?",
          "Look at the silhouette of the roof and towers from some distance before approaching the entrance."
        ]
      ],
      "history": "The early twentieth-century church is associated with architect Károly Kós. Its roof forms, decorative details and rooster finial are useful clues to the design rather than interchangeable church motifs."
    },
    "zh": {
      "title": "公鸡归正教堂",
      "description": "先从街对面看屋顶轮廓，再找公鸡标志和与建筑师卡罗伊·科什有关的特兰西瓦尼亚装饰。",
      "intro": "先从街对面看屋顶轮廓，再找公鸡标志和与建筑师卡罗伊·科什有关的特兰西瓦尼亚装饰。",
      "sections": [
        [
          "游览安排",
          "把这里安排在向西走的莫齐洛尔大道一段。先从公共人行道抬头观察，再靠近入口。"
        ],
        [
          "步行路线与拍摄位置",
          "沿莫齐洛尔大道步行前往。在视野清楚的公共人行道上先拍屋顶全貌，再找公鸡顶饰取局部。"
        ]
      ],
      "faq": [
        [
          "公鸡装饰在哪里？",
          "走近入口前，先从稍远处沿屋顶与塔楼的轮廓寻找。"
        ]
      ],
      "history": "这座20世纪初的教堂与建筑师卡罗伊·科什有关。屋顶形制、装饰细节和公鸡顶饰是辨识其设计的线索。"
    }
  },
  {
    "slug": "evangelical-church",
    "source": "evangelical-church",
    "en": {
      "title": "Evangelical Lutheran Church",
      "description": "Look at the proportions of the street façade and compare the building with the Gothic church across the nearby square.",
      "intro": "Look at the proportions of the street façade and compare the building with the Gothic church across the nearby square.",
      "sections": [
        [
          "Planning your visit",
          "Approach from the east side of Union Square and find the entrance on the main street. Pair it with another church only after checking access at each site."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk from Union Square toward Boulevard 21 Decembrie 1989. Use the opposite pavement for the frontage where a safe crossing is available."
        ]
      ],
      "faq": [
        [
          "Does the map for the Reformed cathedral take me here?",
          "Search for the Evangelical Lutheran Church specifically; several church entrances line the boulevard."
        ]
      ],
      "history": "The Lutheran church continues Cluj’s Protestant heritage near the old centre. Notice the ordered façade and how it sits directly on the street instead of opening onto a wide plaza."
    },
    "zh": {
      "title": "福音路德会教堂",
      "description": "留意临街立面的比例，再与附近广场上的哥特式教堂做比较。",
      "intro": "留意临街立面的比例，再与附近广场上的哥特式教堂做比较。",
      "sections": [
        [
          "游览安排",
          "从联合广场东侧接近，到主街找入口。若安排连看几座教堂，建议分别查看各处的开放情况。"
        ],
        [
          "步行路线与拍摄位置",
          "从联合广场走向十二月二十一日大道，从安全的人行横道过街后，可在对面拍正立面。"
        ]
      ],
      "faq": [
        [
          "归正教堂的地图会导到这里吗？",
          "大道沿线有多个教堂入口，请单独搜索福音路德会教堂。"
        ]
      ],
      "history": "路德会教堂延续了克鲁日老城一带的新教传统。可留意规整的立面与街道直接相接，前方空间与大型广场式教堂不同。"
    }
  },
  {
    "slug": "piarists-church",
    "source": "piarists-church",
    "en": {
      "title": "Piarist Church",
      "description": "Give yourself room on University Street to see the pair of towers and the Baroque frontage together.",
      "intro": "Give yourself room on University Street to see the pair of towers and the Baroque frontage together.",
      "sections": [
        [
          "Planning your visit",
          "Link this stop with a walk through the university quarter. The twin towers are easiest to see from a little farther back, before approaching the door."
        ],
        [
          "Walking route and photo viewpoints",
          "Start near the university buildings and walk along Strada Universității. Photograph from far enough back to keep both towers in the frame."
        ]
      ],
      "faq": [
        [
          "Can I combine this with the university quarter?",
          "Yes. Allow a separate stop at the church frontage before continuing to Kogălniceanu Street."
        ]
      ],
      "history": "The church began as a Jesuit foundation and is associated today with the Piarists. Its Baroque double-tower front makes the University Street approach an architectural highlight."
    },
    "zh": {
      "title": "皮亚里斯特教堂",
      "description": "在大学街拉开一点距离，把双塔和巴洛克立面放在同一视野里看。",
      "intro": "在大学街拉开一点距离，把双塔和巴洛克立面放在同一视野里看。",
      "sections": [
        [
          "游览安排",
          "可把这站接在大学区步行之后。靠近教堂门口前，先在稍远处看双塔全貌。"
        ],
        [
          "步行路线与拍摄位置",
          "从大学建筑一带沿大学街前行。在稍远位置取景，将双塔完整纳入画面。"
        ]
      ],
      "faq": [
        [
          "适合与大学区一起走吗？",
          "适合。走往科格尔尼恰努街之前，可先在教堂外单独停留。"
        ]
      ],
      "history": "教堂起初由耶稣会创建，现以皮亚里斯特教堂为名。巴洛克双塔立面是沿大学街接近时的建筑看点。"
    }
  },
  {
    "slug": "schimbarea-la-fata-the-transfiguration-greek-catholic-cathedral",
    "source": "schimbarea-la-fata-the-transfiguration-greek-catholic-cathedral",
    "en": {
      "title": "Transfiguration Cathedral",
      "description": "On Eroilor Boulevard, step back from the entrance to pick out the tower and the church frontage amid the surrounding street façades.",
      "intro": "On Eroilor Boulevard, step back from the entrance to pick out the tower and the church frontage amid the surrounding street façades.",
      "sections": [
        [
          "Planning your visit",
          "Use the boulevard entrance and keep the nearby Orthodox cathedral as a different landmark when asking for directions."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk along Eroilor Boulevard and use the open pedestrian space for a view of the tower before stepping closer to the doorway."
        ]
      ],
      "faq": [
        [
          "Is this the Orthodox cathedral on Avram Iancu Square?",
          "This page leads to the Greek Catholic cathedral on Eroilor Boulevard. Use its full name when navigating."
        ]
      ],
      "history": "The Baroque church building was originally associated with the Franciscan order and now serves as a Greek Catholic cathedral. Its tower is read against the continuous shopfronts and houses of Eroilor Boulevard."
    },
    "zh": {
      "title": "耶稣显圣容主教座堂",
      "description": "在英雄大道上从入口稍稍退远，从沿街建筑中辨认教堂立面和塔楼。",
      "intro": "在英雄大道上从入口稍稍退远，从沿街建筑中辨认教堂立面和塔楼。",
      "sections": [
        [
          "游览安排",
          "沿英雄大道找入口。询问路线时可报这座希腊礼天主教主教座堂的全名，便于与附近的东正教座堂区分。"
        ],
        [
          "步行路线与拍摄位置",
          "沿英雄大道步行，先在开阔步行空间看塔楼，再走近观察入口。"
        ]
      ],
      "faq": [
        [
          "这是阿夫拉姆·扬库广场上的东正教座堂吗？",
          "本页地点是英雄大道上的希腊礼天主教主教座堂。导航时建议输入全名。"
        ]
      ],
      "history": "这座巴洛克教堂最初与方济各会有关，如今作为希腊礼天主教主教座堂使用。塔楼与英雄大道上一连串的商铺和住宅立面形成对照。"
    }
  },
  {
    "slug": "the-neologist-synagogue",
    "source": "the-neologist-synagogue",
    "en": {
      "title": "Neolog Synagogue",
      "description": "Look at the towers and decorative brickwork from Horea Street. Check visiting arrangements with the community if you hope to see inside.",
      "intro": "Look at the towers and decorative brickwork from Horea Street. Check visiting arrangements with the community if you hope to see inside.",
      "sections": [
        [
          "Planning your visit",
          "Approach along Horea Street and allow more time if you have arranged an interior visit. Follow the community’s guidance on entry and photography."
        ],
        [
          "Walking route and photo viewpoints",
          "Approach along Horea Street and use a clear public pavement to photograph the brickwork. Leave time to read the memorial context as part of the stop."
        ]
      ],
      "faq": [
        [
          "Can I go inside without arranging a visit?",
          "Check the Jewish community’s visitor arrangements in advance and follow entrance instructions."
        ]
      ],
      "history": "The synagogue on Horea Street is also known as the Memorial Temple of the Deportees. Its decorative brick exterior and towers make the building visible within the long street frontage."
    },
    "zh": {
      "title": "新派犹太会堂",
      "description": "在霍雷亚街看塔楼和装饰砖砌；想入内时，提前向当地社群确认参观安排。",
      "intro": "在霍雷亚街看塔楼和装饰砖砌；想入内时，提前向当地社群确认参观安排。",
      "sections": [
        [
          "游览安排",
          "沿霍雷亚街步行前往。如已约好入内，请预留充足时间，并按当地社群指引进场与拍照。"
        ],
        [
          "步行路线与拍摄位置",
          "沿霍雷亚街走近，从视线清楚的公共人行道拍砖砌细节，并为阅读纪念背景留出时间。"
        ]
      ],
      "faq": [
        [
          "可以直接入内参观吗？",
          "请先向犹太社群核对到访安排，并遵守入口指引。"
        ]
      ],
      "history": "霍雷亚街的新派犹太会堂亦称被驱逐者纪念堂。装饰砖砌和塔楼使它能在连续的沿街立面中辨认出来。"
    }
  },
  {
    "slug": "the-reformed-church",
    "source": "the-reformed-church",
    "en": {
      "title": "Reformed Church on Kogălniceanu Street",
      "description": "Combine a look at the church’s Gothic fabric with the St George statue beside it, keeping the church as the focus of this stop.",
      "intro": "Combine a look at the church’s Gothic fabric with the St George statue beside it, keeping the church as the focus of this stop.",
      "sections": [
        [
          "Planning your visit",
          "Walk along Kogălniceanu Street and stop at the statue before the church. It gives you space to view both the façade and the street setting."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk along Kogălniceanu Street and stop first near the statue. Frame the church and sculpture together from the public space before approaching the door."
        ]
      ],
      "faq": [
        [
          "Is the statue part of the church interior?",
          "The St George statue is outside. You can see it even when church access is restricted."
        ]
      ],
      "history": "The late Gothic church on Kogălniceanu Street grew from a Franciscan foundation before becoming a Reformed place of worship. The St George statue offers a separate foreground for viewing its exterior."
    },
    "zh": {
      "title": "科格尔尼恰努街归正教堂",
      "description": "观察教堂的哥特式构造，也可以顺道看旁边的圣乔治雕像。",
      "intro": "观察教堂的哥特式构造，也可以顺道看旁边的圣乔治雕像。",
      "sections": [
        [
          "游览安排",
          "沿科格尔尼恰努街步行，先在教堂前的雕像附近停步，回看立面与街道环境。"
        ],
        [
          "步行路线与拍摄位置",
          "沿科格尔尼恰努街前行，先在雕像附近停步。从公共空间把教堂与雕像同框，再走向门口。"
        ]
      ],
      "faq": [
        [
          "雕像在教堂里面吗？",
          "圣乔治雕像位于室外，教堂限制入内时也能从外面看。"
        ]
      ],
      "history": "科格尔尼恰努街的晚期哥特式教堂源于方济各会，后来成为归正宗礼拜场所。圣乔治雕像可作为观察教堂外观的前景。"
    }
  },
  {
    "slug": "unitarian-cathedral",
    "source": "unitarian-cathedral",
    "en": {
      "title": "Unitarian Cathedral",
      "description": "Look up for the tower on Boulevard 21 Decembrie 1989 before approaching the entrance. Stop separately from the neighbouring churches to understand the city’s Unitarian heritage.",
      "intro": "Look up for the tower on Boulevard 21 Decembrie 1989 before approaching the entrance. Stop separately from the neighbouring churches to understand the city’s Unitarian heritage.",
      "sections": [
        [
          "Planning your visit",
          "Allow a few minutes to locate the doorway along the boulevard. If the sanctuary is closed, continue the walk through the old town from the same street."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk along the boulevard and look up for the tower before approaching the entrance. Use a legal crossing to view the frontage from the opposite side."
        ]
      ],
      "faq": [
        [
          "What if the cathedral is closed?",
          "View the exterior from the boulevard and continue through the old town on foot."
        ]
      ],
      "history": "The cathedral reflects the long-established Unitarian tradition of Transylvania. The street-facing tower makes the entrance readable from the boulevard despite the close adjoining buildings."
    },
    "zh": {
      "title": "一位论派主教座堂",
      "description": "从十二月二十一日大道抬头辨认塔楼，再走近入口。这一站适合了解城市的一位论派宗教历史。",
      "intro": "从十二月二十一日大道抬头辨认塔楼，再走近入口。这一站适合了解城市的一位论派宗教历史。",
      "sections": [
        [
          "游览安排",
          "在大道上留几分钟寻找入口。若礼拜堂关闭，可由同一条街继续往老城步行。"
        ],
        [
          "步行路线与拍摄位置",
          "沿大道先抬头辨认塔楼，再接近入口。可经人行横道到对面观察正立面。"
        ]
      ],
      "faq": [
        [
          "座堂关闭时还能看什么？",
          "可以从大道看外观，再步行游览老城。"
        ]
      ],
      "history": "座堂展现了特兰西瓦尼亚历史悠久的一位论派传统。即便相邻建筑紧密，临街塔楼仍能帮助游客从大道辨认入口。"
    }
  },
  {
    "slug": "the-bogdanffy-house",
    "source": "the-bogdanffy-house",
    "en": {
      "title": "Bogdánffy House",
      "description": "Look for the connection between the restored house, the former Cobblers’ Tower and the line of the medieval moat. Check Plan B’s exhibition programme before going inside.",
      "intro": "Look for the connection between the restored house, the former Cobblers’ Tower and the line of the medieval moat. Check Plan B’s exhibition programme before going inside.",
      "sections": [
        [
          "Planning your visit",
          "Check the gallery programme for the entrance and opening arrangements. Make time to see the surviving defensive fabric as well as any current show."
        ],
        [
          "Walking route and photo viewpoints",
          "Approach from Strada Avram Iancu and follow Plan B’s exhibition entrance instructions. Take an exterior view from the public pavement before entering."
        ]
      ],
      "faq": [
        [
          "Is the visit always the same?",
          "Check Plan B’s current programme. Exhibitions and activities can change while the historic fabric remains part of the visit."
        ]
      ],
      "history": "The restored house brings an early nineteenth-century residence and parts of the former city defences into a contemporary art venue. Look for the relationship between the walls and the newer exhibition setting."
    },
    "zh": {
      "title": "博格丹菲故居",
      "description": "留意修复后的住宅与昔日鞋匠塔和中世纪护城河的关系；进馆前可查 Plan B 基金会的展览计划。",
      "intro": "留意修复后的住宅与昔日鞋匠塔和中世纪护城河的关系；进馆前可查 Plan B 基金会的展览计划。",
      "sections": [
        [
          "游览安排",
          "从画廊展览计划核对入口和开放安排，同时给保存的防御工事遗迹与当期展览各留一点时间。"
        ],
        [
          "步行路线与拍摄位置",
          "从阿夫拉姆·扬库街前往，按 Plan B 的指引寻找展览入口。入内前可在人行道拍建筑外观。"
        ]
      ],
      "faq": [
        [
          "每次到访看到的内容一样吗？",
          "请查 Plan B 当期安排。展览和活动会变化，历史建筑本体仍是参观的一部分。"
        ]
      ],
      "history": "修复后的故居把19世纪初的住宅与旧城防遗迹纳入当代艺术空间。参观时可观察旧墙和新展陈空间的关系。"
    }
  },
  {
    "slug": "the-railway-station-palace",
    "source": "the-railway-station-palace",
    "en": {
      "title": "Cluj-Napoca Railway Station",
      "description": "Study the historic station building from the forecourt before crossing into the passenger areas. Keep the visit separate from the time you need to board your train.",
      "intro": "Study the historic station building from the forecourt before crossing into the passenger areas. Keep the visit separate from the time you need to board your train.",
      "sections": [
        [
          "Planning your visit",
          "A short exterior stop fits naturally before or after a train journey. Use the station square to view the building while staying clear of passenger queues."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk to Piața Gării and stop in a public area of the forecourt. Use a wide composition for the station frontage and keep clear of passenger flows."
        ]
      ],
      "faq": [
        [
          "Do I need a train ticket to see the facade?",
          "The square-facing exterior can be seen from the public forecourt. Check station rules for passenger areas."
        ]
      ],
      "history": "The historic station facade, formal central entrance and flanking wings mark the role of rail travel in the city’s growth. The forecourt gives a broad view of that arrangement."
    },
    "zh": {
      "title": "克鲁日-纳波卡火车站",
      "description": "先从站前广场看历史站房，进入客运区域时给乘车预留充分时间。",
      "intro": "先从站前广场看历史站房，进入客运区域时给乘车预留充分时间。",
      "sections": [
        [
          "游览安排",
          "乘车前后可在站前广场短暂停留看站房，并让开进出站队伍。"
        ],
        [
          "步行路线与拍摄位置",
          "步行到车站广场，在站前公共区域停留。可用较宽画面拍站房，并避开旅客通行线路。"
        ]
      ],
      "faq": [
        [
          "看站房外观需要火车票吗？",
          "面向广场的外观可从公共站前区观看，进入客运区域请按车站规定。"
        ]
      ],
      "history": "历史站房的正式中央入口与两侧翼部体现铁路在城市发展中的地位。站前广场便于看清这一布局。"
    }
  },
  {
    "slug": "babos-palace",
    "source": "babos-palace",
    "en": {
      "title": "Babos Palace",
      "description": "View the corner frontage from the public pavement by the Someșul Mic. Allow a moment to compare the façade with the buildings across the river.",
      "intro": "View the corner frontage from the public pavement by the Someșul Mic. Allow a moment to compare the façade with the buildings across the river.",
      "sections": [
        [
          "Planning your visit",
          "Pair this exterior stop with the riverside approach across the bridge. The corner is easiest to understand when you see both street elevations."
        ],
        [
          "Walking route and photo viewpoints",
          "Walk along Regele Ferdinand toward the river and use a public pavement or bridge viewpoint. Take a wide frame that includes the building and the corner alignment."
        ]
      ],
      "faq": [
        [
          "Is there a public interior tour?",
          "Plan this as an exterior stop unless the premises announce a specific public event."
        ]
      ],
      "history": "The historic Babos Palace occupies a prominent corner by the Someșul Mic. Its river-facing and street-facing elevations show why the corner is best viewed in two stages."
    },
    "zh": {
      "title": "鲍博什宫",
      "description": "在小索梅什河边的公共人行道观察转角立面，也可以停下来与对岸沿河建筑作比较。",
      "intro": "在小索梅什河边的公共人行道观察转角立面，也可以停下来与对岸沿河建筑作比较。",
      "sections": [
        [
          "游览安排",
          "适合与过桥的河岸步行搭配。想看清转角建筑的布局，可以从两个临街方向观察。"
        ],
        [
          "步行路线与拍摄位置",
          "沿费迪南德国王街走向河边，在公共人行道或桥上取景。用宽幅把建筑及转角街线一起拍入画面。"
        ]
      ],
      "faq": [
        [
          "有对公众开放的室内导览吗？",
          "通常按外观游览安排。如场所另有对外活动，再按公告入内。"
        ]
      ],
      "history": "历史建筑鲍博什宫坐落于小索梅什河边的显眼街角。临河面和临街面各有特点，宜分两个角度观察。"
    }
  }
];

export const visitDetails: Record<string, VisitDetails> = {
  "central-park-casino": {
    "kind": "garden",
    "address": "Aleea Stadionului",
    "query": "Parcul Central Simion Bărnuțiu Casino",
    "photo": "https://img.bunadimineata.ro/uploads/2015/07/Cladirea-Casino-Parcul-Central.jpg",
    "photoCredit": "https://bunadimineata.ro/cluj/parcul-central-gazda-unui-festival-dedicat-culturii-urbane/"
  },
  "museum-square-carolina-obelisk": {
    "kind": "landmark",
    "address": "Piața Muzeului",
    "query": "Obeliscul Carolina Piața Muzeului",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Obeliscul_Carolina_si_Biserica_franciscana.jpg/120px-Obeliscul_Carolina_si_Biserica_franciscana.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Obeliscul_Carolina_si_Biserica_franciscana.jpg"
  },
  "alexandru-borza-botanical-garden": {
    "kind": "garden",
    "address": "Strada Republicii 42",
    "query": "Grădina Botanică Alexandru Borza",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/12/05.jpg"
  },
  "iuliu-hatieganu-university-sports-park": {
    "kind": "garden",
    "address": "Strada Pandurilor 7",
    "query": "Parcul Sportiv Universitar Iuliu Hațieganu",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/12/DSCN5427-scaled.jpg"
  },
  "gheorgheni-park-iulius-mall": {
    "kind": "garden",
    "address": "Strada Alexandru Vaida Voevod 53B",
    "query": "Iulius Parc Cluj",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/12/DSCN5346-scaled.jpg",
    "contact": {
      "en": "Iulius Parc visitor information",
      "zh": "Iulius Parc 游客服务"
    }
  },
  "the-rose-park": {
    "kind": "garden",
    "address": "Aleea Rozelor",
    "query": "Parcul Rozelor",
    "photo": "https://clujtourism.ro/wp-content/uploads/2023/05/1-1.jpg",
    "contact": {
      "en": "Cluj-Napoca City Hall",
      "zh": "克鲁日-纳波卡市政府"
    }
  },
  "the-ethnographic-museum-of-transylvania": {
    "kind": "museum",
    "address": "Strada Memorandumului 21",
    "query": "Muzeul Etnografic al Transilvaniei",
    "operator": "Ethnographic Museum of Transylvania",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/Sala-Pescuit.jpg"
  },
  "the-mineralogy-museum": {
    "kind": "museum",
    "address": "Strada Mihail Kogălniceanu 1",
    "query": "Muzeul de Mineralogie UBB",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/Ametist-Muzeu-Mineralogie-UBB.jpg"
  },
  "david-prodan-museum": {
    "kind": "museum",
    "address": "Strada Academician David Prodan 1, apt. 7",
    "query": "Muzeul Memorial David Prodan",
    "operator": "Babeș-Bolyai University",
    "photo": "https://booktes.com/storage/upload-general/events/2547/670c439c5c1b0_1728856988.jpg",
    "photoCredit": "https://booktes.com/bilet/muzeul-memorial-david-prodan"
  },
  "ubb-holocaust-museum": {
    "kind": "museum",
    "address": "Strada Croitorilor 13",
    "query": "Muzeul Holocaustului din Nordul Transilvaniei UBB",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2023/07/278975674_5581264888568083_8452024203410393007_n.jpg"
  },
  "the-paleontology-and-stratigraphy-museum": {
    "kind": "museum",
    "address": "Strada Mihail Kogălniceanu 1",
    "query": "Muzeul de Paleontologie-Stratigrafie UBB",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/Muzeul-de-Paleontologie-Stratigrafie.jpg"
  },
  "alexandru-duma-museum": {
    "kind": "museum",
    "address": "Calea Moților 11",
    "query": "Muzeul Alexandru Duma",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2023/07/1.jpg"
  },
  "pharmacy-museum": {
    "kind": "museum",
    "address": "Piața Unirii 28",
    "query": "Muzeul Farmaciei Casa Hintz",
    "operator": "National History Museum of Transylvania",
    "photo": "https://clujtourism.ro/wp-content/uploads/2024/02/1.jpeg"
  },
  "cluj-napoca-art-museum": {
    "kind": "museum",
    "address": "Piața Unirii 30",
    "query": "Muzeul de Artă Cluj-Napoca",
    "operator": "Cluj-Napoca Art Museum",
    "photo": "https://visitcluj.ro/wp-content/uploads/2022/01/palatul_banffy_1S0A1741_-1024x683.jpg",
    "photoCredit": "https://visitcluj.ro/palatele-clujului/"
  },
  "botanical-museum": {
    "kind": "museum",
    "address": "Strada Republicii 42",
    "query": "Muzeul Botanic UBB",
    "operator": "Babeș-Bolyai University",
    "photo": "https://cdn.cluj.com/cluj/muzeul-botanic-ubb-cluj-2-800x600.jpg",
    "photoCredit": "https://cluj.com/locatii/muzeul-botanic-ubb/"
  },
  "romulus-vuia-national-ethnographic-park-2": {
    "kind": "museum",
    "address": "Strada Tăietura Turcului",
    "query": "Parcul Etnografic Național Romulus Vuia",
    "operator": "Ethnographic Museum of Transylvania",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/Casin-Imper-HR.jpg"
  },
  "vivariu-museum": {
    "kind": "museum",
    "address": "Strada Clinicilor 5–7",
    "query": "Vivarium UBB",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/Cameleon-cu-creastă-Cameleon-calyptratus-Yemen.jpg"
  },
  "the-zoological-museum": {
    "kind": "museum",
    "address": "Strada Clinicilor 5–7",
    "query": "Muzeul Zoologic UBB",
    "operator": "Babeș-Bolyai University",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/Cerb-carpatin-Cervus-elaphus.jpg"
  },
  "national-history-museum-of-transylvania": {
    "kind": "museum",
    "address": "Strada Constantin Daicoviciu 2",
    "query": "Muzeul Național de Istorie a Transilvaniei",
    "operator": "National History Museum of Transylvania",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/ClujMuzeulIstorie.jpg/120px-ClujMuzeulIstorie.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:ClujMuzeulIstorie.jpg"
  },
  "museum-of-cluj-metropolitan-church": {
    "kind": "museum",
    "address": "Piața Avram Iancu",
    "query": "Muzeul Mitropoliei Clujului",
    "operator": "Cluj Orthodox Metropolis",
    "photo": "https://visitcluj.ro/wp-content/uploads/2021/01/IMG_3137.jpg",
    "photoCredit": "https://visitcluj.ro/tourist_spot/muzeul-mitropoliei-clujului/"
  },
  "union-square-saint-michael": {
    "kind": "church",
    "address": "Piața Unirii",
    "query": "Biserica Sfântul Mihail",
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/11/matei-corvin.jpg"
  },
  "calvaria-roman-catholic-church": {
    "kind": "church",
    "address": "Strada Primăverii",
    "query": "Biserica Calvaria Mănăștur",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Calvaria_Church_%28Cluj-Napoca%29.jpg/120px-Calvaria_Church_%28Cluj-Napoca%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Calvaria_Church_(Cluj-Napoca).jpg",
    "contact": {
      "en": "Calvaria Roman Catholic parish",
      "zh": "卡尔瓦里亚罗马天主教堂区"
    }
  },
  "church-of-franciscan-monastery": {
    "kind": "church",
    "address": "Piața Muzeului",
    "query": "Biserica Franciscană",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Obeliscul_Carolina_si_Biserica_franciscana.jpg/120px-Obeliscul_Carolina_si_Biserica_franciscana.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Obeliscul_Carolina_si_Biserica_franciscana.jpg",
    "contact": {
      "en": "Franciscan community at Museum Square",
      "zh": "博物馆广场的方济各会团体"
    }
  },
  "adormirea-maicii-domnului-assumption-of-virgin-mary-orthodox-metropolitan-cathedral": {
    "kind": "church",
    "address": "Piața Avram Iancu",
    "query": "Catedrala Mitropolitană Ortodoxă",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/CatedralaOrtCJ_%282%29.JPG/120px-CatedralaOrtCJ_%282%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:CatedralaOrtCJ_(2).JPG",
    "contact": {
      "en": "Cluj Orthodox Metropolis",
      "zh": "克鲁日东正教都主教区"
    }
  },
  "bob-greek-catholic-church": {
    "kind": "church",
    "address": "Strada Episcop Ioan Bob",
    "query": "Biserica Bob greco-catolică",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/A_Bob_utcai_templom_az_udvarb%C3%B3l.JPG/120px-A_Bob_utcai_templom_az_udvarb%C3%B3l.JPG?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:A_Bob_utcai_templom_az_udvarb%C3%B3l.JPG",
    "contact": {
      "en": "Bob Greek Catholic parish",
      "zh": "鲍勃希腊礼天主教堂区"
    }
  },
  "calvinist-episcopal-cathedral": {
    "kind": "church",
    "address": "Bulevardul 21 Decembrie 1989",
    "query": "Biserica Reformată cu Două Turnuri",
    "photo": "https://monitorulcj.ro/documente/stories/2024/07/03/66852a95db3fd_Captur%C4%83-de-ecran-2024-07-03-134013.png",
    "photoCredit": "https://www.monitorulcj.ro/timp-liber/121090-povestea-bisericii-reformate-cu-doua-turnuri-emblema-a-stilului-clasicist-clujean-inspiratia-lacasului-de-cult-provenita-din-debrecen",
    "contact": {
      "en": "Two-Towered Reformed Church congregation",
      "zh": "双塔归正教堂会众"
    }
  },
  "cu-cocos-with-rooster-reformed-church": {
    "kind": "church",
    "address": "Calea Moților",
    "query": "Biserica Reformată cu Cocoș",
    "photo": "https://lexikon.adatbank.ro/admin/kep/241_1272286661_01.-Fohomlokzat.jpg",
    "photoCredit": "https://lexikon.adatbank.ro/muemlek.php?id=241",
    "contact": {
      "en": "Rooster Church Reformed congregation",
      "zh": "公鸡归正教堂会众"
    }
  },
  "evangelical-church": {
    "kind": "church",
    "address": "Bulevardul 21 Decembrie 1989",
    "query": "Biserica Evanghelică-Luterană Cluj",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Cluj-Napoca_Evangelical_Church.jpg/120px-Cluj-Napoca_Evangelical_Church.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Cluj-Napoca_Evangelical_Church.jpg",
    "contact": {
      "en": "Cluj Evangelical Lutheran congregation",
      "zh": "克鲁日福音路德会会众"
    }
  },
  "piarists-church": {
    "kind": "church",
    "address": "Strada Universității",
    "query": "Biserica Piaristă",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Piarista_kolozsvar.jpg/120px-Piarista_kolozsvar.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Piarista_kolozsvar.jpg",
    "contact": {
      "en": "Piarist Church parish office",
      "zh": "皮亚里斯特教堂堂区办公室"
    }
  },
  "schimbarea-la-fata-the-transfiguration-greek-catholic-cathedral": {
    "kind": "church",
    "address": "Bulevardul Eroilor",
    "query": "Catedrala Greco-Catolică Schimbarea la Față",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Schimbarea_la_Fata_%28Transfiguration%29_Cathedral%2C_Cluj-Napoca.jpg/120px-Schimbarea_la_Fata_%28Transfiguration%29_Cathedral%2C_Cluj-Napoca.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Schimbarea_la_Fata_(Transfiguration)_Cathedral,_Cluj-Napoca.jpg",
    "contact": {
      "en": "Greek Catholic Eparchy of Cluj-Gherla",
      "zh": "克鲁日-盖尔拉希腊礼天主教教区"
    }
  },
  "the-neologist-synagogue": {
    "kind": "church",
    "address": "Strada Horea 21",
    "query": "Templul Memorial al Deportaților Cluj",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Cluj_synagogue.jpg/120px-Cluj_synagogue.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Cluj_synagogue.jpg",
    "contact": {
      "en": "Jewish Community of Cluj",
      "zh": "克鲁日犹太社群"
    }
  },
  "the-reformed-church": {
    "kind": "church",
    "address": "Strada Mihail Kogălniceanu",
    "query": "Biserica Reformată de pe Ulița Lupilor",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Kv%C3%A1r_Farkas_utcai_ref_templom_2.jpg/120px-Kv%C3%A1r_Farkas_utcai_ref_templom_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Kv%C3%A1r_Farkas_utcai_ref_templom_2.jpg",
    "contact": {
      "en": "Kogălniceanu Street Reformed congregation",
      "zh": "科格尔尼恰努街归正教堂会众"
    }
  },
  "unitarian-cathedral": {
    "kind": "church",
    "address": "Bulevardul 21 Decembrie 1989",
    "query": "Biserica Unitariană Cluj",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Bis_Unitariana_Cluj.JPG/120px-Bis_Unitariana_Cluj.JPG?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Bis_Unitariana_Cluj.JPG",
    "contact": {
      "en": "Cluj Unitarian congregation",
      "zh": "克鲁日一位论派会众"
    }
  },
  "the-bogdanffy-house": {
    "kind": "museum",
    "address": "Strada Avram Iancu 1",
    "query": "Casa Bogdánffy Fundația Plan B",
    "operator": "Plan B Foundation",
    "photo": "https://maszol.ro/uploads/2025Aprilis/14/muzeum_PZ.jpg",
    "photoCredit": "https://maszol.ro/kultura/Kolozsvaron-nyit-kortars-kepzomuveszeti-muzeumot-egy-vilaghiru-erdelyi-festo"
  },
  "the-railway-station-palace": {
    "kind": "landmark",
    "address": "Piața Gării",
    "query": "Gara Cluj-Napoca",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Cluj-Napoca-Pia%C8%9Ba_G%C4%83rii-Gara-IMG_4623.jpg/120px-Cluj-Napoca-Pia%C8%9Ba_G%C4%83rii-Gara-IMG_4623.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Cluj-Napoca-Pia%C8%9Ba_G%C4%83rii-Gara-IMG_4623.jpg",
    "contact": {
      "en": "CFR station information desk",
      "zh": "CFR 车站问讯处"
    }
  },
  "babos-palace": {
    "kind": "landmark",
    "address": "Strada Regele Ferdinand",
    "query": "Palatul Babos",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Palatul_Babos.jpg/120px-Palatul_Babos.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Palatul_Babos.jpg",
    "contact": {
      "en": "Cluj-Napoca tourist information centre",
      "zh": "克鲁日-纳波卡旅游咨询中心"
    }
  }
};
