pipeline {
    agent any

    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t portfolio .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker ps -f name=portfolio -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -fname=portfolio -q | xargs -r docker container rm'
                sh 'docker run -d -p 5432:3000 --restart unless-stopped --name portfolio portfolio'
            }
        }
    }
}