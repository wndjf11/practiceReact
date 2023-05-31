{
  /**
   * Enum
   */
  // JavaScrip
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
  const dayOfToday: number = DAYS_ENUM.MONDAY;

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednsday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  enum DAYS {
    Monday,
    Tuesday,
    Wednsday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  // enum DAYS {
  //   Monday = "monday",
  //   Tuesday = "tuesday",
  //   Wednsday = "wednsday",
  //   Thursday = "thursday",
  //   Friday = "friday",
  //   Saturday = "saturday",
  //   Sunday = "sunday",
  // }
  console.log(DAYS.Tuesday);
  let day: DAYS = DAYS.Saturday;
  day = DAYS.Tuesday;
  console.log(day);
  let dayOfweek: DaysOfWeek = 'Monday';
  // dayOfweek = 'chance';


}