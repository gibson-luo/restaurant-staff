runfrontend:
	cd frontend && sh start.sh

runbackend:
	cd backend && sh start.sh

run:
	make -j2 runbackend runfrontend

test:
	cd backend && npm test

.PHONY: runbackend runfrontend run test