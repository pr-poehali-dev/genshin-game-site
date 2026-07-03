import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявки клиентов (контакт + услуга + сообщение) и сохраняет их в базу данных.
    Args: event с httpMethod, body (JSON: contact_type, contact_value, service, message); context с request_id
    Returns: HTTP ответ с результатом сохранения заявки
    """
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}

    body_data = json.loads(event.get('body') or '{}')
    contact_type = (body_data.get('contact_type') or '').strip()
    contact_value = (body_data.get('contact_value') or '').strip()
    service = (body_data.get('service') or '').strip()
    message = (body_data.get('message') or '').strip()

    if not contact_type or not contact_value:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'contact_type и contact_value обязательны'}),
        }

    dsn = os.environ['DATABASE_URL']
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    contact_type_esc = contact_type.replace("'", "''")
    contact_value_esc = contact_value.replace("'", "''")
    service_esc = service.replace("'", "''")
    message_esc = message.replace("'", "''")
    cur.execute(
        f"INSERT INTO leads (contact_type, contact_value, service, message) "
        f"VALUES ('{contact_type_esc}', '{contact_value_esc}', '{service_esc}', '{message_esc}') "
        f"RETURNING id"
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': new_id}),
    }
