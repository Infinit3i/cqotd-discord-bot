const { assignRoles } = require("../utils/addroles");
const User = require("../models/User");

jest.mock("../models/User");
jest.mock("discord.js", () => ({
  Client: jest.fn(),
  Guild: jest.fn(),
  GuildMember: jest.fn(),
  RoleManager: jest.fn(),
}));

describe("assignRoles", () => {
  let mockClient, mockGuild, mockMembers, mockRoles;

  beforeEach(() => {
    mockRoles = {
      topOne: "role1-id",
      topFive: "role5-id",
      topTwenty: "role20-id",
    };

    mockMembers = new Map([
      [
        "user1",
        {
          id: "user1",
          user: { tag: "User1#1234" },
          roles: {
            cache: new Set(["role20-id"]), // User1 starts with Top Twenty
            add: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
      [
        "user2",
        {
          id: "user2",
          user: { tag: "User2#5678" },
          roles: {
            cache: new Set(), // User2 starts with no roles
            add: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    ]);

    mockGuild = {
      id: "guild-id",
      members: {
        fetch: jest.fn().mockResolvedValue(mockMembers),
      },
      roles: {
        cache: new Map([
          ["role1-id", { id: "role1-id", name: "Top One" }],
          ["role5-id", { id: "role5-id", name: "Top Five" }],
          ["role20-id", { id: "role20-id", name: "Top Twenty" }],
        ]),
      },
    };

    mockClient = {
      guilds: {
        cache: new Map([["guild-id", mockGuild]]),
      },
    };

    process.env.TOP_ONE = mockRoles.topOne;
    process.env.TOP_FIVE = mockRoles.topFive;
    process.env.TOP_TWENTY = mockRoles.topTwenty;
  });

  it("assigns roles to the top-ranked user", async () => {
    User.find.mockResolvedValue([
      { userId: "user1", score: 100 },
      { userId: "user2", score: 90 },
    ]);

    await assignRoles(mockClient, "guild-id");

    // User1 should get Top One, Top Five, and Top Twenty roles
    const user1 = mockMembers.get("user1");
    expect(user1.roles.add).toHaveBeenCalledWith(mockRoles.topOne);
    expect(user1.roles.add).toHaveBeenCalledWith(mockRoles.topFive);
    expect(user1.roles.add).toHaveBeenCalledWith(mockRoles.topTwenty);

    // User2 should get Top Five and Top Twenty roles
    const user2 = mockMembers.get("user2");
    expect(user2.roles.add).toHaveBeenCalledWith(mockRoles.topFive);
    expect(user2.roles.add).toHaveBeenCalledWith(mockRoles.topTwenty);

    // User2 should not have Top One
    expect(user2.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
  });

  it("removes roles from users who fall out of rank", async () => {
    User.find.mockResolvedValue([
      { userId: "user2", score: 110 }, // User2 moves to rank 1
    ]);

    const user1 = mockMembers.get("user1");
    user1.roles.cache.add(mockRoles.topOne); // User1 previously had Top One

    await assignRoles(mockClient, "guild-id");

    // User1 should lose Top One role
    expect(user1.roles.remove).toHaveBeenCalledWith(mockRoles.topOne);

    // User2 should now have Top One role
    const user2 = mockMembers.get("user2");
    expect(user2.roles.add).toHaveBeenCalledWith(mockRoles.topOne);
  });

  it("retains roles in case of a tie based on initial rank", async () => {
    User.find.mockResolvedValue([
      { userId: "user1", score: 100 },
      { userId: "user2", score: 100 }, // Tie with User1
    ]);

    const user1 = mockMembers.get("user1");
    user1.roles.cache.add(mockRoles.topOne); // User1 already has Top One

    await assignRoles(mockClient, "guild-id");

    // User1 retains Top One role
    expect(user1.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
    expect(user1.roles.remove).not.toHaveBeenCalledWith(mockRoles.topOne);

    // User2 does not get Top One role
    const user2 = mockMembers.get("user2");
    expect(user2.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
  });

  it("removes all roles during the first-time initialization", async () => {
    rolesInitialized = false; // Simulate first-time initialization

    const user1 = mockMembers.get("user1");
    user1.roles.cache.add(mockRoles.topOne); // User1 previously had Top One
    user1.roles.cache.add(mockRoles.topTwenty); // User1 previously had Top Twenty

    const user2 = mockMembers.get("user2");
    user2.roles.cache.add(mockRoles.topFive); // User2 previously had Top Five

    await assignRoles(mockClient, "guild-id");

    // Verify roles are removed during initialization
    expect(user1.roles.remove).toHaveBeenCalledWith(mockRoles.topOne);
    expect(user1.roles.remove).toHaveBeenCalledWith(mockRoles.topTwenty);
    expect(user2.roles.remove).toHaveBeenCalledWith(mockRoles.topFive);
  });

  it("does not assign roles when there are no users in the leaderboard", async () => {
    User.find.mockResolvedValue([]); // Empty leaderboard

    await assignRoles(mockClient, "guild-id");

    // Ensure no roles are assigned or removed
    for (const member of mockMembers.values()) {
      expect(member.roles.add).not.toHaveBeenCalled();
      expect(member.roles.remove).not.toHaveBeenCalled();
    }
  });

  it("handles ties by retaining roles for the existing holder", async () => {
    User.find.mockResolvedValue([
      { userId: "user1", score: 100 }, // User1 already has Top One
      { userId: "user2", score: 100 }, // Tie
    ]);
  
    const user1 = mockMembers.get("user1");
    user1.roles.cache.add(mockRoles.topOne); // User1 already has Top One
  
    const user2 = mockMembers.get("user2");
  
    await assignRoles(mockClient, "guild-id");
  
    // User1 retains Top One role
    expect(user1.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
    expect(user1.roles.remove).not.toHaveBeenCalledWith(mockRoles.topOne);
  
    // User2 does not get Top One role
    expect(user2.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
  });
  

  it("does not reassign roles unnecessarily", async () => {
    User.find.mockResolvedValue([
      { userId: "user1", score: 100 },
      { userId: "user2", score: 90 },
    ]);

    const user1 = mockMembers.get("user1");
    user1.roles.cache.add(mockRoles.topOne); // User1 already has Top One

    await assignRoles(mockClient, "guild-id");

    // User1 should not have Top One reassigned
    expect(user1.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
  });
});
