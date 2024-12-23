let powershellQuestions = [
  {
    category: "PowerShell Commands",
    question: "What command displays all running processes?",
    answer: "Get-Process",
    hint: "Retrieves information about processes.",
    blank: "XXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process",
  },
  {
    category: "PowerShell Commands",
    question: "What command lists all services on the system?",
    answer: "Get-Service",
    hint: "Used to display service details.",
    blank: "XXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-service",
  },
  {
    category: "PowerShell Commands",
    question: "What command creates a new directory?",
    answer: "New-Item -ItemType Directory",
    hint: "Used for creating items.",
    blank: "XXX-XXXX -XXXXXXXX XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-item",
  },
  {
    category: "PowerShell Commands",
    question: "What command changes the current working directory?",
    answer: "Set-Location",
    hint: "Modifies the current location.",
    blank: "XXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location",
  },
  {
    category: "PowerShell Commands",
    question:
      "What command lists files and directories in the current directory?",
    answer: "Get-ChildItem",
    hint: "Fetches child items of a directory.",
    blank: "XXX-XXXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem",
  },
  {
    category: "PowerShell Commands",
    question: "What command retrieves the current date and time?",
    answer: "Get-Date",
    hint: "Shows the system date and time.",
    blank: "XXX-XXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-date",
  },
  {
    category: "PowerShell Commands",
    question: "What command stops a specific service?",
    answer: "Stop-Service",
    hint: "Terminates a running service.",
    blank: "XXXX-XXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-service",
  },
  {
    category: "PowerShell Commands",
    question: "What command starts a specific service?",
    answer: "Start-Service",
    hint: "Initiates a stopped service.",
    blank: "XXXXX-XXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-service",
  },
  {
    category: "PowerShell Commands",
    question: "What command fetches network adapter information?",
    answer: "Get-NetAdapter",
    hint: "Retrieves network adapter details.",
    blank: "XXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/netadapter/get-netadapter",
  },
  {
    category: "PowerShell Commands",
    question: "What command displays environment variables?",
    answer: "Get-ChildItem Env:",
    hint: "Env:\\ refers to environment variables.",
    blank: "XXX-XXXXXXXX XXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/scripting/samples/working-with-environment-variables",
  },
  {
    category: "PowerShell Commands",
    question: "What command removes a specific item?",
    answer: "Remove-Item",
    hint: "Used to delete files or directories.",
    blank: "XXXXXX-XXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item",
  },
  {
    category: "PowerShell Commands",
    question: "What command creates a new variable?",
    answer: "$VariableName = Value",
    hint: "Uses the dollar sign ($) syntax.",
    blank: "$XXXXXXXXXXX = XXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-variables",
  },
  {
    category: "PowerShell Commands",
    question: "What command retrieves event log entries?",
    answer: "Get-EventLog",
    hint: "Accesses Windows event logs.",
    blank: "XXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-eventlog",
  },
  {
    category: "PowerShell Commands",
    question: "What command fetches user accounts on the system?",
    answer: "Get-LocalUser",
    hint: "Lists local user accounts.",
    blank: "XXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/get-localuser",
  },
  {
    category: "PowerShell Commands",
    question: "What command restarts a computer remotely?",
    answer: "Restart-Computer",
    hint: "Forces a reboot.",
    blank: "XXXXXXX-XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/restart-computer",
  },
  {
    category: "PowerShell Commands",
    question: "What command runs a script?",
    answer: "& ./script.ps1",
    hint: "The `&` operator runs commands or scripts.",
    blank: "& ./XXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/using-the-call-operator",
  },
  {
    category: "PowerShell Commands",
    question: "What command lists installed modules?",
    answer: "Get-Module -ListAvailable",
    hint: "Shows modules available for use.",
    blank: "XXX-XXXXXX -XXXXXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-module",
  },
  {
    category: "PowerShell Commands",
    question: "What command updates installed modules?",
    answer: "Update-Module",
    hint: "Refreshes module versions.",
    blank: "XXXXXX-XXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/powershellget/update-module",
  },
  {
    category: "PowerShell Commands",
    question: "What command installs a new module?",
    answer: "Install-Module",
    hint: "Fetches modules from a repository.",
    blank: "XXXXXXX-XXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/powershellget/install-module",
  },
  {
    category: "PowerShell Commands",
    question: "What command tests network connectivity?",
    answer: "Test-Connection",
    hint: "PowerShell equivalent of ping.",
    blank: "XXXX-XXXXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/test-connection",
  },
  {
    category: "PowerShell Commands",
    question: "What command fetches information about the operating system?",
    answer: "Get-CimInstance -ClassName Win32_OperatingSystem",
    hint: "Retrieves OS-level details.",
    blank: "XXX-XXXXXXXXX -XXXXXXXX XXXXXXX_XXXXXXXXXXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/cimcmdlets/get-ciminstance",
  },
  {
    category: "PowerShell Commands",
    question: "What command fetches IP configuration details?",
    answer: "Get-NetIPAddress",
    hint: "Provides IP-related information.",
    blank: "XXX-XXXXXXXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netipaddress",
  },
  {
    category: "PowerShell Commands",
    question: "What command converts JSON data to a PowerShell object?",
    answer: "ConvertFrom-Json",
    hint: "Parses JSON data.",
    blank: "XXXXXXXXXXX-XXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertfrom-json",
  },
  {
    category: "PowerShell Commands",
    question: "What command outputs content to the console?",
    answer: "Write-Output",
    hint: "Displays output text.",
    blank: "XXXXX-XXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-output",
  },
  {
    category: "PowerShell Commands",
    question: "What command pauses script execution?",
    answer: "Start-Sleep",
    hint: "Delays operations.",
    blank: "XXXXX-XXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/start-sleep",
  },
  {
    category: "PowerShell Commands",
    question: "What command copies an item from one location to another?",
    answer: "Copy-Item",
    hint: "Duplicates files or directories.",
    blank: "XXXX-XXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/copy-item",
  },
  {
    category: "PowerShell Commands",
    question: "What command moves an item from one location to another?",
    answer: "Move-Item",
    hint: "Transfers files or directories.",
    blank: "XXXX-XXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/move-item",
  },
  {
    category: "PowerShell Commands",
    question: "What command compresses files into a ZIP archive?",
    answer: "Compress-Archive",
    hint: "Creates a compressed archive.",
    blank: "XXXXXXXX-XXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive",
  },
  {
    category: "PowerShell Commands",
    question: "What command extracts files from a ZIP archive?",
    answer: "Expand-Archive",
    hint: "Decompresses a ZIP file.",
    blank: "XXXXXX-XXXXXXX",
    review:
      "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/expand-archive",
  },
];

module.exports = {
  category: "PowerShell Commands",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * powershellQuestions.length);
    return powershellQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return powershellQuestions;
  },
};
