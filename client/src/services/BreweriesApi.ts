// src/services/BreweriesApi.ts
import Brewery from "@/types/Brewery";
import axios, { AxiosResponse } from "axios";

class BreweriesApi {
  private baseUrl: string;
  private stubBreweries: Brewery[];

  constructor() {
    this.baseUrl = "http://localhost:3008";
    this.stubBreweries = [
      {
        id: "4cc60614-30c4-406a-9fec-c5dc01b22863",
        breweryName: "Goose Island Brewhouse",
        breweryType: "brewpub",
        address1: "역삼로 118",
        address2: "",
        address3: "",
        city: "강남구",
        stateProvince: "서울",
        postalCode: "06251",
        country: "South Korea",
        phone: "02-6205-1785",
        websiteType: "site",
        websiteUrl: "https://gooseisland.kr",
        breweryDescription: "",
        officeHours: {
          일: {
            openTime: "11:30",
            closeTime: "23:00",
            lastOrder: "22:00",
          },
          월: {
            openTime: "11:30",
            closeTime: "24:00",
            lastOrder: "23:00",
          },
          화: {
            openTime: "11:30",
            closeTime: "24:00",
            lastOrder: "23:00",
          },
          수: {
            openTime: "11:30",
            closeTime: "24:00",
            lastOrder: "23:00",
          },
          목: {
            openTime: "11:30",
            closeTime: "24:00",
            lastOrder: "23:00",
          },
          금: {
            openTime: "11:30",
            closeTime: "24:00",
            lastOrder: "23:00",
          },
          토: {
            openTime: "11:30",
            closeTime: "24:00",
            lastOrder: "23:00",
          },
        },
        signatureBeer: {
          beerName: "골든 구스 에일",
          beerDescription:
            "파인애플, 감귤의 상큼한 향과 쌉쌀한 뒷맛으로 꿀떡꿀떡 마시기 편한 골든 에일.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 127.0323206,
        latitude: 37.49360307,
      },
      {
        id: "928e682d-b4d2-445b-8147-3fe8b727b0b7",
        breweryName: "끽비어 컴퍼니",
        breweryType: "brewpub",
        address1: "을지로 157",
        address2: "",
        address3: "",
        city: "중구",
        stateProvince: "서울",
        postalCode: "04545",
        country: "South Korea",
        phone: "070-8152-1234",
        websiteType: "site",
        websiteUrl: "http://www.ggeekbeer.com",
        breweryDescription: "",
        officeHours: {
          일: {
            openTime: null,
            closeTime: null,
          },
          월: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          화: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          수: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          목: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          금: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          토: {
            openTime: "15:00",
            closeTime: "23:00",
          },
        },
        signatureBeer: {
          beerName: "스밈",
          beerDescription:
            "스밈은 크래프트 에일로 레몬, 자몽의 시트러스한 느낌과 꽃향을 가진 홉 캐릭터가 주를 이루는 맥주입니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9955347,
        latitude: 37.56670438,
      },
      {
        id: "dbe868ec-d1f5-4624-9661-c14d150d6071",
        breweryName: "미스터리 브루잉 컴퍼니",
        breweryType: "brewpub",
        address1: "독막로 311",
        address2: "",
        address3: "",
        city: "마포구",
        stateProvince: "서울",
        postalCode: "04156",
        country: "South Korea",
        phone: "02-3272-6337",
        websiteType: "site",
        websiteUrl: "http://www.mysterleebrewing.com/",
        breweryDescription: "",
        officeHours: {
          일: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          월: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          화: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          수: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          목: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          금: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          토: {
            openTime: "13:00",
            closeTime: "24:00",
          },
        },
        signatureBeer: {
          beerName: "MYSTERLEE IPA",
          beerDescription:
            "Brut IPA (Dry&Crispy IPA) / ABV 5.6% / IBUS 35 화사한 과일향과 드라이한 피니시로 인해 어느 음식과도 잘 어울리는 IPA",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9474136,
        latitude: 37.5438955,
      },
      {
        id: "a489a154-1f69-4eaa-9680-22e0646c192a",
        breweryName: "브루어리304 경의숲길점",
        breweryType: "brewpub",
        address1: "독막로 31길 10 1",
        address2: "",
        address3: "",
        city: "서대문구",
        stateProvince: "서울",
        postalCode: "03734",
        country: "South Korea",
        phone: "02-702-3047",
        websiteType: "site",
        websiteUrl: "https://www.brewery304.com/",
        breweryDescription:
          "브루어리304는 2015년부터 좋은 재료, 장인정신, 그리고 바른 맥주문화를 앞세워 프리미엄 맥주만을 만들어온 수제맥주 양조장입니다. 모든 맥주는 직접 서대문점에서 직접 손수 양조해, 항상 가장 신선한 맥주만을 서빙합니다.",
        officeHours: {
          일: {
            openTime: null,
            closeTime: null,
          },
          월: {
            openTime: null,
            closeTime: null,
          },
          화: {
            openTime: "16:00",
            closeTime: "22:00",
            lastOrder: "21:00",
          },
          수: {
            openTime: "16:00",
            closeTime: "22:00",
            lastOrder: "21:00",
          },
          목: {
            openTime: "16:00",
            closeTime: "22:00",
            lastOrder: "21:00",
          },
          금: {
            openTime: "16:00",
            closeTime: "22:00",
            lastOrder: "21:00",
          },
          토: {
            openTime: "15:00",
            closeTime: "22:00",
            lastOrder: "21:00",
          },
        },
        signatureBeer: {
          beerName: "플루토 블론드 에일",
          beerDescription:
            "브루어리304 대표 맥주. 금빛 외관에 가벼운 바디감, 은은한 열대과일 풍미가 일품.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.962571,
        latitude: 37.56924092,
      },
      {
        id: "a489m154-1f69-4eaa-9680-22e0646c192a",
        breweryName: "브루어리304 서대문점",
        breweryType: "brewpub",
        address1: "통일로 11길 7",
        address2: "",
        address3: "",
        city: "서대문구",
        stateProvince: "서울",
        postalCode: "03734",
        country: "South Korea",
        phone: "02-363-7304",
        websiteType: "site",
        websiteUrl: "https://www.brewery304.com/",
        breweryDescription:
          "브루어리304는 서울 서대문 천연동에 위치한 手製(수제) 맥주 양조장으로,  2015년부터 최상의 재료, 아티잔 장인정신, 그리고 바른 맥주문화를 앞세워 프리미엄 맥주만을 양조합니다.",
        officeHours: {
          일: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
          월: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
          화: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
          수: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
          목: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
          금: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
          토: {
            openTime: "string",
            closeTime: "string",
            breakTime: { startTime: "string", endTime: "string" },
            lastOrder: "string",
          },
        },
        signatureBeer: {
          beerName: "플루토 블론드 에일",
          beerDescription:
            "* Style : 아메리칸 블론드 에일 * ABV 4.7% / IBU 38 / SRM 3 * Brewer's Note 태양계 마지막 행성인 명왕성을 발견한 천문학자들처럼 끈기와 섬세함으로 양조한 브루어리304의 시그니처 맥주. 금빛 외관에 가벼운 바디, 은은한 열대과일 풍미는 어떤 음식과도 좋은 페어링을 보여줍니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.962571,
        latitude: 37.56924092,
      },
      {
        id: "9ad6ad04-85ec-453d-b18c-c6c099794f69",
        breweryName: "비어바나",
        breweryType: "brewpub",
        address1: "도림로 129길 5",
        address2: "",
        address3: "",
        city: "영등포구",
        stateProvince: "서울",
        postalCode: "07290",
        country: "South Korea",
        phone: "02-2634-6277",
        websiteType: "instagram",
        websiteUrl: "https://www.instagram.com/beervanabrewery서울/",
        breweryDescription:
          "비어바나는 모든 번뇌와 고뇌가 소멸한 상태를 뜻하는 열반 Nirvana와 맥주 Beer의 합성어입니다. 미국에선 포틀랜드를 두고 맥주의 천국이라 하여 Beervana라 부르기도 합니다. 저희는 우리나라 최초로 맥주 공장에 세워졌던 영등포에서, 저희가 직접 만든 수제 맥주로 진정한 비어바나를 꿈꾸는 맥주 회사입니다. 클래식한 맥주를 존중하면서도 맥주의 최신 트렌드를 놓치지 않으며, 항상 최상의 품질로 맥주를 만들기 위해 최대한의 노력을 기울고 있습니다.",
        officeHours: {
          일: {
            openTime: "13:30",
            closeTime: "24:00",
            lastOrder: "22:30",
          },
          월: {
            openTime: "16:30",
            closeTime: "24:00",
            lastOrder: "22:30",
          },
          화: {
            openTime: "16:30",
            closeTime: "24:00",
            lastOrder: "22:30",
          },
          수: {
            openTime: "16:30",
            closeTime: "24:00",
            lastOrder: "22:30",
          },
          목: {
            openTime: "16:30",
            closeTime: "24:00",
            lastOrder: "22:30",
          },
          금: {
            openTime: "15:30",
            closeTime: "01:00",
            lastOrder: "23:30",
          },
          토: {
            openTime: "13:30",
            closeTime: "01:00",
            lastOrder: "23:30",
          },
        },
        signatureBeer: {
          beerName: "여의도 IPA",
          beerDescription:
            "바쁜 현대인들의 피로를 시원하게 달래주고자 만들어진 깔끔하고 향긋한 IPA입니다. 몇 잔이고 연거푸 마실 수 있도록 맥아의 풍미와 단맛, 쓴맛을 절제하여 음용성을 극대화한 맥주입니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.8952771,
        latitude: 37.5133648,
      },
      {
        id: "9cd6ad04-85ec-453d-b18c-c6c099794f69",
        breweryName: "비어바나 시청점",
        breweryType: "brewpub",
        address1: "남대문로 9길 24",
        address2: "",
        address3: "",
        city: "중구",
        stateProvince: "서울",
        postalCode: "07290",
        country: "South Korea",
        phone: "0507-1337-7277",
        websiteType: "instagram",
        websiteUrl: "https://www.instagram.com/beervanacityhall/",
        breweryDescription:
          "안녕하세요. 수제맥주 전문 레스토랑 이태리호프 비어바나 시청점입니다. 다양한 맥주안주와 이태리음식을 비어바나에서 직접 양조한 수제맥주와 함께 즐길 수 있습니다.",
        officeHours: {
          일: {
            openTime: null,
            closeTime: null,
          },
          월: {
            openTime: "11:30",
            closeTime: "22:00",
            breakTime: { startTime: "14:00", endTime: "17:00" },
          },
          화: {
            openTime: "11:30",
            closeTime: "22:00",
            breakTime: { startTime: "14:00", endTime: "17:00" },
          },
          수: {
            openTime: "11:30",
            closeTime: "22:00",
            breakTime: { startTime: "14:00", endTime: "17:00" },
          },
          목: {
            openTime: "11:30",
            closeTime: "22:00",
            breakTime: { startTime: "14:00", endTime: "17:00" },
          },
          금: {
            openTime: "11:30",
            closeTime: "22:00",
            breakTime: { startTime: "14:00", endTime: "17:00" },
          },
          토: {
            openTime: null,
            closeTime: null,
          },
        },
        signatureBeer: {
          beerName: "여의도 IPA",
          beerDescription:
            "바쁜 현대인들의 피로를 시원하게 달래주고자 만들어진 깔끔하고 향긋한 IPA입니다. 몇 잔이고 연거푸 마실 수 있도록 맥아의 풍미와 단맛, 쓴맛을 절제하여 음용성을 극대화한 맥주입니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.8952771,
        latitude: 37.5133648,
      },
      {
        id: "115b67f2-e2ec-4d54-9efb-a5dc5a38933a",
        breweryName: "서울 브루어리",
        breweryType: "brewpub",
        address1: "토정로 3안길 10",
        address2: "",
        address3: "",
        city: "마포구",
        stateProvince: "서울",
        postalCode: "04083",
        country: "South Korea",
        phone: "070-7756-0915",
        websiteType: "site",
        websiteUrl: "https://seoulbrewery.imweb.me/",
        breweryDescription:
          "서울에는 많은 즐거움이 있습니다. 아름다운 자연과 독특한 가게들, 맛있는 음식, 손에 닿는 편리함. 저희는 그 즐거움에 한 가지를 보태려고 합니다. 서울 사람들이, 서울 감성으로, 서울에서 양조한 맥주. 서울브루어리입니다.",
        officeHours: {
          일: {
            openTime: "13:00",
            closeTime: "24:00",
          },
          월: {
            openTime: "17:00",
            closeTime: "24:00",
          },
          화: {
            openTime: "17:00",
            closeTime: "24:00",
          },
          수: {
            openTime: "17:00",
            closeTime: "24:00",
          },
          목: {
            openTime: "17:00",
            closeTime: "24:00",
          },
          금: {
            openTime: "17:00",
            closeTime: "24:00",
          },
          토: {
            openTime: "13:00",
            closeTime: "24:00",
          },
        },
        signatureBeer: {
          beerName: "페일 블루 닷 IPA",
          beerDescription:
            "Tangerine / Pineapple / Dank 시트라, 모자익,이콰넛, 코멧 홉을 대량 투입하여 감귤과 파인애플의 맛과 향이 매력적인 IPA",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9146756,
        latitude: 37.54594861,
      },
      {
        id: "112b67f2-e2ec-4d54-9efb-a5dc5a38933a",
        breweryName: "서울 브루어리 성수",
        breweryType: "brewpub",
        address1: "연무장길 28-12",
        address2: "",
        address3: "",
        city: "성동구",
        stateProvince: "서울",
        postalCode: "04083",
        country: "South Korea",
        phone: "02-3409-7910",
        websiteType: "site",
        websiteUrl: "https://seoulbrewery.imweb.me/",
        breweryDescription:
          "서울에는 많은 즐거움이 있습니다. 아름다운 자연과 독특한 가게들, 맛있는 음식, 손에 닿는 편리함. 저희는 그 즐거움에 한 가지를 보태려고 합니다. 서울 사람들이, 서울 감성으로, 서울에서 양조한 맥주. 서울브루어리입니다.",
        officeHours: {
          일: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          월: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          화: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          수: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          목: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          금: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          토: {
            openTime: "11:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
        },
        signatureBeer: {
          beerName: "크라프트베르크 필스",
          beerDescription:
            "CRISP / CLEAN / HERBAL ABV 4.8% IBU 25 정통 독일식 필스에대한 존중을 담아 독일산 맥아와 홉만을 사용한 크라프트베르크 필스는 스텝 매싱과 장기간의 라거링을 거쳐 탄생했습니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9146756,
        latitude: 37.54594861,
      },
      {
        id: "7d5a3056-0c03-4a76-ba08-befd4f61b5e9",
        breweryName: "서울 집시",
        breweryType: "brewpub",
        address1: "서순라길 107",
        address2: "",
        address3: "",
        city: "종로구",
        stateProvince: "서울",
        postalCode: "03134",
        country: "South Korea",
        phone: "02-743-1212",
        websiteType: "instagram",
        websiteUrl: "http://instagram.com/seoulgypsy",
        breweryDescription:
          "삶을 유랑하며 실험적인 맥주를 만드는 Independent Brewery. 여행과 예술 그리고 삶의 순간에서 얻은 영감을 맥주로 그려내며 꿈꾸는 대로 살아갑니다. Live your dream!",
        officeHours: {
          일: {
            openTime: "15:00",
            closeTime: "23:00",
          },
          월: {
            openTime: null,
            closeTime: null,
          },
          화: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          수: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          목: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          금: {
            openTime: "16:00",
            closeTime: "23:00",
          },
          토: {
            openTime: "15:00",
            closeTime: "23:00",
          },
        },
        signatureBeer: {
          beerName: "자체 맥주",
          beerDescription:
            "로컬 재료를 이용한 실험적인 맥주. 주기적으로 라인업이 바뀝니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9915676,
        latitude: 37.57504419,
      },
      {
        id: "7d5l3056-0c03-4a76-ba08-befd4f61b5e9",
        breweryName: "서울 집시 한남점",
        breweryType: "brewpub",
        address1: "이태원로42길 28-4",
        address2: "",
        address3: "",
        city: "용산구",
        stateProvince: "서울",
        postalCode: "04400",
        country: "South Korea",
        phone: "070-8865-1948",
        websiteType: "instagram",
        websiteUrl: "http://instagram.com/seoulgypsy",
        breweryDescription:
          "삶을 유랑하며 실험적인 맥주를 만드는 Independent Brewery. 여행과 예술 그리고 삶의 순간에서 얻은 영감을 맥주로 그려내며 꿈꾸는 대로 살아갑니다. Live your dream!",
        officeHours: {
          일: {
            openTime: "15:00",
            closeTime: "23:00",
          },
          월: {
            openTime: null,
            closeTime: null,
          },
          화: {
            openTime: "16:30",
            closeTime: "23:30",
          },
          수: {
            openTime: "16:30",
            closeTime: "23:30",
          },
          목: {
            openTime: "16:30",
            closeTime: "23:30",
          },
          금: {
            openTime: "16:30",
            closeTime: "23:30",
          },
          토: {
            openTime: "15:00",
            closeTime: "23:00",
          },
        },
        signatureBeer: {
          beerName: "자체 맥주",
          beerDescription:
            "로컬 재료를 이용한 실험적인 맥주. 주기적으로 라인업이 바뀝니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9915676,
        latitude: 37.57504419,
      },
      {
        id: "09c1e42a-8e73-4097-af34-f1ff0cd6034e",
        breweryName: "아쉬트리",
        breweryType: "brewpub",
        address1: "아차산로 49길 22",
        address2: "",
        address3: "",
        city: "광진구",
        stateProvince: "서울",
        postalCode: "05043",
        country: "South Korea",
        phone: "02-6339-4858",
        websiteType: "site",
        websiteUrl: "https://www.ashtreebrewery.com/",
        breweryDescription:
          "매장 내 양조장에서 직접 생산하는 13종의 수제맥주와 피자, 버거 등 맛있는 안주를 판매하고 있습니다. 커피와 싱글몰트 위스키, 와인도 저렴하게 즐기실 수 있도록 준비되어있습니다. 구의동 먹자골목의 입구부근 (구의역1번출구, 도보2분) 에 위치하고 있습니다.",
        officeHours: {
          일: {
            openTime: null,
            closeTime: null,
          },
          월: {
            openTime: "11:30",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          화: {
            openTime: "11:30",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          수: {
            openTime: "11:30",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          목: {
            openTime: "11:30",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          금: {
            openTime: "11:30",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          토: {
            openTime: "15:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
        },
        signatureBeer: {
          beerName: "그리젯",
          beerDescription:
            "오렌지제스트의 시트러스, 얇은 바디감과 드리이한 피니시로 편하게 마실 수 있는 팜하우스에일",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 127.0323206,
        latitude: 37.49360307,
      },
      {
        id: "930d5e04-4234-4bf4-9d32-ad0d812d1a95",
        breweryName: "카페인신현리 Tap & Grill",
        breweryType: "brewpub",
        address1: "장문로 23 몬드리안 서울",
        address2: "",
        address3: "",
        city: "용산구",
        stateProvince: "서울",
        postalCode: "04392",
        country: "South Korea",
        phone: "070-4009-5849",
        websiteType: "site",
        websiteUrl: "http://www.instagram.com/atonbrewery",
        breweryDescription:
          "직접 생산한 다채로운 크래프트 비어와 잘 어울리는 요리들을 선보이는 몬드리안 호텔의 캐쥬얼 펍입니다.",
        officeHours: {
          일: {
            openTime: "15:00",
            closeTime: "22:00",
            lastOrder: "21:30",
          },
          월: {
            openTime: "16:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          화: {
            openTime: "16:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          수: {
            openTime: "16:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          목: {
            openTime: "16:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          금: {
            openTime: "16:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          토: {
            openTime: "16:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
        },
        signatureBeer: {
          beerName: "MIDNIGHT SUN",
          beerDescription:
            "Coffee Sour Ale | ABV 4.5%, IBU 5 Rich Coffee, Cherry, Citrus, Vanilla",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9930459,
        latitude: 37.52846912,
      },
      {
        id: "363c5d1f-99e3-4b8a-afc7-acd4a7c30a1f",
        breweryName: "어메이징 브루잉 컴퍼니",
        breweryType: "brewpub",
        address1: "성수일로 4길 4",
        address2: "",
        address3: "",
        city: "성동구",
        stateProvince: "서울",
        postalCode: "04780",
        country: "South Korea",
        phone: "02-465-5208",
        websiteType: "instagram",
        websiteUrl: "http://www.amazingbrewing.co.kr",
        breweryDescription:
          "[어메이징브루잉컴퍼니]는 성수동에 위치한 크래프트 맥주 브루어리입니다. 매일 아침 30여종의 새로운 맥주를 양조하며 양조장에 방문하시면 30여종 이상의 새롭고 다양한 크래프트 맥주를 드실 수 있는 공간도 마련되어 있습니다. 모두 브루마스터들이 직접 제조하며, 기계식 대량생산이 아닌 순수하게 수작업으로 만드는 국내 유일의 정통 수제맥주 양조장입니다. 제조 과정도 직접 눈으로 보며 싱싱한 맥주를 즐기실 수 있습니다. 한정된 수량만을 생산하며, 항상 최상급의 품질을 유지하기 위해서 최선을 다합니다. 최고의 브루어와 맥주 전문가 씨서론이 함께 만든 [어메이징브루잉컴퍼니]에서 다양하고 맛있는 맥주를 경험해보세요 :)",
        officeHours: {
          일: {
            openTime: "15:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
          월: {
            openTime: "17:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
          화: {
            openTime: "17:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
          수: {
            openTime: "17:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
          목: {
            openTime: "17:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
          금: {
            openTime: "17:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
          토: {
            openTime: "15:00",
            closeTime: "24:00",
            lastOrder: "22:00",
          },
        },
        signatureBeer: {
          beerName: "첫사랑",
          beerDescription:
            "오렌지와 감귤, 열대과일의 향과 함께, 달콤쌉쌀하며 풍부한 질감이 느껴지는 쥬시한 Hazy IPA. 달콤한 첫 맛과 쌉싸롬한 끝 맛이 좋은 어메이징의 시그니처 IPA.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 127.0495044,
        latitude: 37.54297518,
      },
      {
        id: "0616a0ff-c23f-4cf3-a4c6-34b7f47f581c",
        breweryName: "에일크루 브루잉 신촌점",
        breweryType: "brewpub",
        address1: "연세로 11길 34 지하 1층",
        address2: "",
        address3: "",
        city: "서대문구",
        stateProvince: "서울",
        postalCode: "03949",
        country: "South Korea",
        phone: "0507-1377-8663",
        websiteType: "site",
        websiteUrl: "https://catchtable.co.kr/alecrewbrewing",
        breweryDescription:
          "저희는 양조장을 보유한 프리미엄 신촌 수제 맥주 전문 펍 에일크루 브루잉 신촌점 입니다 미국 스타일의 IPA 전문 양조장에서 직접 생산하는 수제 맥주가 있는 신촌 펍입니다 정통 이탈리아 파스타와 피자, 치킨요리, 독일소시지 등 음식 페어링까지 잘 준비되어 있습니다 신선한 수제 맥주탭 20가지, 가성비 넘치는 와인 리스트, 다양한 병맥주와 자체생산 캔맥주까지 다양한 프리미엄 수제 맥주 라인업을 가지고 있습니다 오늘도 찾아주신 고객분들께 감사드립니다 최고의 시간이 될 수 있도록 최선을 다하겠습니다.",
        officeHours: {
          일: {
            openTime: "13:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          월: {
            openTime: "13:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          화: {
            openTime: "13:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          수: {
            openTime: "13:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          목: {
            openTime: "13:00",
            closeTime: "23:00",
            lastOrder: "22:30",
          },
          금: {
            openTime: "13:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
          토: {
            openTime: "13:00",
            closeTime: "24:00",
            lastOrder: "23:30",
          },
        },
        signatureBeer: {
          beerName: "어메리칸블루 IPA",
          beerDescription: "복숭아, 살구, 자몽 아로마, 6.8%, IBU 63",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.912452,
        latitude: 37.56657473,
      },
      {
        id: "0616a0ff-c23f-4cf3-a4c6-34b7f4af581c",
        breweryName: "에일크루 브루잉 양조장",
        breweryType: "brewpub",
        address1: "양산로 96 산경물산 A46호",
        address2: "",
        address3: "",
        city: "영등포구",
        stateProvince: "서울",
        postalCode: "03949",
        country: "South Korea",
        phone: "0507-1374-7865",
        websiteType: "site",
        websiteUrl: "https://catchtable.co.kr/alecrewbrewing",
        breweryDescription:
          "저희는 양조장을 보유한 프리미엄 신촌 수제 맥주 전문 펍 에일크루 브루잉 신촌점 입니다 미국 스타일의 IPA 전문 양조장에서 직접 생산하는 수제 맥주가 있는 신촌 펍입니다 정통 이탈리아 파스타와 피자, 치킨요리, 독일소시지 등 음식 페어링까지 잘 준비되어 있습니다 신선한 수제 맥주탭 20가지, 가성비 넘치는 와인 리스트, 다양한 병맥주와 자체생산 캔맥주까지 다양한 프리미엄 수제 맥주 라인업을 가지고 있습니다 오늘도 찾아주신 고객분들께 감사드립니다 최고의 시간이 될 수 있도록 최선을 다하겠습니다.",
        officeHours: {
          일: {
            openTime: null,
            closeTime: null,
          },
          월: {
            openTime: "09:00",
            closeTime: "18:00",
            breakTime: { startTime: "12:00", endTime: "13:00" },
          },
          화: {
            openTime: "09:00",
            closeTime: "18:00",
            breakTime: { startTime: "12:00", endTime: "13:00" },
          },
          수: {
            openTime: "09:00",
            closeTime: "18:00",
            breakTime: { startTime: "12:00", endTime: "13:00" },
          },
          목: {
            openTime: "09:00",
            closeTime: "18:00",
            breakTime: { startTime: "12:00", endTime: "13:00" },
          },
          금: {
            openTime: "09:00",
            closeTime: "18:00",
            breakTime: { startTime: "12:00", endTime: "13:00" },
          },
          토: {
            openTime: null,
            closeTime: null,
          },
        },
        signatureBeer: {
          beerName: "어메리칸블루 IPA",
          beerDescription: "복숭아, 살구, 자몽 아로마, 6.8%, IBU 63",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.912452,
        latitude: 37.56657473,
      },
      {
        id: "fd23a3cb-6b21-44d3-b40c-008564f2f4f0",
        breweryName: "크래프트 브로스",
        breweryType: "brewpub",
        address1: "사평대로 22길 18",
        address2: "",
        address3: "",
        city: "서초구",
        stateProvince: "서울",
        postalCode: "06576",
        country: "South Korea",
        phone: "02-537-7451",
        websiteType: "site",
        websiteUrl: "http://www.craftbros.co.kr/",
        breweryDescription:
          "크래프트브로스 탭하우스 & 바틀샵 !! 탭하우스에서는 김포에 위치한 크래프트브로스의 양조장에서 생산하는 자체 크래프트맥주와 함께 수입 유명 생맥주를 드실 수 있고, 옆에 있는 바틀샵에서는 200여종의 전세계 유명 병맥주와 캔맥주를 사가지고 가실 수 있습니다. 맥주 뿐만 아니라 다양한 안주와 음식을 맥주와 함께 페어링하여 즐기세요.",
        officeHours: {
          일: {
            openTime: "15:00",
            closeTime: "01:00",
            lastOrder: "00:30",
          },
          월: {
            openTime: "17:00",
            closeTime: "01:00",
            lastOrder: "00:30",
          },
          화: {
            openTime: "17:00",
            closeTime: "01:00",
            lastOrder: "00:30",
          },
          수: {
            openTime: "17:00",
            closeTime: "01:00",
            lastOrder: "00:30",
          },
          목: {
            openTime: "17:00",
            closeTime: "01:00",
            lastOrder: "00:30",
          },
          금: {
            openTime: "17:00",
            closeTime: "01:00",
            lastOrder: "00:30",
          },
          토: {
            openTime: "string",
            closeTime: "string",
            lastOrder: "string",
          },
        },
        signatureBeer: {
          beerName: "원스어폰어타임 IPA 소반",
          beerDescription:
            "화이트와인,구즈베리,포도의 아로마와 오렌지,자몽의 시트러스함을 느낄 수 있는 뉴잉IPA",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9977006,
        latitude: 37.498793,
      },
      {
        id: "64a4f65c-47a9-4d8e-ad2e-3cc898b9689c",
        breweryName: "핸드앤몰트",
        breweryType: "brewpub",
        address1: "한강대로38가길 19",
        address2: "",
        address3: "",
        city: "용산구",
        stateProvince: "서울",
        postalCode: "04386",
        country: "South Korea",
        phone: "070-7178-4011",
        websiteType: "site",
        websiteUrl: "http://handandmalt.com/",
        breweryDescription: "",
        officeHours: {
          일: {
            openTime: "14:00",
            closeTime: "23:00",
          },
          월: {
            openTime: "17:00",
            closeTime: "23:00",
          },
          화: {
            openTime: "17:00",
            closeTime: "23:00",
          },
          수: {
            openTime: "17:00",
            closeTime: "23:00",
          },
          목: {
            openTime: "17:00",
            closeTime: "23:00",
          },
          금: {
            openTime: "17:00",
            closeTime: "24:00",
          },
          토: {
            openTime: "14:00",
            closeTime: "24:00",
          },
        },
        signatureBeer: {
          beerName: "브루랩 자체 생산 맥주",
          beerDescription:
            "다른 곳에는 없는 매장에서만 즐기실 수 있는 맥주입니다. 주기적으로 바뀝니다.",
        },
        likes: [],
        images: ["/brewery-image.png"],
        longitude: 126.9705831,
        latitude: 37.52985655,
      },
    ];
  }

  async fetchBreweriesByInputText(query: string): Promise<Brewery[]> {
    return this.stubBreweries.filter(
      ({ breweryName, city, stateProvince }: Brewery) => {
        return (
          breweryName.includes(query) ||
          city.includes(query) ||
          stateProvince.includes(query)
        );
      }
    );
  }
  async fetchBreweryById(breweryId: string): Promise<Brewery | null> {
    const brewery = this.stubBreweries.find(
      (brewery: Brewery) => brewery.id === breweryId
    );
    return brewery ?? null;
  }
  // async fetchBreweriesByInputValue(query: string): Promise<Brewery[]> {
  //   try {
  //     const response: AxiosResponse<Brewery[]> = await axios.get(
  //       `${this.baseUrl}/search?q=${query}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching data from server:", error);
  //     return [];
  //   }
  // }
}

export default BreweriesApi;
