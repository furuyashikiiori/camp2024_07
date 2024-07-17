# camp2024_07

API サーバー立ち上げ
`cd api`   <!-- "apiディレクトリに移動" -->
`uvicorn main:app --reload`

React サーバー立ち上げ
`cd my-react-app`<!-- "my-react-appディレクトリに移動" -->
`npm start`


Docker 起動コマンド
`cd api`  <!-- "apiディレクトリに移動" -->
`docker compose up -d`

Docker 再起動コマンド
`cd api`  <!-- "apiディレクトリに移動" -->
`docker compose down` で終了する  <!-- 終了する場合はこのコマンドを打って終わる -->
`docker compose up -d` で再起動する

#### memo
pgAdminサイト（データベースを可視化できるサイト）への移動の仕方

ブラウザから`http://localhost:81`と入力して、サイトへ移動する
ログイン画面に行く場合
- メールアドレス : camp202407@example.com
- パスワード : password
- 言語 : Japanese を選択


#### 仮想環境に追加したもの
ORMの追加（今回はSQLAlchemyを採用）
- `pip install sqlalchemy`
DBマイグレーションの追加（安全にデータベースのテーブルの中身を変更できる設定をするやつ）
- `pip install alembic psycopg2-binary`

#### alembicの初期設定コマンド -> これはmitsukiがやったからいらないかも
- `cd api`
- `alembic init migrations`
- `alembic revision --autogenerate -m "Create todos table"`
- `alembic upgrade head`

