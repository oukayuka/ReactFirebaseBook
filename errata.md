# 『りあクト！ Firebase で始めるサーバーレス React 開発』の正誤表

## 本書について

### サンプルコードご利用の注意

p.7

※使用している主なソフトウェアのバージョンは不定期に更新されます。それにともなって、本文中のバージョンを指定している実行コマンド等の記述も変更されます。

p.8

```diff
-stylelint（shinn.stylelint）　…… stylelint と連携してエディタ内で CSS の文法チェックを行う。
+stylelint-plus（hex-ci.stylelint-plus）　…… stylelint と連携してエディタ内で CSS の文法チェックを行う。auto fix on save に対応。
```

p.9

```diff
+・1章以降、プロジェクトルートの .firebaserc.sample を .firebaserc にリネームし、その中のデフォルトプロジェクトIDを読者ご自身が作成した Firebase プロジェクトのプロジェクトIDに書き換える（またはご自身で firebase init を実行する）
・2章以降、Firebase のコンソールで生成した秘密鍵ファイルを functions/src/ 配下にmangarel-demo-firebase-adminsdk.json として設置する
・3-3. Rakuten Developers にご自身で登録したアプリの楽天アプリID を functions/src/index.ts 内の定数 RAKUTEN_APP_ID に設定する
-・3-4以降、functions/.runtimeconfig.sample.json を .runtime.config.json にリネームし、その中で読者ご自身が登録した楽天アプリID を設定する
+・3-4以降、functions/.runtimeconfig.sample.json を .runtimeconfig.json にリネームし、その中で読者ご自身が登録した楽天アプリID を設定する
・5章以降、プロジェクトルートの .env.sample を .env としてコピーし、Firebase のコンソールから参照できる APIキーやアプリID をその中に記述する
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
-秋谷さんも Google のアカウントって盛ってるの
+秋谷さんも Google のアカウントって持ってるの
```

p.20

```diff
-Firebase では Hosting で .firebase.app と .web.app の二つのドメインが使える
+Firebase では Hosting で .firebaseapp.com と .web.app の二つのドメインが使える
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

p.32

```diff
-さっきと同様、TXTレコードの記述を上書きする形で
+さっきの TXTレコードの記述に追記する形で
```

p.40

```diff
     case collectionName.publishers: {
-      const docs =
+      const doc: Required<Publisher>[] =
         records.map((record: Publisher) => ({
  ︙
       for await (const doc of docs) {
-        const { id } = doc;
-        const docWithoutId = { ...doc };
-        delete docWithoutId.id;
+        const { id, ...docWithoutId } = doc;
         await ref.doc(id).set(docWithoutId);
       }
```

p.42

```diff
-さっきも言ったけど、Firestore ドキュメントの ID はドキュメントの外にあるから、すぐ上でオブジェクトからID値を抜き出した後、そのキーと値を除去してるわけ」
+さっきも言ったけど、Firestore ドキュメントの ID はドキュメントの外にあるから、オブジェクトから ID とそれ以外のデータを分けて抜き出してこのオペレーションをやってるわけ」
```

p.45

```diff
-公式からも大量のデータの削除はFirebase CLIから実行することが推奨されてる死ね。
+公式からも大量のデータの削除はFirebase CLIから実行することが推奨されてるしね。
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

p.100

```diff
-・react-routerと、そのHooksインターフェース（非公式）のuse-react-router
+・react-router
```

```diff
-$ yarn add react-router react-router-dom use-react-router @emotion/core @emotion/styled  semantic-ui-react semantic-ui-css date-fns lodash sprintf-js
+$ yarn add react-router react-router-dom @emotion/core @emotion/styled  semantic-ui-react semantic-ui-css date-fns lodash sprintf-js
```

p.107

```diff
-const Home: FC = () => {
+const CalendarContainer: FC = () => {
   const { books, loading } = useBooks({ limit: 50 });

   return <Calendar books={books} loading={loading} />;
 };

-export default Home;
+export default CalendarContainer;
```

p.108

```diff
-type booksOptions = {
+type BooksOptions = {
   limit?: number;
 };
-const defaultOptions: booksOptions = {
+const defaultOptions: Requied<BooksOptions> = {
   limit: 30,
 };

-onst useBooks = (options?: booksOptions) => {
+const useBooks = (options?: BooksOptions) => {
 ︙
       .orderBy('publishedOn', 'asc')
-      .limit(optionsRef.current.limit!);
+      .limit(optionsRef.current.limit);
```

p.110

```diff
-type searchOptions = {
+type SearchOptions = {
   limit?: number;
 };
-const defaultOptions: searchOptions = {
+const defaultOptions: Required<SearchOptions> = {
   limit: 30,
 };
 ︙
 const buildQuery = (
   collection: firebase.firestore.CollectionReference,
   q: string,
-  options: searchOptions,
+  options: Required<SearchOptions>,
 ) => {
-  let query = collection.limit(options.limit!);
+  let query = collection.limit(options.limit);
```
