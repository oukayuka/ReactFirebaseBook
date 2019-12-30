# 『りあクト！ Firebase で始めるサーバーレス React 開発』の正誤表

## 注意

内容は随時アップデートされます。なおページの指定は「修正前（修正後）」のフォーマットで記述されています。

p.6（p.6）

```diff
-React歴は三年年を超えたところ。
+React歴は三年を超えたところ。
```

p.7（p.7）

※使用している主なソフトウェアのバージョンは不定期に更新されます。それにともなって、本文中のバージョンを指定している実行コマンド等の記述も変更されます。

p.8（p.8）

```diff
-stylelint（shinn.stylelint）　…… stylelint と連携してエディタ内で CSS の文法チェックを行う。
+stylelint-plus（hex-ci.stylelint-plus）　…… stylelint と連携してエディタ内で CSS の文法チェックを行う。auto fix on save に対応。
```

p.9（p.9）

```diff
+・1章以降、プロジェクトルートの .firebaserc.sample を .firebaserc にリネームし、その中のデフォルトプロジェクトIDを読者ご自身が作成した Firebase プロジェクトのプロジェクトIDに書き換える（またはご自身で firebase init を実行する）
・2章以降、Firebase のコンソールで生成した秘密鍵ファイルを functions/src/ 配下にmangarel-demo-firebase-adminsdk.json として設置する
・3-3. Rakuten Developers にご自身で登録したアプリの楽天アプリID を functions/src/index.ts 内の定数 RAKUTEN_APP_ID に設定する
-・3-4以降、functions/.runtimeconfig.sample.json を .runtime.config.json にリネームし、その中で読者ご自身が登録した楽天アプリID を設定する
+・3-4以降、functions/.runtimeconfig.sample.json を .runtimeconfig.json にリネームし、その中で読者ご自身が登録した楽天アプリID を設定する
・5章以降、プロジェクトルートの .env.sample を .env としてコピーし、Firebase のコンソールから参照できる APIキーやアプリID をその中に記述する

　なお、サンプルコードはGitHubの以下のリポジトリに章ごとに掲載しています。
　https://github.com/oukayuka/ReactFirebaseBook

+　また本文中に引用しているサンプルコードの内容は、ときおり説明を簡略化するために記述を省略している箇所があります（例： eslint-disable によるコメントアウト）。そのため、そのまま手で写してもエラーになることがありますので、動作確認時には上記のリポジトリからダウンロードしてきたものを実行するようにしてください。
```

p.18-19（p.18-19）

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

p.19（p.19）

```diff
-秋谷さんも Google のアカウントって盛ってるの
+秋谷さんも Google のアカウントって持ってるの
```

p.20（p.20）

```diff
-Firebase では Hosting で .firebase.app と .web.app の二つのドメインが使える
+Firebase では Hosting で .firebaseapp.com と .web.app の二つのドメインが使える
```

p.28（p.28-29）

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

p.32（p.32）

```diff
-さっきと同様、TXTレコードの記述を上書きする形で
+さっきの TXTレコードの記述に追記する形で
```

p.39（p.40）

```diff
     case collectionName.publishers: {
-      const docs =
+      const docs: Required<Publisher>[] =
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

p.41（p.42）

```diff
-さっきも言ったけど、Firestore ドキュメントの ID はドキュメントの外にあるから、すぐ上でオブジェクトから ID値を抜き出した後、そのキーと値を除去してるわけ」
+さっきも言ったけど、Firestore ドキュメントの ID はドキュメントの外にあるから、オブジェクトから ID とそれ以外のデータを分けて抜き出してこのオペレーションをやってるわけ」
```

p.45（p.46）

```diff
-公式からも大量のデータの削除は Firebase CLI から実行することが推奨されてる死ね。
+公式からも大量のデータの削除は Firebase CLI から実行することが推奨されてるしね。
```

p.51（p.52）

```diff
-このローカルサーもホットリロードが効くようになってるよ。
+このローカルサーバもホットリロードが効くようになってるよ。
```

p.59（p.60）

```diff
-「だからまずその出版社のデータを全権取得して、
+「だからまずその出版社のデータを全件取得して、
```

p.61（p.62）

```diff
-firebase > fetchCalendear()
+firebase > fetchCalendar()
```

```diff
-import { subdays } from 'date-fns';
+import { subDays } from 'date-fns';
```

p.71（p.72）

```diff
-「必要なnpmをちゃんと両方の packate.json に入れておく必要があるけどね。
+「必要なnpmをちゃんと両方の package.json に入れておく必要があるけどね。
```

p.74（p.75）

```diff
-「うん。じゃあこれでデプロイしてみよう。npm scripts に仕込んでおいたから yarn deploy で実行できるよ」
+「うん。じゃあこれでデプロイしてみよう。npm scripts に仕込んでおいたので、functions/ ディレクトリから yarn deploy で実行できるよ」
```

p.81（p.82）

```diff
-データモデリングのときに先々のUIを性格に予想して使われるクエリーをあぶり出して設計しないといけないですよね。
+データモデリングのときに先々のUIを正確に予想して使われるクエリーをあぶり出して設計しないといけないですよね。
```

p.94（p.95）

```diff
-words.forEach(word => {
+words.forEach(token => {
  query = query.where(`tokenMap.${token}`, '==', true);
 });
```

p.95（p.96）

```diff
-数値やアルファベットの全角文字を半角にするhallfWiden()、
+数値やアルファベットの全角文字を半角にするhalfWiden()、
```

p.98（p.100）

```diff
-・react-routerと、そのHooksインターフェース（非公式）のuse-react-router
+・react-router
```

```diff
-$ yarn add react-router react-router-dom use-react-router @emotion/core @emotion/styled  semantic-ui-react semantic-ui-css date-fns lodash sprintf-js
+$ yarn add react-router react-router-dom @emotion/core @emotion/styled  semantic-ui-react semantic-ui-css date-fns lodash sprintf-js
```

p.105（p.107）

```diff
-const Home: FC = () => {
+const CalendarContainer: FC = () => {
   const { books, loading } = useBooks({ limit: 50 });

   return <Calendar books={books} loading={loading} />;
 };

-export default Home;
+export default CalendarContainer;
```

p.106（p.108）

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

p.108（p.110）

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

p.117（p.119）

```diff
   user: null,
   credential: null,
-  setCredential: () => {},
+  setCredential: () => undefined,
 });
```

p.120（p.122）

```diff
 import React, { FC, useContext } from 'react';
-import useReactRouter from 'use-react-router';
+import { useHistory } from 'react-router';
 import firebase from 'firebase/app';
 import styled from '@emotion/styled';
 ︙
 const Signin: FC = () => {
   const { auth } = useContext(FirebaseContext);
   const { setCredential } = useContext(UserContext);
-  const { history } = useReactRouter();
+  const history = useHistory();
   const uiConfig: firebaseui.auth.Config = {
```

p.122（p.124）

```diff
-一見シンプルなこのコードに行き着くまでの雪菜さん試行錯誤した跡がうかがえます」
+一見シンプルなこのコードに行き着くまでの雪菜さんが試行錯誤した跡がうかがえます」
```

p.128（p.130）

```diff
-現状のルールをプロジェクトルートの firesotre.rules にコピペしておこう。
+現状のルールをプロジェクトルートの firestore.rules にコピペしておこう。
```
