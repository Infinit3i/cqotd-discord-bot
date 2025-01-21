const { DateTime } = require("luxon");

// Function to calculate holidays based on day-of-week rules
function calculateHolidayDate(month, week, dayOfWeek) {
  const firstDayOfMonth = DateTime.now().set({ month, day: 1 });
  let day = firstDayOfMonth.startOf("month").plus({ days: (week - 1) * 7 });
  while (day.weekday !== dayOfWeek) {
    day = day.plus({ days: 1 });
  }
  return day; // Return the DateTime object
}

// Holiday definitions with calculated dates
const holidays = [
  { name: "New Year's Day", date: "01-01" },
  { 
    name: "Martin Luther King Jr. Day", 
    date: calculateHolidayDate(1, 3, 1).toFormat("MM-dd") // Third Monday in January
  },
  { 
    name: "Presidents' Day", 
    date: calculateHolidayDate(2, 3, 1).toFormat("MM-dd") // Third Monday in February
  },
  { 
    name: "Memorial Day", 
    date: calculateHolidayDate(5, 5, 1).plus({ days: -7 }).toFormat("MM-dd") // Last Monday in May
  },
  { name: "Independence Day", date: "07-04" },
  { 
    name: "Labor Day", 
    date: calculateHolidayDate(9, 1, 1).toFormat("MM-dd") // First Monday in September
  },
  { 
    name: "Columbus Day", 
    date: calculateHolidayDate(10, 2, 1).toFormat("MM-dd") // Second Monday in October
  },
  { name: "Veterans Day", date: "11-11" },
  { 
    name: "Thanksgiving", 
    date: calculateHolidayDate(11, 4, 4).toFormat("MM-dd") // Fourth Thursday in November
  },
  { name: "Christmas Day", date: "12-25" },
];

function getTodayHoliday() {
  const today = DateTime.now().toFormat("MM-dd");
  return holidays.find((holiday) => holiday.date === today);
}

async function celebrateHoliday(client) {
  const holiday = getTodayHoliday();
  if (holiday) {
    const announcementChannelId = process.env.HOLIDAY_ANNOUNCEMENT_CHANNEL;
    const channel = client.channels.cache.get(announcementChannelId);

    if (channel) {
      await channel.send(`🎉 Happy ${holiday.name}! 🥳`);
      console.log(`Holiday celebrated: ${holiday.name}`);
    } else {
      console.error("Holiday announcement channel not found.");
    }
  } else {
    console.log("No holiday today.");
  }
}

module.exports = { celebrateHoliday };
