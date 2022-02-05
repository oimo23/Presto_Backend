# Presto Backend

## 起動方法
1. パッケージインストール
```
yarn install
```

2. DB起動
```
docker-compose up presto-db
```

3. テーブル作成
```
npx prisma db push
```

4. 初期データ投入
```
npx prisma db seed
```

5. 起動
```
yarn start
```

## コンテナで起動
DB起動、テーブル作成、初期データ投入を実施後

```
docker-compose up presto-backend
```