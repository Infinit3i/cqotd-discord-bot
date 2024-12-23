let remoteConnectionQuestions = [
  {
    category: "Remote Connections",
    question: "What command initiates an SSH connection?",
    answer: "ssh user@host",
    hint: "Secure shell connection.",
    blank: "xxx xxxx@xxxx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What command uploads a file using SFTP?",
    answer: "put filename",
    hint: "Opposite of 'get'.",
    blank: "xxx xxxxxxxx",
    review: "https://linux.die.net/man/1/sftp",
  },
  {
    category: "Remote Connections",
    question: "What option in SSH specifies a private key file?",
    answer: "-i",
    hint: "Identity file.",
    blank: "xx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What PuTTY tool transfers files via SCP?",
    answer: "pscp",
    hint: "Secure copy for PuTTY.",
    blank: "xxxx",
    review: "https://www.putty.org/",
  },
  {
    category: "Remote Connections",
    question: "What command lists files in an SFTP session?",
    answer: "ls",
    hint: "Similar to a Linux command.",
    blank: "xx",
    review: "https://linux.die.net/man/1/sftp",
  },
  {
    category: "Remote Connections",
    question: "What does the '-p' flag do in SSH?",
    answer: "Port",
    hint: "Specifies a custom port.",
    blank: "xxxx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What command downloads a file using SFTP?",
    answer: "get filename",
    hint: "Opposite of 'put'.",
    blank: "xxx xxxxxxxx",
    review: "https://linux.die.net/man/1/sftp",
  },
  {
    category: "Remote Connections",
    question: "What command establishes a Telnet session?",
    answer: "telnet host",
    hint: "Plain-text connection.",
    blank: "xxxxxx xxxx",
    review: "https://linux.die.net/man/1/telnet",
  },
  {
    category: "Remote Connections",
    question: "What file stores known SSH hosts?",
    answer: "~/.ssh/known_hosts",
    hint: "Trusted hosts list.",
    blank: "xxxxxxxxxxxxxxxxxxxx",
    review: "https://linux.die.net/man/5/known_hosts",
  },
  {
    category: "Remote Connections",
    question: "What tool provides an SSH terminal and GUI for remote access?",
    answer: "MobaXterm",
    hint: "Comprehensive SSH tool.",
    blank: "xxxxxxxxx",
    review: "https://mobaxterm.mobatek.net/",
  },
  {
    category: "Remote Connections",
    question: "What command generates SSH key pairs?",
    answer: "ssh-keygen",
    hint: "Used for public/private keys.",
    blank: "xxxxxxxxxx",
    review: "https://linux.die.net/man/1/ssh-keygen",
  },
  {
    category: "Remote Connections",
    question: "What is the default SSH port?",
    answer: "22",
    hint: "Commonly used for secure connections.",
    blank: "xx",
    review: "https://en.wikipedia.org/wiki/Secure_Shell",
  },
  {
    category: "Remote Connections",
    question: "What is the protocol used by SCP?",
    answer: "SSH",
    hint: "Same as secure shell.",
    blank: "xxx",
    review: "https://linux.die.net/man/1/scp",
  },
  {
    category: "Remote Connections",
    question: "What command in PuTTY saves a session configuration?",
    answer: "Save",
    hint: "Preserves settings for later.",
    blank: "xxxx",
    review: "https://www.putty.org/",
  },
  {
    category: "Remote Connections",
    question: "What SSH command forwards local ports?",
    answer: "-L",
    hint: "Local forwarding.",
    blank: "xx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What is the Windows CLI command to test connectivity to a port?",
    answer: "Test-NetConnection",
    hint: "PowerShell utility.",
    blank: "xxxxxxxxxxxxxxxx",
    review: "https://docs.microsoft.com/en-us/powershell/",
  },
  {
    category: "Remote Connections",
    question: "What command copies files over SSH?",
    answer: "scp",
    hint: "Secure copy.",
    blank: "xxx",
    review: "https://linux.die.net/man/1/scp",
  },
  {
    category: "Remote Connections",
    question: "What tool is used for SSH with multiple sessions on Windows?",
    answer: "Xshell",
    hint: "Supports tabbed sessions.",
    blank: "xxxxxx",
    review: "https://www.netsarang.com/en/xshell/",
  },
  {
    category: "Remote Connections",
    question: "What is the primary file for SSH server configuration?",
    answer: "/etc/ssh/sshd_config",
    hint: "Located in `/etc/ssh`.",
    blank: "xxxxxxxxxxxxxxxxxxx",
    review: "https://linux.die.net/man/5/sshd_config",
  },
  {
    category: "Remote Connections",
    question: "What PuTTY tool creates SSH tunnels?",
    answer: "plink",
    hint: "PuTTY's CLI tool.",
    blank: "xxxxx",
    review: "https://www.putty.org/",
  },
  {
    category: "Remote Connections",
    question: "What command removes a known SSH host?",
    answer: "ssh-keygen -R hostname",
    hint: "Modifies `known_hosts`.",
    blank: "xxxxxxxxxx -x xxxxxxxxx",
    review: "https://linux.die.net/man/1/ssh-keygen",
  },
  {
    category: "Remote Connections",
    question: "What flag enables verbose mode in SSH?",
    answer: "-v",
    hint: "For debugging connections.",
    blank: "xx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question:
      "What is the SCP command to copy a local file to a remote server?",
    answer: "scp file user@host:/path",
    hint: "Secure copy command.",
    blank: "xxx xxxx xxxx@xxxx:/xxxx",
    review: "https://linux.die.net/man/1/scp",
  },
  {
    category: "Remote Connections",
    question: "What is the default port for SFTP?",
    answer: "22",
    hint: "Same as SSH.",
    blank: "xx",
    review: "https://linux.die.net/man/1/sftp",
  },
  {
    category: "Remote Connections",
    question: "What command in SSH runs a remote command?",
    answer: "ssh user@host 'command'",
    hint: "Includes quotes.",
    blank: "xxx xxxx@xxxx 'xxxxxxx'",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What tool provides GUI-based SSH for Linux and Windows?",
    answer: "Remmina",
    hint: "Common on Ubuntu.",
    blank: "xxxxxxx",
    review: "https://remmina.org/",
  },
  {
    category: "Remote Connections",
    question: "What protocol does RDP use?",
    answer: "TCP",
    hint: "Remote desktop connections.",
    blank: "xxx",
    review: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol",
  },
  {
    category: "Remote Connections",
    question: "What is the default port for RDP?",
    answer: "3389",
    hint: "Remote Desktop Protocol.",
    blank: "xxxx",
    review: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol",
  },
  {
    category: "Remote Connections",
    question: "What flag in SCP allows recursive copying?",
    answer: "-r",
    hint: "For directories.",
    blank: "xx",
    review: "https://linux.die.net/man/1/scp",
  },
  {
    category: "Remote Connections",
    question: "What SSH command disables host key checking?",
    answer: "-o StrictHostKeyChecking=no",
    hint: "Overrides the default security.",
    blank: "-x xxxxxxxxxxxxxxxxxxxxxxx=xx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What command in PowerShell establishes an SSH connection?",
    answer: "ssh",
    hint: "Same as Linux.",
    blank: "xxx",
    review: "https://learn.microsoft.com/en-us/powershell/",
  },
  {
    category: "Remote Connections",
    question: "What tool combines FTP, SFTP, and SCP support with a GUI?",
    answer: "WinSCP",
    hint: "Windows-based client.",
    blank: "xxxxxx",
    review: "https://winscp.net/",
  },
  {
    category: "Remote Connections",
    question: "What RDP client is common on Linux?",
    answer: "rdesktop",
    hint: "Legacy RDP tool.",
    blank: "xxxxxxxx",
    review: "https://github.com/rdesktop/rdesktop",
  },
  {
    category: "Remote Connections",
    question: "What flag in SSH enables X11 forwarding?",
    answer: "-X",
    hint: "Used for GUI applications.",
    blank: "-x",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What command terminates an SSH session?",
    answer: "exit",
    hint: "Also closes the shell.",
    blank: "xxxx",
    review: "https://linux.die.net/man/1/exit",
  },
  {
    category: "Remote Connections",
    question: "What tool transfers files over RDP?",
    answer: "Guacamole",
    hint: "Browser-based remote access.",
    blank: "xxxxxxxxx",
    review: "https://guacamole.apache.org/",
  },
  {
    category: "Remote Connections",
    question: "What command establishes an SFTP session?",
    answer: "sftp user@host",
    hint: "Secure file transfer.",
    blank: "xxxx xxxx@xxxx",
    review: "https://linux.die.net/man/1/sftp",
  },
  {
    category: "Remote Connections",
    question: "What CLI tool connects to VNC servers?",
    answer: "vncviewer",
    hint: "VNC client tool.",
    blank: "xxxxxxxxxx",
    review: "https://www.realvnc.com/",
  },
  {
    category: "Remote Connections",
    question: "What tool provides multi-protocol remote desktop access?",
    answer: "AnyDesk",
    hint: "Popular lightweight remote tool.",
    blank: "xxxxxxx",
    review: "https://anydesk.com/",
  },
  {
    category: "Remote Connections",
    question: "What command lists active SSH sessions on Linux?",
    answer: "who",
    hint: "Tracks logged-in users.",
    blank: "xxx",
    review: "https://linux.die.net/man/1/who",
  },
  {
    category: "Remote Connections",
    question: "What GUI tool supports SSH, SCP, and VNC connections?",
    answer: "MobaXterm",
    hint: "Combines multiple protocols.",
    blank: "xxxxxxxxx",
    review: "https://mobaxterm.mobatek.net/",
  },
  {
    category: "Remote Connections",
    question: "What SSH flag disables strict host checking permanently?",
    answer: "-o UserKnownHostsFile=/dev/null",
    hint: "Overrides the `known_hosts` file.",
    blank: "-x xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What command reuses an existing SSH connection?",
    answer: "ControlMaster",
    hint: "Part of SSH configuration.",
    blank: "xxxxxxxxxxxxx",
    review: "https://linux.die.net/man/5/ssh_config",
  },
  {
    category: "Remote Connections",
    question: "What flag in SCP sets a transfer limit in Kbps?",
    answer: "-l",
    hint: "Throttle bandwidth usage.",
    blank: "-x",
    review: "https://linux.die.net/man/1/scp",
  },
  {
    category: "Remote Connections",
    question: "What tool allows remote desktop connections on macOS?",
    answer: "Microsoft Remote Desktop",
    hint: "Microsoft's official RDP client.",
    blank: "xxxxxxxxx xxxxxx xxxxxxxx",
    review: "https://apps.apple.com/app/microsoft-remote-desktop/",
  },
  {
    category: "Remote Connections",
    question: "What option in SSH increases log verbosity?",
    answer: "-vvv",
    hint: "Triple the verbosity.",
    blank: "-xxx",
    review: "https://linux.die.net/man/1/ssh",
  },
  {
    category: "Remote Connections",
    question: "What protocol does OpenVPN use for remote access?",
    answer: "UDP/TCP",
    hint: "Depends on configuration.",
    blank: "xxx/xxx",
    review: "https://openvpn.net/",
  },
  {
    category: "Remote Connections",
    question:
      "What SSH feature allows multiple connections through one session?",
    answer: "ControlPath",
    hint: "Configured in `~/.ssh/config`.",
    blank: "xxxxxxxxxxx",
    review: "https://linux.die.net/man/5/ssh_config",
  },
  {
    category: "Remote Connections",
    question: "What tool enables CLI-based RDP connections on Linux?",
    answer: "xfreerdp",
    hint: "Part of FreeRDP project.",
    blank: "xxxxxxxx",
    review: "https://github.com/FreeRDP/FreeRDP",
  },
];

module.exports = {
  category: "Remote Connections",
  fetchQuestion: async () => {
    const randomIndex = Math.floor(
      Math.random() * remoteConnectionQuestions.length
    );
    return remoteConnectionQuestions[randomIndex];
  },
  getAllQuestions: async () => {
    return remoteConnectionQuestions;
  },
};
