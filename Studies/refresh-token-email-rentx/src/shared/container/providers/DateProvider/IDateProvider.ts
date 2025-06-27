export interface IDateProvider {
  compareInHours(start_data: Date, end_date: Date): number;
  convertToUtc(data: Date): string;
  dateNow(): Date;
  compareInDays(start_data: Date, end_date: Date): number;
  addDays(days: number): Date;
}
