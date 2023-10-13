import sqlite3

def create_tables():
    conn = sqlite3.connect('auto_rickshaw.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS rides (
            id INTEGER PRIMARY KEY,
            driver_name TEXT,
            origin TEXT,
            destination TEXT,
            fare INTEGER
        )
    ''')

    conn.commit()
    conn.close()
