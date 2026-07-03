CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    contact_type VARCHAR(50) NOT NULL,
    contact_value VARCHAR(255) NOT NULL,
    service VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);