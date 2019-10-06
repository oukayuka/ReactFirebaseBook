# 『りあクト！ Firebase で始めるサーバーレス React 開発』のサンプルコード

このリポジトリは、技術書典 7 にて頒布された同人誌『りあクト！ Firebase で始めるサーバーレス React 開発』のサンプルコードです。なお、本書は以下のサイトにて販売中です。

- [BOOTH で販売中の PDF 版](https://booth.pm/ja/items/1572683)
- [とらのあなにて販売中の物理本](https://ec.toranoana.shop/tora/ec/item/040030776883/)

## ⚠ サンプルコードご利用の注意

このリポジトリに登録されているサンプルコードは、ご自身で各種サービスに登録してそのキーなどを適切に設定しないとダウンロードしたままでは動作しません。本文各章の説明をご覧になった上で、その手順に従って必要な設定を行ってください。

- １章以降、プロジェクトルートの .firebaserc.sample を .firebaserc にリネームし、その中のデフォルトプロジェクト ID を読者ご自身が作成した Firebase プロジェクトのプロジェクト ID に書き換える（またはご自身で `firebase init` を実行する）
- ２章以降、Firebase のコンソールで生成した秘密鍵ファイルを functions/src/ 配下に mangarel-demo-firebase-adminsdk.json として設置する
- 3-3. [Rakuten Developers](https://webservice.rakuten.co.jp/) にご自身で登録したアプリの楽天アプリ ID を functions/src/index.ts 内の定数 RAKUTEN_APP_ID に設定する
- 3-4 以降、functions/.runtimeconfig.sample.json を .runtimeconfig.json としてコピーし、その中で楽天アプリ ID を設定する
- ５章以降、プロジェクトルートの .env.sample を .env としてコピーし、Firebase のコンソールから参照できる API キーやアプリ ID をその中に記述する

## 正誤表

電子版は随時アップデートをかけていますので、購入サイトから最新版をダウンロードしてください。  
紙の本の正誤表につきましては、[こちらのページ](./errata.md)をご覧ください。

## 《目次》

### 第１章　プロジェクトの作成と環境構築（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/01-env/mangarel-demo)）

- 1-1. 基本環境を作る
- 1-2. Firebase プロジェクトの作成と初期化
- 1-3. Cloud Functions の環境整備
- 1-4. 独自ドメインを設定する

### 第２章　 Seed データ投入スクリプトを作る（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/02-seed/mangarel-demo)）

- 2-1. データベースの作成と Admin 環境の整備
- 2-2. データ投入スクリプトの作成
- 2-3. npm scripts として登録する

### 第３章　 Cloud Functions でバックエンド処理

- 3-1. 簡単な HTTP 関数を作ってみる（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/03-functions/01-publishers/mangarel-demo)）
- 3-2. クローラーをスケジュール設定関数にする（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/03-functions/02-crawler/mangarel-demo)）
- 3-3. スケジュール設定関数をデプロイする
- 3-4. Cloud Functions 中上級編 Tips（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/03-functions/04-advanced/mangarel-demo)）

### 第４章　 Firestore を本気で使いこなす（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/04-firestore/mangarel-demo)）

- 4-1. Firestore と RDB の違いと各種制限について
- 4-2. Firestore のクエリーとインデックス
- 4-3. Firestore の配列の取り扱い
- 4-4. Firestore で日時を扱う際の注意
- 4-5. Firestore のデータモデリング
- 4-6. Firestore だけで全文検索を実現する

### 第５章　 React でフロントエンドを構築する（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/05-react/mangarel-demo)）

- 5-1. フロントエンド環境の整備
- 5-2. Context でグローバルな State を持つ
- 5-3. Hooks で副作用処理を行う

### 第６章　 Firebase Authentication によるユーザー認証（[サンプルコード](https://github.com/oukayuka/ReactFirebaseBook/tree/master/06-auth/mangarel-demo)）

- 6-1. 認証機能を導入するための準備
- 6-2. ログイン機能の実装
- 6-3. Firestore にセキュリティルールを適用する

![](https://booth.pximg.net/a6bb6149-3c80-4a32-af82-d43ef5505047/i/1572683/5b89ac48-5ee9-4564-8a88-c9821e4b2070_base_resized.jpg)

© 2019 [くるみ割り書房 / Nutcracker Publishing](https://oukayuka.booth.pm/)
