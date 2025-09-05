pipeline {
    environment { 
        CI = 'false'
    }
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'ng build --configuration=production'
            }
        }
        stage('Deploy') {
            steps {
                // Add your deployment steps here
                sh 'scp -r dist/bus-booking/browser vyrvyr@184.168.126.83:/var/www/easybusbooking.com/html'
            }
        }
    }
}
