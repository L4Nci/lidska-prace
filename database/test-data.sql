-- Zaměstnanci (stálí)
INSERT INTO employees (
    name, 
    is_contractor,
    pick_rate_mon, pick_rate_tue, pick_rate_wed, pick_rate_thu, pick_rate_fri,
    pack_rate_mon, pack_rate_tue, pack_rate_wed, pack_rate_thu, pack_rate_fri
) VALUES 
    ('Jan Novák', false, 85, 85, 85, 80, 75, 120, 120, 115, 110, 100),
    ('Petr Svoboda', false, 95, 95, 90, 90, 85, 110, 110, 105, 105, 100),
    ('Marie Dvořáková', false, 75, 75, 75, 70, 70, 130, 130, 125, 120, 115),
    ('Pavel Němec', false, 90, 90, 85, 85, 80, 115, 115, 110, 105, 100),
    ('Jana Černá', false, 80, 80, 75, 75, 70, 125, 125, 120, 115, 110),
    ('Tomáš Procházka', false, 88, 88, 85, 80, 75, 118, 118, 115, 110, 105),
    ('Lucie Veselá', false, 92, 92, 90, 85, 80, 122, 122, 120, 115, 110),
    ('Martin Kučera', false, 86, 86, 85, 80, 75, 116, 116, 115, 110, 105),
    ('Eva Marková', false, 83, 83, 80, 75, 70, 113, 113, 110, 105, 100),
    ('Karel Říha', false, 87, 87, 85, 80, 75, 117, 117, 115, 110, 105);

-- Brigádníci
INSERT INTO employees (
    name, 
    is_contractor,
    pick_rate_mon, pick_rate_tue, pick_rate_wed, pick_rate_thu, pick_rate_fri,
    pack_rate_mon, pack_rate_tue, pack_rate_wed, pack_rate_thu, pack_rate_fri
) VALUES 
    ('Adam Student', true, 65, 65, 65, 60, 60, 90, 90, 85, 85, 80),
    ('Petra Rychlá', true, 70, 70, 70, 65, 65, 95, 95, 90, 90, 85),
    ('Jan Malý', true, 60, 60, 60, 55, 55, 85, 85, 80, 80, 75),
    ('Eva Nová', true, 68, 68, 65, 65, 60, 93, 93, 90, 90, 85),
    ('David Král', true, 72, 72, 70, 70, 65, 97, 97, 95, 95, 90),
    ('Anna Tichá', true, 63, 63, 60, 60, 55, 88, 88, 85, 85, 80),
    ('Michal Šimek', true, 67, 67, 65, 65, 60, 92, 92, 90, 90, 85),
    ('Tereza Krátká', true, 69, 69, 65, 65, 60, 94, 94, 90, 90, 85),
    ('Filip Novotný', true, 71, 71, 70, 70, 65, 96, 96, 95, 95, 90),
    ('Klára Malá', true, 66, 66, 65, 65, 60, 91, 91, 90, 90, 85);
