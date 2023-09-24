const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const meetingTypes = ["Team meeting", "client Meeting", "Proect Review", "Presenattion", "Brainstorming Session"];

const meetingReminders = ["Don't forget to send the agenda in advance to sir Qaiser!", "Send skype message to sir shahid to prepare the meeting room.", "Confirm the attendees and their availability in zoom session.", "Review the GameTrain meeting objectives.", "Set clear action items for maximum productivity."];

function generateRandomMeetingMessage() {
    const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
    const randomMeetingType = meetingTypes[Math.floor(Math.random() * meetingTypes.length)];
    const randomReminder = meetingReminders[Math.floor(Math.random() * meetingReminders.length)];
    const message = `Meeting-Type: ${randomMeetingType} \n Meeting-Date: ${randomDay} \n Make-sure-before-meeting: ${randomReminder}`;
    console.log(message);
}

generateRandomMeetingMessage();


