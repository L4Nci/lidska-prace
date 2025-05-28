-- Vytvoření tabulky employees s výkony pro každý den
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    is_contractor BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    pick_rate_mon INTEGER DEFAULT 0,
    pick_rate_tue INTEGER DEFAULT 0,
    pick_rate_wed INTEGER DEFAULT 0,
    pick_rate_thu INTEGER DEFAULT 0,
    pick_rate_fri INTEGER DEFAULT 0,
    pack_rate_mon INTEGER DEFAULT 0,
    pack_rate_tue INTEGER DEFAULT 0,
    pack_rate_wed INTEGER DEFAULT 0,
    pack_rate_thu INTEGER DEFAULT 0,
    pack_rate_fri INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Vytvoření tabulky pro směny
CREATE TABLE shifts (
    id SERIAL PRIMARY KEY,
    day_of_week INTEGER CHECK (day_of_week BETWEEN 0 AND 6),
    hours DECIMAL(4,2) NOT NULL,
    UNIQUE(day_of_week)
);

-- Vložení výchozích směn
INSERT INTO shifts (day_of_week, hours) VALUES 
(1, 10), -- pondělí
(2, 10), -- úterý
(3, 10), -- středa
(4, 7),  -- čtvrtek
(5, 7);  -- pátek

-- Vložení testovacích dat
INSERT INTO employees (
    name, 
    is_contractor,
    pick_rate_mon, pick_rate_tue, pick_rate_wed, pick_rate_thu, pick_rate_fri,
    pack_rate_mon, pack_rate_tue, pack_rate_wed, pack_rate_thu, pack_rate_fri
) VALUES 
('Jan Novák', false, 85, 85, 85, 85, 85, 120, 120, 120, 120, 120),
('Petr Svoboda', false, 95, 95, 95, 95, 95, 110, 110, 110, 110, 110),
('Marie Dvořáková', true, 75, 75, 75, 75, 75, 130, 130, 130, 130, 130);
