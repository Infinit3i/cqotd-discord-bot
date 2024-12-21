let eventLogQuestions = [
  {
    category: "Windows Event Logs",
    question:
      "Which Windows event log ID indicates a successful account logon?",
    answer: "4624",
    hint: "It's in the 4600 series, used for logon events.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4624>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID indicates an account logoff?",
    answer: "4634",
    hint: "It's in the same 4600 series as logon events.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4634>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks a failed logon attempt?",
    answer: "4625",
    hint: "It's right after the successful logon event ID.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4625>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID indicates a user account being created?",
    answer: "4720",
    hint: "It's in the 4700 series related to account management.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4720>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID indicates a user account being deleted?",
    answer: "4726",
    hint: "It's in the 4700 series and involves account removal.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4726>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks a user account being locked out?",
    answer: "4740",
    hint: "This event relates to failed logins causing lockouts.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4740>",
  },
  {
    category: "Windows Event Logs",
    question:
      "What event log ID indicates a new logon session has been created?",
    answer: "4648",
    hint: "It's used when explicit credentials are provided.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4648>",
  },
  {
    category: "Windows Event Logs",
    question:
      "What event log ID indicates privilege escalation via a new process?",
    answer: "4672",
    hint: "Used for special privileges assigned during logon.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4672>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID records a process being created?",
    answer: "4688",
    hint: "A key event for tracking process creation.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4688>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID indicates a process termination?",
    answer: "4689",
    hint: "It's one number higher than process creation.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4689>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks changes to audit policies?",
    answer: "4719",
    hint: "This event monitors changes to audit configurations.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4719>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID indicates a service was installed?",
    answer: "4697",
    hint: "Used for new service installation events.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4697>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID indicates a network connection was created?",
    answer: "5156",
    hint: "It's in the 5100 series related to firewall events.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=5156>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks network connection termination?",
    answer: "5158",
    hint: "A firewall event in the 5100 range.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=5158>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID indicates a scheduled task creation?",
    answer: "4698",
    hint: "Monitors when a new task is registered.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4698>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks scheduled task deletion?",
    answer: "4699",
    hint: "Follows the creation ID, related to task deletion.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4699>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks modifications to a scheduled task?",
    answer: "4702",
    hint: "Tracks updates to existing tasks.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4702>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks a file being accessed on the system?",
    answer: "4663",
    hint: "Used for file access tracking.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4663>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID records changes to user group membership?",
    answer: "4728",
    hint: "A 4700 series event related to group membership.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4728>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID indicates a system restart?",
    answer: "6008",
    hint: "Tracks unexpected shutdowns or restarts.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=6008>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID tracks user password changes?",
    answer: "4723",
    hint: "Account management in the 4700 range.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4723>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID indicates a user password reset?",
    answer: "4724",
    hint: "Similar to password change but by another user.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4724>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID records changes to local group memberships?",
    answer: "4732",
    hint: "Involves modifications to local groups.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4732>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID monitors privilege use attempts?",
    answer: "4673",
    hint: "Tracks sensitive privilege usage.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4673>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks the clearing of security logs?",
    answer: "1102",
    hint: "Occurs when the security log is cleared.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=1102>",
  },
  {
    category: "Windows Event Logs",
    question: "What event log ID is associated with system time changes?",
    answer: "4616",
    hint: "Tracks manual or automatic clock changes.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4616>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID tracks registry key changes?",
    answer: "4657",
    hint: "Monitors modifications to the registry.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4657>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID indicates a policy change in audit settings?",
    answer: "4902",
    hint: "A 4900-series event for audit settings.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4902>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID monitors removable storage device access?",
    answer: "4660",
    hint: "Tracks deletion attempts or access to removable devices.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4660>",
  },
  {
    category: "Windows Event Logs",
    question: "Which event log ID records changes to system audit policy?",
    answer: "4715",
    hint: "Used for audit policy modifications.",
    blank: "xxxx",
    review:
      "<https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4715>",
  },
];

module.exports = {
  category: "Event Logs",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * eventLogQuestions.length);
    return eventLogQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return eventLogQuestions;
  },
};
