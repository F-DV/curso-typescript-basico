# curso-typescript-basico

## Iniciar a Desarrollar con Typescript
	1) Creamos carpeta para proyecto y creamos el primer archivo que es git ignore, ingresamos a la pagina de gitignore para crear un buen gitignore https://www.toptal.com/developers/gitignore/
	
	
	
	Copiamos y pegamos el create.
	
	2) Creamos otro archivo .editorconfig y pegamos tenemos instaladoo el plugin editorconfig, sirve para que todos los del equito trabajemos con la misma configuracion:
	
	# Editor configuration, see https://editorconfig.org root = true [*] charset = utf-8 indent_style = space indent_size = 2 insert_final_newline = true trim_trailing_whitespace = true [*.ts] quote_type = single [*.md] max_line_length = off trim_trailing_whitespace = false 
	
	
	3) creamos typescript para el proyecto
	
	npm init -y
	npm install typescript --save -dev
  npx tsc --version
