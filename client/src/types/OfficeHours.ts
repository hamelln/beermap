interface IOfficeHour {
  openTime: string | null;
  closeTime: string | null;
  breakTime?: { startTime: string; endTime: string };
  lastOrder?: string;
}

export default interface IOfficeHours {
  일: IOfficeHour;
  월: IOfficeHour;
  화: IOfficeHour;
  수: IOfficeHour;
  목: IOfficeHour;
  금: IOfficeHour;
  토: IOfficeHour;
}
