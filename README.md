# Presto Backend

## 起動方法
### パッケージインストール
```
yarn install
```

### DB起動
```
docker-compose up
```

### テーブル作成
```
npx prisma migrate dev --name initial-migration --create-only
```

### 初期データ投入
```
npx prisma db seed
```

### Prisma Clientの作成
```
npx prisma generate
```