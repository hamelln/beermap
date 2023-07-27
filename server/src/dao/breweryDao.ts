import axios from "axios";
import { Brewery } from "../models/brewery";

let allBreweries: Brewery[] = [];

// 데이터 로드 함수를 호출하여 메모리에 로드
export async function loadAllBreweries(): Promise<void> {
  allBreweries = await fetchAllBreweries();
}

export function getAllBreweries(): Brewery[] {
  return allBreweries;
}

const fetchAllBreweries = async (): Promise<Brewery[]> => {
  const allBreweries: Brewery[] = [];
  const breweriesByCity: any = {
    seoul: [
      {
        id: "4cc60614-30c4-406a-9fec-c5dc01b22863",
        name: "Goose Island Brewhouse Seoul",
        brewery_type: "brewpub",
        address_1: "118, Yeoksam-ro",
        address_2: "",
        address_3: "",
        city: "Gangnam-gu",
        state_province: "Seoul",
        postal_code: "06251",
        country: "South Korea",
        phone: "02-6205-1785",
        website_type: "site",
        website_url: "https://gooseisland.kr",
        longitude: 127.0323206,
        latitude: 37.49360307,
      },
      {
        id: "928e682d-b4d2-445b-8147-3fe8b727b0b7",
        name: "끽비어컴퍼니",
        brewery_type: "brewpub",
        address_1: "157, Eulji-ro",
        address_2: "",
        address_3: "",
        city: "Jung-gu",
        state_province: "Seoul",
        postal_code: "04545",
        country: "South Korea",
        phone: "070-8152-1234",
        website_url: "http://www.ggeekbeer.com",
        longitude: 126.9955347,
        latitude: 37.56670438,
      },
      {
        id: "dbe868ec-d1f5-4624-9661-c14d150d6071",
        name: "미스터리 브루잉 (MysterLee Brewing Co.)",
        brewery_type: "brewpub",
        address_1: "311, Dongmak-ro",
        address_2: "",
        address_3: "",
        city: "Mapo-gu",
        state_province: "Seoul",
        postal_code: "04156",
        country: "South Korea",
        phone: "02-3272-6337",
        website_url: "http://www.mysterleebrewing.com/",
        longitude: 126.9474136,
        latitude: 37.5438955,
      },
      {
        id: "a489a154-1f69-4eaa-9680-22e0646c192a",
        name: "브루어리304 (Brewery 304)",
        brewery_type: "brewpub",
        address_1: "7, Tongil-ro 11-gil",
        address_2: "",
        address_3: "",
        city: "Seodaemun-gu",
        state_province: "Seoul",
        postal_code: "03734",
        country: "South Korea",
        phone: "02-363-7304",
        website_url: "https://www.brewery304.com/",
        longitude: 126.962571,
        latitude: 37.56924092,
      },
      {
        id: "9ad6ad04-85ec-453d-b18c-c6c099794f69",
        name: "비어바나 (Beer Vana Brewing Co.)",
        brewery_type: "brewpub",
        address_1: "5-1, Dorim-ro 129-gil",
        address_2: "",
        address_3: "",
        city: "Yeongdeungpo-gu",
        state_province: "Seoul",
        postal_code: "07290",
        country: "South Korea",
        phone: "02-2634-6277",
        website_url: "https://www.instagram.com/beervana_brewery_seoul/",
        longitude: 126.8952771,
        latitude: 37.5133648,
      },
      {
        id: "115b67f2-e2ec-4d54-9efb-a5dc5a38933a",
        name: "서울 브루어리 (Seoul Brewery)",
        brewery_type: "brewpub",
        address_1: "10, Tojeong-ro 3an-gil",
        address_2: "",
        address_3: "",
        city: "Mapo-gu",
        state_province: "Seoul",
        postal_code: "04083",
        country: "South Korea",
        phone: "070-7756-0915",
        website_url: "https://www.seoulbrewery.com/home",
        longitude: 126.9146756,
        latitude: 37.54594861,
      },
      {
        id: "7d5a3056-0c03-4a76-ba08-befd4f61b5e9",
        name: "서울집시 (Seoul Gypsy)",
        brewery_type: "brewpub",
        address_1: "107, Seosulla-gil",
        address_2: "",
        address_3: "",
        city: "Jongno-gu",
        state_province: "Seoul",
        postal_code: "03134",
        country: "South Korea",
        phone: "02-743-1212",
        website_url: "http://instagram.com/seoulgypsy",
        longitude: 126.9915676,
        latitude: 37.57504419,
      },
      {
        id: "09c1e42a-8e73-4097-af34-f1ff0cd6034e",
        name: "아쉬트리 (Ash Tree Brewery)",
        brewery_type: "brewpub",
        address_1: "22 Achasan-ro 49-gil",
        address_2: "",
        address_3: "",
        city: "Gwangjin-gu",
        state_province: "Seoul",
        postal_code: "05043",
        country: "South Korea",
        phone: "02-6339-4858",
        website_url: "https://www.ashtreebrewery.com/",
        longitude: 127.0323206,
        latitude: 37.49360307,
      },
      {
        id: "930d5e04-4234-4bf4-9d32-ad0d812d1a95",
        name: "아톤브루어리 (Aton Brewery)",
        brewery_type: "brewpub",
        address_1: "23, Jangmun-ro",
        address_2: "",
        address_3: "",
        city: "Yongsan-gu",
        state_province: "Seoul",
        postal_code: "04392",
        country: "South Korea",
        phone: "070-4009-5849",
        website_url: "http://www.instagram.com/aton_brewery",
        longitude: 126.9930459,
        latitude: 37.52846912,
      },
      {
        id: "363c5d1f-99e3-4b8a-afc7-acd4a7c30a1f",
        name: "어메이징브루잉컴퍼니 (Amazing Brewing Company)",
        brewery_type: "brewpub",
        address_1: "4, Seongsuil-ro 4-gil",
        address_2: "",
        address_3: "",
        city: "Seongdong-gu",
        state_province: "Seoul",
        postal_code: "04780",
        country: "South Korea",
        phone: "02-465-5208",
        website_url: "http://www.amazingbrewing.co.kr",
        longitude: 127.0495044,
        latitude: 37.54297518,
      },
      {
        id: "0616a0ff-c23f-4cf3-a4c6-34b7f47f581c",
        name: "에일크루브루잉 (Alecrew Brewing)",
        brewery_type: "brewpub",
        address_1: "87, Moraenae-ro",
        address_2: "",
        address_3: "",
        city: "Mapo-gu",
        state_province: "Seoul",
        postal_code: "03949",
        country: "South Korea",
        phone: "02-304-8663",
        website_url: "https://www.instagram.com/alecrew_brewing",
        longitude: 126.912452,
        latitude: 37.56657473,
      },
      {
        id: "bc6e84e7-5020-4b1a-b81d-ec55683bc92d",
        name: "카브루 (Ka-Brew)",
        brewery_type: "brewpub",
        address_1: "403, Songpa-daero",
        address_2: "",
        address_3: "",
        city: "Songpa-gu",
        state_province: "Seoul",
        postal_code: "05686",
        country: "South Korea",
        phone: "02-3143-4082",
        website_url: "http://www.kabrew.co.kr/",
        longitude: 127.1087119,
        latitude: 37.50309293,
      },
      {
        id: "fd23a3cb-6b21-44d3-b40c-008564f2f4f0",
        name: "크래프트브로스 탭하우스 & 바틀샵 (Craftbros Tap House & Bottle Shop)",
        brewery_type: "brewpub",
        address_1: "18 Sapyeong-daero 22-gil",
        address_2: "",
        address_3: "",
        city: "Seocho-gu",
        state_province: "Seoul",
        postal_code: "06576",
        country: "South Korea",
        phone: "02-537-7451",
        website_url: "http://www.craftbros.co.kr/",
        longitude: 126.9977006,
        latitude: 37.498793,
      },
      {
        id: "64a4f65c-47a9-4d8e-ad2e-3cc898b9689c",
        name: "핸드앤몰트 (Hand and Malt)",
        brewery_type: "brewpub",
        address_1: "19, Hangang-daero 38ga-gil",
        address_2: "",
        address_3: "",
        city: "Yongsan-gu",
        state_province: "Seoul",
        postal_code: "04386",
        country: "South Korea",
        phone: "070-7178-4011",
        website_url: "http://handandmalt.com/",
        longitude: 126.9705831,
        latitude: 37.52985655,
      },
    ],
    busan: [
      {
        id: "438dfe94-c54a-49a1-b611-e514d2f856e1",
        name: "갈매기 브루잉(Galmegi Brewing)",
        brewery_type: "micro",
        address_1: "260, Pyeonggang-ro 171beon-gil",
        address_2: "",
        address_3: "",
        city: "Gangseo-gu",
        state_province: "Busan",
        postal_code: 46704,
        country: "South Korea",
        phone: "051-611-9658",
        website_url: "https://www.galmegibrewing.com/",
        longitude: 128.9441073,
        latitude: 35.20811413,
      },
      {
        id: "3aa64cd7-7e03-4d51-b5f2-f04b6fd4b96f",
        name: "고릴라 브루잉(Gorilla Brewing)",
        brewery_type: "brewpub",
        address_1: "125, Gwangnam-ro",
        address_2: "",
        address_3: "",
        city: "Suyeong-gu",
        state_province: "Busan",
        postal_code: 48299,
        country: "South Korea",
        phone: "070-4837-6258",
        website_url: "http://www.gorilla.beer",
        longitude: 129.1161812,
        latitude: 35.15273431,
      },
      {
        id: "41bf9f06-ce1a-43b2-9e05-af3862488092",
        name: "부산프라이드 브루잉(Busanpride Brewery)",
        brewery_type: "brewpub",
        address_1: "84-2, Dongseo-gil",
        address_2: "",
        address_3: "Gijang-eup",
        city: "Gijang-eup",
        state_province: "Busan",
        postal_code: 46052,
        country: "South Korea",
        phone: "051-723-3213",
        website_url: "http://busanpridebrewery.com/",
        longitude: 129.1990401,
        latitude: 35.25822518,
      },
      {
        id: "32a97b7b-726c-41a2-b019-0f34037c00ee",
        name: "와일드 웨이브(Wild Wave Brewing Co.)",
        brewery_type: "brewpub",
        address_1: "106-1, Songjeongjungang-ro 5beon-gil",
        address_2: "",
        address_3: "",
        city: "Haeundae-gu",
        state_province: "Busan",
        postal_code: 48071,
        country: "South Korea",
        phone: "051-702-0838",
        website_url: "https://www.wildwavebrew.com/",
        longitude: 129.2035339,
        latitude: 35.18781109,
      },
      {
        id: "659c476d-0144-48e3-baf4-d90b2d6c11e6",
        name: "컬러드(Coloredd)",
        brewery_type: "brewpub",
        address_1: "39, Busandaehak-ro 63beon-gil",
        address_2: "",
        address_3: "",
        city: "Geumjeong-gu",
        state_province: "Busan",
        postal_code: 46288,
        country: "South Korea",
        phone: "051-518-3771",
        website_url: "https://www.instagram.com/coloredd_brew/",
        longitude: 129.084145,
        latitude: 35.22989272,
      },
      {
        id: "b41b1c36-6f0d-4afb-9574-0d84f1af12d0",
        name: "테라스포드 브루잉(Tetrapod Brewing)",
        brewery_type: "brewpub",
        address_1: "77, Jungang-daero 680beonga-gil",
        address_2: "",
        address_3: "",
        city: "Busanjin-gu",
        state_province: "Busan",
        postal_code: 47292,
        country: "South Korea",
        phone: "051-791-1002",
        website_url: "https://www.instagram.com/tetrapod_brewing_co/",
        longitude: 129.0609993,
        latitude: 35.15692356,
      },
      {
        id: "d67acf79-8ca9-4932-9b34-d6578d83ffaa",
        name: "툼브로이(Turmbrau)",
        brewery_type: "brewpub",
        address_1: "1244, Haeun-daero",
        address_2: "",
        address_3: "",
        city: "Haeundae-gu",
        state_province: "Busan",
        postal_code: 48069,
        country: "South Korea",
        phone: "050-71342-6297",
        website_url: "https://www.instagram.com/turmbrau_korea/",
        longitude: 129.2059199,
        latitude: 35.19578923,
      },
      {
        id: "8cf1b15f-c546-4c0f-8532-fb8480944275",
        name: "프라하993(993 Praha)",
        brewery_type: "brewpub",
        address_1: "20, Gurak-ro 123beon-gil",
        address_2: "",
        address_3: "",
        city: "Suyeong-gu",
        state_province: "Busan",
        postal_code: 48212,
        country: "South Korea",
        phone: "051-757-2703",
        website_url: "http://praha993.com/",
        longitude: 129.1154295,
        latitude: 35.17760201,
      },
      {
        id: "a9541aa9-5c12-469b-8cbb-01fb5619cefc",
        name: "허심청브루잉(Hursimchung Bru)",
        brewery_type: "brewpub",
        address_1: "23, Geumganggongwon-ro 20beon-gil",
        address_2: "",
        address_3: "",
        city: "Dongnae-gu",
        state_province: "Busan",
        postal_code: 47709,
        country: "South Korea",
        phone: "051-550-2345",
        website_url:
          "https://www.hotelnongshim.com/kr/index.php?pCode=hbrau_info",
        longitude: 129.0826027,
        latitude: 35.21990206,
      },
    ],
    chungcheongbukdo: [
      {
        id: "adbffc2c-c973-441f-85a1-aac0f876f20b",
        name: "블루웨일브루하우스(BlueWhale Brewhouse)",
        brewery_type: "brewpub",
        address_1: "109, Sajik-ro",
        address_2: "",
        address_3: "",
        city: "Chungju-si",
        state_province: "Chungcheongbukdo",
        postal_code: 27410,
        country: "South Korea",
        phone: "043-843-7773",
        website_url: "https://whalebeer.modoo.at/",
        longitude: 127.9248097,
        latitude: 36.96760505,
      },
    ],
    chungcheongnamdo: [
      {
        id: "3a89c7d1-cddb-4036-af38-a95b2b9a08bd",
        name: "바이젠하우스(WeizenHouse)",
        brewery_type: "micro",
        address_1: "125,Seonggok-gil",
        address_2: "Useong-myeon",
        address_3: "",
        city: "Gongju-si",
        state_province: "Chungcheongnamdo",
        postal_code: 32531,
        country: "South Korea",
        phone: "1661-5869",
        website_url: "http://www.weizenhaus.com/",
        longitude: 127.0708877,
        latitude: 36.48886677,
      },
      {
        id: "b38a706c-f137-4c9f-8f9e-4d26332e86a4",
        name: "순성양조장(Sunseong Brewery)",
        brewery_type: "brewpub",
        address_1: "394, Maesil-ro",
        address_2: "Sunseong-myeon",
        address_3: "",
        city: "Dangjin-si",
        state_province: "Chungcheongnamdo",
        postal_code: 31757,
        country: "South Korea",
        phone: "041-354-1204",
        website_url: "https://www.instagram.com/sunseongbrew",
        longitude: 126.7071635,
        latitude: 36.83056542,
      },
      {
        id: "faefcbd2-3178-44c7-9520-de488f8ac4d1",
        name: "칠홉스 브루잉(Chillhops Brewing Co.)",
        brewery_type: "micro",
        address_1: "148-3, Dongseo 1-ro",
        address_2: "",
        address_3: "",
        city: "Seosan-si",
        state_province: "Chungcheongnamdo",
        postal_code: 31999,
        country: "South Korea",
        phone: "010-3022-4997",
        website_url: "https://www.instagram.com/chillhopsbrewingco/",
        longitude: 126.4545751,
        latitude: 36.76696044,
      },
    ],
    daejeon: [
      {
        id: "bbe3d2b7-7c04-413b-82d0-a7bb9428c4d2",
        name: "더랜치 브루잉(The Ranch Brewing)",
        brewery_type: "brewpub",
        address_1: "62, Gyebaek-ro 1249beonan-gil",
        address_2: "",
        address_3: "",
        city: "Seo-gu",
        state_province: "Daejeon",
        postal_code: 35341,
        country: "South Korea",
        phone: "042-581-2060",
        website_url: "http://ranchbrewing.com/landing/",
        longitude: 127.3577529,
        latitude: 36.31151337,
      },
    ],
    daegu: [
      {
        id: "5c68b706-804c-4554-b37e-09732562d708",
        name: "대도양조장(daedo brewing)",
        brewery_type: "brewpub",
        address_1: "47, Dongdeok-ro 14-gil",
        address_2: "",
        address_3: "",
        city: "Jung-gu",
        state_province: "Deagu",
        postal_code: 41951,
        country: "South Korea",
        phone: "0507-1446-2345",
        website_url: "https://www.instagram.com/daedo_brewing",
        longitude: 128.6064699,
        latitude: 35.86077096,
      },
    ],
    gangwondo: [
      {
        id: "200b3434-8f97-4a9d-a072-fcb7379b31d5",
        name: "CRAFTROOT",
        brewery_type: "brewpub",
        address_1: "418,Gwangwang-ro",
        address_2: "",
        address_3: "",
        city: "Sokcho-si",
        state_province: "Gangwondo",
        postal_code: 24859,
        country: "South Korea",
        phone: "070-8872-1001",
        website_url: "https://craftroot.co.kr/",
        longitude: 128.5377122,
        latitude: 38.19724237,
      },
      {
        id: "63fc12a0-bbb7-4bdf-9d14-176bbf70e5d9",
        name: "감자아일랜드(Gamja Island)",
        brewery_type: "brewpub",
        address_1: "163, Sau-ro",
        address_2: "",
        address_3: "",
        city: "Chuncheon-si",
        state_province: "Gangwondo",
        postal_code: 24220,
        country: "South Korea",
        phone: "070-8098-0621",
        website_url: "http://gamjaisland.com/",
        longitude: 127.742945,
        latitude: 37.90739745,
      },
      {
        id: "2068d17b-bcaa-4423-a892-73f521bd1ee7",
        name: "강릉브루어리 바이 현 (Gangneung_Brewery)",
        brewery_type: "brewpub",
        address_1: "9,Yulgokchogyo-gil 11beon-gil",
        address_2: "",
        address_3: "",
        city: "Gangneung-si",
        state_province: "Gangwondo",
        postal_code: 25510,
        country: "South Korea",
        phone: "033-655-1357",
        website_url: "http://instagram.com/gangneung_brewery",
        longitude: 128.8797275,
        latitude: 37.76757831,
      },
      {
        id: "55a5f03f-e3fa-4aed-8226-1acce1b71cf3",
        name: "버드나무 브루어리(Budnamu Brewery)",
        brewery_type: "brewpub",
        address_1: "1961,Gyeonggang-ro",
        address_2: "",
        address_3: "",
        city: "Gangneung-si",
        state_province: "Gangwondo",
        postal_code: 25537,
        country: "South Korea",
        phone: "033-920-9380",
        website_url: "https://www.instagram.com/budnamu_brewery/",
        longitude: 128.8843981,
        latitude: 37.74812404,
      },
      {
        id: "2abf3e94-2824-4c4a-999d-bd4f475bf553",
        name: "스퀴즈브루어리(Squeeze Brewery)",
        brewery_type: "brewpub",
        address_1: "353, Gongji-ro",
        address_2: "",
        address_3: "",
        city: "Chuncheon-si",
        state_province: "Gangwondo",
        postal_code: 24365,
        country: "South Korea",
        phone: "033-818-1663",
        website_url: "http://squeezebrewery.com/",
        longitude: 127.7270367,
        latitude: 37.86982853,
      },
      {
        id: "e706c6ba-82d4-4099-adb8-83054ae146ed",
        name: "아리랑 브루어리(Alilang-Brewery)",
        brewery_type: "brewpub",
        address_1: "26-55, Yemi 2-gil",
        address_2: "Sindong-eup",
        address_3: "",
        city: "Jeongseon-gun",
        state_province: "Gangwondo",
        postal_code: 26142,
        country: "South Korea",
        phone: "033-378-7177",
        website_url: "http://www.xn--9i2blz0qc217czqmswa.com/",
        longitude: 128.6513589,
        latitude: 37.21507529,
      },
      {
        id: "a1308963-b966-49f7-8f84-97ba37775d14",
        name: "화이트크로우 브루잉(Whitecrow Brewing)",
        brewery_type: "brewpub",
        address_1: "65,Gowon-ro",
        address_2: "Bangnim-myeon",
        address_3: "",
        city: "Pyeongchang-gun",
        state_province: "Gangwondo",
        postal_code: 25364,
        country: "South Korea",
        phone: "033-333-1201",
        website_url: "https://www.instagram.com/whitecrowbrewing/",
        longitude: 128.2515424,
        latitude: 37.47598351,
      },
    ],
    gwangju: [
      {
        id: "4065feb7-008b-4010-bc89-9220d39ab2af",
        name: "비아브루어리(Via Brewery)",
        brewery_type: "brewpub",
        address_1: "47, Imbangul-daero 826beon-gil",
        address_2: "",
        address_3: "",
        city: "Gwangsan-gu",
        state_province: "Gwangju",
        postal_code: 62279,
        country: "South Korea",
        phone: "070-4126-4110",
        website_url: "https://www.instagram.com/via_pub/",
        longitude: 126.8492063,
        latitude: 35.21530647,
      },
    ],
    gyeonggido: [
      {
        id: "4c43ba95-1293-4ce5-9910-65976e0ef297",
        name: "굿맨 브루어리(Goodman Brewery)",
        brewery_type: "brewpub",
        address_1: "46-4, Donggureung-ro 389beon-gil",
        address_2: "",
        address_3: "",
        city: "Guri-si",
        state_province: "Gyeonggido",
        postal_code: 11905,
        country: "South Korea",
        phone: "031-572-6376",
        website_url: "http://goodmanbrewery.co.kr/",
        longitude: 127.1395861,
        latitude: 37.63278304,
      },
      {
        id: "a755275d-e8a5-47ea-aecb-9bf2a7449613",
        name: "동두천 브루어리(Dongducheon Brewery)",
        brewery_type: "brewpub",
        address_1: "293, Jungang-ro",
        address_2: "",
        address_3: "",
        city: "Dongducheon-si",
        state_province: "Gyeonggido",
        postal_code: 11328,
        country: "South Korea",
        phone: "031-827-1635",
        website_url: "https://www.instagram.com/dongducheon_brewery/",
        longitude: 127.0544792,
        latitude: 37.90778029,
      },
      {
        id: "419822d1-2c04-4a47-adc3-e17747e7bdb7",
        name: "매직트리 브루어리(Magictree Brewery)",
        brewery_type: "brewpub",
        address_1: "39, Baengnyeong-ro",
        address_2: "Cheoin-gu",
        address_3: "",
        city: "Yongin-si",
        state_province: "Gyeonggido",
        postal_code: 17042,
        country: "South Korea",
        phone: "031-338-2337",
        website_url: "https://magictreebrewery.com/",
        longitude: 127.1922904,
        latitude: 37.26293486,
      },
      {
        id: "37ce8020-c9d0-421c-a255-381f946a2a82",
        name: "바네하임 브루어리(Vaneheim Brewery)",
        brewery_type: "micro",
        address_1: "65-1, Naegak 1-ro 73beon-gil",
        address_2: "Jinjeop-eup",
        address_3: "",
        city: "Namyangju-si",
        state_province: "Gyeonggido",
        postal_code: 12071,
        country: "South Korea",
        phone: "031-529-8003",
        website_url: "http://vaneheimbeer.com/",
        longitude: 127.1616309,
        latitude: 37.70915976,
      },
      {
        id: "cfa85b4b-30b6-4775-8e83-33339b8f877f",
        name: "에잇피플브루어리(Eight People Brewery)",
        brewery_type: "brewpub",
        address_1: "3, Jaejaegi-ro 190beonan-gil",
        address_2: "Hwado-eup",
        address_3: "",
        city: "Namyangju-si",
        state_province: "Gyeonggido",
        postal_code: 12200,
        country: "South Korea",
        phone: "031-595-5589",
        website_url: "https://www.facebook.com/eightpeoplebrew/",
        longitude: 127.3033051,
        latitude: 37.61749196,
      },
      {
        id: "9f991b54-eff1-4126-9cc2-b03bfdf9e0ce",
        name: "크래머리 브루어리(Kraemerlee Brewery)",
        brewery_type: "brewpub",
        address_1: "429, Cheonggun-ro",
        address_2: "Sang-myeon",
        address_3: "",
        city: "Gapyeong-gun",
        state_province: "Gyeonggido",
        postal_code: 12446,
        country: "South Korea",
        phone: "031-585-5977",
        website_url: "https://www.instagram.com/kraemerlee/",
        longitude: 127.3943665,
        latitude: 37.7603212,
      },
      {
        id: "2056bc4b-2844-4128-a406-fca7a1dca89b",
        name: "펜더멘탈 브루어리(Fundamental Brewing Co.)",
        brewery_type: "brewpub",
        address_1: "61, Maeyeong-ro 269beon-gil",
        address_2: "Yeongtong-gu",
        address_3: "",
        city: "Suwon-si",
        state_province: "Gyeonggido",
        postal_code: 16523,
        country: "South Korea",
        phone: "050-71319-7808",
        website_url: "https://www.instagram.com/fundamental_brewing_co/",
        longitude: 127.0677246,
        latitude: 37.25978047,
      },
      {
        id: "57a70f5c-a995-4be1-949c-99244450940f",
        name: "플레이그라운드 브루어리(playground Brewery)",
        brewery_type: "brewpub",
        address_1: "246-13, Isanpo-gil",
        address_2: "Ilsanseo-gu",
        address_3: "",
        city: "Goyang-si",
        state_province: "Gyeonggido",
        postal_code: 10203,
        country: "South Korea",
        phone: "031-912-2463",
        website_url: "https://www.playgroundbrewery.com/",
        longitude: 126.7020113,
        latitude: 37.66779467,
      },
      {
        id: "6f317bdc-458e-466f-bd2a-9ab398d46631",
        name: "헤이스탁 브루어리(Haystack Brewery)",
        brewery_type: "brewpub",
        address_1: "25, Pangyogongwon-ro 3-gil",
        address_2: "Bundang-gu",
        address_3: "",
        city: "Seongnam-si",
        state_province: "Gyeonggido",
        postal_code: 13477,
        country: "South Korea",
        phone: "070-7631-1110",
        website_url: "",
        longitude: 127.0890607,
        latitude: 37.39125615,
      },
    ],
    gyeongsangbukdo: [
      {
        id: "e7d32af9-f5c5-469a-9cd7-b97097d6640d",
        name: "가나다라브루어리(Ganadara Brewing)",
        brewery_type: "brewpub",
        address_1: "625-1, Mungyeong-daero",
        address_2: "",
        address_3: "",
        city: "Mungyeong-si",
        state_province: "Gyeongsangbukdo",
        postal_code: 36989,
        country: "South Korea",
        phone: "070-7799-2428",
        website_url: "http://www.ganadara.co.kr",
        longitude: 128.1563317,
        latitude: 36.61483553,
      },
      {
        id: "aad01f28-c9ad-4b8a-b3f4-90fe07485602",
        name: "안동가옥(Andong House)",
        brewery_type: "brewpub",
        address_1: "16-7, Munhwagwangjang-gil",
        address_2: "",
        address_3: "",
        city: "Andong-si",
        state_province: "Gyeongsangbukdo",
        postal_code: 36700,
        country: "South Korea",
        phone: "054-901-5550",
        website_url: "http://instagram.com/andongbeer.pub",
        longitude: 128.7307751,
        latitude: 36.56384588,
      },
      {
        id: "99fdc1ac-a3ae-4754-8467-ed70f03c9048",
        name: "안동브루어리(Andong Brewing Co.)",
        brewery_type: "micro",
        address_1: "98, Goejeong 2-gil,",
        address_2: "Pungsan-eup",
        address_3: "",
        city: "Andong-si",
        state_province: "Gyeongsangbukdo",
        postal_code: 36619,
        country: "South Korea",
        phone: "054-852-9602",
        website_url: "https://www.instagram.com/andongbrewing/",
        longitude: 128.5337984,
        latitude: 36.60338246,
      },
    ],
    gyeongsangnamdo: [
      {
        id: "71a7d2ab-a710-4c5e-923f-1e08161b659e",
        name: "라미브루잉(Rami Brewing)",
        brewery_type: "brewpub",
        address_1: "177, Samgwi-ro",
        address_2: "Seongsan-gu",
        address_3: "",
        city: "Changwon-si",
        state_province: "Gyeongsangnamdo",
        postal_code: 51705,
        country: "South Korea",
        phone: "055-266-2881",
        website_url: "http://instagram.com/ramibrewing",
        longitude: 128.5981608,
        latitude: 35.16977871,
      },
      {
        id: "9889fc71-4552-4291-8bc4-badc5ce30033",
        name: "라인도이치(Reindeutsch Brewery)",
        brewery_type: "brewpub",
        address_1: "103, Miujihaean-ro",
        address_2: "",
        address_3: "",
        city: "Tongyeong-si",
        state_province: "Gyeongsangnamdo",
        postal_code: 53069,
        country: "South Korea",
        phone: "055-643-7758",
        website_url: "http://www.reindeutsch.com",
        longitude: 128.3962616,
        latitude: 34.82563356,
      },
      {
        id: "1ca23f38-8691-4f9f-93e8-4d3f6c777f92",
        name: "완벽한인생(Perfectlife Brewery)",
        brewery_type: "brewpub",
        address_1: "30, Dogil-ro",
        address_2: "Samdong-myeon",
        address_3: "",
        city: "Namhae-gun",
        state_province: "Gyeongsangnamdo",
        postal_code: 52447,
        country: "South Korea",
        phone: "055-867-0108",
        website_url: "http://www.instagram.com/perfectlife.official",
        longitude: 128.0435747,
        latitude: 34.79733881,
      },
    ],
    incheon: [
      {
        id: "1b8e9bf0-27a4-4943-a268-d5ba4a6cd93d",
        name: "엑스트라스몰브루잉룸(XSBREWING-ROOM)",
        brewery_type: "brewpub",
        address_1: "19, Cheongmyeong-ro",
        address_2: "",
        address_3: "",
        city: "Yeonsu-gu",
        state_province: "Incheon",
        postal_code: 21917,
        country: "South Korea",
        phone: "",
        website_url: "https://www.instagram.com/xs.brewing.rm/",
        longitude: 126.6752048,
        latitude: 37.41755734,
      },
      {
        id: "696350cb-1ab1-4b6e-850e-478e839c7372",
        name: "인천맥주(incheon_brewery)",
        brewery_type: "brewpub",
        address_1: "41, Sinpo-ro 15beon-gil",
        address_2: "",
        address_3: "",
        city: "Jung-gu",
        state_province: "Incheon",
        postal_code: 22314,
        country: "South Korea",
        phone: "070-7722-0705",
        website_url: "https://www.instagram.com/incheon_brewery",
        longitude: 126.6222289,
        latitude: 37.47157834,
      },
    ],
    jejudo: [
      {
        id: "b8c16e2e-ca1a-4e17-869c-a51995c898c8",
        name: "고브루(Gobrew)",
        brewery_type: "brewpub",
        address_1: "171, Namseongjung-ro",
        address_2: "",
        address_3: "",
        city: "Seogwipo-si",
        state_province: "Jejudo",
        postal_code: 63594,
        country: "South Korea",
        phone: "064-733-5747",
        website_url: "http://www.instagram.com/gobrew_jeju",
        longitude: 126.5525325,
        latitude: 33.24705985,
      },
      {
        id: "df058920-2603-47b9-9c61-b524fde39f7b",
        name: "맥파이 브루어리(Magpie Brewing Co.)",
        brewery_type: "brewpub",
        address_1: "23, Donghoecheon 1-gil",
        address_2: "",
        address_3: "",
        city: "Jeju-si",
        state_province: "Jejudo",
        postal_code: 63329,
        country: "South Korea",
        phone: "064-721-0227",
        website_url: "http://www.magpiebrewing.com/",
        longitude: 126.617303,
        latitude: 33.50290817,
      },
      {
        id: "9ca48b41-3962-4c18-a8be-a95bf73fa2cb",
        name: "제주약수터(Jejubeerfountain)",
        brewery_type: "brewpub",
        address_1: "35, Jungang-ro",
        address_2: "",
        address_3: "",
        city: "Seogwipo-si",
        state_province: "Jejudo",
        postal_code: 63592,
        country: "South Korea",
        phone: "064-805-6572",
        website_url: "http://www.instagram.com/jeju_beer_fountain",
        longitude: 126.5617044,
        latitude: 33.24773328,
      },
    ],
    jeollabukdo: [
      {
        id: "90d1fa86-77d7-4a21-9818-e338fa6fdb96",
        name: "583 양조장(583 Brewery)",
        brewery_type: "brewpub",
        address_1: "583-8, Uiam-ro",
        address_2: "Janggye-myeon",
        address_3: "",
        city: "Jangsu-gun",
        state_province: "Jeollabukdo",
        postal_code: 55621,
        country: "South Korea",
        phone: "063-353-5515",
        website_url: "http://www.583beer.modoo.at",
        longitude: 127.6205123,
        latitude: 35.68271721,
      },
      {
        id: "94afa064-fd4d-422e-8490-b87eeeb22b5a",
        name: "노매딕 브루잉 컴퍼니(Nomadic Brewing Co.)",
        brewery_type: "brewpub",
        address_1: "12-10, Jeollagamyeong 3-gil",
        address_2: "Wansan-gu",
        address_3: "",
        city: "Jeonju-si",
        state_province: "Jeollabukdo",
        postal_code: 55038,
        country: "South Korea",
        phone: "063-902-3924",
        website_url: "http://instagram.com/nomadicbrewingco",
        longitude: 127.1437952,
        latitude: 35.81642148,
      },
      {
        id: "c5c523b9-d8f4-402e-baee-c95cbc65ee21",
        name: "파머스브루어리(Farmers Brewery)",
        brewery_type: "brewpub",
        address_1: "15, Jeonjugaeksa 1-gil",
        address_2: "Wansan-gu",
        address_3: "",
        city: "Jeonju-si",
        state_province: "Jeollabukdo",
        postal_code: 54999,
        country: "South Korea",
        phone: "070-8803-3915",
        website_url: "http://www.gdcbeer.co.kr/new/",
        longitude: 127.140034,
        latitude: 35.81724263,
      },
    ],
    jeollanamdo: [
      {
        id: "b5c4192b-902c-4073-ab22-128e7833ae17",
        name: "순천양조장(Suncheon Brewery)",
        brewery_type: "brewpub",
        address_1: "57, Yeokjeon-gil",
        address_2: "",
        address_3: "",
        city: "Suncheon-si",
        state_province: "Jeollanamdo",
        postal_code: 57964,
        country: "South Korea",
        phone: "061-745-2545",
        website_url: "https://www.instagram.com/suncheon_brewery/",
        longitude: 127.4987434,
        latitude: 34.94739604,
      },
    ],
  };
  for (const city in breweriesByCity) {
    const breweries: Brewery[] = breweriesByCity[city];
    allBreweries.push(...breweries);
  }

  return allBreweries;
};

// export async function updateBreweriesData(): Promise<void> {
//   const lastUpdateTimestamp = getLastUpdateTimestamp(); // 마지막 업데이트 시간 구하기, 이 함수는 별도로 구현해야 함.

//   const updatedBreweries: Brewery[] = await getUpdatedBreweries(
//     lastUpdateTimestamp
//   );

//   // 변경된 데이터를 메모리에 있는 데이터와 합치기
//   for (const updatedBrewery of updatedBreweries) {
//     const index = allBreweries.findIndex(
//       (brewery) => brewery.id === updatedBrewery.id
//     );

//     if (index >= 0) {
//       allBreweries[index] = updatedBrewery; // 기존 브루어리 정보 업데이트
//     } else {
//       allBreweries.push(updatedBrewery); // 새로운 브루어리 정보 추가
//     }
//   }

//   // 마지막 업데이트 시간 갱신
//   setLastUpdateTimestamp();
// }

// const getLastUpdateTimestamp = () => {};
// const setLastUpdateTimestamp = () => {};
// const getUpdatedBreweries = (lastUpdateTimestamp) => [];
