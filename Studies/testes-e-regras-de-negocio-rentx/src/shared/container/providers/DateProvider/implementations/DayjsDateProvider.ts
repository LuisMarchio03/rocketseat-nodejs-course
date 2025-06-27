import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(start_data: Date, end_date: Date): number {
    const end_date_utc = this.convertToUtc(end_date);
    const start_data_utc = this.convertToUtc(start_data);
    return dayjs(end_date_utc).diff(start_data_utc, "hours");
  }

  convertToUtc(data: Date): string {
    return dayjs(data).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }
}

export { DayjsDateProvider };
