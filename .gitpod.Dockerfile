FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i learnpack@0.0.9 -g && learnpack plugins:install learnpack-html@0.0.17
