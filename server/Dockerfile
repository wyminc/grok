FROM golang

# if left blank app will run with dev settings
# to build production image run:
# $ docker build ./api --build-args app_env=production
ARG app_directory=/app

# it is okay to leave user/GoDoRP as long as you do not want to share code with other libraries
WORKDIR ${app_directory}

COPY . ${app_directory}

# added vendor services will need to be included here
RUN go get ./vendor/database

RUN go get ./
RUN go build

# if dev setting will use pilu/fresh for code reloading via docker-compose volume sharing with local machine
# if production setting will build binary
CMD if [ ${APP_ENV} = production ]; \
	then \
	api; \
	else \
	go get github.com/pilu/fresh && \
	fresh; \
	fi
	
EXPOSE 8080