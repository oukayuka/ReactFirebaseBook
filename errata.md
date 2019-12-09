# 『りあクト！ Firebase で始めるサーバーレス React 開発』の正誤表

## 本書について

### サンプルコードご利用の注意

p.7

※使用している主なソフトウェアのバージョンは不定期に更新されます。それにともなって、本文中のバージョンを指定している実行コマンド等の記述も変更されます。

p.9

```diff
+・1章以降、プロジェクトルートの .firebaserc.sampleを.firebasercにリネームし、その中のデフォルトプロジェクトIDを読者ご自身が作成したFirebaseプロジェクトのプロジェクトIDに書き換える（またはご自身でfirebase initを実行する）
・2章以降、Firebaseのコンソールで生成した秘密鍵ファイルをfunctions/src/ 配下にmangarel-demo-firebase-adminsdk.jsonとして設置する
・3-3. Rakuten Developersにご自身で登録したアプリの楽天アプリIDをfunctions/src/index.ts内の定数RAKUTEN_APP_IDに設定する
-・3-4以降、functions/.runtimeconfig.sample.jsonを.runtime.config.jsonにリネームし、その中で読者ご自身が登録した楽天アプリIDを設定する
+・3-4以降、functions/.runtimeconfig.sample.jsonを.runtimeconfig.jsonにリネームし、その中で読者ご自身が登録した楽天アプリIDを設定する
・5章以降、プロジェクトルートの.env.sampleを.envとしてコピーし、Firebaseのコンソールから参照できるAPIキーやアプリIDをその中に記述する
```

p.18-19

```diff
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject",
-    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}' functions/**/*.ts; stylelint 'src/**/*.css'"
+    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'; stylelint 'src/**/*.{css,jsx,tsx}'; cd functions/ && eslint 'src/**/*.{js,ts}'",
  ︙
   "lint-staged": {
-    "*.{js,jsx,ts,tsx}": [
-      "eslint --fix",
-      "git add"
-    ],
-    "*.css": [
-      "stylelint --fix",
-      "git add"
-    ]
+    "src/**/*.{js,jsx,ts,tsx}": [
+      "eslint --fix",
+      "git add"
+    ],
+    "src/**/*.{css,jsx,tsx}": [
+      "stylelint --fix",
+      "git add"
+    ],
+    "functions/src/**/*.{js,ts}": [
+      "cd functions/ && eslint --fix",
+      "git add"
+    ]
   },
```

p.19

```diff
-秋谷さんもGoogleのアカウントって盛ってるの
+秋谷さんもGoogleのアカウントって持ってるの
```

p.20

```diff
-FirebaseではHostingで .firebase.appと.web.appの二つのドメインが使える
+FirebaseではHostingで .firebaseapp.comと.web.appの二つのドメインが使える
```

p.28-29

```diff
 {
   "compilerOptions": {
     "esModuleInterop": true,
     "lib": ["dom", "esnext"],
     "module": "commonjs",
+    "moduleResolution": "node",
     "noImplicitReturns": true,
     "noUnusedLocals": true,
     "outDir": "lib",
+    "removeComments": true,
     "resolveJsonModule": true,
+    "rootDir": "src",
     "sourceMap": true,
     "strict": true,
     "target": "es2017",
     "types": ["jest", "node"],
+    "typeRoots": ["node_modules/@types", "../node_modules/@types"]
   },
   "compileOnSave": true,
   "include": ["src"],
   "exclude": ["node_modules"]
 }
```

p.45

```diff
-公式からも大量のデータの削除はFirebase CLIから実行することが推奨されてる死ね。
+公式からも大量のデータの削除はFirebase CLIから実行することが推奨されてるしね。
```

p.51

```diff
-このローカルサーもホットリロードが効くようになってるよ。
+このローカルサーバもホットリロードが効くようになってるよ。
```

p.94

```diff
-words.forEach(word => {
+words.forEach(token => {
  query = query.where(`tokenMap.${token}`, '==', true);
 });
```

p.95

```diff
-数値やアルファベットの全角文字を半角にするhallfWiden()、
+数値やアルファベットの全角文字を半角にするhalfWiden()、
```

p.105

```diff
-const Home: FC = () => {
+const CalendarContainer: FC = () => {
   const { books, loading } = useBooks({ limit: 50 });

   return <Calendar books={books} loading={loading} />;
 };

-export default Home;
+export default CalendarContainer;
```
