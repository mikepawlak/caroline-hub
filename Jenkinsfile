pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building"
                slackSend color: 'good', message: 'Starting job for caroline-hub...'
                sh "node -v"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                echo "Testing"
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo 'pulling in Helm Chart'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'helm']], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/mikepawlak/caroline-hub-helm-chart.git']]])
                sh "cd helm"
                sh "kubectl kube-pi"
                sh "helm upgrade caroline-hub /helm-chart"
            }
        }
    }
}