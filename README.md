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

## Swagger
### Swagger UI起動

```
docker-compose up swagger-ui
```

起動後ブラウザで以下のURLを開く
```
http://localhost:8001
```

### モックサーバー起動

```
docker-compose up swagger-api
```

起動後ターミナルなどで以下のコマンドを叩くとモックサーバから`presto-oppenapi.yaml`に記載したサンプルレスポンスが返却される。
```
curl -i -X GET "http://localhost:8002/api/users/me" -H "Authorization: Bearer token" 
```
※Authorizationヘッダーに適当なBearerトークンを設定する必要があるので注意

### Swagger通りに実装されているか検証

```
yarn verify:dredd
```

### API クライアントを生成

```
yarn generate
```

### yamlをReDocに変換

```
npx redoc-cli bundle ./doc/api/presto-openapi.yaml -o ./doc/api/presto-openapi.html 
```
