export type VisitDetails = {
  kind: 'garden' | 'museum' | 'church' | 'landmark';
  query: string;
  address: string;
  operator?: string;
  hours?: string;
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "亚历山德鲁·博尔扎植物园",
      "description": "沿日本庭园周边的步道散步，温室开放时再对比室内收藏与室外植物景观。",
      "intro": "沿日本庭园周边的步道散步，温室开放时再对比室内收藏与室外植物景观。",
      "sections": [
        [
          "游览安排",
          "从共和国街入园，为这座山坡植物园安排独立时段。如果时间有限，可先选温室或日本庭园，因为两处位于园内不同区域。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "尤利乌·哈采加努大学体育公园",
      "description": "在林荫环境中感受大学体育公园的氛围；想使用球场或跑道，先询问场地开放安排。",
      "intro": "在林荫环境中感受大学体育公园的氛围；想使用球场或跑道，先询问场地开放安排。",
      "sections": [
        [
          "游览安排",
          "体育公园位于老城西侧。先核对开放的步道和设施，条件合适时可把这一站与河岸散步串起来。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "格奥尔盖尼湖滨公园",
      "description": "沿格奥尔盖尼湖步行，在岸边驻足看对岸。这里适合安排在市区东侧行程中，作为一段轻松的休息时间。",
      "intro": "沿格奥尔盖尼湖步行，在岸边驻足看对岸。这里适合安排在市区东侧行程中，作为一段轻松的休息时间。",
      "sections": [
        [
          "游览安排",
          "把这里放进格奥尔盖尼片区的行程，以湖岸为目的地，避免从商场另一侧绕行。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "玫瑰公园",
      "description": "把园内步道与小索梅什河岸串起来走。从市中心步行过来时，给河边路段多留一点时间。",
      "intro": "把园内步道与小索梅什河岸串起来走。从市中心步行过来时，给河边路段多留一点时间。",
      "sections": [
        [
          "游览安排",
          "把公园和河岸当成市区西侧的一段步行，可在园内短暂停留，也可沿河延长路线。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "特兰西瓦尼亚民族志博物馆",
      "description": "先观察服饰和生活器具各自的用途，再比较不同社区的工艺。这一站是市中心的室内展馆。",
      "intro": "先观察服饰和生活器具各自的用途，再比较不同社区的工艺。这一站是市中心的室内展馆。",
      "sections": [
        [
          "游览安排",
          "罗穆卢斯·武亚露天展区适合另行安排。市中心的室内馆更便于细看展柜里的器物。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "矿物学博物馆",
      "description": "对着标本比较晶体形状、光泽和颜色，再看产地标签，了解馆藏如何把地质与矿区联系起来。",
      "intro": "对着标本比较晶体形状、光泽和颜色，再看产地标签，了解馆藏如何把地质与矿区联系起来。",
      "sections": [
        [
          "游览安排",
          "这站可与大学的化石馆搭配。对矿物形成与标本分类感兴趣的话，可以先看这里。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "大卫·普罗丹纪念馆",
      "description": "从这座小型纪念馆认识历史学家对特兰西瓦尼亚的研究；私人生活空间也为书籍与文献提供了传记背景。",
      "intro": "从这座小型纪念馆认识历史学家对特兰西瓦尼亚的研究；私人生活空间也为书籍与文献提供了传记背景。",
      "sections": [
        [
          "游览安排",
          "先对当地历史有个基本了解，再安排这一站。如果同日另有预约，请先向馆方确认能否参观。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "克鲁日大学大屠杀纪念博物馆",
      "description": "留出时间阅读史料，沿时间顺序理解北特兰西瓦尼亚的迫害与驱逐历史。",
      "intro": "留出时间阅读史料，沿时间顺序理解北特兰西瓦尼亚的迫害与驱逐历史。",
      "sections": [
        [
          "游览安排",
          "为这座纪念馆留出安静阅读的时间，不必赶着前往下一站。亲子到访前，可向馆方询问适龄展区。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "古生物与地层学博物馆",
      "description": "看化石名称时也留意所属地质年代；按年代比较标本，更容易理解地层学展陈。",
      "intro": "看化石名称时也留意所属地质年代；按年代比较标本，更容易理解地层学展陈。",
      "sections": [
        [
          "游览安排",
          "若两馆都对外开放，可和矿物学博物馆搭配。两处关注的问题不同，建议分别留时间阅读说明。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "亚历山德鲁·杜马博物馆",
      "description": "以校方对这批专门馆藏的介绍来安排参观，出发前先询问是否需要预约。",
      "intro": "以校方对这批专门馆藏的介绍来安排参观，出发前先询问是否需要预约。",
      "sections": [
        [
          "游览安排",
          "按莫齐洛尔大道地址找展馆，出发前查看其参观信息，尤其是短途行程或时间较紧时。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "药房博物馆",
      "description": "在欣茨故居内，对照药房的对客空间和配制、储存药品所用的器具。",
      "intro": "在欣茨故居内，对照药房的对客空间和配制、储存药品所用的器具。",
      "sections": [
        [
          "游览安排",
          "从联合广场入口进入，为里面的展室多留一点时间。离馆时可以把保存的室内陈设与历史建筑外观对照着看。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "克鲁日-纳波卡艺术博物馆",
      "description": "进馆前先看班菲宫立面，入内后留意作品与展厅建筑本身。",
      "intro": "进馆前先看班菲宫立面，入内后留意作品与展厅建筑本身。",
      "sections": [
        [
          "游览安排",
          "从联合广场前往，先核对开放展厅与临时展览。行程较短时可选一个展览，并给宫殿外观留几分钟。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "植物博物馆",
      "description": "观察标本和教学展品如何呈现植物结构；室内馆藏可以和园里的活植物对照着看。",
      "intro": "观察标本和教学展品如何呈现植物结构；室内馆藏可以和园里的活植物对照着看。",
      "sections": [
        [
          "游览安排",
          "植物博物馆和植物园共用同一地址，可以分成两站安排。如果主要想看室内馆藏，请另行确认展馆开放情况。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "罗穆卢斯·武亚民族志公园",
      "description": "比较露天陈列中各地乡村建筑的屋顶形制与材料，并给展屋之间的步行预留时间。",
      "intro": "比较露天陈列中各地乡村建筑的屋顶形制与材料，并给展屋之间的步行预留时间。",
      "sections": [
        [
          "游览安排",
          "这里是露天馆区，从老城出发宜多留交通时间，穿适合户外步行的鞋。雨天及季节性开放安排会影响参观范围。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "克鲁日大学动物活体馆",
      "description": "观察展箱如何适应不同动物的需要，并通过说明牌辨识展出的物种。",
      "intro": "观察展箱如何适应不同动物的需要，并通过说明牌辨识展出的物种。",
      "sections": [
        [
          "游览安排",
          "到克利尼奇洛尔街后询问活体馆入口。可以让孩子先读展箱说明，再多等一会观察不易立刻看到的动物。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "动物学博物馆",
      "description": "可按栖息地和体态比较标本；保存标本是这里的重点，可与大学动物活体馆搭配参观。",
      "intro": "可按栖息地和体态比较标本；保存标本是这里的重点，可与大学动物活体馆搭配参观。",
      "sections": [
        [
          "游览安排",
          "这里和活体馆同在克利尼奇洛尔街地址内。可先询问从哪个入口进入，再决定看其中一处还是两处都看。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "特兰西瓦尼亚国家历史博物馆",
      "description": "先查看当前展览，再决定重点参观考古材料还是历史主题。",
      "intro": "先查看当前展览，再决定重点参观考古材料还是历史主题。",
      "sections": [
        [
          "游览安排",
          "可将博物馆排入博物馆广场一带的步行路线。先按当前展览规划馆内参观，再走访周围的历史街巷。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "克鲁日都主教区博物馆",
      "description": "把宗教馆藏另排一站，进主教座堂前可先问清博物馆的入口和参观安排。",
      "intro": "把宗教馆藏另排一站，进主教座堂前可先问清博物馆的入口和参观安排。",
      "sections": [
        [
          "游览安排",
          "到主教座堂所在广场后，再确认博物馆入口。建议分别为博物馆和仍用于礼拜的座堂留出时间。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "卡尔瓦里亚教堂",
      "description": "从默讷什图尔较低的街道走向高处教堂，观察这处建筑群的地势。",
      "intro": "从默讷什图尔较低的街道走向高处教堂，观察这处建筑群的地势。",
      "sections": [
        [
          "游览安排",
          "这是默讷什图尔片区的一站。导航目的地选教堂，若不便走陡坡，可提前查看入口一带的地势。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "方济各会教堂",
      "description": "从博物馆广场看起，观察教堂立面和相连修道院如何界定广场的边缘。",
      "intro": "从博物馆广场看起，观察教堂立面和相连修道院如何界定广场的边缘。",
      "sections": [
        [
          "游览安排",
          "可用卡罗琳方尖碑定位，穿过博物馆广场；若教堂对游客开放，再把入内参观单独安排。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "圣母安息东正教主教座堂",
      "description": "先退到阿夫拉姆·扬库广场对侧看整体轮廓，再走近看石雕和门廊。",
      "intro": "先退到阿夫拉姆·扬库广场对侧看整体轮廓，再走近看石雕和门廊。",
      "sections": [
        [
          "游览安排",
          "广场和教堂都可留一点时间。遇到礼拜时，入内或拍照前请先看座堂公告。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "鲍勃希腊礼天主教堂",
      "description": "从主广场走入较安静的街巷寻找教堂门面，在老城步行中加入一站希腊礼天主教历史。",
      "intro": "从主广场走入较安静的街巷寻找教堂门面，在老城步行中加入一站希腊礼天主教历史。",
      "sections": [
        [
          "游览安排",
          "从约安·鲍勃主教街步行前往。如果教堂关门，可以短暂停留看外观，再走去附近广场。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "加尔文宗主教堂",
      "description": "在十二月二十一日大道的两侧观察教堂正面和街道的关系。",
      "intro": "在十二月二十一日大道的两侧观察教堂正面和街道的关系。",
      "sections": [
        [
          "游览安排",
          "在大道上找双塔归正教堂。它与科格尔尼恰努街上的哥特式归正教堂位于不同地点。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "公鸡归正教堂",
      "description": "先从街对面看屋顶轮廓，再找公鸡标志和与建筑师卡罗伊·科什有关的特兰西瓦尼亚装饰。",
      "intro": "先从街对面看屋顶轮廓，再找公鸡标志和与建筑师卡罗伊·科什有关的特兰西瓦尼亚装饰。",
      "sections": [
        [
          "游览安排",
          "把这里安排在向西走的莫齐洛尔大道一段。先从公共人行道抬头观察，再靠近入口。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "福音路德会教堂",
      "description": "留意临街立面的比例，再与附近广场上的哥特式教堂做比较。",
      "intro": "留意临街立面的比例，再与附近广场上的哥特式教堂做比较。",
      "sections": [
        [
          "游览安排",
          "从联合广场东侧接近，到主街找入口。若安排连看几座教堂，建议分别查看各处的开放情况。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "皮亚里斯特教堂",
      "description": "在大学街拉开一点距离，把双塔和巴洛克立面放在同一视野里看。",
      "intro": "在大学街拉开一点距离，把双塔和巴洛克立面放在同一视野里看。",
      "sections": [
        [
          "游览安排",
          "可把这站接在大学区步行之后。靠近教堂门口前，先在稍远处看双塔全貌。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "耶稣显圣容主教座堂",
      "description": "在英雄大道上从入口稍稍退远，从沿街建筑中辨认教堂立面和塔楼。",
      "intro": "在英雄大道上从入口稍稍退远，从沿街建筑中辨认教堂立面和塔楼。",
      "sections": [
        [
          "游览安排",
          "沿英雄大道找入口。询问路线时可报这座希腊礼天主教主教座堂的全名，便于与附近的东正教座堂区分。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "新派犹太会堂",
      "description": "在霍雷亚街看塔楼和装饰砖砌；想入内时，提前向当地社群确认参观安排。",
      "intro": "在霍雷亚街看塔楼和装饰砖砌；想入内时，提前向当地社群确认参观安排。",
      "sections": [
        [
          "游览安排",
          "沿霍雷亚街步行前往。如已约好入内，请预留充足时间，并按当地社群指引进场与拍照。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "科格尔尼恰努街归正教堂",
      "description": "观察教堂的哥特式构造，也可以顺道看旁边的圣乔治雕像。",
      "intro": "观察教堂的哥特式构造，也可以顺道看旁边的圣乔治雕像。",
      "sections": [
        [
          "游览安排",
          "沿科格尔尼恰努街步行，先在教堂前的雕像附近停步，回看立面与街道环境。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "一位论派主教座堂",
      "description": "从十二月二十一日大道抬头辨认塔楼，再走近入口。这一站适合了解城市的一位论派宗教历史。",
      "intro": "从十二月二十一日大道抬头辨认塔楼，再走近入口。这一站适合了解城市的一位论派宗教历史。",
      "sections": [
        [
          "游览安排",
          "在大道上留几分钟寻找入口。若礼拜堂关闭，可由同一条街继续往老城步行。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "博格丹菲故居",
      "description": "留意修复后的住宅与昔日鞋匠塔和中世纪护城河的关系；进馆前可查 Plan B 基金会的展览计划。",
      "intro": "留意修复后的住宅与昔日鞋匠塔和中世纪护城河的关系；进馆前可查 Plan B 基金会的展览计划。",
      "sections": [
        [
          "游览安排",
          "从画廊展览计划核对入口和开放安排，同时给保存的防御工事遗迹与当期展览各留一点时间。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "克鲁日-纳波卡火车站",
      "description": "先从站前广场看历史站房，进入客运区域时给乘车预留充分时间。",
      "intro": "先从站前广场看历史站房，进入客运区域时给乘车预留充分时间。",
      "sections": [
        [
          "游览安排",
          "乘车前后可在站前广场短暂停留看站房，并让开进出站队伍。"
        ]
      ],
      "faq": []
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
        ]
      ],
      "faq": []
    },
    "zh": {
      "title": "鲍博什宫",
      "description": "在小索梅什河边的公共人行道观察转角立面，也可以停下来与对岸沿河建筑作比较。",
      "intro": "在小索梅什河边的公共人行道观察转角立面，也可以停下来与对岸沿河建筑作比较。",
      "sections": [
        [
          "游览安排",
          "适合与过桥的河岸步行搭配。想看清转角建筑的布局，可以从两个临街方向观察。"
        ]
      ],
      "faq": []
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
    "photo": "https://clujtourism.ro/wp-content/uploads/2019/12/DSCN5346-scaled.jpg"
  },
  "the-rose-park": {
    "kind": "garden",
    "address": "Aleea Rozelor",
    "query": "Parcul Rozelor",
    "photo": "https://clujtourism.ro/wp-content/uploads/2023/05/1-1.jpg"
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
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Calvaria_Church_(Cluj-Napoca).jpg"
  },
  "church-of-franciscan-monastery": {
    "kind": "church",
    "address": "Piața Muzeului",
    "query": "Biserica Franciscană",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Obeliscul_Carolina_si_Biserica_franciscana.jpg/120px-Obeliscul_Carolina_si_Biserica_franciscana.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Obeliscul_Carolina_si_Biserica_franciscana.jpg"
  },
  "adormirea-maicii-domnului-assumption-of-virgin-mary-orthodox-metropolitan-cathedral": {
    "kind": "church",
    "address": "Piața Avram Iancu",
    "query": "Catedrala Mitropolitană Ortodoxă",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/CatedralaOrtCJ_%282%29.JPG/120px-CatedralaOrtCJ_%282%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:CatedralaOrtCJ_(2).JPG"
  },
  "bob-greek-catholic-church": {
    "kind": "church",
    "address": "Strada Episcop Ioan Bob",
    "query": "Biserica Bob greco-catolică",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/A_Bob_utcai_templom_az_udvarb%C3%B3l.JPG/120px-A_Bob_utcai_templom_az_udvarb%C3%B3l.JPG?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:A_Bob_utcai_templom_az_udvarb%C3%B3l.JPG"
  },
  "calvinist-episcopal-cathedral": {
    "kind": "church",
    "address": "Bulevardul 21 Decembrie 1989",
    "query": "Biserica Reformată cu Două Turnuri",
    "photo": "https://monitorulcj.ro/documente/stories/2024/07/03/66852a95db3fd_Captur%C4%83-de-ecran-2024-07-03-134013.png",
    "photoCredit": "https://www.monitorulcj.ro/timp-liber/121090-povestea-bisericii-reformate-cu-doua-turnuri-emblema-a-stilului-clasicist-clujean-inspiratia-lacasului-de-cult-provenita-din-debrecen"
  },
  "cu-cocos-with-rooster-reformed-church": {
    "kind": "church",
    "address": "Calea Moților",
    "query": "Biserica Reformată cu Cocoș",
    "photo": "https://lexikon.adatbank.ro/admin/kep/241_1272286661_01.-Fohomlokzat.jpg",
    "photoCredit": "https://lexikon.adatbank.ro/muemlek.php?id=241"
  },
  "evangelical-church": {
    "kind": "church",
    "address": "Bulevardul 21 Decembrie 1989",
    "query": "Biserica Evanghelică-Luterană Cluj",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Cluj-Napoca_Evangelical_Church.jpg/120px-Cluj-Napoca_Evangelical_Church.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Cluj-Napoca_Evangelical_Church.jpg"
  },
  "piarists-church": {
    "kind": "church",
    "address": "Strada Universității",
    "query": "Biserica Piaristă",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Piarista_kolozsvar.jpg/120px-Piarista_kolozsvar.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Piarista_kolozsvar.jpg"
  },
  "schimbarea-la-fata-the-transfiguration-greek-catholic-cathedral": {
    "kind": "church",
    "address": "Bulevardul Eroilor",
    "query": "Catedrala Greco-Catolică Schimbarea la Față",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Schimbarea_la_Fata_%28Transfiguration%29_Cathedral%2C_Cluj-Napoca.jpg/120px-Schimbarea_la_Fata_%28Transfiguration%29_Cathedral%2C_Cluj-Napoca.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Schimbarea_la_Fata_(Transfiguration)_Cathedral,_Cluj-Napoca.jpg"
  },
  "the-neologist-synagogue": {
    "kind": "church",
    "address": "Strada Horea 21",
    "query": "Templul Memorial al Deportaților Cluj",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Cluj_synagogue.jpg/120px-Cluj_synagogue.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Cluj_synagogue.jpg"
  },
  "the-reformed-church": {
    "kind": "church",
    "address": "Strada Mihail Kogălniceanu",
    "query": "Biserica Reformată de pe Ulița Lupilor",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Kv%C3%A1r_Farkas_utcai_ref_templom_2.jpg/120px-Kv%C3%A1r_Farkas_utcai_ref_templom_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Kv%C3%A1r_Farkas_utcai_ref_templom_2.jpg"
  },
  "unitarian-cathedral": {
    "kind": "church",
    "address": "Bulevardul 21 Decembrie 1989",
    "query": "Biserica Unitariană Cluj",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Bis_Unitariana_Cluj.JPG/120px-Bis_Unitariana_Cluj.JPG?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Bis_Unitariana_Cluj.JPG"
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
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Cluj-Napoca-Pia%C8%9Ba_G%C4%83rii-Gara-IMG_4623.jpg"
  },
  "babos-palace": {
    "kind": "landmark",
    "address": "Strada Regele Ferdinand",
    "query": "Palatul Babos",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Palatul_Babos.jpg/120px-Palatul_Babos.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",
    "photoCredit": "https://commons.wikimedia.org/wiki/File:Palatul_Babos.jpg"
  }
};
