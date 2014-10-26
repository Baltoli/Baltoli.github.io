all: css

css:
	rm -f style.css
	sassc sass/style.sass > style.css
