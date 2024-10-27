generate-coverage:
	bun test:coverage
	genhtml -o coverage/html coverage/lcov.info

open-coverage:
	open coverage/html/index.html