import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const todo1 = await prisma.todo.create({
    data: {
      title: '買い物',
      content: '今日の帰りに夕食の材料を買う',
    },
  });

  const todo2 = await prisma.todo.create({
    data: {
      title: '勉強',
      content: 'TOEICの勉強を１時間やる',
    },
  });

  const todo3 = await prisma.todo.create({
    data: {
      title: 'ゴミ出し',
      content: '次の火曜日は燃えないゴミの日なので忘れないように',
    },
  });
  const user1 = await prisma.users.create({
    data: {
      user_id: null,
      name: 'ソエジマトシキ',
      read_name: 'そえじまとしき',
      email: 'user1@example.com',
      comment: '始めたばかりですがよろしくお願いします。',
      age: 29,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=vB90USkxpnI',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user2 = await prisma.users.create({
    data: {
      user_id: null,
      name: '有賀教平',
      read_name: 'ありがきょうへい',
      email: 'user2@example.com',
      comment: 'バリバリギター弾けます！よろしくお願いします！',
      age: 35,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=udybzKvqu1Y',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user3 = await prisma.users.create({
    data: {
      user_id: null,
      name: '小川智也',
      read_name: 'おがわともなり',
      email: 'user3@example.com',
      comment: 'ジャズ大好きです！',
      age: 42,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=IJB_JZrtI8o',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user4 = await prisma.users.create({
    data: {
      user_id: null,
      name: '宇田大志',
      read_name: 'うだたいし',
      email: 'user4@example.com',
      comment: 'youtubeやってます、よかったらみてください',
      age: 32,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=6C1ZC6db2LI',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user5 = await prisma.users.create({
    data: {
      user_id: null,
      name: 'ピンハゲ',
      read_name: 'ぴんはげ',
      email: 'user5@example.com',
      comment: 'ベースたのしー ',
      age: 38,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=3Jp58oHgenc',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user6 = await prisma.users.create({
    data: {
      user_id: null,
      name: 'H.J.Freaks',
      read_name: 'えいちじぇーふりーくす',
      email: 'user6@example.com',
      comment: 'コスプレとかしてます。',
      age: 50,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=uDDjYHAVU8A',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user7 = await prisma.users.create({
    data: {
      user_id: null,
      name: 'マイキ',
      read_name: 'まいき',
      email: 'user7@example.com',
      comment: 'youtubeで色々カバーしてます。',
      age: 22,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: 'https://www.youtube.com/watch?v=mEQgHCo9ftc',
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user8 = await prisma.users.create({
    data: {
      user_id: null,
      name: 'panpiano',
      read_name: 'ぱんぴあの',
      email: 'user8@example.com',
      comment: 'コスプレ演奏やってます。',
      age: 31,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: null,
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user9 = await prisma.users.create({
    data: {
      user_id: null,
      name: '山田太郎',
      read_name: 'やまだたろう',
      email: 'user9@example.com',
      comment: '一般人です。',
      age: 25,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: null,
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
  const user10 = await prisma.users.create({
    data: {
      user_id: null,
      name: '田中次郎',
      read_name: 'たなかじろう',
      email: 'user10@example.com',
      comment: '最近楽器始めました。',
      age: 40,
      prefecture_id: null,
      preference_id: null,
      practice_cycle_id: null,
      performance_url: null,
      created_at: new Date('2020-04-01'),
      updated_at: null,
      deleted_at: null,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
