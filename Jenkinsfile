pipeline {
    agent {
        docker { 
            // Uses the official Playwright image with pre-installed browsers
            image '://microsoft.com' 
            args '-u root' // Grants permission to create folders on the Jenkins runner
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Installs package.json dependencies cleanly
                sh 'npm ci'
            }
        }
        
        stage('Execute Automation') {
            steps {
                // Runs the tests in headless mode inside the container
                sh 'npm run test'
            }
        }
    }
    
    post {
        always {
            // Saves the local Playwright report to Jenkins so you can view it later
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}