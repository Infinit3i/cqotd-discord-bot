const { assignRoles } = require('../utils/addroles');
const User = require('../models/User');


jest.mock('../models/User');
jest.mock('discord.js', () => ({
  Client: jest.fn(),
  Guild: jest.fn(),
  GuildMember: jest.fn(),
  RoleManager: jest.fn(),
}));

describe('assignRoles', () => {
  let mockClient, mockGuild, mockMembers, mockRoles;

  beforeEach(() => {
    mockRoles = {
      topOne: 'role1-id',
      topFive: 'role5-id',
      topTwenty: 'role20-id',
    };

    mockMembers = new Map([
      [
        'user1',
        {
          id: 'user1',
          user: { tag: 'User1#1234' },
          roles: {
            cache: new Set(),
            add: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
      [
        'user2',
        {
          id: 'user2',
          user: { tag: 'User2#5678' },
          roles: {
            cache: new Set(),
            add: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    ]);

    mockGuild = {
      id: 'guild-id',
      members: {
        fetch: jest.fn().mockResolvedValue(mockMembers),
      },
      roles: {
        cache: new Map([
          ['role1-id', { id: 'role1-id', name: 'Top One' }],
          ['role5-id', { id: 'role5-id', name: 'Top Five' }],
          ['role20-id', { id: 'role20-id', name: 'Top Twenty' }],
        ]),
      },
    };

    mockClient = {
      guilds: {
        cache: new Map([['guild-id', mockGuild]]),
      },
    };

    process.env.TOP_ONE = mockRoles.topOne;
    process.env.TOP_FIVE = mockRoles.topFive;
    process.env.TOP_TWENTY = mockRoles.topTwenty;
  });

  it('assigns roles to the top-ranked user', async () => {
    User.find.mockResolvedValue([
      { userId: 'user1', score: 100 },
      { userId: 'user2', score: 90 },
    ]);

    await assignRoles(mockClient, 'guild-id');

    // User1 should get Top One, Top Five, and Top Twenty roles
    const user1 = mockMembers.get('user1');
    expect(user1.roles.add).toHaveBeenCalledWith(mockRoles.topOne);
    expect(user1.roles.add).toHaveBeenCalledWith(mockRoles.topFive);
    expect(user1.roles.add).toHaveBeenCalledWith(mockRoles.topTwenty);

    // User2 should get Top Five and Top Twenty roles
    const user2 = mockMembers.get('user2');
    expect(user2.roles.add).toHaveBeenCalledWith(mockRoles.topFive);
    expect(user2.roles.add).toHaveBeenCalledWith(mockRoles.topTwenty);

    // User2 should not have Top One
    expect(user2.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
  });

  it('removes roles from users who fall out of rank', async () => {
    User.find.mockResolvedValue([
      { userId: 'user2', score: 110 }, // User2 moves to rank 1
    ]);

    const user1 = mockMembers.get('user1');
    user1.roles.cache.add(mockRoles.topOne); // User1 previously had Top One

    await assignRoles(mockClient, 'guild-id');

    // User1 should lose Top One role
    expect(user1.roles.remove).toHaveBeenCalledWith(mockRoles.topOne);

    // User2 should now have Top One role
    const user2 = mockMembers.get('user2');
    expect(user2.roles.add).toHaveBeenCalledWith(mockRoles.topOne);
  });

  it('does not reassign roles unnecessarily', async () => {
    User.find.mockResolvedValue([
      { userId: 'user1', score: 100 },
      { userId: 'user2', score: 90 },
    ]);

    const user1 = mockMembers.get('user1');
    user1.roles.cache.add(mockRoles.topOne); // User1 already has Top One

    await assignRoles(mockClient, 'guild-id');

    // User1 should not have Top One reassigned
    expect(user1.roles.add).not.toHaveBeenCalledWith(mockRoles.topOne);
  });
});
