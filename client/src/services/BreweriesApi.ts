// src/services/BreweriesApi.ts
import IBrewery from "@/types/Brewery";
import axios, { AxiosResponse } from "axios";

class BreweriesApi {
  private baseUrl: string;
  private stubBreweries: IBrewery[];

  constructor() {
    this.baseUrl = "http://localhost:3008";
    this.stubBreweries = [
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
      {
        id: "438dfe94-c54a-49a1-b611-e514d2f856e1",
        name: "갈매기 브루잉(Galmegi Brewing)",
        brewery_type: "micro",
        address_1: "260, Pyeonggang-ro 171beon-gil",
        address_2: "",
        address_3: "",
        city: "Gangseo-gu",
        state_province: "Busan",
        postal_code: "46704",
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
        postal_code: "48299",
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
        postal_code: "46052",
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
        postal_code: "48071",
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
        postal_code: "46288",
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
        postal_code: "47292",
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
        postal_code: "48069",
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
        postal_code: "48212",
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
        postal_code: "47709",
        country: "South Korea",
        phone: "051-550-2345",
        website_url:
          "https://www.hotelnongshim.com/kr/index.php?pCode=hbrau_info",
        longitude: 129.0826027,
        latitude: 35.21990206,
      },
      {
        id: "adbffc2c-c973-441f-85a1-aac0f876f20b",
        name: "블루웨일브루하우스(BlueWhale Brewhouse)",
        brewery_type: "brewpub",
        address_1: "109, Sajik-ro",
        address_2: "",
        address_3: "",
        city: "Chungju-si",
        state_province: "Chungcheongbukdo",
        postal_code: "27410",
        country: "South Korea",
        phone: "043-843-7773",
        website_url: "https://whalebeer.modoo.at/",
        longitude: 127.9248097,
        latitude: 36.96760505,
      },
      {
        id: "3a89c7d1-cddb-4036-af38-a95b2b9a08bd",
        name: "바이젠하우스(WeizenHouse)",
        brewery_type: "micro",
        address_1: "125,Seonggok-gil",
        address_2: "Useong-myeon",
        address_3: "",
        city: "Gongju-si",
        state_province: "Chungcheongnamdo",
        postal_code: "32531",
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
        postal_code: "31757",
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
        postal_code: "31999",
        country: "South Korea",
        phone: "010-3022-4997",
        website_url: "https://www.instagram.com/chillhopsbrewingco/",
        longitude: 126.4545751,
        latitude: 36.76696044,
      },
    ];
  }

  async fetchBreweriesByInputValue(query: string): Promise<IBrewery[]> {
    return this.stubBreweries.filter((brewery: IBrewery) => {
      return (
        brewery.name.includes(query) ||
        brewery.city.includes(query) ||
        brewery.state_province.includes(query)
      );
    });
  }
  async fetchBreweryById(breweryId: string): Promise<IBrewery | null> {
    const brewery = this.stubBreweries.find(
      (brewery: IBrewery) => brewery.id === breweryId
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
