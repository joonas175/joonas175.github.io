pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                git 'https://github.com/joonas175/portfolio'
                sh 'docker build -t portfolio .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker ps -f name=portfolio -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -fname=portfolio -q | xargs -r docker container rm'
                sh 'docker run -d -p 3000:5432 --restart unless-stopped --name portfolio portfolio'
            }
        }
    }
}