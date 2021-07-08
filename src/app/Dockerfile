#pull official base image
FROM python:3.6-alpine

#set Working directory
WORKDIR /usr/src/app

#set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

#install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev \
    && apk add zlib-dev jpeg-dev libffi-dev openssl-dev

#install dependencies
RUN pip install --upgrade pip 
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

#copy project
COPY . /usr/src/app/

#run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]