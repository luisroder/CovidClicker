# Run
FROM --platform=linux/amd64 nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Erstelle Verzeichnisse für HTML, CSS, JS und Resources im Container
RUN mkdir -p /usr/share/nginx/html

# Kopiere den Inhalt der entsprechenden Ordner in die Verzeichnisse im Container
COPY . /usr/share/nginx/html