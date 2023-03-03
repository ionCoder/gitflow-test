FROM node:18

RUN echo "*****************Content of sources.list**************"
RUN cat /etc/apt/sources.list

RUN echo "deb http://deb.debian.org/debian bullseye main" >> /etc/apt/sources.list
RUN echo "deb http://deb.debian.org/debian-security bullseye-security main" >> /etc/apt/sources.list
RUN echo "deb http://deb.debian.org/debian bullseye-updates main" >> /etc/apt/sources.list

RUN echo "***************Content of sources.list*****************"
RUN cat /etc/apt/sources.list

RUN npm i -g cypress@9.7.0

RUN apt-get update -y \
&& apt-get install -y libgtk2.0-0 \
&& apt-get install -y libgtk-3-0 \
&& apt-get install -y libgbm-dev \
&& apt-get install -y libnotify-dev \
&& apt-get install -y libgconf-2-4 \
&& apt-get install -y libnss3 \
&& apt-get install -y libxss1 \
&& apt-get install -y libasound2 \
&& apt-get install -y libxtst6 \
&& apt-get install -y xauth \
&& apt-get install -y xvfb