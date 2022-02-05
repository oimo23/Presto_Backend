import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const todo1 = await prisma.todo.create({
    data: {
      title: '買い物',
      content: '今日の帰りに夕食の材料を買う',
    }
  })

  const todo2 = await prisma.todo.create({
    data: {
      title: '勉強',
      content: 'TOEICの勉強を１時間やる',
    }
  })

  const todo3 = await prisma.todo.create({
    data: {
      title: 'ゴミ出し',
      content: '次の火曜日は燃えないゴミの日なので忘れないように',
    }
  })
}

main()
.catch(e => {
  console.error(e)
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
})