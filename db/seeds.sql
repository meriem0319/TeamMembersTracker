-- inserting dummy data into departments, roles, employees
-- used generatedata.com 

INSERT INTO departments (name)
VALUES 
('Engineering'), 
('Product Management'),
('Business Development'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Senior Developer', 150000, 1),
('Computer Systems Analyst', 189000, 1), 
('Database Administrator' 69000, 3),
('Analyst Programmer', 80000, 2,)
('Project Manager', 55000, 3),
('Quality Engineer', 90000, 4),
('Data Coordiator', 45000, 3),
('Sales Associate', 38000, 4);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Joel', 'Finch', 1, 1),
('Rosalyn', 'Carey', 2, 1), 
('Susan', 'Clark', 2, 2),
('Shafira', 'Lara', 3, 2),
('Caesar', 'Misselbrook', 1, 4),
('Martina', 'Doull', 3, 2),
('Terrence', 'Heephy', 4, 4),
('Angelica', 'Stanton', 1, 3);