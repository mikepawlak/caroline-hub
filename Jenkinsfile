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
                sh "export KUBECONFIG=../../config:$HOME/.kube/config"
                sh "cat ../../config"
                sh "cd helm"
                sh "kubectl config use-context kubernetes-admin@kubernetes && kubectl config get-contexts"
                sh "helm upgrade caroline-hub /helm-chart"
            }
        }
    }
    // post { 
    //     always { 
    //         cleanWs()
    //     }
    // }
}