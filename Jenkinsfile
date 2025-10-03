pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ShreyMehta92/ci-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                docker run -d -p 80:3000 --name node-app node-app
                '''
            }
        }
    }
}
