# Presto Backend

## 起動方法
1. パッケージインストール
```
yarn install
```

2. DB起動
```
docker-compose up
```

3. テーブル作成
```
npx prisma migrate dev --name initial-migration --create-only
```

4. 初期データ投入
```
npx prisma db seed
```

5. Prisma Clientの作成
```
npx prisma generate
```

6. 起動
```
yarn start
```