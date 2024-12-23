let dockerquestions = [
    {
      category: "Docker",
      question: "What is Docker used for?",
      answer: "Containerization",
      hint: "Lightweight virtualization.",
      blank: "xxxxxxxxxxxxxxx",
      review: "https://www.docker.com/resources/what-container/",
    },
    {
      category: "Docker",
      question: "What is a Docker image?",
      answer: "Template for containers",
      hint: "Used to create containers.",
      blank: "xxxxxxx xxx xxxxxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/image/",
    },
    {
      category: "Docker",
      question: "What is the command to list running containers?",
      answer: "docker ps",
      hint: "Processes list.",
      blank: "xxxxxx xx",
      review: "https://docs.docker.com/engine/reference/commandline/ps/",
    },
    {
      category: "Docker",
      question: "What file is used to define multi-step container builds?",
      answer: "Dockerfile",
      hint: "Script for building images.",
      blank: "xxxxxxxxxx",
      review: "https://docs.docker.com/engine/reference/builder/",
    },
    {
      category: "Docker",
      question: "What is the command to start a stopped container?",
      answer: "docker start",
      hint: "Starts containers.",
      blank: "xxxxxx xxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/start/",
    },
    {
      category: "Docker",
      question: "What command removes unused data?",
      answer: "docker system prune",
      hint: "Prunes unused data.",
      blank: "xxxxxx xxxxxx xxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/system_prune/",
    },
    {
      category: "Docker",
      question: "What is the purpose of a Docker volume?",
      answer: "Persistent storage",
      hint: "Stores data outside containers.",
      blank: "xxxxxxxxx xxxxxxx",
      review: "https://docs.docker.com/storage/volumes/",
    },
    {
      category: "Docker",
      question: "What is the default Docker network driver?",
      answer: "bridge",
      hint: "Basic networking.",
      blank: "xxxxxx",
      review: "https://docs.docker.com/network/bridge/",
    },
    {
      category: "Docker",
      question: "What is the command to build a Docker image?",
      answer: "docker build",
      hint: "Creates images.",
      blank: "xxxxxx xxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/build/",
    },
    {
      category: "Docker",
      question: "What command is used to stop a running container?",
      answer: "docker stop",
      hint: "Halts containers.",
      blank: "xxxxxx xxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/stop/",
    },
    {
      category: "Docker",
      question: "What command pulls an image from a repository?",
      answer: "docker pull",
      hint: "Downloads images.",
      blank: "xxxxxx xxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/pull/",
    },
    {
      category: "Docker",
      question: "What is Docker Compose used for?",
      answer: "Multi-container applications",
      hint: "Manages services.",
      blank: "xxxx-xxxxxxxx xxxxxxxxxxxx",
      review: "https://docs.docker.com/compose/",
    },
    {
      category: "Docker",
      question: "What command shows Docker version details?",
      answer: "docker version",
      hint: "Version info.",
      blank: "xxxxxx xxxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/version/",
    },
    {
      category: "Docker",
      question: "What file format does Docker Compose use?",
      answer: "YAML",
      hint: "Readable markup.",
      blank: "XXXX",
      review: "https://docs.docker.com/compose/compose-file/",
    },
    {
      category: "Docker",
      question: "What command runs a container interactively?",
      answer: "docker run -it",
      hint: "Interactive mode.",
      blank: "xxxxxx xxx -xx",
      review: "https://docs.docker.com/engine/reference/commandline/run/",
    },
    {
      category: "Docker",
      question: "What is the command to remove a Docker container?",
      answer: "docker rm",
      hint: "Deletes containers.",
      blank: "xxxxxx xx",
      review: "https://docs.docker.com/engine/reference/commandline/rm/",
    },
    {
      category: "Docker",
      question: "What is the purpose of Docker Hub?",
      answer: "Image repository",
      hint: "Stores Docker images.",
      blank: "xxxxx xxxxxxxxxx",
      review: "https://hub.docker.com/",
    },
    {
      category: "Docker",
      question: "What is the command to tag a Docker image?",
      answer: "docker tag",
      hint: "Assigns tags.",
      blank: "xxxxxx xxx",
      review: "https://docs.docker.com/engine/reference/commandline/tag/",
    },
    {
      category: "Docker",
      question: "What command removes a Docker image?",
      answer: "docker rmi",
      hint: "Deletes images.",
      blank: "xxxxxx xxx",
      review: "https://docs.docker.com/engine/reference/commandline/rmi/",
    },
    {
      category: "Docker",
      question: "What command lists all Docker images?",
      answer: "docker images",
      hint: "Displays images.",
      blank: "xxxxxx xxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/images/",
    },
    {
      category: "Docker",
      question: "What does the `-d` flag do in `docker run`?",
      answer: "Runs container in background",
      hint: "Detaches process.",
      blank: "xxxx xxxxxxxxx xx xxxxxxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/run/#detached--d",
    },
    {
      category: "Docker",
      question: "What command inspects a Docker object?",
      answer: "docker inspect",
      hint: "Shows detailed info.",
      blank: "xxxxxx xxxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/inspect/",
    },
    {
      category: "Docker",
      question: "What is a Docker container?",
      answer: "Runtime instance of an image",
      hint: "Image in motion.",
      blank: "xxxxxx xxxxxxxxx xx xx xxxxx",
      review: "https://www.docker.com/resources/what-container/",
    },
    {
      category: "Docker",
      question: "What command exports a container's filesystem?",
      answer: "docker export",
      hint: "Creates a tar archive.",
      blank: "xxxxxx xxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/export/",
    },
    {
      category: "Docker",
      question: "What command shows resource usage by containers?",
      answer: "docker stats",
      hint: "Statistics.",
      blank: "xxxxxx xxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/stats/",
    },
    {
      category: "Docker",
      question: "What is the `ENTRYPOINT` instruction in a Dockerfile?",
      answer: "Specifies container executable",
      hint: "Defines container process.",
      blank: "xxxxxxxx xxxxxxxxxx xxxxxxxxxx",
      review: "https://docs.docker.com/engine/reference/builder/#entrypoint",
    },
    {
      category: "Docker",
      question: "What is the purpose of the `EXPOSE` command in a Dockerfile?",
      answer: "Specifies exposed ports",
      hint: "Defines open ports.",
      blank: "xxxxxxxxx xxxxxx xxxxx",
      review: "https://docs.docker.com/engine/reference/builder/#expose",
    },
    {
      category: "Docker",
      question: "What is a multi-stage build in Docker?",
      answer: "Efficient image builds",
      hint: "Reduces final image size.",
      blank: "xxxxxxxx xxxxx xxxxxxx",
      review: "https://docs.docker.com/develop/develop-images/multistage-build/",
    },
    {
      category: "Docker",
      question: "What is the `docker network` command used for?",
      answer: "Manage networks",
      hint: "Configures connectivity.",
      blank: "xxxxxx xxxxxxxx",
      review: "https://docs.docker.com/engine/reference/commandline/network/",
    },
  ];
  
  module.exports = {
    category: "Docker",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * dockerquestions.length);
      return dockerquestions[randomIndex];
    },
    getAllQuestions: async () => {
      return dockerquestions;
    },
  };
  