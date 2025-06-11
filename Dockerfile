# Usamos una imagen de sistema operativo ligera como base
FROM debian:stable-slim

# Instalar las herramientas necesarias:
# openssh-server: para poder conectarnos por SSH.
# libimage-exiftool-perl: la herramienta 'exiftool' para manipular metadatos.
RUN apt-get update && apt-get install -y \
    openssh-server \
    libimage-exiftool-perl \
    && rm -rf /var/lib/apt/lists/*

# Crear un usuario para el escenario (es más realista que usar root)
RUN useradd -m -s /bin/bash chickenjockey
# Establecer una contraseña simple para el CTF
RUN echo 'chickenjockey:mish' | chpasswd

# Crear una carpeta para los documentos del usuario
RUN mkdir -p /home/analista_jr/documentos

# Copiar tu imagen 'lol.jpg' desde tu PC al interior del contenedor
COPY ./archivos-iniciales/lol.jpg /home/chickenjockey/documentos/

# Asignar el propietario correcto a los archivos del usuario
RUN chown -R chickenjockey:chickenjockey /home/chickenjockey

# Configurar SSH para permitir el login con contraseña (solo para el CTF)
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config

# Exponer el puerto 22 para conexiones SSH
EXPOSE 22

# Comando final para iniciar el servidor SSH.
# Incluimos la creación del directorio que causó problemas anteriormente.
CMD mkdir -p /run/sshd && /usr/sbin/sshd -D