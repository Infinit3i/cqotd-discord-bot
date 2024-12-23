const videoCategories = [
  {
    category: "Lifting",
    discordChannelId: process.env.DISCORD_CHANNEL_LIFTING,
    youtubeChannelUrls: [
      "https://www.youtube.com/@JeffNippard",
      "https://www.youtube.com/@ChrisBumstead",
      "https://www.youtube.com/@LiftingVault",
      "https://www.youtube.com/@HouseofHypertrophy",
      "https://www.youtube.com/@SquatUniversity",
      "https://www.youtube.com/@nsimaInyang",
      "https://www.youtube.com/@TaviCastroofficial",
      "https://www.youtube.com/@TheKneesovertoesguy",
    ],
  },
  {
    category: "blue",
    discordChannelId: process.env.DISCORD_CHANNEL_BLUE,
    youtubeChannelUrls: [
      "https://www.youtube.com/@13Cubed",
      "https://www.youtube.com/@TrustedSecTV",
      "https://www.youtube.com/@BlackHillsInformationSecurity",
      "https://www.youtube.com/@USENIXEnigmaConference",
      "https://www.youtube.com/@pcsecuritychannel",
      "https://www.youtube.com/@EricParker",
      "https://www.youtube.com/@jbravovideos",
      "https://www.youtube.com/@SANSCyberDefense",
      "https://www.youtube.com/@TrustedSecTV",
      "https://www.youtube.com/@sonianuj",
      "https://www.youtube.com/@splunk_ml",
      "https://www.youtube.com/@rot169",
      "https://www.youtube.com/@ExabeamSIEM",
      "https://www.youtube.com/@MyDFIR",
      "https://www.youtube.com/@LetsDefend",
    ],
  },
  {
    category: "red",
    discordChannelId: process.env.DISCORD_CHANNEL_RED,
    youtubeChannelUrls: [
      "https://www.youtube.com/@LowLevelTV",
      "https://www.youtube.com/@IppSec",
      "https://www.youtube.com/@_JohnHammond",
      "https://www.youtube.com/@HackerSploit",
      "https://www.youtube.com/@MotasemHamdan",
      "https://www.youtube.com/@crr0ww",
      "https://www.youtube.com/@Incodenito",
      "https://www.youtube.com/@LeetCipher",
      "https://www.youtube.com/@Preludeorg",
      "https://www.youtube.com/@stacksmashing",
      "https://www.youtube.com/@jstrosch",
      "https://www.youtube.com/@ProxyProgrammer",
      "https://www.youtube.com/@LiveOverflow",
      "https://www.youtube.com/@thePL4GU3",
    ],
  },
  {
    category: "it",
    discordChannelId: process.env.DISCORD_CHANNEL_IT,
    youtubeChannelUrls: [
      "https://www.youtube.com/@NetworkChuck",
      "https://www.youtube.com/@stuffy24",
      "https://www.youtube.com/@derekbanas",
      "https://www.youtube.com/@DavesGarage",
      "https://www.youtube.com/@PirateSoftware",
      "https://www.youtube.com/@letsgetrusty",
      "https://www.youtube.com/@lamecreations_guides",
      "https://www.youtube.com/@NoBoilerplate",
      "https://www.youtube.com/@CoreDumpped",
      "https://www.youtube.com/@codetothemoon",
      "https://www.youtube.com/@ThePrimeagen",
      "https://www.youtube.com/@pwncollege",
      "https://www.youtube.com/@UnderCtrl",
      "https://www.youtube.com/@dario.lencina",
      "https://www.youtube.com/@Computerphile",
      "https://www.youtube.com/@mrexodia",
      "https://www.youtube.com/@NetworkChuck",
      "https://www.youtube.com/@TechnoTim",
      "https://www.youtube.com/@SimplyCyber",
      "https://www.youtube.com/@TechwithJono",
      "https://www.youtube.com/@ForeverAnonymous",
      "https://www.youtube.com/@RobertElderSoftware",
      "https://www.youtube.com/@BlackHillsInformationSecurity",
      "https://www.youtube.com/@JackRhysider",
      "https://www.youtube.com/@SwedishTwat",
      "https://www.youtube.com/@davidbombal",
      "https://www.youtube.com/@valhalla_dev",
      "https://www.youtube.com/@Cobuman",
    ],
  },
  {
    category: "psych-videos",
    discordChannelId: process.env.DISCORD_CHANNEL_PSYCH_VIDEOS,
    youtubeChannelUrls: [
      "https://www.youtube.com/@Dr.Explainer-zt2xj",
      "https://www.youtube.com/@MillenniaThinker",
      "https://www.youtube.com/@GLITCH",
      "https://www.youtube.com/@thedarkneedle",
      "https://www.youtube.com/@donthugmeimscared",
      "https://www.youtube.com/@savbrown",
      "https://www.youtube.com/@PursuitofWonder",
      "https://www.youtube.com/@NewelOfKnowledge",
      "https://www.youtube.com/@unsolicitedadvice9198",
    ],
  },
  {
    category: "Gaming",
    discordChannelId: process.env.DISCORD_CHANNEL_GAMING,
    youtubeChannelUrls: ["https://www.youtube.com/@lllonilll"],
  },
  {
    category: "Guns",
    discordChannelId: process.env.DISCORD_CHANNEL_GUNS,
    youtubeChannelUrls: [
      "https://www.youtube.com/@ForwardObservations",
      "https://www.youtube.com/@TacticalForge1",
      "https://www.youtube.com/@CivDiv",
      "https://www.youtube.com/@gungnirstrategic",
      "https://www.youtube.com/@falconclaw_",
    ],
  },
  {
    category: "Unraid",
    discordChannelId: process.env.DISCORD_CHANNEL_UNRAID,
    youtubeChannelUrls: [
      "https://www.youtube.com/@IBRACORP",
      "https://www.youtube.com/@SpaceinvaderOne",
    ],
  },
];

const processVideoCategories = async (client, sendLatestYouTubeVideo) => {
  for (const categoryConfig of videoCategories) {
    if (categoryConfig.youtubeChannelUrls.length) {
      await sendLatestYouTubeVideo(
        client,
        categoryConfig.discordChannelId,
        categoryConfig.youtubeChannelUrls
      );
    } else {
      console.log(
        `No YouTube channels configured for category '${categoryConfig.category}'.`
      );
    }
  }
};

module.exports = { processVideoCategories, videoCategories };
