interface OfficeHour {
  openTime: string | null;
  closeTime: string | null;
  breakTime?: { startTime: string; endTime: string };
  lastOrder?: string;
}

export default interface OfficeHours {
  일: OfficeHour;
  월: OfficeHour;
  화: OfficeHour;
  수: OfficeHour;
  목: OfficeHour;
  금: OfficeHour;
  토: OfficeHour;
}
