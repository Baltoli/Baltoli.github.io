PRODUCTS = process.dot.svg auto.dot.svg

all: $(PRODUCTS)

%.dot.svg: %.dot
	dot -O -Tsvg $<

clean:
	rm -f $(PRODUCTS)
