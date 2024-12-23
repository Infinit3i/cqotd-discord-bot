let windowsAPIQuestions = [
  {
    category: "Windows API Analysis",
    question: "What Windows API is commonly used to load dynamic libraries?",
    answer: "LoadLibrary",
    hint: "Used for loading DLLs.",
    blank: "xxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya",
  },
  {
    category: "Windows API Analysis",
    question: "What API resolves the address of exported functions in DLLs?",
    answer: "GetProcAddress",
    hint: "Finds function addresses.",
    blank: "xxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-getprocaddress",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to allocate memory in a process?",
    answer: "VirtualAlloc",
    hint: "Allocates virtual memory.",
    blank: "xxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-virtualalloc",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to create a new thread in Windows?",
    answer: "CreateThread",
    hint: "Starts a new thread.",
    blank: "xxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createthread",
  },
  {
    category: "Windows API Analysis",
    question: "What API function reads data from a process's memory?",
    answer: "ReadProcessMemory",
    hint: "Reads from another process.",
    blank: "xxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-readprocessmemory",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to write data into another process's memory?",
    answer: "WriteProcessMemory",
    hint: "Modifies memory of a process.",
    blank: "xxxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-writeprocessmemory",
  },
  {
    category: "Windows API Analysis",
    question: "What API terminates a process in Windows?",
    answer: "TerminateProcess",
    hint: "Ends a process forcibly.",
    blank: "xxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-terminateprocess",
  },
  {
    category: "Windows API Analysis",
    question: "What API function retrieves a handle to a process?",
    answer: "OpenProcess",
    hint: "Opens access to processes.",
    blank: "xxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-openprocess",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to create a remote thread in another process?",
    answer: "CreateRemoteThread",
    hint: "Executes code in another process.",
    blank: "xxxxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createremotethread",
  },
  {
    category: "Windows API Analysis",
    question: "What API provides information about system directories?",
    answer: "GetSystemDirectory",
    hint: "Returns the system directory path.",
    blank: "xxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getsystemdirectorya",
  },
  {
    category: "Windows API Analysis",
    question: "What API retrieves the current process ID?",
    answer: "GetCurrentProcessId",
    hint: "Identifies the calling process.",
    blank: "xxxxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-getcurrentprocessid",
  },
  {
    category: "Windows API Analysis",
    question: "What API retrieves a handle to the current process?",
    answer: "GetCurrentProcess",
    hint: "Provides a pseudo-handle.",
    blank: "xxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-getcurrentprocess",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to find the full path of a file?",
    answer: "GetFullPathName",
    hint: "Resolves relative paths.",
    blank: "xxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getfullpathname",
  },
  {
    category: "Windows API Analysis",
    question: "What API creates a process in Windows?",
    answer: "CreateProcess",
    hint: "Starts a new process.",
    blank: "xxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa",
  },
  {
    category: "Windows API Analysis",
    question: "What API retrieves environment variables for a process?",
    answer: "GetEnvironmentVariable",
    hint: "Accesses environment variables.",
    blank: "xxxxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processenv/nf-processenv-getenvironmentvariablea",
  },
  {
    category: "Windows API Analysis",
    question: "What API is commonly used to delete files?",
    answer: "DeleteFile",
    hint: "Removes a file.",
    blank: "xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-deletefilea",
  },
  {
    category: "Windows API Analysis",
    question:
      "What API function maps a file into the memory space of a process?",
    answer: "MapViewOfFile",
    hint: "Maps files into memory.",
    blank: "xxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-mapviewoffile",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to unmap a memory-mapped file?",
    answer: "UnmapViewOfFile",
    hint: "Removes file mapping from memory.",
    blank: "xxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-unmapviewoffile",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to retrieve a handle to a module?",
    answer: "GetModuleHandle",
    hint: "Identifies loaded modules.",
    blank: "xxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-getmodulehandlea",
  },
  {
    category: "Windows API Analysis",
    question: "What API creates an inter-process communication pipe?",
    answer: "CreatePipe",
    hint: "Facilitates process communication.",
    blank: "xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/namedpipeapi/nf-namedpipeapi-createpipe",
  },
  {
    category: "Windows API Analysis",
    question: "What API retrieves information about a file or directory?",
    answer: "GetFileAttributes",
    hint: "Checks file or directory properties.",
    blank: "xxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-getfileattributesa",
  },
  {
    category: "Windows API Analysis",
    question: "What API opens a handle to a file or device?",
    answer: "CreateFile",
    hint: "Handles file system objects.",
    blank: "xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createfilea",
  },
  {
    category: "Windows API Analysis",
    question:
      "What API retrieves information about the memory usage of a process?",
    answer: "GetProcessMemoryInfo",
    hint: "Monitors memory consumption.",
    blank: "xxxxxxxxxxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/psapi/nf-psapi-getprocessmemoryinfo",
  },
  {
    category: "Windows API Analysis",
    question: "What API closes an open handle?",
    answer: "CloseHandle",
    hint: "Releases resources.",
    blank: "xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/handleapi/nf-handleapi-closehandle",
  },
  {
    category: "Windows API Analysis",
    question: "What API retrieves the name of the Windows version?",
    answer: "GetVersionEx",
    hint: "Provides OS version details.",
    blank: "xxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getversionexa",
  },
  {
    category: "Windows API Analysis",
    question: "What API generates cryptographic keys?",
    answer: "CryptGenKey",
    hint: "Used for cryptographic operations.",
    blank: "xxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/wincrypt/nf-wincrypt-cryptgenkey",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to suspend a thread?",
    answer: "SuspendThread",
    hint: "Pauses thread execution.",
    blank: "xxxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-suspendthread",
  },
  {
    category: "Windows API Analysis",
    question: "What API is used to resume a suspended thread?",
    answer: "ResumeThread",
    hint: "Continues thread execution.",
    blank: "xxxxxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-resumethread",
  },
  {
    category: "Windows API Analysis",
    question: "What API function retrieves the path of the temporary folder?",
    answer: "GetTempPath",
    hint: "Finds temporary directories.",
    blank: "xxxxxxxxxx",
    review:
      "https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-gettemppatha",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL provides APIs for managing memory and processes?",
    answer: "kernel32.dll",
    hint: "A core Windows library.",
    blank: "xxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/index",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is responsible for user interface functions?",
    answer: "user32.dll",
    hint: "Handles windows, menus, and UI.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/user32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL contains networking-related functions?",
    answer: "ws2_32.dll",
    hint: "Used for socket programming.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/ws2_32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL provides cryptographic services?",
    answer: "crypt32.dll",
    hint: "Used for encryption and decryption.",
    blank: "xxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/crypt32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is often used for creating remote threads?",
    answer: "ntdll.dll",
    hint: "Provides low-level NT functions.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/ntdll/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used for file system operations?",
    answer: "kernel32.dll",
    hint: "Includes APIs like CreateFile and ReadFile.",
    blank: "xxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/fileapi/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL contains functions for Active Directory?",
    answer: "advapi32.dll",
    hint: "Used for security and registry operations.",
    blank: "xxxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/advapi32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is associated with Windows graphical components?",
    answer: "gdi32.dll",
    hint: "Handles graphics drawing.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/gdi32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used for HTTP client communication?",
    answer: "winhttp.dll",
    hint: "Facilitates HTTP requests.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/winhttp/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is commonly used for COM and OLE operations?",
    answer: "ole32.dll",
    hint: "Handles object linking and embedding.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/ole32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used to resolve domain names?",
    answer: "dnsapi.dll",
    hint: "Handles DNS requests.",
    blank: "xxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/dnsapi/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL provides authentication and security services?",
    answer: "secur32.dll",
    hint: "Often used for Kerberos and NTLM.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/secur32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used for handling shell operations?",
    answer: "shell32.dll",
    hint: "Includes file explorer and desktop functions.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/shell32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL manages processes and threads in Windows?",
    answer: "ntdll.dll",
    hint: "Includes APIs like NtCreateProcess.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/ntdll/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used to manage network configuration?",
    answer: "iphlpapi.dll",
    hint: "Handles IP-related operations.",
    blank: "xxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/iphlpapi/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL contains clipboard-related APIs?",
    answer: "user32.dll",
    hint: "Includes APIs like OpenClipboard.",
    blank: "xxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/user32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used for DNS cache manipulation?",
    answer: "dnsapi.dll",
    hint: "Interacts with the DNS client service.",
    blank: "xxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/dnsapi/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL handles printing operations?",
    answer: "winspool.drv",
    hint: "Communicates with printers.",
    blank: "xxxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/printdocs/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL handles registry interactions?",
    answer: "advapi32.dll",
    hint: "Provides APIs like RegOpenKeyEx.",
    blank: "xxxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/advapi32/",
  },
  {
    category: "Windows API Analysis",
    question: "Which DLL is used for managing Windows services?",
    answer: "advapi32.dll",
    hint: "Includes APIs for starting and stopping services.",
    blank: "xxxxxxxxxxxx",
    review: "https://learn.microsoft.com/en-us/windows/win32/api/advapi32/",
  },
];

module.exports = {
  category: "Windows API Analysis",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(Math.random() * windowsAPIQuestions.length);
    return windowsAPIQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return windowsAPIQuestions;
  },
};
