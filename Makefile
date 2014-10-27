all: css

deploy: prod
	git push

css:
	rm -f style.css
	sassc sass/main.sass > style.css

prod:
	yuicompressor style.css > min.css
	rm -f style.css
	mv min.css style.css
	rm -f min.css
