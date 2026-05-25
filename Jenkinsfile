pipeline {
    agent any
    
    tools {
        // Updated to match the tool name you configured in Jenkins
        nodejs "NodeJS_26.2" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Changed from 'sh' to 'bat' for Windows compatibility
                bat 'npm ci'
                // Installs browsers and sets up local system permissions
                bat 'npx playwright install --with-deps'
            }
        }
        
        stage('Execute Automation') {
            steps {
                // Changed from 'sh' to 'bat'
                bat 'npm run test'
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}