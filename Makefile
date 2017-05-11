PRODUCTS = process.dot.svg

all: $(PRODUCTS)

process.dot.svg: process.dot
	dot -O -Tsvg $<

clean:
	rm -f $(PRODUCTS)
