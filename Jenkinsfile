pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
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