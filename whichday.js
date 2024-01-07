const holidays = [
    { name: "New Year's Day", date: "2024-01-01" },
    { name: "Epiphany (only for Baden-Württemberg, Bavaria, Saxony-Anhalt)", date: "2024-01-06" },
    { name: "International Women’s Day (only for Berlin, Mecklenburg-West Pomerania)", date: "2024-03-08" },
    { name: "Good Friday", date: "2024-03-29" },
    { name: "Easter Monday", date: "2024-04-01" },
    { name: "Labour Day", date: "2024-05-01" },
    { name: "Ascension Day", date: "2024-05-09" },
    { name: "Whit Monday", date: "2024-05-20" },
    { name: "Corpus Christi (only for Baden-Württemberg, Bavaria, Hesse, North Rhine-Westphalia, Rhineland-Palatinate, Saarland, some local authorities in Saxony and Thuringia) ", date: "2024-05-30" },
    { name: "Assumption Day (only for Saarland and some local authorities in Bavaria)", date: "2024-08-15" },
    { name: "World Children’s Day (only for Thuringia) ", date: "2024-09-20" },
    { name: "Day of German Unity", date: "2024-10-03" },
    { name: "Reformation Day (only for Brandenburg, Bremen, Hamburg, Lower Saxony, Mecklenburg-Western Pomerania, Saxony, Saxony-Anhalt, Schleswig-Holstein, Thuringia) ", date: "2024-10-31" },
    { name: "All Saints’ Day (only for Baden-Württemberg, Bavaria, North Rhine-Westphalia, Rhineland-Palatinate, Saarland and parts of Thuringia) ", date: "2024-11-01" },
    { name: "Day of Prayer and Repentance (only for Saxony)", date: "2024-11-20" },
    { name: "Christmas Day", date: "2024-12-25" },
    { name: "Boxing Day", date: "2024-12-26" }
];

function isHoliday(date) {
    return holidays.some(holiday => holiday.date === date);
}

function findNextHoliday() {
    const today = new Date();
    let nextHoliday = holidays.find(holiday => new Date(holiday.date) > today);
    return nextHoliday;
}

function updateContent() {
    const today = new Date();
    const currentDayElement = document.getElementById("currentDay");
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    currentDayElement.textContent = today.toLocaleDateString('en-US', options);

    const holidayStatusElement = document.getElementById("holidayStatus");
    const isTodayHoliday = isHoliday(today.toISOString().split('T')[0]);
    holidayStatusElement.textContent = isTodayHoliday ? "It's a holiday 😃" : "It's not a holiday 🙁";

    const nextHolidayNameElement = document.getElementById("nextHolidayName");
    const nextHolidayDateElement = document.getElementById("nextHolidayDate");

    const nextHoliday = findNextHoliday();
    const formatedNextHoliday = new Date(nextHoliday.date);

    options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      };

    if (nextHoliday) {
        nextHolidayNameElement.textContent = nextHoliday.name;
        nextHolidayDateElement.textContent = formatedNextHoliday.toLocaleDateString('en-US', options);
    } else {
        nextHolidayNameElement.textContent = "No upcoming holidays";
        nextHolidayDateElement.textContent = "";
    }
}

window.onload = updateContent;