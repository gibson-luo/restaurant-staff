runfrontend:
	cd frontend && sh start.sh

runbackend:
	cd backend && sh start.sh

run:
	make -j2 runbackend runfrontend

.PHONY: runbackend runfrontend run