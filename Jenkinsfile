pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                slackSend color: 'good', message: 'Starting job for caroline-hub...'
                sh "node -v"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}