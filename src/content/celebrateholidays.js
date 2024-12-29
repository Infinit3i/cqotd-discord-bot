const { DateTime } = require("luxon");

const holidays = [
  { name: "New Year's Day", date: "01-01" },
  { name: "Martin Luther King Jr. Day", date: "01-16" },
  { name: "Presidents' Day", date: "02-20" },
  { name: "Memorial Day", date: "05-29" },
  { name: "Independence Day", date: "07-04" },
  { name: "Labor Day", date: "09-04" },
  { name: "Columbus Day", date: "10-09" },
  { name: "Veterans Day", date: "11-11" },
  { name: "Thanksgiving", date: "11-23" },
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
