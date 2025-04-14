dev:
	deno task serve

deploy:
	deno task build
	git checkout main
	cp -r _site/* .
	git add .
	git commit -m "lume $(date)"
	git push origin
	git checkout -