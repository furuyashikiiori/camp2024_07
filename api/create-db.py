import sqlite3

# データベースに接続（ファイルが存在しない場合は作成されます）
conn = sqlite3.connect('test.db')

# カーソルを取得
cur = conn.cursor()

# テーブル作成クエリ
create_table_query = """
CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT NOT NULL,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
"""

# テーブル作成
cur.execute(create_table_query)

# コミットして接続を閉じる
conn.commit()
conn.close()

print("Database and table created successfully.")
