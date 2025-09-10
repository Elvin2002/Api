CREATE TABLE categoria(
    id int not null auto_increment primary key ,
    codigo varchar(255) not null,
    nombre varchar(255) not null,
    descripcion text
    id_categ_padre int,
    activo boolean,
    fecha_creacion timestamps,
    fecha_actualizacion timestamps
)